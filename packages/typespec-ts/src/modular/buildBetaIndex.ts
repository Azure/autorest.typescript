import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  InitializedByFlags,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { CodeBlockWriter, SourceFile } from "ts-morph";
import { useContext } from "../contextManager.js";
import { ModularEmitterOptions } from "./interfaces.js";
import { isTypeOnlyNode } from "./buildSubpathIndex.js";
import {
  getClassicalLayerPrefix,
  getClientName
} from "./helpers/namingHelpers.js";
import {
  getTopLevelPropertyName,
  getNestedPropertyName
} from "./helpers/betaHelpers.js";
import {
  PreviewClassification,
  getLatestPreviewApiVersion
} from "./helpers/previewDetection.js";
import { getClientParametersDeclaration } from "./helpers/clientHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import { SdkContext } from "../utils/interfaces.js";

interface GroupPatch {
  kind: "mixed" | "preview-only";
  prefixes: string[];
  propertyPath: string[];
  operationFactoryName: string;
}

interface BetaTreeNode {
  factoryName?: string;
  children: Map<string, BetaTreeNode>;
}

export function buildBetaIndex(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions,
  previewInfo: PreviewClassification,
  previewOnlyTopLevelGroups: Set<string>,
  previewOnlyNestedGroups: Set<string>,
  previewChildClientNames?: Set<string>
) {
  const project = useContext("outputProject");
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const indexFile = project.createSourceFile(`${srcPath}/index.ts`, "", {
    overwrite: true
  });
  indexFile.addImportDeclaration({
    moduleSpecifier: "./augmentations.js"
  });
  const packageName =
    emitterOptions.options.packageDetails?.name ??
    emitterOptions.options.packageDetails?.nameWithoutScope ??
    "";
  const clientName = clientMap[1].name;
  if (!packageName) {
    return;
  }
  const previewChildClients = getPreviewChildClients(
    clientMap[1],
    previewChildClientNames
  );

  // Determine if the client class is actually referenced in the generated code.
  const hasPrototypePatches =
    previewOnlyTopLevelGroups.size > 0 ||
    previewInfo.mixedGroups.size > 0 ||
    previewOnlyNestedGroups.size > 0 ||
    previewChildClients.length > 0;

  const clientImports = new Set<string>([
    ...(hasPrototypePatches ? [clientName] : []),
    ...previewChildClients.map((client) => client.name)
  ]);
  if (clientImports.size > 0) {
    indexFile.addImportDeclaration({
      moduleSpecifier: "../index.js",
      namedImports: Array.from(clientImports.values())
    });
  }

  // Import and call _setDefaultApiVersion to upgrade the default API version
  const latestPreviewVersion = getLatestPreviewApiVersion(dpgContext);
  if (latestPreviewVersion) {
    const clientNameForContext = getClientName(clientMap[1]);
    const contextModulePath = `../api/${normalizeName(
      clientNameForContext,
      NameType.File
    )}Context.js`;
    indexFile.addImportDeclaration({
      moduleSpecifier: contextModulePath,
      namedImports: ["_setDefaultApiVersion"]
    });
    indexFile.addStatements(
      `// Upgrade default API version for all operations when beta features are enabled.\n` +
        `// Preview API versions are supersets of stable — using the preview version for stable\n` +
        `// operations ensures consistency when both stable and preview operations share a client.\n` +
        `_setDefaultApiVersion("${latestPreviewVersion}");`
    );
  }

  // Collect operation factory imports
  const previewGroupNames = Array.from(
    previewOnlyTopLevelGroups.values()
  ).sort();
  const mixedGroupKeys = Array.from(previewInfo.mixedGroups.values()).sort();
  const nestedPreviewGroupKeys = Array.from(
    previewOnlyNestedGroups.values()
  ).sort();

  const operationImports = new Map<string, string>();
  for (const groupName of previewGroupNames) {
    if (!groupName) continue;
    operationImports.set(
      getOperationFactoryName([groupName]),
      getGroupModuleSpecifier([groupName])
    );
  }
  for (const groupKey of [...mixedGroupKeys, ...nestedPreviewGroupKeys]) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    operationImports.set(
      getOperationFactoryName(prefixes),
      getGroupModuleSpecifier(prefixes)
    );
  }
  const importsByModule = new Map<string, string[]>();
  for (const [factoryName, moduleSpecifier] of operationImports) {
    const existing = importsByModule.get(moduleSpecifier) ?? [];
    existing.push(factoryName);
    importsByModule.set(moduleSpecifier, existing);
  }
  for (const [moduleSpecifier, factoryNames] of importsByModule) {
    indexFile.addImportDeclaration({
      moduleSpecifier,
      namedImports: factoryNames.sort()
    });
  }

  // Generate prototype patches based on strategy
  const mergeStrategy = emitterOptions.modularOptions.betaMergeStrategy;
  if (mergeStrategy === "merge") {
    writeMergePatches(
      indexFile,
      clientName,
      previewGroupNames,
      mixedGroupKeys,
      nestedPreviewGroupKeys
    );
    // Child client methods on prototype (merge strategy only)
    for (const childClient of previewChildClients) {
      writeMergeChildClientMethod(
        indexFile,
        dpgContext,
        clientMap,
        clientName,
        childClient
      );
    }
  } else {
    writeNamespacePatches(
      indexFile,
      dpgContext,
      clientMap,
      clientName,
      previewGroupNames,
      mixedGroupKeys,
      nestedPreviewGroupKeys,
      previewChildClients
    );
  }

  exportTypeOnlyFromIndex(
    indexFile,
    project.getSourceFile(`${srcPath}/classic/index.ts`),
    "./classic/index.js"
  );
  exportTypeOnlyFromIndex(
    indexFile,
    project.getSourceFile(`${srcPath}/api/index.ts`),
    "./api/index.js"
  );
  exportTypeOnlyFromIndex(
    indexFile,
    project.getSourceFile(`${srcPath}/models/index.ts`),
    "./models/index.js"
  );
}

