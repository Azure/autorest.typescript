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
  Parameter,
  ImplementationLocation
} from "@azure-tools/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { shouldImportParameters } from "./utils/importUtils";
import {
  getAllModelsNames,
  getResponseTypeName
} from "./utils/responseTypeUtils";
import { getParameterDescription } from "../utils/getParameterDescription";

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
  const hasMappers = !!clientDetails.mappers.length;
  const operationGroupFile = project.createSourceFile(
    `${clientDetails.srcPath}/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupDetails, operationGroupFile, clientDetails);
  addClass(operationGroupFile, operationGroupDetails, clientDetails);
  addOperationSpecs(
    operationGroupDetails,
    operationGroupFile,
    clientDetails.parameters,
    hasMappers
  );
}

export function writeGetOperationOptions(
  operationGroupClass: ClassDeclaration
) {
  operationGroupClass.addMethod({
    scope: Scope.Private,
    name: "getOperationOptions<TOptions extends coreHttp.OperationOptions>",
    parameters: [
      { name: "options", type: "TOptions | undefined" },
      { name: "finalStateVia", type: "string", hasQuestionToken: true }
    ],
    returnType: `coreHttp.RequestOptionsBase`,
    statements: `
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia),
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
    `
  });
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
  const mediaType = buildMediaType(spec);

  const isXML = spec.isXML ? "isXML: true," : "";
  const serializerName = spec.isXML
    ? "serializer: xmlSerializer"
    : "serializer";

  return `{ path: "${spec.path}", httpMethod: "${
    spec.httpMethod
  }", responses: {${responses.join(
    ", "
  )}},${requestBody}${queryParams}${urlParams}${headerParams}${isXML}${contentType}${mediaType}${serializerName}
    }`;
}

function buildMediaType({ requestBody }: OperationSpecDetails) {
  if (requestBody?.targetMediaType) {
    return `mediaType: '${requestBody.targetMediaType}',`;
  }
  return "";
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
  const parameterGroups: Parameter[] = [];
  // We get the parameters that are used by this specific operation, including
  // any optional ones.
  // We extract these from the parameters collection to make sure we reuse them
  // when needed, instead of creating duplicate ones.
  filterOperationParameters(parameters, operation, {
    includeGroupedParameters: true
  })
    .filter(({ parameter }) => parameter.groupedBy)
    // Get optional grouped properties and store them in parameterGroups
    .forEach(({ parameter: { groupedBy } }) => {
      if (!groupedBy || !groupedBy.required) {
        return;
      }

      const groupNAme = getLanguageMetadata(groupedBy.language).name;

      // Make sure we only store the same group once
      if (
        parameterGroups.some(
          p => getLanguageMetadata(p.language).name === groupNAme
        )
      ) {
        return;
      }
      parameterGroups.push(groupedBy);
    });

  return parameterGroups
    .filter(({ required }) => required)
    .map(({ language }) => {
      const { name, description } = getLanguageMetadata(language);
      const type = normalizeName(name, NameType.Interface);

      // Add the model for import
      importedModels.add(type);

      return {
        name,
        type,
        description
      };
    });
}

/**
 * This function takes care of Typescript generator specific Optional parameters grouping.
 *
 * In the Typescript generator we always group optional parameters to provide a simpler interface.
 * This function is responsible for the default optional parameter grouping, which groups into an
 * options bag any optional parameter, including optional grouped parameters.
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
  const operationParameters = filterOperationParameters(parameters, operation, {
    includeOptional: true,
    includeGroupedParameters: true
  });

  const hasOptionalParameters = operationParameters.some(
    ({ required, parameter: { groupedBy } }) => !groupedBy && !required
  );
  const hasOptionalGroups = operationParameters.some(
    ({ parameter: { groupedBy } }) => groupedBy && !groupedBy.required
  );

  if (hasOptionalParameters || hasOptionalGroups) {
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

function getReturnType(
  operation: OperationDetails,
  importedModels: Set<string>,
  modelNames: Set<string>
) {
  const responseName = getResponseType(operation, importedModels, modelNames);

  return operation.isLRO
    ? `Promise<LROPoller<${responseName}>>`
    : `Promise<${responseName}>`;
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

  let allModelsNames = getAllModelsNames(clientDetails);

  const className = normalizeName(
    operationGroupDetails.name,
    NameType.OperationGroup,
    true /** shouldGuard */
  );
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
    clientDetails.parameters,
    allModelsNames
  );

  if (hasLROOperation(operationGroupDetails)) {
    writeGetOperationOptions(operationGroupClass);
  }

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
  ParameterDeclarationStructure & {
    description: string;
    isContentType?: boolean;
  }
>;

/**
 * Sorts the list of operation parameters to match the order described by the CodeModel.
 * @param operation Details about an operation.
 * @param request Details about an operation overload.
 * @param parameterDeclarations List of required parameter declarations for the provided operation overload.
 */
function sortOperationParameters(
  operation: OperationDetails,
  request: OperationRequestDetails,
  parameterDeclarations: ParameterWithDescription[]
): ParameterWithDescription[] {
  // Get a sorted list of parameter names for this operation/request.
  // Note that this may inlcude parameters that aren't displayed, e.g. constant types.
  const expectedParameterOrdering = [
    ...operation.parameters,
    ...(request.parameters ?? [])
  ]
    // Only parameters that are implemented on the method should be considered.
    .filter(param => param.implementation === ImplementationLocation.Method)
    .map(param => getLanguageMetadata(param.language).name);

  const orderedParameterDeclarations: typeof parameterDeclarations = [];
  for (const parameterName of expectedParameterOrdering) {
    const index = parameterDeclarations.findIndex(
      p => p.name === parameterName
    );
    if (index === -1) {
      // No matching parameter found.
      // Common cases where this occurs is if a parameter
      // is optional, or a constant.
      continue;
    }

    orderedParameterDeclarations.push(
      ...parameterDeclarations.splice(index, 1)
    );
  }

  // push any remaining parameters into the ordered parameter list
  orderedParameterDeclarations.push(...parameterDeclarations);

  return orderedParameterDeclarations;
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
  const operationParameters = filterOperationParameters(parameters, operation, {
    includeContentType: true
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
        description: getParameterDescription(param, operation.fullName),
        type: typeName,
        hasQuestionToken: !param.required,
        isContentType: Boolean(
          param.serializedName === "Content-Type" && param.location === "header"
        )
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

    // Sort the parameter declarations to match the signature the CodeModel suggests.
    const orderedParameterDeclarations = sortOperationParameters(
      operation,
      request,
      parameterDeclarations
    );

    // add optional parameter
    const optionalParameter = getOptionsParameter(
      operation,
      parameters,
      importedModels,
      {
        mediaType: hasMultipleOverloads ? requestMediaType : undefined
      }
    );
    orderedParameterDeclarations.push(optionalParameter);

    overloadParameterDeclarations.push(orderedParameterDeclarations);
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
  ).filter(gp => !gp.hasQuestionToken);

  // Make sure required parameters are added before optional
  const lastRequiredIndex =
    findLastRequiredParamIndex(parameterDeclarations) + 1;

  if (groupedParameters.length) {
    parameterDeclarations.splice(lastRequiredIndex, 0, ...groupedParameters);
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
  if (!overloadParameterDeclarations.length) {
    return [];
  }
  if (overloadParameterDeclarations.length === 1) {
    return [...overloadParameterDeclarations[0]];
  }

  const baseMethodArg: ParameterWithDescription = {
    name: "args",
    isRestParameter: true,
    description: "Includes all the parameters for this operation.",
    type: overloadParameterDeclarations
      .map(overloadParams => {
        return `[ ${overloadParams
          .map(p => (p.hasQuestionToken ? `${p.type}?` : p.type))
          .join(", ")} ]`;
      })
      .join(" | ")
  };

  return [baseMethodArg];
}

/**
 * Write operations implementation, extracted from OperationGroupDetails, to the generated file
 */
export function writeOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration,
  importedModels: Set<string>,
  parameters: ParameterDetails[],
  modelNames: Set<string>,
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
    const responseName = getResponseType(operation, importedModels, modelNames);
    const returnType = getReturnType(operation, importedModels, modelNames);

    const operationMethod = operationGroupClass.addMethod({
      name: normalizeName(operation.name, NameType.Property),
      parameters: baseMethodParameters,
      returnType,
      docs: [
        generateOperationJSDoc(baseMethodParameters, operation.description)
      ],
      isAsync: operation.isLRO
    });

    if (overloadParameterDeclarations.length === 1) {
      writeNoOverloadsOperationBody(
        operation,
        responseName,
        operationMethod,
        overloadParameterDeclarations[0],
        isInline
      );
      return;
    }

    for (const overload of overloadParameterDeclarations) {
      operationMethod.addOverload({
        parameters: overload,
        returnType,
        docs: [generateOperationJSDoc(overload, operation.description)]
      });
    }

    // This condition implies that the user can specify a contentType,
    // and this contentType can change how the request is serialized.
    writeMultiMediaTypeOperationBody(
      operationMethod,
      operation,
      overloadParameterDeclarations,
      responseName,
      isInline
    );
  });
}

function writeNoOverloadsOperationBody(
  operation: OperationDetails,
  responseName: string,
  operationMethod: MethodDeclaration,
  parameterDeclarations: ParameterWithDescription[],
  isInline: boolean
): void {
  const sendParams = parameterDeclarations
    .map(p => (p.name === "options" ? "options: operationOptions" : p.name))
    .join(",");

  const finalStateVia =
    operation.lroOptions && operation.lroOptions["final-state-via"];

  const operationSpecName = `${operation.name}OperationSpec`;

  const operationOptions = operation.isLRO
    ? `const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(options,
      ${finalStateVia ? `"${finalStateVia}"` : ""});`
    : `const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(options || {});`;

  operationMethod.addStatements(operationOptions);

  if (operation.isLRO) {
    writeLROOperationBody(
      sendParams,
      responseName,
      operationSpecName,
      operationMethod,
      finalStateVia,
      isInline
    );
  } else {
    operationMethod.addStatements(
      `return this${
        isInline ? "" : ".client"
      }.sendOperationRequest({${sendParams}${
        !!sendParams ? "," : ""
      }}, ${operationSpecName}) as Promise<${responseName}>`
    );
  }
}

function writeLROOperationBody(
  sendParams: string,
  responseName: string,
  operationSpecName: string,
  methodDeclaration: MethodDeclaration,
  finalStateVia?: string,
  isInline?: boolean
) {
  const finalStateStr = finalStateVia
    ? `finalStateVia: "${finalStateVia.toLowerCase()}"`
    : "";

  const operationBody = `
  const args: coreHttp.OperationArguments  = {${sendParams}};
  const sendOperation = (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) =>  this${
    isInline ? "" : ".client"
  }.sendOperationRequest(args, spec) as Promise<${responseName}>;
  const initialOperationResult = await sendOperation(args, ${operationSpecName});

  return new LROPoller({
    initialOperationArguments: args,
    initialOperationSpec: ${operationSpecName},
    initialOperationResult,
    sendOperation,
    ${finalStateStr}
  });
  `;

  methodDeclaration.setReturnType(`Promise<LROPoller<${responseName}>>`);
  methodDeclaration.addStatements(operationBody);
}

/**
 * Writes the body of an operation that supports multiple media types.
 * The body will perform checks based on the user-provided contentType
 * to determine which OperationSpec to use when sending the request.
 */
function writeMultiMediaTypeOperationBody(
  operationMethod: MethodDeclaration,
  operation: OperationDetails,
  overloadParameterDeclarations: ParameterWithDescription[][],
  responseName: string,
  isInline = false
): void {
  let statements = `
  let operationSpec: coreHttp.OperationSpec;
  let operationArguments: coreHttp.OperationArguments;
  `;
  // We need to use the contentType parameter to determine which spec to use.
  const conditionals: string[] = [];
  const requests = operation.requests;
  if (overloadParameterDeclarations.length !== requests.length) {
    throw new Error(
      `Expected ${requests.length} overloads, but found generated ${overloadParameterDeclarations.length} for ${operation.name}`
    );
  }

  // Since contentType is always added as a synthetic parameter by modelerfour, it should always
  // be in the same position for all overloads.
  let contentTypePosition: number = -1;
  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];
    const overloadParameters = overloadParameterDeclarations[i];
    const mediaType = request.mediaType!;
    contentTypePosition = overloadParameters.findIndex(param => {
      return param.isContentType;
    });
    const contentTypeValues = getContentTypeInfo(request);

    // Ensure that a contentType exists, otherwise we won't be able to determine which operation spec to use.
    if (
      contentTypePosition === -1 ||
      !contentTypeValues ||
      !contentTypeValues.length
    ) {
      throw new Error(
        `Encountered an operation media type that has unspecified values for the contentType for operation "${operation.fullName}".`
      );
    }

    const assignments = `
      operationSpec = ${operation.name}$${mediaType}OperationSpec
      operationArguments = {
        ${overloadParameters
          .map((param, index) => `${param.name}: args[${index}]`)
          .join(",")}
      };
    `;

    conditionals.push(
      `if (
        ${contentTypeValues
          .map(type => `args[${contentTypePosition}] === "${type}"`)
          .join(" || ")}
        ) {
          ${assignments}
      }`
    );
  }

  // Add an else clause that throws an error. This should never happen as long as a contentType was provided by the user.
  conditionals.push(`{
    throw new TypeError(\`"contentType" must be a valid value but instead was "\${args[${contentTypePosition}]}".\`);
  }`);

  statements += conditionals.join(" else ");

  if (!operation.isLRO) {
    statements += `return this${
      isInline ? "" : ".client"
    }.sendOperationRequest(operationArguments, operationSpec) as Promise<${responseName}>`;
  } else {
    const finalStateVia =
      operation.lroOptions && operation.lroOptions["final-state-via"];

    const finalStateStr = finalStateVia
      ? `finalStateVia: "${finalStateVia.toLowerCase()}"`
      : "";

    statements += `
    const sendOperation = (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) =>  this${
      isInline ? "" : ".client"
    }.sendOperationRequest(args, spec) as Promise<${responseName}>;
    const initialOperationResult = await sendOperation(operationArguments, operationSpec);

    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: operationSpec,
      initialOperationResult,
      sendOperation,
      ${finalStateStr}
    });
    `;
  }

  operationMethod.addStatements(statements);
}

