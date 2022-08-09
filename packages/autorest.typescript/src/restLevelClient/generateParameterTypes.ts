import {
  CodeModel,
  Operation,
  Parameter,
  SchemaContext,
  Request as OperationRequest,
  ParameterLocation
} from "@autorest/codemodel";
import {
  InterfaceDeclarationStructure,
  Project,
  PropertySignatureStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import * as path from 'path';
import { getLanguageMetadata } from "../utils/languageHelpers";
import { NameType, normalizeName } from "../utils/nameUtils";
import { getPropertySignature } from "./getPropertySignature";
import { primitiveSchemaToType } from "./schemaHelpers";
import { getOperationParameters } from "./helpers/operationHelpers";
import { hasInputModels } from "./helpers/modelHelpers";
import { getAutorestOptions } from "../autorestSession";
import { transform } from "./transforms/transform";
import { buildParameterTypes } from "@azure-tools/rlc-codegen";

/**
 * Generates the interfaces describing each operation parameters
 */
export function generateParameterInterfaces(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildParameterTypes(rlcModels);
  if (preparedContent) {
    project.createSourceFile(
      path.join(srcPath, `parameters.ts`),
      preparedContent.content,
      {
        overwrite: true
      }
    );
  }
}

function getRequestHeaderInterfaceDefinition(
  parameters: Parameter[],
  baseName: string
): undefined | InterfaceDeclarationStructure {
  // Check if there are any required headers
  const headerParameters = parameters.filter(
    p => p.protocol.http?.in === "header"
  );
  if (!headerParameters.length) {
    return undefined;
  }
  const headersInterfaceName = `${baseName}Headers`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: headersInterfaceName,
    properties: headerParameters.map((h: Parameter) => {
      const description = getLanguageMetadata(h.language).description;
      return {
        name: `"${getLanguageMetadata(h.language).serializedName}"`,
        ...(description && { docs: [{ description }] }),
        type: primitiveSchemaToType(h.schema, [
          SchemaContext.Input,
          SchemaContext.Exception
        ]),
        hasQuestionToken: !h.required
      };
    })
  };
}