// --- Namespace strategy: single `beta` getter -----------------------

function writeNamespacePatches(
  indexFile: SourceFile,
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  clientName: string,
  previewGroupNames: string[],
  mixedGroupKeys: string[],
  nestedPreviewGroupKeys: string[],
  previewChildClients: SdkClientType<SdkServiceOperation>[]
) {
  const root = buildBetaObjectTree(
    previewGroupNames,
    mixedGroupKeys,
    nestedPreviewGroupKeys
  );

  if (root.children.size === 0 && previewChildClients.length === 0) {
    return;
  }

  indexFile.addStatements((writer) => {
    writer.writeLine(
      `Object.defineProperty(${clientName}.prototype, "beta", {`
    );
    writer.indent(() => {
      writer.writeLine(`get(this: ${clientName}) {`);
      writer.indent(() => {
        writer.writeLine(`const key = Symbol.for("__beta");`);
        writer.writeLine(`if (!(this as any)[key]) {`);
        writer.indent(() => {
          writer.writeLine(`const client = (this as any)._client;`);
          if (previewChildClients.length > 0) {
            writer.writeLine(`const self = this;`);
          }
          writer.write(`(this as any)[key] = `);
          writeBetaObject(
            writer,
            root,
            "client",
            dpgContext,
            clientMap,
            previewChildClients
          );
          writer.writeLine(`;`);
        });
        writer.writeLine(`}`);
        writer.writeLine(`return (this as any)[key];`);
      });
      writer.writeLine(`},`);
      writer.writeLine(`enumerable: true,`);
      writer.writeLine(`configurable: true`);
    });
    writer.writeLine(`});`);
  });
}

