import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  InitializedByFlags,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { SourceFile } from "ts-morph";
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
} from "./helpers/experimentalHelpers.js";
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

export function buildExperimentalIndex(
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
  const clientImports = new Set<string>([
    clientName,
    ...previewChildClients.map((client) => client.name)
  ]);
  indexFile.addImportDeclaration({
    moduleSpecifier: "../index.js",
    namedImports: Array.from(clientImports.values())
  });

  // Import and call _setDefaultApiVersion to upgrade the default API version
  const latestPreviewVersion = getLatestPreviewApiVersion(dpgContext);
  if (latestPreviewVersion) {
    const clientName = getClientName(clientMap[1]);
    const contextModulePath = `../api/${normalizeName(
      clientName,
      NameType.File
    )}Context.js`;
    indexFile.addImportDeclaration({
      moduleSpecifier: contextModulePath,
      namedImports: ["_setDefaultApiVersion"]
    });
    indexFile.addStatements(
      `// Upgrade default API version for all operations when experimental features are enabled.\n` +
        `// Preview API versions are supersets of stable — using the preview version for stable\n` +
        `// operations ensures consistency when both stable and preview operations share a client.\n` +
        `_setDefaultApiVersion("${latestPreviewVersion}");`
    );
  }

  const previewGroupNames = Array.from(
    previewOnlyTopLevelGroups.values()
  ).sort();
  const previewOnlyTopLevelProperties = new Set(
    previewGroupNames
      .filter((groupName) => groupName)
      .map((groupName) => getTopLevelPropertyName(groupName))
  );
  const mixedGroupKeys = Array.from(previewInfo.mixedGroups.values()).sort();
  const nestedPreviewGroupKeys = Array.from(
    previewOnlyNestedGroups.values()
  ).sort();

  const operationImports = new Map<string, string>();
  for (const groupName of previewGroupNames) {
    if (!groupName) {
      continue;
    }
    const prefixes = [groupName];
    operationImports.set(
      getOperationFactoryName(prefixes),
      getGroupModuleSpecifier(prefixes)
    );
  }
  for (const groupKey of [...mixedGroupKeys, ...nestedPreviewGroupKeys]) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) {
      continue;
    }
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

  for (const groupName of previewGroupNames) {
    if (!groupName) {
      continue;
    }
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
          writer.writeLine(
            `const key = Symbol.for("__experimental_${propertyName}");`
          );
          writer.writeLine(`if (!(this as any)[key]) {`);
          writer.indent(() => {
            writer.writeLine(
              `(this as any)[key] = ${operationFactoryName}((this as any)._client);`
            );
          });
          writer.writeLine("}");
          writer.writeLine(`return (this as any)[key];`);
        });
        writer.writeLine("},");
        writer.writeLine("enumerable: true,");
        writer.writeLine("configurable: true");
      });
      writer.writeLine("});");
    });
  }

  const groupPatches = buildGroupPatches(
    mixedGroupKeys,
    nestedPreviewGroupKeys
  );
  const patchesByTopLevel = groupPatches.reduce((map, patch) => {
    const topLevel = getTopLevelPropertyName(patch.prefixes[0] ?? "");
    if (!topLevel) {
      return map;
    }
    const existing = map.get(topLevel) ?? [];
    existing.push(patch);
    map.set(topLevel, existing);
    return map;
  }, new Map<string, GroupPatch[]>());
  const mergeStrategy = emitterOptions.modularOptions.experimentalMergeStrategy;
  for (const [propertyName, patches] of patchesByTopLevel) {
    if (previewOnlyTopLevelProperties.has(propertyName)) {
      continue;
    }
    indexFile.addStatements((writer) => {
      writer.writeLine(
        `Object.defineProperty(${clientName}.prototype, "${propertyName}", {`
      );
      writer.indent(() => {
        writer.writeLine(`get(this: ${clientName}) {`);
        writer.indent(() => {
          writer.writeLine(
            `return (this as any)[Symbol.for("__experimental_${propertyName}")];`
          );
        });
        writer.writeLine("},");
        writer.writeLine(`set(this: ${clientName}, value) {`);
        writer.indent(() => {
          writer.writeLine(
            `(this as any)[Symbol.for("__experimental_${propertyName}")] = value;`
          );
          writer.writeLine("if (!value) {");
          writer.indent(() => {
            writer.writeLine("return;");
          });
          writer.writeLine("}");
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
              if (patch.propertyPath.length === 0) {
                continue;
              }
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
              writer.writeLine("}");
            } else {
              writer.writeLine(`const ${targetVar} = ${targetPath};`);
              writer.writeLine(`if (${targetVar}) {`);
              writer.indent(() => {
                if (mergeStrategy === "merge") {
                  writer.writeLine(
                    `Object.assign(${targetVar}, ${previewVar});`
                  );
                } else {
                  writer.writeLine(
                    `${targetVar}.experimental = ${previewVar};`
                  );
                }
              });
              writer.writeLine("}");
            }
          }
        });
        writer.writeLine("},");
        writer.writeLine("enumerable: true,");
        writer.writeLine("configurable: true");
      });
      writer.writeLine("});");
    });
  }

  for (const childClient of previewChildClients) {
    const methodName = `get${getClassicalClientName(childClient)}`;
    const parentParams = getClientParametersDeclaration(
      clientMap[1],
      dpgContext,
      {
        requiredOnly: true
      }
    );
    const childParams = getClientParametersDeclaration(
      childClient,
      dpgContext,
      {
        requiredOnly: true
      }
    );
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
          "{ ...this._clientParams.options, ...options }"
        ].join(", ");
        writer.writeLine(
          `return new ${getClassicalClientName(childClient)}(${allArgs});`
        );
      });
      writer.writeLine("};");
    });
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
    if (!prefixes[0]) {
      continue;
    }
    patches.push({
      kind: "mixed",
      prefixes,
      propertyPath: prefixes.slice(1).map(getNestedPropertyName),
      operationFactoryName: getOperationFactoryName(prefixes)
    });
  }
  for (const groupKey of previewOnlyNestedGroups) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) {
      continue;
    }
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
