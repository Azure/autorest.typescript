import { NameType } from "@azure-tools/rlc-common";
import {
  InitializedByFlags,
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { CodeBlockWriter } from "ts-morph";
import { useContext } from "../contextManager.js";
import { SdkContext } from "../utils/interfaces.js";
import { getClientParametersDeclaration } from "./helpers/clientHelpers.js";
import { getClassicalClientName } from "./helpers/namingHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import {
  getTopLevelPropertyName,
  getNestedPropertyName
} from "./helpers/betaHelpers.js";
import { PreviewClassification } from "./helpers/previewDetection.js";
import { ModularEmitterOptions } from "./interfaces.js";

interface ExperimentalInterfaceInfo {
  interfaceName: string;
  alias: string;
  moduleSpecifier: string;
}

interface GroupAugmentation {
  extends: Set<string>;
  properties: {
    name: string;
    type: string;
    docs?: string;
    readonly?: boolean;
  }[];
}

interface BetaTypeTreeNode {
  operationType?: string;
  children: Map<string, BetaTypeTreeNode>;
}

export function buildAugmentations(
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
  const packageName =
    emitterOptions.options.packageDetails?.name ??
    emitterOptions.options.packageDetails?.nameWithoutScope ??
    "";
  if (!packageName) {
    return;
  }
  const clientName = clientMap[1].name;
  const previewGroupKeys = [
    ...previewOnlyTopLevelGroups,
    ...previewOnlyNestedGroups,
    ...previewInfo.mixedGroups
  ].filter((group) => group);
  const previewChildClients = getPreviewChildClients(
    clientMap[1],
    previewChildClientNames
  );
  if (previewGroupKeys.length === 0 && previewChildClients.length === 0) {
    return;
  }

  const augmentationsFile = project.createSourceFile(
    `${srcPath}/augmentations.ts`,
    "",
    { overwrite: true }
  );
  const interfaceImports = new Map<string, ExperimentalInterfaceInfo>();
  const mergeStrategy = emitterOptions.modularOptions.betaMergeStrategy;

  // Collect interface imports for all preview groups
  for (const groupName of Array.from(previewOnlyTopLevelGroups).sort()) {
    if (!groupName) continue;
    const info = getExperimentalInterfaceInfo([groupName]);
    interfaceImports.set(info.alias, info);
  }
  for (const groupKey of Array.from(previewOnlyNestedGroups).sort()) {
    const prefixes = groupKey.split("/");
    if (prefixes.length < 2) continue;
    const info = getExperimentalInterfaceInfo(prefixes);
    interfaceImports.set(info.alias, info);
  }
  for (const groupKey of Array.from(previewInfo.mixedGroups).sort()) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    const info = getExperimentalInterfaceInfo(prefixes);
    interfaceImports.set(info.alias, info);
  }

  // Write type-only imports grouped by module
  const importsByModule = new Map<string, ExperimentalInterfaceInfo[]>();
  for (const interfaceInfo of interfaceImports.values()) {
    const existing = importsByModule.get(interfaceInfo.moduleSpecifier) ?? [];
    existing.push(interfaceInfo);
    importsByModule.set(interfaceInfo.moduleSpecifier, existing);
  }
  for (const [moduleSpecifier, interfaces] of importsByModule) {
    augmentationsFile.addImportDeclaration({
      isTypeOnly: true,
      moduleSpecifier,
      namedImports: interfaces.map((info) => ({
        name: info.interfaceName,
        alias: info.alias
      }))
    });
  }

  // Write augmentations based on strategy
  augmentationsFile.addStatements((writer) => {
    writer.writeLine(`declare module "../index.js" {`);
    writer.indent(() => {
      if (mergeStrategy === "merge") {
        writeMergeAugmentations(
          writer,
          dpgContext,
          clientName,
          clientMap[1],
          previewOnlyTopLevelGroups,
          previewOnlyNestedGroups,
          previewInfo,
          interfaceImports,
          previewChildClients
        );
      } else {
        writeNamespaceAugmentations(
          writer,
          dpgContext,
          clientName,
          clientMap[1],
          previewOnlyTopLevelGroups,
          previewOnlyNestedGroups,
          previewInfo,
          interfaceImports,
          previewChildClients
        );
      }
    });
    writer.writeLine("}");
  });
}

// --- Namespace strategy: single `beta` property on client -----------

