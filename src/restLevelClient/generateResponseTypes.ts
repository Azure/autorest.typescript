import {
  CodeModel,
  HttpHeader,
  Operation,
  Response,
  SchemaResponse
} from "@autorest/codemodel";
import {
  getResponseTypeName,
  getStatusCode,
  responseToSchemaResponse
} from "./operationHelpers";
import {
  InterfaceDeclarationStructure,
  OptionalKind,
  Project,
  StructureKind
} from "ts-morph";
import { NameType, normalizeName } from "../utils/nameUtils";
import { getElementType } from "./schemaHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";

export function generateResponseInterfaces(model: CodeModel, project: Project) {
  const responsesFile = project.createSourceFile(
    `src/responses.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  // Set used to track down which models need to be imported
  let importedModels = new Set<string>();
  const operations = getAllOperationRequests(model);
  // Track if we need to import RawHttpHeaders
  let hasHeaders = false;

  for (const operation of operations) {
    const responses = mergeResponsesAndExceptions(operation);
    for (const response of responses) {
      // We'll need http information such as headers, statusCodes, etc continue if not available
      if (!response.protocol.http) {
        continue;
      }

      let schemaResponse: SchemaResponse = responseToSchemaResponse(response);
      const statusCode = getStatusCode(schemaResponse);
      const operationLanguageMetadata = getLanguageMetadata(operation.language);

      // Building the response type base name
      const baseResponseName = normalizeName(
        `${operationLanguageMetadata.name}${statusCode}`,
        NameType.Interface
      );

      // Build the response header
      const headersInterface:
        | InterfaceDeclarationStructure
        | undefined = getResponseHeaderInterfaceDefinition(
        schemaResponse,
        baseResponseName
      );

      if (headersInterface) {
        hasHeaders = true;
      }

      const bodyType = getBodyTypeName(schemaResponse, importedModels);

      // Get the information to build the Response Interface
      const responseTypeName = getResponseTypeName(operation, schemaResponse);
      const responseTypeDescription = operationLanguageMetadata.description;
      const responseProperties = getResponseInterfaceProperties(
        schemaResponse,
        bodyType,
        headersInterface?.name
      );

      const responseInterfaceDefinition: OptionalKind<InterfaceDeclarationStructure> = {
        name: responseTypeName,
        properties: responseProperties,
        isExported: true,
        extends: ["HttpResponse"]
      };

      // Only add a description if one was provided in the Swagger
      // otherwise skip to avoid having empty TSDoc lines
      if (responseTypeDescription) {
        responseInterfaceDefinition.docs = [
          { description: responseTypeDescription }
        ];
      }

      // Add the response interface to the responses file
      responsesFile.addInterface(responseInterfaceDefinition);
    }
  }

  responsesFile.addImportDeclarations([
    {
      namedImports: ["HttpResponse"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (hasHeaders) {
    responsesFile.addImportDeclaration({
      namedImports: ["RawHttpHeaders"],
      moduleSpecifier: "@azure/core-rest-pipeline"
    });
  }

  responsesFile.addImportDeclarations([
    {
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    }
  ]);
}

/**
 * Gets the properties that need to be part of the response interface
 */
function getResponseInterfaceProperties(
  response: Response,
  bodyTypeName?: string,
  headersInterfaceName?: string
) {
  const statusCode = getStatusCode(response);
  const responseProperties = [
    { name: "status", type: statusCode === `"default"` ? `"500"` : statusCode }
  ];

  if (bodyTypeName) {
    responseProperties.push({
      name: "body",
      type: bodyTypeName
    });
  }

  if (headersInterfaceName) {
    responseProperties.push({
      name: "headers",
      type: `RawHttpHeaders & ${headersInterfaceName}`
    });
  }

  return responseProperties;
}

/**
 * Body types are defined in the models file, this function checks if the current
 * response's body has a reference to a model or if it is a primitive, and returns the Typescript type
 * to generate
 * @param response - response to get the body type from
 * @param importedModels - track models to import
 */
function getBodyTypeName(
  response: SchemaResponse,
  importedModels: Set<string>
): string | undefined {
  return getElementType(response.schema, importedModels);
}

function getResponseHeaderInterfaceDefinition(
  response: Response,
  baseName: string
): undefined | InterfaceDeclarationStructure {
  // Check if there are any required headers
  const hasDefinedHeaders =
    Boolean(response.protocol.http?.headers) &&
    Boolean(response.protocol.http?.headers.length);

  if (hasDefinedHeaders) {
    const headersInterfaceName = `${baseName}Headers`;
    return {
      kind: StructureKind.Interface,
      isExported: true,
      name: headersInterfaceName,
      properties: response.protocol.http?.headers.map((h: HttpHeader) => {
        const description = getLanguageMetadata(h.language).description;
        return {
          name: `"${h.header.toLowerCase()}"`,
          ...(description && { docs: [{ description }] }),
          type: "string",
          hasQuestionToken: true
        };
      })
    };
  }

  return undefined;
}

// Gets a list of all the available operations requests in the specification
function getAllOperationRequests(model: CodeModel) {
  let operations: Operation[] = [];
  model.operationGroups.forEach(og =>
    og.operations
      .filter(o => o.requests && o.requests.length)
      .forEach(o => {
        operations.push(o);
      })
  );

  return operations;
}

// Since REST clients don't throw on non-success status codes we treat responses and exceptions the same
function mergeResponsesAndExceptions(operation: Operation) {
  const responses: Response[] = [];

  if (operation.responses) {
    responses.push(...operation.responses);
  }

  if (operation.exceptions) {
    responses.push(...operation.exceptions);
  }

  return responses;
}
