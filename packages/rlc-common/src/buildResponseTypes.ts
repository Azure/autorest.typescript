// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  InterfaceDeclarationStructure,
  OptionalKind,
  Project,
  PropertySignatureStructure,
  StructureKind
} from "ts-morph";
import {
  ImportKind,
  ResponseHeaderSchema,
  ResponseMetadata,
  RLCModel
} from "./interfaces.js";
import * as path from "path";
import {
  getImportModuleName,
  getResponseBaseName,
  getResponseTypeName
} from "./helpers/nameConstructors.js";

let hasErrorResponse = false;
export function buildResponseTypes(model: RLCModel) {
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `responses.ts`);
  hasErrorResponse = false;
  const responsesFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });
  // Set used to track down which models need to be imported
  // Track if we need to import RawHttpHeaders
  let hasHeaders = false;
  if (!model.responses) {
    return;
  }
  for (const operationResponse of model.responses) {
    for (const response of operationResponse.responses) {
      // Building the response type base name
      const baseResponseName = getResponseBaseName(
        operationResponse.operationGroup,
        operationResponse.operationName,
        response.statusCode
      );

      // Build the response header
      const headersInterface: InterfaceDeclarationStructure | undefined =
        getResponseHeaderInterfaceDefinition(response, baseResponseName);
      if (headersInterface) {
        hasHeaders = true;
        responsesFile.addInterface(headersInterface);
      }

      // Get the information to build the Response Interface
      const responseTypeName =
        response.predefinedName ?? getResponseTypeName(baseResponseName);
      const responseProperties = getResponseInterfaceProperties(
        response,
        headersInterface?.name
      );

      const responseInterfaceDefinition: OptionalKind<InterfaceDeclarationStructure> =
        {
          name: responseTypeName,
          properties: responseProperties,
          isExported: true,
          extends: ["HttpResponse"]
        };

      // Only add a description if one was provided in the Swagger
      // otherwise skip to avoid having empty TSDoc lines
      if (response.description) {
        responseInterfaceDefinition.docs = [
          { description: response.description }
        ];
      }

      // Add the response interface to the responses file
      responsesFile.addInterface(responseInterfaceDefinition);
    }
  }

  if (hasHeaders) {
    responsesFile.addImportDeclarations([
      {
        namedImports: ["RawHttpHeaders"],
        moduleSpecifier: "@azure/core-rest-pipeline"
      }
    ]);
  }
  const namedImports = ["HttpResponse"];
  if (hasErrorResponse) {
    namedImports.push("ErrorResponse");
  }
  responsesFile.addImportDeclarations([
    {
      namedImports,
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (model.importSet?.has(ImportKind.ResponseOutput)) {
    const modelNamedImports = Array.from(
      model.importSet.get(ImportKind.ResponseOutput) || []
    ).filter((modelName) => {
      return !(modelName === "ErrorResponseOutput" && hasErrorResponse);
    });
    responsesFile.addImportDeclarations([
      {
        namedImports: modelNamedImports,
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./outputModels`,
            esModulesName: `./outputModels.js`
          },
          model
        )
      }
    ]);
  }
  return { path: filePath, content: responsesFile.getFullText() };
}

function getResponseHeaderInterfaceDefinition(
  response: ResponseMetadata,
  baseName: string
): undefined | InterfaceDeclarationStructure {
  // Check if there are any required headers
  if (!response.headers) {
    return;
  }
  const headersInterfaceName = `${baseName}Headers`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: headersInterfaceName,
    properties: response?.headers.map((h: ResponseHeaderSchema) => {
      const description = h.description;
      return {
        name: h.name,
        ...(description && { docs: [{ description }] }),
        type: h.type,
        hasQuestionToken: !h.required
      };
    })
  };
}

/**
 * Gets the properties that need to be part of the response interface
 */
function getResponseInterfaceProperties(
  response: ResponseMetadata,
  headersInterfaceName?: string
) {
  const statusCode = response.statusCode;
  const responseProperties: PropertySignatureStructure[] = [
    {
      name: "status",
      type: statusCode === "default" ? `string` : `"${statusCode}"`,
      kind: StructureKind.PropertySignature
    }
  ];

  if (response.body) {
    const description = response.body.description;
    let type = response.body.type;
    if (
      response.body.type === "ErrorResponseOutput" &&
      response.body.fromCore
    ) {
      type = "ErrorResponse";
      hasErrorResponse = true;
    }
    responseProperties.push({
      name: "body",
      type,
      kind: StructureKind.PropertySignature,
      ...(description && { docs: [{ description }] })
    });
  }

  if (headersInterfaceName) {
    responseProperties.push({
      name: "headers",
      type: `RawHttpHeaders & ${headersInterfaceName}`,
      kind: StructureKind.PropertySignature
    });
  }

  return responseProperties;
}
