// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  SourceFile,
  VariableDeclarationKind,
  Scope,
  ClassDeclaration,
  ParameterDeclarationStructure,
  OptionalKind,
  ExportDeclarationStructure,
  MethodDeclaration
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { transformOperationSpec } from "../transforms/operationTransforms";
import {
  OperationGroupDetails,
  OperationSpecDetails,
  OperationDetails,
  OperationResponseMapper,
  OperationRequestDetails
} from "../models/operationDetails";
import { isString } from "util";
import { ParameterDetails } from "../models/parameterDetails";
import {
  filterOperationParameters,
  formatJsDocParam
} from "./utils/parameterUtils";
import { PropertyKind, TypeDetails } from "../models/modelDetails";
import { wrapString } from "./utils/stringUtils";
import { KnownMediaType } from "@azure-tools/codegen";
import {
  SchemaType,
  ParameterLocation,
  ChoiceSchema,
  SealedChoiceSchema
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";

/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export function generateOperations(
  clientDetails: ClientDetails,
  project: Project
): void {
  let fileNames: string[] = [];

  // Toplevel operations are inlined in the client
  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  operationGroups.forEach(operationDetails => {
    fileNames.push(normalizeName(operationDetails.name, NameType.File));
    generateOperation(operationDetails, clientDetails, project);
  });

  if (operationGroups.length) {
    const operationIndexFile = project.createSourceFile(
      `${clientDetails.srcPath}/operations/index.ts`,
      undefined,
      { overwrite: true }
    );

    operationIndexFile.addExportDeclarations(
      fileNames.map(fileName => {
        return {
          moduleSpecifier: `./${fileName}`
        } as ExportDeclarationStructure;
      })
    );
  }
}

/**
 * This function creates a file for a given Operation Group
 */
function generateOperation(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  project: Project
): void {
  const name = normalizeName(operationGroupDetails.name, NameType.File);

  const operationGroupFile = project.createSourceFile(
    `${clientDetails.srcPath}/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupFile, clientDetails);
  addClass(operationGroupFile, operationGroupDetails, clientDetails);
  addOperationSpecs(
    operationGroupDetails,
    operationGroupFile,
    clientDetails.parameters
  );
}

/**
 * Generates a string representation of an Operation spec
 * the output is to be inserted in the Operation group file
 */
function buildSpec(spec: OperationSpecDetails): string {
  const responses = buildResponses(spec);
  const requestBody = buildRequestBody(spec);
  const queryParams = buildParameters(spec, "queryParameters");
  const urlParams = buildParameters(spec, "urlParameters");
  const headerParams = buildParameters(spec, "headerParameters");
  const contentType = buildContentType(spec);
  const isXML = spec.isXML ? "isXML: true," : "";

  return `{ path: "${spec.path}", httpMethod: "${
    spec.httpMethod
  }", responses: {${responses.join(
    ", "
  )}},${requestBody}${queryParams}${urlParams}${headerParams}${isXML}${contentType}serializer
    }`;
}

function buildContentType({ requestBody, isXML }: OperationSpecDetails) {
  return requestBody && isXML
    ? "contentType: 'application/xml; charset=utf-8',"
    : "";
}

/**
 * This function transforms the requestBody of OperationSpecDetails into its string representation
 * to insert in generated files
 */
function buildRequestBody({
  requestBody,
  httpMethod
}: OperationSpecDetails): string {
  if (!requestBody || httpMethod === "GET") {
    return "";
  }

  return `requestBody: Parameters.${requestBody.nameRef},`;
}

function buildParameters(
  operationSpec: OperationSpecDetails,
  parameterGroupName: string
): string {
  const parameterGroup: ParameterDetails[] | undefined = (operationSpec as any)[
    parameterGroupName
  ];
  if (!parameterGroup || !parameterGroup.length) {
    return "";
  }

  const parameters = parameterGroup.map(param => `Parameters.${param.nameRef}`);

  return `${parameterGroupName}: [${parameters.join()}],`;
}

/**
 * This function transforms the responses of OperationSpecDetails into their string representation
 * to insert in generated files
 */
function buildResponses({ responses }: OperationSpecDetails): string[] {
  const responseCodes = Object.keys(responses);
  let parsedResponses: string[] = [];
  responseCodes.forEach(code => {
    // Check whether we have an actual mapper or a string reference
    const { bodyMapper, headersMapper } = responses[code];
    const bodyMapperString = buildMapper(bodyMapper, "bodyMapper");
    const headersMapperString = buildMapper(headersMapper, "headersMapper");
    parsedResponses.push(`${code}: {
        ${bodyMapperString}${headersMapperString}
      }`);
  });

  return parsedResponses;
}

function buildMapper(
  mapper: OperationResponseMapper | undefined,
  mapperName: string
) {
  if (!mapper) {
    return "";
  }

  // When mapper is a reference (string) we don't need to stringify the object
  let mapperString = isString(mapper) ? mapper : JSON.stringify(mapper);

  return `${mapperName}: ${mapperString},`;
}

function getOptionsParameter(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: string[],
  { isOptional = true } = {}
): ParameterWithDescription {
  let type: string = "coreHttp.OperationOptions";
  if (
    filterOperationParameters(parameters, operation, {
      includeOptional: true
    }).some(p => !p.required)
  ) {
    type = `${operation.typeDetails.typeName}OptionalParams`;
    importedModels.push(type);
  }
  return {
    name: "options",
    type,
    hasQuestionToken: isOptional,
    description: "The options parameters."
  };
}

/**
 * Adds an Operation group class to the generated file
 */
function addClass(
  operationGroupFile: SourceFile,
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails
) {
  let importedModels: string[] = [];
  const className = normalizeName(operationGroupDetails.name, NameType.Class);
  const operationGroupClass = operationGroupFile.addClass({
    name: className,
    docs: [`Class representing a ${className}.`],
    isExported: true
  });
  operationGroupClass.addProperty({
    name: "client",
    isReadonly: true,
    scope: Scope.Private,
    type: clientDetails.className
  });
  const constructorDefinition = operationGroupClass.addConstructor({
    docs: [
      {
        description: `Initialize a new instance of the class ${className} class. \n@param client Reference to the service client`
      }
    ],
    parameters: [
      {
        name: "client",
        hasQuestionToken: false,
        type: clientDetails.className
      }
    ]
  });

  constructorDefinition.addStatements(["this.client = client"]);
  writeOperations(
    operationGroupDetails,
    operationGroupClass,
    importedModels,
    clientDetails.parameters
  );

  // Use named import from Models
  if (importedModels.length) {
    operationGroupFile.addImportDeclaration({
      namedImports: importedModels,
      moduleSpecifier: "../models"
    });
  }
}

type ParameterWithDescription = OptionalKind<
  ParameterDeclarationStructure & { description: string }
>;

/**
 * Write operations implementation, extracted from OperationGroupDetails, to the generated file
 */
export function writeOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration,
  importedModels: string[],
  parameters: ParameterDetails[],
  isInline = false
) {
  operationGroupDetails.operations.forEach(operation => {
    const responseName = getResponseType(operation, importedModels);
    const paramDeclarations = filterOperationParameters(
      parameters,
      operation
    ).map<ParameterWithDescription>(param => {
      const { usedModels } = param.typeDetails;
      const type = normalizeParameterName(param.typeDetails);

      if (usedModels.length) {
        importedModels.push(...usedModels);
      }

      return {
        name: param.name,
        description: param.description,
        type,
        hasQuestionToken: !param.required
      };
    });

    const allParams = [
      ...paramDeclarations,
      getOptionsParameter(operation, parameters, importedModels)
    ];

    const operationMethod = operationGroupClass.addMethod({
      name: normalizeName(operation.name, NameType.Property),
      parameters: allParams,
      returnType: `Promise<${responseName}>`,
      docs: [generateOperationJSDoc(allParams, operation.description)]
    });

    const sendParams = paramDeclarations.map(p => p.name).join(",");

    if (operation.mediaTypes.size > 1) {
      // This condition implies that the user can specify a contentType,
      // and this contentType can change how the request is serialized.
      writeMultiMediaTypeOperationBody(
        operationMethod,
        operation,
        sendParams,
        responseName,
        isInline
      );
      return;
    }

    operationMethod.addStatements(
      `return this${
        isInline ? "" : ".client"
      }.sendOperationRequest({${sendParams}${
        !!sendParams ? "," : ""
      } options}, ${operation.name}OperationSpec) as Promise<${responseName}>`
    );
  });
}

/**
 * Writes the body of an operation that supports multiple media types.
 * The body will perform checks based on the user-provided contentType
 * to determine which OperationSpec to use when sending the request.
 */
function writeMultiMediaTypeOperationBody(
  operationMethod: MethodDeclaration,
  operation: OperationDetails,
  sendParams: string,
  responseName: string,
  isInline = false
): void {
  let statements = `let operationSpec: coreHttp.OperationSpec;`;
  // We need to use the contentType parameter to determine which spec to use.
  const conditionals: string[] = [];
  let hasOptionalContentType = false;
  for (const request of operation.requests) {
    const mediaType = request.mediaType!;
    // check for contentType choice
    const validContentTypes = getContentTypeValues(request);
    if (!validContentTypes) {
      if (hasOptionalContentType) {
        throw new Error(
          `Encountered two operation media types that had unspecified values for contentType for operation "${operation.fullName}".`
        );
      }
      hasOptionalContentType = true;
      // When no value for content-type is present, then we know this is the final 'else' block.
      conditionals.push(`{
            operationSpec = ${operation.name}$${mediaType}OperationSpec;
          }`);
    } else {
      conditionals.splice(
        0,
        0,
        `if (
            options && "contentType" in options &&
            [${validContentTypes
              .map(type => `"${type}"`)
              .join(", ")}].indexOf(options.contentType ?? "") > -1
          ) {
            operationSpec = ${operation.name}$${mediaType}OperationSpec;
          }`
      );
    }
  }
  statements += conditionals.join(" else ");
  statements += `return this${
    isInline ? "" : ".client"
  }.sendOperationRequest({${sendParams}${
    !!sendParams ? "," : ""
  } options}, operationSpec) as Promise<${responseName}>`;
  operationMethod.addStatements(statements);
}

function getContentTypeValues(
  request: OperationRequestDetails
): string[] | undefined {
  const parameters = request.parameters ?? [];
  for (const parameter of parameters) {
    const parameterMetadata = getLanguageMetadata(parameter.language);
    const schema = parameter.schema;
    if (
      (schema.type === SchemaType.Choice ||
        schema.type === SchemaType.SealedChoice) &&
      parameterMetadata.serializedName.toLowerCase() === "content-type" &&
      parameter.protocol.http?.in === ParameterLocation.Header
    ) {
      return (schema as ChoiceSchema | SealedChoiceSchema).choices.map(
        c => c.value as string
      );
    }
  }
  return;
}

function getResponseType(
  operation: OperationDetails,
  importedModels: string[]
) {
  const hasSuccessResponse = operation.responses.some(
    ({ isError, mappers }) =>
      !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
  );

  const responseName = hasSuccessResponse ? operation.typeDetails.typeName : "";

  if (responseName) {
    const typeName = `${normalizeName(
      responseName,
      NameType.Interface
    )}Response`;

    importedModels.push(typeName);

    return typeName;
  }

  return "coreHttp.RestResponse";
}

function generateOperationJSDoc(
  params: ParameterWithDescription[] = [],
  description: string = ""
): string {
  const paramJSDoc =
    !params || !params.length ? "" : formatJsDocParam(params).join("\n");

  return `${
    description ? wrapString(description) + "\n" : description
  }${paramJSDoc}`;
}

function normalizeParameterName({ kind, typeName }: TypeDetails) {
  // Only Enum and Composite kinds need normalization
  if ([PropertyKind.Enum, PropertyKind.Composite].includes(kind)) {
    return `${normalizeName(typeName, NameType.Class)}`;
  }

  // Other kinds are already in the form they need to be
  return typeName;
}

/**
 * Generates and inserts into the file the operation specs
 * for a given operation group
 */
export function addOperationSpecs(
  operationGroupDetails: OperationGroupDetails,
  file: SourceFile,
  parameters: ParameterDetails[]
): void {
  const isXml = operationGroupDetails.operations.some(o =>
    o.mediaTypes.has(KnownMediaType.Xml)
  );
  file.addStatements("// Operation Specifications");
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "serializer",
        initializer: `new coreHttp.Serializer(Mappers, /* isXml */ ${isXml});`
      }
    ]
  });

  operationGroupDetails.operations.forEach(operation => {
    const operationSpecs = transformOperationSpec(operation, parameters);

    for (const operationSpec of operationSpecs) {
      file.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: operationSpec.name,
            type: "coreHttp.OperationSpec",
            initializer: buildSpec(operationSpec)
          }
        ]
      });
    }
  });
}

/**
 * Adds required imports at the top of the file
 */
function addImports(
  operationGroupFile: SourceFile,
  { className, sourceFileName }: ClientDetails
) {
  operationGroupFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  operationGroupFile.addImportDeclaration({
    namespaceImport: "Mappers",
    moduleSpecifier: "../models/mappers"
  });

  operationGroupFile.addImportDeclaration({
    namespaceImport: "Parameters",
    moduleSpecifier: "../models/parameters"
  });

  operationGroupFile.addImportDeclaration({
    namedImports: [className],
    moduleSpecifier: `../${sourceFileName}`
  });
}
