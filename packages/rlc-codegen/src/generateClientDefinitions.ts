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
import { camelCase } from "./helpers/camelCase.js";
import { pascalCase } from "./helpers/pascalCase.js";

export function buildClientDefinitions(
  model: RLCModel,
  options: {
    importedParameters: Set<string>;
    importedResponses: Set<string>;
    clientImports: Set<string>;
  }
) {
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
      clientDefinitionsFile
    )
  });

  const clientName = model.libraryName;

  const clientInterfaceName = clientName.endsWith("Client")
    ? `${clientName}`
    : `${clientName}Client`;

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
      moduleSpecifier: "./parameters"
    });
  }

  if (options.importedResponses.size) {
    clientDefinitionsFile.addImportDeclaration({
      namedImports: [...options.importedResponses],
      moduleSpecifier: "./responses"
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
  sourcefile: SourceFile
): CallSignatureDeclarationStructure[] {
  const signatures: CallSignatureDeclarationStructure[] = [];
  for (const key of Object.keys(paths)) {
    generatePathFirstRouteMethodsDefinition(paths[key], sourcefile);
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
      returnType: getOperationReturnTypeName(paths[key]),
      kind: StructureKind.CallSignature
    });
  }
  return signatures;
}

function getOperationReturnTypeName({
  operationGroupName,
  name
}: PathMetadata) {
  if (operationGroupName && operationGroupName !== "Client") {
    return `${pascalCase(operationGroupName)}${pascalCase(name)}`;
  }

  return pascalCase(name);
}

function generatePathFirstRouteMethodsDefinition(
  path: PathMetadata,
  file: SourceFile
): void {
  const methodDefinitions = buildMethodDefinitions(path.methods);

  file.addInterface({
    methods: methodDefinitions,
    name: getOperationReturnTypeName(path),
    isExported: true
  });
}

function getShortcutName(interfaceName: string) {
  const endIndex = interfaceName.lastIndexOf("Operations");
  return {
    name: camelCase(interfaceName.substring(0, endIndex)),
    type: interfaceName
  };
}