function getContentTypeInfo(
  request: OperationRequestDetails
): string[] | undefined {
  const parameters = request.parameters ?? [];
  for (let i = 0; i < parameters.length; i++) {
    const parameter = parameters[i];
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
  importedModels: Set<string>,
  modelNames: Set<string>
) {
  const hasSuccessResponse = operation.responses.some(
    ({ isError, mappers }) =>
      !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
  );

  const responseName = hasSuccessResponse ? operation.typeDetails.typeName : "";

  if (responseName) {
    const typeName = getResponseTypeName(responseName, modelNames);
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

function hasMediaType(
  operationDetails: OperationDetails,
  mediaType: KnownMediaType
) {
  if (!operationDetails.requests) {
    return operationDetails.mediaTypes.has(mediaType);
  }

  return operationDetails.requests.some(r => r.mediaType === mediaType);
}

/**
 * Generates and inserts into the file the operation specs
 * for a given operation group
 */
export function addOperationSpecs(
  operationGroupDetails: OperationGroupDetails,
  file: SourceFile,
  parameters: ParameterDetails[],
  hasMappers: boolean
): void {
  const hasXml = operationGroupDetails.operations.some(operation =>
    hasMediaType(operation, KnownMediaType.Xml)
  );

  const hasNonXml = operationGroupDetails.operations.some(
    operation => !hasMediaType(operation, KnownMediaType.Xml)
  );

  file.addStatements("// Operation Specifications");

  if (hasXml) {
    writeSerializer(hasMappers, file, SerializerKind.Xml);
  }

  if (hasNonXml) {
    writeSerializer(hasMappers, file, SerializerKind.Json);
  }

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

enum SerializerKind {
  Json,
  Xml
}

function writeSerializer(
  hasMappers: boolean,
  file: SourceFile,
  kind: SerializerKind = SerializerKind.Json
) {
  const isXml = kind === SerializerKind.Xml;
  const mappers = hasMappers ? "Mappers" : "{}";
  const name = isXml ? "xmlSerializer" : "serializer";
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name,
        initializer: `new coreHttp.Serializer(${mappers}, /* isXml */ ${isXml});`
      }
    ]
  });
}

/**
 * Adds required imports at the top of the file
 */
function addImports(
  operationGroupDetails: OperationGroupDetails,
  operationGroupFile: SourceFile,
  clientDetails: ClientDetails
) {
  const { className, sourceFileName, mappers } = clientDetails;

  operationGroupFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  if (mappers.length) {
    operationGroupFile.addImportDeclaration({
      namespaceImport: "Mappers",
      moduleSpecifier: "../models/mappers"
    });
  }

  if (shouldImportParameters(clientDetails)) {
    operationGroupFile.addImportDeclaration({
      namespaceImport: "Parameters",
      moduleSpecifier: "../models/parameters"
    });
  }

  operationGroupFile.addImportDeclaration({
    namedImports: [className],
    moduleSpecifier: `../${sourceFileName}`
  });

  if (hasLROOperation(operationGroupDetails)) {
    operationGroupFile.addImportDeclaration({
      namedImports: ["LROPoller", "shouldDeserializeLRO"],
      moduleSpecifier: `../lro`
    });
  }
}

function hasLROOperation(operationGroupDetails: OperationGroupDetails) {
  return operationGroupDetails.operations.some(o => o.isLRO);
}
