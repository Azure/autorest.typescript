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
import { normalizeName, NameType, normalizeTypeName } from "../utils/nameUtils";
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
import { wrapString } from "./utils/stringUtils";
import { KnownMediaType } from "@azure-tools/codegen";
import {
  SchemaType,
  ParameterLocation,
  ChoiceSchema,
  SealedChoiceSchema,
  ConstantSchema,
  Parameter
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

/**
 * This function gets the parameter groups specified in the swagger
 * by the parameter grouping extension x-ms-parameter-grouping
 */
function getGroupedParameters(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>
): ParameterWithDescription[] {
  let parameterGroups: Parameter[] = [];
  // We get the parameters that are used by this specific operation, including
  // any optional ones.
  // We extract these from the parameters collection to make sure we reuse them
  // when needed, instead of creating duplicate ones.
  filterOperationParameters(parameters, operation, {
    includeOptional: true,
    includeGroupedParameters: true
  })
    .filter(({ parameter }) => parameter.groupedBy)
    // Get all the grouped properties and store them in parameterGroups
    .forEach(({ parameter: { groupedBy } }) => {
      if (!groupedBy) {
        return;
      }

      const gropuName = getLanguageMetadata(groupedBy.language).name;

      // Make sure we only store the same group once
      if (
        parameterGroups.some(
          p => getLanguageMetadata(p.language).name === gropuName
        )
      ) {
        return;
      }
      parameterGroups.push(groupedBy);
    });

  return parameterGroups.map(({ language, required }) => {
    const { name, description } = getLanguageMetadata(language);
    const type = normalizeName(name, NameType.Interface);

    // Add the model for import
    importedModels.add(type);

    return {
      name,
      type,
      description,
      hasQuestionToken: !required
    };
  });
}

/**
 * This function takes care of Typescript generator specific Optional parameters grouping.
 *
 * In the Typescript generator we always group optional parameters to provide a simpler interface.
 * This function is responsible for the default optional parameter grouping.
 *
 * However, when the parameter grouping extension is used, we should honor it instead of using our
 * default grouping and honor the extension which provides additional metadata such as expected
 * parameter name.
 */
function getOptionsParameter(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  {
    isOptional = true,
    mediaType
  }: { isOptional?: boolean; mediaType?: string } = {}
): ParameterWithDescription {
  let type: string = "coreHttp.OperationOptions";
  if (
    filterOperationParameters(parameters, operation, {
      includeOptional: true
    }).some(p => !p.required)
  ) {
    const mediaPrefix = mediaType ? `$${mediaType}` : "";
    type = `${operation.typeDetails.typeName}${mediaPrefix}OptionalParams`;
    importedModels.add(type);
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
  let importedModels = new Set<string>();
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
  if (importedModels.size) {
    // Add alias to any model that collides with the class name
    const namedImports = [...importedModels].map(model => {
      if (model === className) {
        return `${model} as ${model}Model`;
      }
      return model;
    });

    operationGroupFile.addImportDeclaration({
      namedImports,
      moduleSpecifier: "../models"
    });
  }
}

type ParameterWithDescription = OptionalKind<
  ParameterDeclarationStructure & { description: string }
>;

/**
 * Gets information about the parameters used by a given operation
 */
function getGroupedParametersInfo(
  operation: OperationDetails,
  parameters: ParameterDetails[]
) {
  const operationParametersWithOptionals = filterOperationParameters(
    parameters,
    operation,
    {
      includeOptional: true,
      includeGroupedParameters: true
    }
  );

  const hasNonGroupedOptionalParams = operationParametersWithOptionals.some(
    p => !p.required && !p.parameter.groupedBy
  );

  const hasGroupedParams = operationParametersWithOptionals.some(
    p => p.parameter.groupedBy
  );

  return { hasNonGroupedOptionalParams, hasGroupedParams };
}
/**
 * Gets a list of parameter declarations for each overload the operation supports,
 * and the list of parameter declarations for the base operation.
 */
function getOperationParameterSignatures(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  operationGroupClass: ClassDeclaration
) {
  const {
    hasNonGroupedOptionalParams,
    hasGroupedParams
  } = getGroupedParametersInfo(operation, parameters);

  const operationParameters = filterOperationParameters(parameters, operation, {
    includeContentType: true,
    includeOptional: hasNonGroupedOptionalParams && hasGroupedParams
  });

  const operationRequests = operation.requests;
  const overloadParameterDeclarations: ParameterWithDescription[][] = [];
  const hasMultipleOverloads = operationRequests.length > 1;

  for (const request of operationRequests) {
    const requestMediaType = request.mediaType;
    // filter out parameters that belong to a different media type
    const requestParameters = operationParameters.filter(
      ({ targetMediaType }) =>
        !targetMediaType || requestMediaType === targetMediaType
    );

    // Convert parameters into TypeScript parameter declarations.
    const parameterDeclarations = requestParameters.reduce<
      ParameterWithDescription[]
    >((acc, param) => {
      const { usedModels } = param.typeDetails;
      let type = normalizeTypeName(param.typeDetails);
      if (
        param.typeDetails.isConstant &&
        param.typeDetails.typeName === "string" &&
        param.typeDetails.defaultValue
      ) {
        type = `"${param.typeDetails.defaultValue}"`;
      }

      // If the type collides with the class name, use the alias
      const typeName =
        operationGroupClass.getName() === type ? `${type}Model` : type;

      // If any models are used, add them to the named import list
      if (usedModels.length) {
        usedModels.forEach(model => importedModels.add(model));
      }

      const newParameter = {
        name: param.name,
        description: param.description,
        type: typeName,
        hasQuestionToken: !param.required
      };

      // Make sure required parameters are added before optional
      const newParameterPosition = param.required
        ? findLastRequiredParamIndex(acc) + 1
        : acc.length;
      acc.splice(newParameterPosition, 0, newParameter);
      return acc;
    }, []);

    trackParameterGroups(
      operation,
      parameters,
      importedModels,
      parameterDeclarations
    );

    // Only use our optional parameter grouping if the parameter grouping extension
    // is not used in the swagger, if so, honor the extension grouping.
    if (!hasGroupedParams) {
      // add optional parameter
      const optionalParameter = getOptionsParameter(
        operation,
        parameters,
        importedModels,
        {
          mediaType: hasMultipleOverloads ? requestMediaType : undefined
        }
      );
      parameterDeclarations.push(optionalParameter);
    }
    // sortParametersBy(parameterDeclarations, request.parameters);
    overloadParameterDeclarations.push(parameterDeclarations);
  }

  // Create the parameter declarations for the base method signature.
  const baseMethodParameters = getBaseMethodParameterDeclarations(
    overloadParameterDeclarations
  );

  return { overloadParameterDeclarations, baseMethodParameters };
}

function findLastRequiredParamIndex(
  params: ParameterWithDescription[]
): number {
  for (let i = params.length; i--; ) {
    if (!params[i].hasQuestionToken) {
      return i;
    }
  }
  return -1;
}

function trackParameterGroups(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  importedModels: Set<string>,
  parameterDeclarations: ParameterWithDescription[]
) {
  const groupedParameters = getGroupedParameters(
    operation,
    parameters,
    importedModels
  );

  // Make sure required parameters are added before optional
  const lastRequiredIndex =
    findLastRequiredParamIndex(parameterDeclarations) + 1;

  if (groupedParameters.length) {
    parameterDeclarations.splice(lastRequiredIndex, 0, ...groupedParameters);

    parameterDeclarations.push({
      name: "options",
      type: "coreHttp.OperationOptions",
      hasQuestionToken: true,
      description: "The options parameters."
    });
  }
}

/**
 * Given a list of operation parameter declarations per overload,
 * returns a list of the parameter declarations that should appear
 * in the operation's base signature.
 *
 * If `overloadParameterDeclarations` contains the parameter declarations for
 * just a single overload, then the return value will be the same as the 1st
 * element in `overloadParameterDeclarations`.
 * @param overloadParameterDeclarations
 */
function getBaseMethodParameterDeclarations(
  overloadParameterDeclarations: ParameterWithDescription[][]
): ParameterWithDescription[] {
  const baseMethodParameters: ParameterWithDescription[] = [];
  // Need to know which overload has the most parameters to set our upper bound.
  const maxOverloadSize = Math.max(
    ...overloadParameterDeclarations.map(params => params.length)
  );
  for (let i = 0; i < maxOverloadSize; i++) {
    // attempt to combine types
    const declarations: ParameterWithDescription[] = [];
    for (const overloadParameterDeclaration of overloadParameterDeclarations) {
      if (overloadParameterDeclaration[i]) {
        declarations.push(overloadParameterDeclaration[i]);
      }
    }

    const declaration = declarations.reduce(
      (prevDeclaration, curDeclaration) => {
        prevDeclaration = { ...prevDeclaration };
        if (curDeclaration.name !== prevDeclaration.name) {
          // Currently we only generate overloads if an operation supports multiple media types.
          // Since contentType is always required and the 1st parameter, parameter names/ordering
          // shouldn't change.
          // In order to support more variance in parameter naming/ordering, we'll need to be able
          // to construct the OperationArguments separately for each overload.
          throw new Error(
            `Operation overloads with different parameter names/ordering not supported.`
          );
        }
        if (curDeclaration.type !== prevDeclaration.type) {
          prevDeclaration.type += ` | ${curDeclaration.type}`;
        }
        // parameters should be optional if any declaration is optional
        if (!curDeclaration.hasQuestionToken) {
          prevDeclaration.hasQuestionToken = curDeclaration.hasQuestionToken;
        }
        return prevDeclaration;
      }
    );
    baseMethodParameters.push(declaration);
  }
  return baseMethodParameters;
}

/**
 * Write operations implementation, extracted from OperationGroupDetails, to the generated file
 */
export function writeOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration,
  importedModels: Set<string>,
  parameters: ParameterDetails[],
  isInline = false
) {
  operationGroupDetails.operations.forEach(operation => {
    const {
      baseMethodParameters,
      overloadParameterDeclarations
    } = getOperationParameterSignatures(
      operation,
      parameters,
      importedModels,
      operationGroupClass
    );
    const responseName = getResponseType(operation, importedModels);

    const operationMethod = operationGroupClass.addMethod({
      name: normalizeName(operation.name, NameType.Property),
      parameters: baseMethodParameters,
      returnType: `Promise<${responseName}>`,
      docs: [
        generateOperationJSDoc(baseMethodParameters, operation.description)
      ]
    });

    const sendParams = baseMethodParameters.map(p => p.name).join(",");
    if (overloadParameterDeclarations.length === 1) {
      operationMethod.addStatements(
        `return this${
          isInline ? "" : ".client"
        }.sendOperationRequest({${sendParams}${!!sendParams ? "," : ""}}, ${
          operation.name
        }OperationSpec) as Promise<${responseName}>`
      );
      return;
    }

    for (const overload of overloadParameterDeclarations) {
      operationMethod.addOverload({
        parameters: overload,
        returnType: `Promise<${responseName}>`,
        docs: [generateOperationJSDoc(overload, operation.description)]
      });
    }

    // This condition implies that the user can specify a contentType,
    // and this contentType can change how the request is serialized.
    writeMultiMediaTypeOperationBody(
      operationMethod,
      operation,
      sendParams,
      responseName,
      isInline
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
  for (const request of operation.requests) {
    const mediaType = request.mediaType!;
    const validContentTypes = getContentTypeValues(request);

    // Ensure that a contentType exists, otherwise we won't be able to determine which operation spec to use.
    if (!validContentTypes) {
      throw new Error(
        `Encountered an operation media type that has unspecified values for the contentType for operation "${operation.fullName}".`
      );
    }

    conditionals.push(
      `if (
        [${validContentTypes
          .map(type => `"${type}"`)
          .join(", ")}].indexOf(contentType) > -1
        ) {
          operationSpec = ${operation.name}$${mediaType}OperationSpec;
      }`
    );
  }

  // Add an else clause that throws an error. This should never happen as long as a contentType was provided by the user.
  conditionals.push(`{
    throw new TypeError(\`"contentType" must be a valid value but instead was "\${contentType}".\`);
  }`);

  statements += conditionals.join(" else ");
  statements += `return this${
    isInline ? "" : ".client"
  }.sendOperationRequest({${sendParams}${
    !!sendParams ? "," : ""
  }}, operationSpec) as Promise<${responseName}>`;
  operationMethod.addStatements(statements);
}

function getContentTypeValues(
  request: OperationRequestDetails
): string[] | undefined {
  const parameters = request.parameters ?? [];
  for (const parameter of parameters) {
    const parameterMetadata = getLanguageMetadata(parameter.language);
    const paramLowerSerializedName = parameterMetadata.serializedName?.toLowerCase();
    const parameterInHeader =
      parameter.protocol.http?.in === ParameterLocation.Header;
    const schema = parameter.schema;
    if (
      (schema.type === SchemaType.Choice ||
        schema.type === SchemaType.SealedChoice) &&
      paramLowerSerializedName === "content-type" &&
      parameterInHeader
    ) {
      return (schema as ChoiceSchema | SealedChoiceSchema).choices.map(
        c => c.value as string
      );
    } else if (
      schema.type === SchemaType.Constant &&
      paramLowerSerializedName === "content-type" &&
      parameterInHeader
    ) {
      return [(schema as ConstantSchema).value.value];
    }
  }
  return;
}

function getResponseType(
  operation: OperationDetails,
  importedModels: Set<string>
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

    importedModels.add(typeName);

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
