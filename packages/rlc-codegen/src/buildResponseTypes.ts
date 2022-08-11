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
import { NameType, normalizeName } from "./helpers/nameUtils.js";

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
      const baseResponseName = normalizeName(
        `${operationResponse.operationName}_${response.statusCode}`,
        NameType.Interface
      );

      // Build the response header
      const headersInterface: InterfaceDeclarationStructure | undefined =
        getResponseHeaderInterfaceDefinition(response, baseResponseName);
      if (headersInterface) {
        hasHeaders = true;
        responsesFile.addInterface(headersInterface);
      }

      // Get the information to build the Response Interface
      const responseTypeName = getResponseTypeName(baseResponseName);
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
  responsesFile.addImportDeclarations([
    {
      namedImports: ["HttpResponse"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (model.importSet?.has(ImportKind.ResponseOutput)) {
    responsesFile.addImportDeclarations([
      {
        namedImports: [
          ...Array.from(model.importSet.get(ImportKind.ResponseOutput) || [])
        ],
        moduleSpecifier: "./outputModels"
      }
    ]);
  }
  return { path: filePath, content: responsesFile.getFullText() };
}

export function getResponseTypeName(baseResponseName: string) {
  return normalizeName(`${baseResponseName}Response`, NameType.Interface);
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
        hasQuestionToken: !Boolean(h.required)
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
      type: statusCode === `"default"` ? `string` : statusCode,
      kind: StructureKind.PropertySignature
    }
  ];

  if (response.body) {
    const description = response.body.description;
    responseProperties.push({
      name: "body",
      type: response.body.type,
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