function buildBetaObjectTree(
  previewGroupNames: string[],
  mixedGroupKeys: string[],
  nestedPreviewGroupKeys: string[]
): BetaTreeNode {
  const root: BetaTreeNode = { children: new Map() };

  for (const groupName of previewGroupNames) {
    if (!groupName) continue;
    const propName = getTopLevelPropertyName(groupName);
    root.children.set(propName, {
      factoryName: getOperationFactoryName([groupName]),
      children: new Map()
    });
  }

  for (const groupKey of [...mixedGroupKeys, ...nestedPreviewGroupKeys]) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    let current = root;
    for (let i = 0; i < prefixes.length; i++) {
      const name =
        i === 0
          ? getTopLevelPropertyName(prefixes[i]!)
          : getNestedPropertyName(prefixes[i]!);
      if (!current.children.has(name)) {
        current.children.set(name, { children: new Map() });
      }
      current = current.children.get(name)!;
    }
    current.factoryName = getOperationFactoryName(prefixes);
  }

  return root;
}

function writeBetaObject(
  writer: CodeBlockWriter,
  node: BetaTreeNode,
  clientVar: string,
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  childClients: SdkClientType<SdkServiceOperation>[]
) {
  const hasChildren = node.children.size > 0;
  const hasFactory = !!node.factoryName;
  const hasChildMethods = childClients.length > 0;

  if (hasFactory && (hasChildren || hasChildMethods)) {
    writer.write(`Object.assign(${node.factoryName}(${clientVar}), `);
  }

  if (hasChildren || hasChildMethods) {
    writer.writeLine(`{`);
    writer.indent(() => {
      for (const [name, child] of node.children) {
        if (child.factoryName && child.children.size === 0) {
          writer.writeLine(`${name}: ${child.factoryName}(${clientVar}),`);
        } else {
          writer.write(`${name}: `);
          writeBetaObject(writer, child, clientVar, dpgContext, clientMap, []);
          writer.writeLine(`,`);
        }
      }
      for (const childClient of childClients) {
        writeNamespaceChildClientMethod(
          writer,
          dpgContext,
          clientMap,
          childClient
        );
      }
    });
    writer.write(`}`);
  } else if (hasFactory) {
    writer.write(`${node.factoryName}(${clientVar})`);
  }

  if (hasFactory && (hasChildren || hasChildMethods)) {
    writer.write(`)`);
  }
}

function writeNamespaceChildClientMethod(
  writer: CodeBlockWriter,
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  childClient: SdkClientType<SdkServiceOperation>
) {
  const methodName = `get${getClassicalClientName(childClient)}`;
  const parentParams = getClientParametersDeclaration(
    clientMap[1],
    dpgContext,
    { requiredOnly: true }
  );
  const childParams = getClientParametersDeclaration(childClient, dpgContext, {
    requiredOnly: true
  });
  const diffParams = childParams.filter((p) => {
    return !parentParams.some(
      (pp) => pp.name === p.name && pp.name !== "options"
    );
  });
  writer.writeLine(
    `${methodName}(${diffParams
      .map((param) => {
        const initializer = param.initializer ? ` = ${param.initializer}` : "";
        return `${param.name}${initializer}`;
      })
      .join(", ")}) {`
  );
  writer.indent(() => {
    const parentArgs = parentParams
      .filter((p) => !p.name.includes("options"))
      .map((p) => `(self as any)._clientParams.${p.name}`);
    const diffArgs = diffParams
      .filter((p) => p.name !== "options")
      .map((p) => p.name);
    const allArgs = [
      ...parentArgs,
      ...diffArgs,
      `{ ...(self as any)._clientParams.options, ...options }`
    ].join(", ");
    writer.writeLine(
      `return new ${getClassicalClientName(childClient)}(${allArgs});`
    );
  });
  writer.writeLine(`},`);
}

// --- Merge strategy: per-group prototype patches --------------------