function buildHeaderParameterDefinitions(
  operationName: string,
  parameters: Parameter[],
  parametersFile: SourceFile,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure | undefined {
  const headerParameters = parameters.filter(
    p => p.protocol.http?.in === "header"
  );
  if (!headerParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const headerParameterInterfaceName = `${operationName}HeaderParam${nameSuffix}`;

  const headersInterface = getRequestHeaderInterfaceDefinition(
    headerParameters,
    operationName
  );

  if (headersInterface) {
    parametersFile.addInterface(headersInterface);
  }

  internalReferences.add(headerParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: headerParameterInterfaceName,
    properties: [
      {
        name: "headers",
        type: `RawHttpHeadersInput & ${operationName}Headers`,
        kind: StructureKind.PropertySignature
      }
    ]
  };
}

function getPathInterfaceDefinition(
  parameters: Parameter[],
  baseName: string,
  model: CodeModel
): undefined | InterfaceDeclarationStructure {
  // Check if there are any path parameters
  const pathParameters = parameters.filter(
    p => p.protocol.http?.in === ParameterLocation.Uri && model.globalParameters?.indexOf(p) === -1
  );
  if (!pathParameters.length) {
    return undefined;
  }
  const pathInterfaceName = `${baseName}PathParameters`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: pathInterfaceName,
    properties: pathParameters.map((h: Parameter) => {
      const description = getLanguageMetadata(h.language).description;
      return {
        name: `"${getLanguageMetadata(h.language).serializedName}"`,
        ...(description && { docs: [{ description }] }),
        type: primitiveSchemaToType(h.schema, [
          SchemaContext.Input,
          SchemaContext.Exception
        ]),
        hasQuestionToken: !h.required
      };
    })
  };
}

function buildPathParameterDefinitions(
  operationName: string,
  parameters: Parameter[],
  model: CodeModel,
  parametersFile: SourceFile,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure | undefined {
  const pathParameters = parameters.filter(
    p => p.protocol.http?.in === ParameterLocation.Uri && model.globalParameters?.indexOf(p) === -1
  );
  if (!pathParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const pathParameterInterfaceName = `${operationName}PathParam${nameSuffix}`;

  const pathInterface = getPathInterfaceDefinition(
    pathParameters,
    operationName,
    model
  );

  if (pathInterface) {
    parametersFile.addInterface(pathInterface);
  }

  internalReferences.add(pathParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: pathParameterInterfaceName,
    properties: [
      {
        name: "pathParameters",
        type: `${operationName}PathParameters`,
        kind: StructureKind.PropertySignature
      }
    ]
  };
}
/**
 * Gets the interface definition for an operation bodyParameters
 */
function buildBodyParametersDefinition(
  operationName: string,
  parameters: Parameter[],
  schemaUsage: SchemaContext[],
  importedModels: Set<string>,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure[] {
  const bodyParameters = parameters.filter(p => p.protocol.http?.in === "body");
  if (!bodyParameters.length) {
    return [];
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const bodyParameterInterfaceName = `${operationName}BodyParam${nameSuffix}`;
  internalReferences.add(bodyParameterInterfaceName);

  // In case of formData we'd get multiple properties in body marked as partialBody
  if (bodyParameters.some(p => p.isPartialBody)) {
    let allOptionalParts = true;
    const propertiesDefinitions: PropertySignatureStructure[] = [];
    for (const param of bodyParameters) {
      if (param.required) {
        allOptionalParts = false;
      }

      propertiesDefinitions.push(
        getPropertySignature(param, schemaUsage, importedModels)
      );
    }

    const formBodyName = `${operationName}FormBody`;
    const formBodyInterface: InterfaceDeclarationStructure = {
      isExported: true,
      kind: StructureKind.Interface,
      name: formBodyName,
      properties: propertiesDefinitions
    };

    return [
      {
        isExported: true,
        kind: StructureKind.Interface,
        name: bodyParameterInterfaceName,
        properties: [
          {
            name: "body",
            type: formBodyName,
            hasQuestionToken: allOptionalParts
          }
        ]
      },
      formBodyInterface
    ];
  } else {
    const bodySignature = getPropertySignature(
      bodyParameters[0],
      schemaUsage,
      importedModels
    );

    return [
      {
        isExported: true,
        kind: StructureKind.Interface,
        name: bodyParameterInterfaceName,
        properties: [
          {
            docs: bodySignature.docs,
            name: "body",
            type: bodySignature.type,
            hasQuestionToken: bodySignature.hasQuestionToken
          }
        ]
      }
    ];
  }
}

/**
 * Gets the interface definition for an operation bodyParameters
 */
function buildContentTypeParametersDefinition(
  operationName: string,
  request: OperationRequest | undefined,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure | undefined {
  if (!request) {
    return undefined;
  }
  const mediaTypes: string[] = request.protocol.http?.mediaTypes ?? [];

  if (!mediaTypes.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const mediaTypesParameterInterfaceName = `${operationName}MediaTypesParam${nameSuffix}`;

  // Mark the queryParameter interface for importing
  internalReferences.add(mediaTypesParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: mediaTypesParameterInterfaceName,
    properties: [
      {
        docs: ["Request content type"],
        name: "contentType",
        type: mediaTypes.map(mt => `"${mt}"`).join(" | "),
        hasQuestionToken: true
      }
    ]
  };
}

/**
 * Gets the interface definition for an operation queryParameters
 */
function buildQueryParameterDefinition(
  operationName: string,
  parameters: Parameter[],
  schemaUsage: SchemaContext[],
  importedModels: Set<string>,
  internalReferences: Set<string>,
  requestIndex: number
): InterfaceDeclarationStructure[] | undefined {
  const queryParameters = parameters.filter(
    p => p.protocol.http?.in === "query"
  );

  if (!queryParameters.length) {
    return undefined;
  }

  const nameSuffix = requestIndex > 0 ? `${requestIndex}` : "";
  const queryParameterInterfaceName = `${operationName}QueryParam${nameSuffix}`;
  const queryParameterPropertiesName = `${operationName}QueryParamProperties`;

  // Get the property signature for each query parameter
  const propertiesDefinition = queryParameters.map(qp =>
    getPropertySignature(qp, schemaUsage, importedModels)
  );

  const hasRequiredParameters = propertiesDefinition.some(
    p => !p.hasQuestionToken
  );

  const propertiesInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterPropertiesName,
    properties: propertiesDefinition
  };

  const parameterInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterInterfaceName,
    properties: [
      {
        name: "queryParameters",
        type: queryParameterPropertiesName,
        // Mark as optional if there are no required parameters
        hasQuestionToken: !hasRequiredParameters
      }
    ]
  };

  // Mark the queryParameter interface for importing
  internalReferences.add(queryParameterInterfaceName);

  return [propertiesInterface, parameterInterface];
}

/**
 * Flattens all operations from operationGroups
 */
function getAllOperations(model: CodeModel): Operation[] {
  const operations: Operation[] = [];
  for (const operationGroup of model.operationGroups) {
    operations.push(...operationGroup.operations);
  }

  return operations;
}
