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

/**
 * Generates the interfaces describing each operation parameters
 */
export function generateParameterInterfaces(
  model: CodeModel,
  project: Project
) {
  const { srcPath } = getAutorestOptions();
  const parametersFile = project.createSourceFile(
    path.join(srcPath, `parameters.ts`),
    undefined,
    {
      overwrite: true
    }
  );

  // Tracks the models we need to import
  const importedModels = new Set<string>();
  // Tracks the generated parameter types

  const operations = getAllOperations(model);
  let hasHeaders = false;

  for (const operation of operations) {
    const operationName = normalizeName(
      getLanguageMetadata(operation.language).name,
      NameType.Interface
    );

    const requestCount = operation?.requests?.length ?? 0;
    const topParamName = `${operationName}Parameters`;
    const subParamNames: string[] = [];

    // We need to loop the requests. An operation with multiple requests means that
    // the operation can get different values for content-type and each value may
    // have a different type associated to it.
    for (let i = 0; i < requestCount; i++) {
      const internalReferences = new Set<string>();
      // In case we have more than one request to model we need to add a suffix to differentiate
      const nameSuffix = i > 0 ? `${i}` : "";
      const parameterInterfaceName =
        requestCount > 1
          ? `${operationName}RequestParameters${nameSuffix}`
          : topParamName;
      const parameters = getOperationParameters(operation, i);
      const queryParameterDefinitions = buildQueryParameterDefinition(
        operationName,
        parameters,
        [SchemaContext.Input],
        importedModels,
        internalReferences,
        i
      );

      const request = operation.requests ? operation.requests[i] : undefined;

      const pathParameterDefinitions = buildPathParameterDefinitions(
        operationName,
        parameters,
        model,
        parametersFile,
        internalReferences,
        i
      )

      const headerParameterDefinitions = buildHeaderParameterDefinitions(
        operationName,
        parameters,
        parametersFile,
        internalReferences,
        i
      );

      const contentTypeParameterDefinition = buildContentTypeParametersDefinition(
        operationName,
        request,
        internalReferences,
        i
      );

      const bodyParameterDefinition = buildBodyParametersDefinition(
        operationName,
        parameters,
        [SchemaContext.Input],
        importedModels,
        internalReferences,
        i
      );

      // Add interfaces for body and query parameters
      parametersFile.addInterfaces([
        ...(bodyParameterDefinition ?? []),
        ...(queryParameterDefinitions ?? []),
        ...(pathParameterDefinitions ? [pathParameterDefinitions]: []),
        ...(headerParameterDefinitions ? [headerParameterDefinitions] : []),
        ...(contentTypeParameterDefinition
          ? [contentTypeParameterDefinition]
          : [])
      ]);

      // Add Operation parameters type alias which is composed of the types we generated above
      // plus the common type RequestParameters
      parametersFile.addTypeAlias({
        name: parameterInterfaceName,
        isExported: true,
        type: [...internalReferences, "RequestParameters"].join(" & ")
      });

      subParamNames.push(parameterInterfaceName);

      if (headerParameterDefinitions !== undefined) {
        hasHeaders = true;
      }
    }

    // Add Operation parameters type alias which is composed of the types we generated above
    // plus the common type RequestParameters
    if (requestCount > 1) {
      parametersFile.addTypeAlias({
        name: topParamName,
        isExported: true,
        type: [...subParamNames].join(" | ")
      });
    }
  }

  if (hasHeaders) {
    parametersFile.addImportDeclarations([
      {
        namedImports: ["RawHttpHeadersInput"],
        moduleSpecifier: "@azure/core-rest-pipeline"
      }
    ]);
  }

  parametersFile.addImportDeclarations([
    {
      namedImports: ["RequestParameters"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (hasInputModels(model)) {
    parametersFile.addImportDeclarations([
      {
        namedImports: [...importedModels],
        moduleSpecifier: "./models"
      }
    ]);
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