function writeNamespaceAugmentations(
  writer: CodeBlockWriter,
  dpgContext: SdkContext,
  clientName: string,
  parentClient: SdkClientType<SdkServiceOperation>,
  previewOnlyTopLevelGroups: Set<string>,
  previewOnlyNestedGroups: Set<string>,
  previewInfo: PreviewClassification,
  interfaceImports: Map<string, ExperimentalInterfaceInfo>,
  previewChildClients: SdkClientType<SdkServiceOperation>[]
) {
  const root = buildBetaTypeTree(
    previewOnlyTopLevelGroups,
    previewOnlyNestedGroups,
    previewInfo.mixedGroups,
    interfaceImports
  );

  writer.writeLine(`interface ${clientName} {`);
  writer.indent(() => {
    writer.writeLine(`/** @experimental */`);
    writer.write(`readonly beta: `);
    writeBetaTypeTree(
      writer,
      root,
      dpgContext,
      parentClient,
      previewChildClients
    );
    writer.writeLine(`;`);
  });
  writer.writeLine(`}`);
}

function buildBetaTypeTree(
  previewOnlyTopLevelGroups: Set<string>,
  previewOnlyNestedGroups: Set<string>,
  mixedGroups: Set<string>,
  interfaceImports: Map<string, ExperimentalInterfaceInfo>
): BetaTypeTreeNode {
  const root: BetaTypeTreeNode = { children: new Map() };

  for (const groupName of Array.from(previewOnlyTopLevelGroups).sort()) {
    if (!groupName) continue;
    const alias = `Experimental${getGroupInterfaceName([groupName])}`;
    const info = interfaceImports.get(alias);
    if (!info) continue;
    const propName = getTopLevelPropertyName(groupName);
    root.children.set(propName, {
      operationType: info.alias,
      children: new Map()
    });
  }

  const allNested = [
    ...Array.from(mixedGroups).sort(),
    ...Array.from(previewOnlyNestedGroups).sort()
  ];
  for (const groupKey of allNested) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    const alias = `Experimental${getGroupInterfaceName(prefixes)}`;
    const info = interfaceImports.get(alias);
    if (!info) continue;

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
    current.operationType = info.alias;
  }

  return root;
}

function writeBetaTypeTree(
  writer: CodeBlockWriter,
  node: BetaTypeTreeNode,
  dpgContext: SdkContext,
  parentClient: SdkClientType<SdkServiceOperation>,
  childClients: SdkClientType<SdkServiceOperation>[]
) {
  const hasChildren = node.children.size > 0;
  const hasOps = !!node.operationType;
  const hasChildMethods = childClients.length > 0;

  if (hasOps && (hasChildren || hasChildMethods)) {
    writer.write(`${node.operationType} & `);
  }

  if (hasChildren || hasChildMethods) {
    writer.writeLine(`{`);
    writer.indent(() => {
      for (const [name, child] of node.children) {
        if (child.operationType && child.children.size === 0) {
          writer.writeLine(`readonly ${name}: ${child.operationType};`);
        } else {
          writer.write(`readonly ${name}: `);
          writeBetaTypeTree(writer, child, dpgContext, parentClient, []);
          writer.writeLine(`;`);
        }
      }
      for (const childClient of childClients) {
        writeChildClientMethod(writer, dpgContext, parentClient, childClient);
      }
    });
    writer.write(`}`);
  } else if (hasOps) {
    writer.write(node.operationType!);
  }
}

// --- Merge strategy: augment individual group interfaces ------------

function writeMergeAugmentations(
  writer: CodeBlockWriter,
  dpgContext: SdkContext,
  clientName: string,
  parentClient: SdkClientType<SdkServiceOperation>,
  previewOnlyTopLevelGroups: Set<string>,
  previewOnlyNestedGroups: Set<string>,
  previewInfo: PreviewClassification,
  interfaceImports: Map<string, ExperimentalInterfaceInfo>,
  previewChildClients: SdkClientType<SdkServiceOperation>[]
) {
  const groupAugmentations = new Map<string, GroupAugmentation>();

  for (const groupName of Array.from(previewOnlyTopLevelGroups).sort()) {
    if (!groupName) continue;
    const alias = `Experimental${getGroupInterfaceName([groupName])}`;
    const info = interfaceImports.get(alias);
    if (!info) continue;
    const propertyName = getTopLevelPropertyName(groupName);
    addGroupProperty(groupAugmentations, clientName, {
      name: propertyName,
      type: info.alias,
      docs: `@experimental Preview: ${propertyName} operations.`,
      readonly: true
    });
  }

  for (const groupKey of Array.from(previewOnlyNestedGroups).sort()) {
    const prefixes = groupKey.split("/");
    if (prefixes.length < 2) continue;
    const alias = `Experimental${getGroupInterfaceName(prefixes)}`;
    const info = interfaceImports.get(alias);
    if (!info) continue;
    const parentInterfaceName = getGroupInterfaceName(
      prefixes,
      prefixes.length - 2
    );
    addGroupProperty(groupAugmentations, parentInterfaceName, {
      name: getNestedPropertyName(prefixes[prefixes.length - 1] ?? ""),
      type: info.alias,
      docs: `@experimental Preview: ${groupKey} operations.`
    });
  }

  for (const groupKey of Array.from(previewInfo.mixedGroups).sort()) {
    const prefixes = groupKey.split("/");
    if (!prefixes[0]) continue;
    const alias = `Experimental${getGroupInterfaceName(prefixes)}`;
    const info = interfaceImports.get(alias);
    if (!info) continue;
    const interfaceName = getGroupInterfaceName(prefixes);
    addGroupExtension(groupAugmentations, interfaceName, info.alias);
  }

  const clientAugmentation = groupAugmentations.get(clientName);
  if (clientAugmentation) {
    writeInterfaceAugmentation(writer, clientName, clientAugmentation);
  }
  for (const [interfaceName, augmentation] of groupAugmentations) {
    if (interfaceName === clientName) continue;
    writeInterfaceAugmentation(writer, interfaceName, augmentation);
  }

  if (previewChildClients.length > 0) {
    writer.writeLine(`interface ${clientName} {`);
    writer.indent(() => {
      for (const childClient of previewChildClients) {
        writeChildClientMethod(writer, dpgContext, parentClient, childClient);
      }
    });
    writer.writeLine(`}`);
  }
}

