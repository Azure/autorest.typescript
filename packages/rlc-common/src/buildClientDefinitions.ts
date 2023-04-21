// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CallSignatureDeclarationStructure,
  InterfaceDeclarationStructure,
  OptionalKind,
  Project,
  SourceFile,
  StructureKind,
  Writers
} from "ts-morph";
import * as path from "path";

import {
  buildMethodDefinitions,
  getPathParamDefinitions
} from "./helpers/operationHelpers.js";
import { PathMetadata, Paths, RLCModel } from "./interfaces.js";
import { generateMethodShortcuts } from "./helpers/shortcutMethods.js";
import { REST_CLIENT_RESERVED } from "./buildMethodShortcuts.js";
import {
  CasingConvention,
  NameType,
  normalizeName
} from "./helpers/nameUtils.js";
import { pascalCase } from "./helpers/nameUtils.js";
import {
  getClientName,
  getImportModuleName
} from "./helpers/nameConstructors.js";

export function buildClientDefinitions(model: RLCModel) {
  const options = {
    importedParameters: new Set<string>(),
    importedResponses: new Set<string>(),
    clientImports: new Set<string>()
  };
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `clientDefinitions.ts`);
  const clientDefinitionsFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  // Get all paths
  const pathDictionary = model.paths;
  let shortcuts: OptionalKind<InterfaceDeclarationStructure>[] = [];
  // There may be operations without an operation group, those shortcut
  // methods need to be handled differently.
  let shortcutsInOperationGroup: { name: string; type: string }[] = [];

  if (model.options?.includeShortcuts) {
    shortcuts = generateMethodShortcuts(model.paths);
    clientDefinitionsFile.addInterfaces(shortcuts);
    shortcutsInOperationGroup = shortcuts
      .filter((s) => s.name !== "ClientOperations")
      .map((s) => getShortcutName(s.name));
  }

  clientDefinitionsFile.addInterface({
    name: "Routes",
    isExported: true,
    callSignatures: getPathFirstRoutesInterfaceDefinition(
      pathDictionary,
      clientDefinitionsFile,
      options
    )
  });

  const clientInterfaceName = getClientName(model);
  clientDefinitionsFile.addTypeAlias({
    isExported: true,
    name: clientInterfaceName,
    type: Writers.intersectionType(
      "Client",
      Writers.objectType({
        properties: [
          { name: "path", type: "Routes" },
          ...shortcutsInOperationGroup
        ]
      }),
      // If the length of shortcuts in operation group and all shortcutsInOperationGroup
      // is the same, then we don't have any operations at the client level
      // Otherwise we need to make the client interface name an union with the
      // definition of all client level shortcut methods
      ...(shortcutsInOperationGroup.length !== shortcuts.length
        ? [`ClientOperations`]
        : [])
    )
  });

  if (options.importedParameters.size) {
    clientDefinitionsFile.addImportDeclaration({
      namedImports: [...options.importedParameters],
      moduleSpecifier: getImportModuleName(
        { cjsName: "./parameters", esModulesName: "./parameters.js" },
        model
      )
    });
  }

  if (options.importedResponses.size) {
    clientDefinitionsFile.addImportDeclaration({
      namedImports: [...options.importedResponses],
      moduleSpecifier: getImportModuleName(
        { cjsName: "./responses", esModulesName: "./responses.js" },
        model
      )
    });
  }

  options.clientImports.add("Client");
  options.clientImports.add("StreamableMethod");
  clientDefinitionsFile.addImportDeclarations([
    {
      namedImports: [...options.clientImports],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  return { path: filePath, content: clientDefinitionsFile.getFullText() };
}

function getPathFirstRoutesInterfaceDefinition(
  paths: Paths,
  sourcefile: SourceFile,
  options: {
    importedParameters: Set<string>;
    importedResponses: Set<string>;
    clientImports: Set<string>;
  }
): CallSignatureDeclarationStructure[] {
  const operationGroupCount = getOperationGroupCount(paths);

  const signatures: CallSignatureDeclarationStructure[] = [];
  for (const key of Object.keys(paths)) {
    for (const verb of Object.keys(paths[key].methods)) {
      for (const method of paths[key].methods[verb]) {
        options.importedParameters.add(method.optionsName);
        method.returnType
          .split(" | ")
          .forEach((item) => options.importedResponses.add(item));
      }
    }
    generatePathFirstRouteMethodsDefinition(
      paths[key],
      operationGroupCount,
      sourcefile
    );
    const pathParams = paths[key].pathParameters;
    signatures.push({
      docs: [
        `Resource for '${key
          .replace(/}/g, "\\}")
          .replace(
            /{/g,
            "\\{"
          )}' has methods for the following verbs: ${Object.keys(
          paths[key].methods
        ).join(", ")}`
      ],
      parameters: [
        { name: "path", type: `"${key}"` },
        ...getPathParamDefinitions(pathParams)
      ],
      returnType: getOperationReturnTypeName(
        paths[key],
        getOperationGroupCount(paths)
      ),
      kind: StructureKind.CallSignature
    });
  }
  return signatures;
}

function getOperationGroupCount(paths: Paths) {
  const operationGroups = Object.keys(paths)
    .map((p) => paths[p].operationGroupName)
    .filter((p) => p && p !== "Client");
  const uniqueNames = new Set(operationGroups);

  return uniqueNames.size;
}

function getOperationReturnTypeName(
  { operationGroupName, name }: PathMetadata,
  operationGroupCount: number
) {
  if (
    operationGroupCount > 1 &&
    operationGroupName &&
    operationGroupName !== "Client"
  ) {
    return `${pascalCase(operationGroupName)}${pascalCase(name)}`;
  }

  return pascalCase(name);
}

function generatePathFirstRouteMethodsDefinition(
  path: PathMetadata,
  operationGroupCount: number,
  file: SourceFile
): void {
  const methodDefinitions = buildMethodDefinitions(path.methods);
  const interfaceDef = {
    methods: methodDefinitions,
    name: getOperationReturnTypeName(path, operationGroupCount),
    isExported: true
  };
  file.addInterface(interfaceDef);
}

function getShortcutName(interfaceName: string) {
  const endIndex = shouldKeepSuffix(interfaceName)
    ? undefined
    : interfaceName.length - "Operations".length;
  const clientProperty = normalizeName(
    interfaceName.substring(0, endIndex),
    NameType.OperationGroup,
    true,
    REST_CLIENT_RESERVED,
    CasingConvention.Camel
  );

  return {
    name: clientProperty,
    type: interfaceName
  };
}

function shouldKeepSuffix(name: string) {
  const reservedNames = [
    "pipelineOperations",
    "pathOperations",
    "pathUncheckedOperations"
  ];
  return reservedNames.some((r) => r.toLowerCase() === name.toLowerCase());
}