function writeMergePatches(
  indexFile: SourceFile,
  clientName: string,
  previewGroupNames: string[],
  mixedGroupKeys: string[],
  nestedPreviewGroupKeys: string[]
) {
  const previewOnlyTopLevelProperties = new Set(
    previewGroupNames
      .filter((groupName) => groupName)
      .map((groupName) => getTopLevelPropertyName(groupName))
  );

  // Preview-only top-level groups: getter with Symbol caching
  for (const groupName of previewGroupNames) {
    if (!groupName) continue;
    const rawGroupName = normalizeName(groupName, NameType.Interface);
    const propertyName = normalizeName(rawGroupName, NameType.Property);
    const operationFactoryName = getOperationFactoryName([groupName]);
    indexFile.addStatements((writer) => {
      writer.writeLine(
        `Object.defineProperty(${clientName}.prototype, "${propertyName}", {`
      );
      writer.indent(() => {
        writer.writeLine(`get(this: ${clientName}) {`);
        writer.indent(() => {
          writer.writeLine(`const key = Symbol.for("__beta_${propertyName}");`);
          writer.writeLine(`if (!(this as any)[key]) {`);
          writer.indent(() => {
            writer.writeLine(
              `(this as any)[key] = ${operationFactoryName}((this as any)._client);`
            );
          });
          writer.writeLine(`}`);
          writer.writeLine(`return (this as any)[key];`);
        });
        writer.writeLine(`},`);
        writer.writeLine(`enumerable: true,`);
        writer.writeLine(`configurable: true`);
      });
      writer.writeLine(`});`);
    });
  }

  // Mixed and nested groups: getter+setter patches
  const groupPatches = buildGroupPatches(
    mixedGroupKeys,
    nestedPreviewGroupKeys
  );
  const patchesByTopLevel = groupPatches.reduce((map, patch) => {
    const topLevel = getTopLevelPropertyName(patch.prefixes[0] ?? "");
    if (!topLevel) return map;
    const existing = map.get(topLevel) ?? [];
    existing.push(patch);
    map.set(topLevel, existing);
    return map;
  }, new Map<string, GroupPatch[]>());

  for (const [propertyName, patches] of patchesByTopLevel) {
    if (previewOnlyTopLevelProperties.has(propertyName)) continue;
    indexFile.addStatements((writer) => {
      writer.writeLine(
        `Object.defineProperty(${clientName}.prototype, "${propertyName}", {`
      );
      writer.indent(() => {
        writer.writeLine(`get(this: ${clientName}) {`);
        writer.indent(() => {
          writer.writeLine(
            `return (this as any)[Symbol.for("__beta_${propertyName}")];`
          );
        });
        writer.writeLine(`},`);
        writer.writeLine(`set(this: ${clientName}, value) {`);
        writer.indent(() => {
          writer.writeLine(
            `(this as any)[Symbol.for("__beta_${propertyName}")] = value;`
          );
          writer.writeLine(`if (!value) {`);
          writer.indent(() => {
            writer.writeLine(`return;`);
          });
          writer.writeLine(`}`);
          for (const patch of patches) {
            const interfacePrefix = getClassicalLayerPrefix(
              patch.prefixes,
              NameType.Interface
            );
            const previewVar = `preview${interfacePrefix}Operations`;
            const targetVar = `target${interfacePrefix}`;
            const targetPath = getNestedAccessExpression(
              "value",
              patch.propertyPath
            );
            writer.writeLine(
              `const ${previewVar} = ${patch.operationFactoryName}((this as any)._client);`
            );
            if (patch.kind === "preview-only") {
              if (patch.propertyPath.length === 0) continue;
              const parentPath = getNestedAccessExpression(
                "value",
                patch.propertyPath.slice(0, -1)
              );
              const childName =
                patch.propertyPath[patch.propertyPath.length - 1];
              writer.writeLine(`const ${targetVar} = ${parentPath};`);
              writer.writeLine(`if (${targetVar}) {`);
              writer.indent(() => {
                writer.writeLine(`${targetVar}.${childName} = ${previewVar};`);
              });
              writer.writeLine(`}`);
            } else {
              writer.writeLine(`const ${targetVar} = ${targetPath};`);
              writer.writeLine(`if (${targetVar}) {`);
              writer.indent(() => {
                writer.writeLine(`Object.assign(${targetVar}, ${previewVar});`);
              });
              writer.writeLine(`}`);
            }
          }
        });
        writer.writeLine(`},`);
        writer.writeLine(`enumerable: true,`);
        writer.writeLine(`configurable: true`);
      });
      writer.writeLine(`});`);
    });
  }
}