// --- Shared helpers -------------------------------------------------

function writeChildClientMethod(
  writer: CodeBlockWriter,
  dpgContext: SdkContext,
  parentClient: SdkClientType<SdkServiceOperation>,
  childClient: SdkClientType<SdkServiceOperation>
) {
  const methodName = `get${getClassicalClientName(childClient)}`;
  const params = getClientParametersDeclaration(childClient, dpgContext, {
    requiredOnly: true
  });
  const parentParams = getClientParametersDeclaration(
    parentClient,
    dpgContext,
    { requiredOnly: true }
  );
  const diffParams = params.filter((p) => {
    return !parentParams.some(
      (pp) => pp.name === p.name && pp.name !== "options"
    );
  });
  writer.writeLine(
    `/** @experimental Preview: ${getClassicalClientName(
      childClient
    )} client. */`
  );
  writer.writeLine(
    `${methodName}(${diffParams
      .map((param) => {
        const optional = param.hasQuestionToken || param.initializer;
        const type = param.type ? `: ${param.type}` : "";
        return `${param.name}${optional ? "?" : ""}${type}`;
      })
      .join(", ")}): ${getClassicalClientName(childClient)};`
  );
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

function getExperimentalInterfaceInfo(
  prefixes: string[]
): ExperimentalInterfaceInfo {
  const interfaceName = getGroupInterfaceName(prefixes);
  const alias = `Experimental${interfaceName}`;
  const moduleSpecifier = `./classic/${getClassicalLayerPrefix(
    prefixes,
    NameType.File,
    "/"
  )}/index.js`;
  return { interfaceName, alias, moduleSpecifier };
}

function getGroupInterfaceName(prefixes: string[], layer?: number) {
  return `${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer ?? prefixes.length - 1
  )}Operations`;
}

function addGroupExtension(
  augmentations: Map<string, GroupAugmentation>,
  interfaceName: string,
  extension: string
) {
  const existing = augmentations.get(interfaceName) ?? {
    extends: new Set<string>(),
    properties: []
  };
  existing.extends.add(extension);
  augmentations.set(interfaceName, existing);
}

function addGroupProperty(
  augmentations: Map<string, GroupAugmentation>,
  interfaceName: string,
  property: { name: string; type: string; docs?: string; readonly?: boolean }
) {
  const existing = augmentations.get(interfaceName) ?? {
    extends: new Set<string>(),
    properties: []
  };
  if (!existing.properties.some((p) => p.name === property.name)) {
    existing.properties.push(property);
  }
  augmentations.set(interfaceName, existing);
}

function writeInterfaceAugmentation(
  writer: CodeBlockWriter,
  interfaceName: string,
  augmentation: GroupAugmentation
) {
  const extensions = Array.from(augmentation.extends.values());
  const extendsClause =
    extensions.length > 0 ? ` extends ${extensions.join(", ")}` : "";
  writer.writeLine(`interface ${interfaceName}${extendsClause} {`);
  writer.indent(() => {
    for (const property of augmentation.properties) {
      if (property.docs) {
        writer.writeLine(`/** ${property.docs} */`);
      }
      writer.writeLine(
        `${property.readonly ? "readonly " : ""}${property.name}: ${
          property.type
        };`
      );
    }
  });
  writer.writeLine("}");
}
