import {
  CallSignatureDeclarationStructure,
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
import { Methods, Paths } from "./interfaces.js";

export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
}

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

  // TODO ENABLE SHORTCUT
  // writeShortcutInterface(model, pathDictionary, clientFile);
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
        properties: [{ name: "path", type: "Routes" }]
      })
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
    generatePathFirstRouteMethodsDefinition(
      paths[key].name,
      paths[key].methods,
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
      returnType: paths[key].name,
      kind: StructureKind.CallSignature
    });
  }
  return signatures;
}

function generatePathFirstRouteMethodsDefinition(
  operationName: string,
  methods: Methods,
  file: SourceFile
): void {
  const methodDefinitions = buildMethodDefinitions(methods);

  file.addInterface({
    methods: methodDefinitions,
    name: operationName,
    isExported: true
  });
}
