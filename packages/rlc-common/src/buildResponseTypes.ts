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
  OperationResponse,
  ResponseHeaderSchema,
  ResponseMetadata,
  RLCModel,
  Schema
} from "./interfaces.js";
import * as path from "path";
import {
  getImportModuleName,
  getResponseBaseName,
  getResponseTypeName
} from "./helpers/nameConstructors.js";
import { getImportSpecifier } from "./helpers/importsUtil.js";

export function buildResponseTypes(model: RLCModel) {
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `responses.ts`);
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
        moduleSpecifier: getImportSpecifier(
          "restPipeline",
          model.importInfo.runtimeImports
        )
      }
    ]);
  }
  const namedImports = ["HttpResponse"];
  if (isCoreErrorResponse(model.responses)) {
    namedImports.push("ErrorResponse");
  }
  responsesFile.addImportDeclarations([
    {
      namedImports,
      moduleSpecifier: getImportSpecifier(
        "restClient",
        model.importInfo.runtimeImports
      )
    }
  ]);

  if ((model.importInfo.internalImports.response?.importsSet?.size ?? 0) > 0) {
    const modelNamedImports = Array.from(
      model.importInfo.internalImports.response!.importsSet!
    );
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
    if (isErrorResponseCoreModel(response.body)) {
      type = "ErrorResponse";
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

function isCoreErrorResponse(responses?: OperationResponse[]) {
  responses = responses ?? [];
  for (const response of responses) {
    for (const resp of response.responses) {
      if (isErrorResponseCoreModel(resp.body)) {
        return true;
      }
    }
  }
  return false;
}

function isErrorResponseCoreModel(schema?: Schema) {
  if (!schema) {
    return false;
  }

  return Boolean(schema.fromCore) && schema.type === "ErrorResponseOutput";
}