function writeMergeChildClientMethod(
  indexFile: SourceFile,
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  clientName: string,
  childClient: SdkClientType<SdkServiceOperation>
) {
  const methodName = `get${getClassicalClientName(childClient)}`;
  const parentParams = getClientParametersDeclaration(
    clientMap[1],
    dpgContext,
    { requiredOnly: true }
  );
  const childParams = getClientParametersDeclaration(childClient, dpgContext, {
    requiredOnly: true
  });
  const diffParams = childParams.filter((p) => {
    return !parentParams.some(
      (pp) => pp.name === p.name && pp.name !== "options"
    );
  });
  indexFile.addStatements((writer) => {
    writer.writeLine(
      `${clientName}.prototype.${methodName} = function(${diffParams
        .map((param) => {
          const initializer = param.initializer
            ? ` = ${param.initializer}`
            : "";
          return `${param.name}${initializer}`;
        })
        .join(", ")}) {`
    );
    writer.indent(() => {
      const parentArgs = parentParams
        .filter((p) => !p.name.includes("options"))
        .map((p) => `this._clientParams.${p.name}`);
      const diffArgs = diffParams
        .filter((p) => p.name !== "options")
        .map((p) => p.name);
      const allArgs = [
        ...parentArgs,
        ...diffArgs,
        `{ ...this._clientParams.options, ...options }`
      ].join(", ");
      writer.writeLine(
        `return new ${getClassicalClientName(childClient)}(${allArgs});`
      );
    });
    writer.writeLine(`};`);
  });
}

// --- Shared helpers -------------------------------------------------

function getOperationFactoryName(prefixes: string[]) {
  return `_get${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface
  )}Operations`;
}

function getGroupModuleSpecifier(prefixes: string[]) {
  return `./classic/${getClassicalLayerPrefix(
    prefixes,
    NameType.File,
    "/"
  )}/index.js`;
}

function getNestedAccessExpression(base: string, path: string[]) {
  if (path.length === 0) {
    return base;
  }
  return `${base}.${path.join(".")}`;
}

function buildGroupPatches(
  mixedGroups: string[],
  previewOnlyNestedGroups: string[]
) {
  const patches: GroupPatch[] = [];
  for (const groupKey of mixedGroups) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    patches.push({
      kind: "mixed",
      prefixes,
      propertyPath: prefixes.slice(1).map(getNestedPropertyName),
      operationFactoryName: getOperationFactoryName(prefixes)
    });
  }
  for (const groupKey of previewOnlyNestedGroups) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    patches.push({
      kind: "preview-only",
      prefixes,
      propertyPath: prefixes.slice(1).map(getNestedPropertyName),
      operationFactoryName: getOperationFactoryName(prefixes)
    });
  }
  return patches;
}

function getPreviewChildClients(
  client: SdkClientType<SdkServiceOperation>,
  previewChildClientNames?: Set<string>
) {
  if (!previewChildClientNames || previewChildClientNames.size === 0) {
    return [];
  }
  return (
    client.children?.filter(
      (child) =>
        previewChildClientNames.has(child.name) &&
        (child.clientInitialization.initializedBy &
          InitializedByFlags.Parent) !==
          0
    ) ?? []
  );
}

function exportTypeOnlyFromIndex(
  indexFile: SourceFile,
  sourceFile: SourceFile | undefined,
  moduleSpecifier: string
) {
  if (!sourceFile) {
    return;
  }
  const existingExports = new Set(
    indexFile
      .getExportDeclarations()
      .flatMap((decl) =>
        decl.getNamedExports().map((exported) => exported.getName())
      )
  );
  const typeOnlyExports = [...sourceFile.getExportedDeclarations().entries()]
    .filter(([name, declarations]) => {
      return declarations.every(isTypeOnlyNode) && !existingExports.has(name);
    })
    .map(([name]) => name);
  if (typeOnlyExports.length === 0) {
    return;
  }
  indexFile.addExportDeclaration({
    isTypeOnly: true,
    moduleSpecifier,
    namedExports: typeOnlyExports
  });
}
