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
  const previewChildClients =
    previewChildClientNames?.size && clientMap[1].children
      ? clientMap[1].children.filter(
          (child) =>
            previewChildClientNames.has(child.name) &&
            (child.clientInitialization.initializedBy &
              InitializedByFlags.Parent) !==
              0
        )
      : [];
  if (
    previewGroupKeys.length === 0 &&
    (!previewChildClients || previewChildClients.length === 0)
  ) {
    return;
  }

  const augmentationsFile = project.createSourceFile(
    `${srcPath}/augmentations.ts`,
    "",
    { overwrite: true }
  );
  const interfaceImports = new Map<string, ExperimentalInterfaceInfo>();
  const groupAugmentations = new Map<string, GroupAugmentation>();

  const mergeStrategy = emitterOptions.modularOptions.betaMergeStrategy;

  const previewOnlyTopLevel = Array.from(
    previewOnlyTopLevelGroups.values()
  ).sort();
  for (const groupName of previewOnlyTopLevel) {
    if (!groupName) {
      continue;
    }
    const prefixes = [groupName];
    const interfaceInfo = getExperimentalInterfaceInfo(prefixes);
    interfaceImports.set(interfaceInfo.alias, interfaceInfo);
    const propertyName = getTopLevelPropertyName(groupName);
    addGroupProperty(groupAugmentations, clientName, {
      name: propertyName,
      type: interfaceInfo.alias,
      docs: `@experimental Preview: ${propertyName} operations.`,
      readonly: true
    });
  }

  const nestedPreviewGroups = Array.from(
    previewOnlyNestedGroups.values()
  ).sort();
  for (const groupKey of nestedPreviewGroups) {
    const prefixes = groupKey.split("/");
    if (prefixes.length < 2) {
      continue;
    }
    const interfaceInfo = getExperimentalInterfaceInfo(prefixes);
    interfaceImports.set(interfaceInfo.alias, interfaceInfo);
    const parentInterfaceName = getGroupInterfaceName(
      prefixes,
      prefixes.length - 2
    );
    addGroupProperty(groupAugmentations, parentInterfaceName, {
      name: getNestedPropertyName(prefixes[prefixes.length - 1] ?? ""),
      type: interfaceInfo.alias,
      docs: `@experimental Preview: ${groupKey} operations.`
    });
  }

  const mixedGroups = Array.from(previewInfo.mixedGroups.values()).sort();
  for (const groupKey of mixedGroups) {
    const prefixes = groupKey.split("/");
    if (prefixes.length === 0 || !prefixes[0]) {
      continue;
    }
    const interfaceInfo = getExperimentalInterfaceInfo(prefixes);
    interfaceImports.set(interfaceInfo.alias, interfaceInfo);
    const interfaceName = getGroupInterfaceName(prefixes);
    if (mergeStrategy === "merge") {
      addGroupExtension(groupAugmentations, interfaceName, interfaceInfo.alias);
    } else {
      addGroupProperty(groupAugmentations, interfaceName, {
        name: "beta",
        type: interfaceInfo.alias,
        docs: `@experimental Preview: ${groupKey} operations.`
      });
    }
  }

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

  augmentationsFile.addStatements((writer) => {
    writer.writeLine(`declare module "../index.js" {`);
    writer.indent(() => {
      const clientAugmentation = groupAugmentations.get(clientName);
      if (clientAugmentation) {
        writeInterfaceAugmentation(writer, clientName, clientAugmentation);
      }
      for (const [interfaceName, augmentation] of groupAugmentations) {
        if (interfaceName === clientName) {
          continue;
        }
        writeInterfaceAugmentation(writer, interfaceName, augmentation);
      }
      if (previewChildClients && previewChildClients.length > 0) {
        writeChildClientAugmentations(
          writer,
          dpgContext,
          clientName,
          clientMap[1],
          previewChildClients
        );
      }
    });
    writer.writeLine("}");
  });
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

function writeChildClientAugmentations(
  writer: CodeBlockWriter,
  dpgContext: SdkContext,
  clientName: string,
  parentClient: SdkClientType<SdkServiceOperation>,
  childClients: SdkClientType<SdkServiceOperation>[]
) {
  writer.writeLine(`interface ${clientName} {`);
  writer.indent(() => {
    for (const childClient of childClients) {
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
  });
  writer.writeLine("}");
}
