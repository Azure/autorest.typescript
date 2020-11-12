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
  MethodDeclaration,
  CodeBlockWriter
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
import { Mapper, ParameterPath } from "@azure/core-http";
import { generateOperationJSDoc } from "./utils/docsUtils";
import { addTracingOperationImports } from "./utils/tracingUtils";

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
function writeSpec(spec: OperationSpecDetails, writer: CodeBlockWriter): void {
  const responses = buildResponses(spec);
  const requestBody = buildRequestBody(spec);
  const queryParams = buildParameters(spec, "queryParameters");
  const urlParams = buildParameters(spec, "urlParameters");
  const headerParams = buildParameters(spec, "headerParameters");
  const formDataParams = buildParameters(spec, "formDataParameters");
  const contentType = buildContentType(spec);
  const mediaType = buildMediaType(spec);

  const serializerName = spec.isXML
    ? "serializer: xmlSerializer"
    : "serializer";

  writer.block(() => {
    writer.write(`path: "${spec.path}",`);
    writer.write(`httpMethod: "${spec.httpMethod}",`);
    writer.write(`responses: { ${responses.join(", ")} },`);

    if (typeof requestBody === "string") {
      writer.write(requestBody);
    } else {
      const mapper =
        typeof requestBody.mapper === "string"
          ? `Mappers.${requestBody.mapper}`
          : `${JSON.stringify(requestBody.mapper)}`;

      writer.write(
        `requestBody: { parameterPath: ${JSON.stringify(
          requestBody.parameterPath
        )}, mapper: ${mapper}}, `
      );
    }

    if (formDataParams) {
      writer.write(formDataParams);
      writer.write(", ");
    }

    if (queryParams) {
      writer.write(queryParams);
      writer.write(", ");
    }

    if (urlParams) {
      writer.write(urlParams);
      writer.write(", ");
    }

    if (headerParams) {
      writer.write(headerParams);
      writer.write(", ");
    }

    if (spec.isXML) {
      writer.write("isXML: true");
      writer.write(", ");
    }

    if (contentType) {
      writer.write(contentType);
      writer.write(", ");
    }

    if (mediaType) {
      writer.write(mediaType);
      writer.write(", ");
    }

    if (serializerName) {
      writer.write(serializerName);
      writer.write(", ");
    }
  });
}

function buildMediaType({ requestBody }: OperationSpecDetails) {
  let targetMediaType: string | undefined = "";

  // requestBody may be an array of parameters, this is the scenario
  // where the body parameter has been flattened.
  if (Array.isArray(requestBody)) {
    // We just need to take the first know targetMediaType as all others would be the same
    targetMediaType = requestBody[0]?.targetMediaType;
  } else {
    targetMediaType = requestBody?.targetMediaType;
  }

  if (targetMediaType) {
    return `mediaType: '${targetMediaType}'`;
  }

  return "";
}

function buildContentType({ requestBody, isXML }: OperationSpecDetails) {
  return requestBody && isXML
    ? "contentType: 'application/xml; charset=utf-8'"
    : "";
}

/**
 * Internal type that represents the shape of a RequestBody which contains a parameter path and a mapper
 */
type RequestBody = {
  parameterPath: {
    [propertyName: string]: ParameterPath;
  };
  mapper: string | Mapper;
};

/**
 * This function transforms the requestBody of OperationSpecDetails into its string representation
 * to insert in generated files.
 * Whenever the request body parameter has been flattened this function will return the ResponseBody as a complex
 * object.
 */
function buildRequestBody({
  requestBody,
  httpMethod
}: OperationSpecDetails): string | RequestBody {
  if (!requestBody || httpMethod === "GET") {
    return "";
  }

  // No flattened parameters so we can just return the simple representation
  if (isSingleRequestBody(requestBody)) {
    return `requestBody: Parameters.${requestBody.nameRef},`;
  }

  // Request body has been flattened so we need to represent it as a complex RequestBody
  // object in which we'll describe the parameter name and where to find it in the operation parameters

  // First get the mapper, this will be the mapper for the parameter before flattening
  const mapper = requestBody[0].mapper;

  // Generate the request body from the parameters
  const parameters = requestBody.reduce((acc, curr) => {
    // We ignore any Grouped or Flattened parameters
    if (curr.schemaType === SchemaType.Group || curr.parameter.flattened) {
      return acc;
    }

    const name = curr.name;

    // Figure out how to find the parameter, if the parameter belongs to a group we need to access the group object so the
    // path would be ["groupName", "parameterName"] to tell the serialized to get it from groupName.parameterName.
    // If it is a regular parameter the path would be its name.
    const sourcePath = curr.parameter.groupedBy
      ? [getLanguageMetadata(curr.parameter.groupedBy.language).name, name]
      : [name];

    const isRequired = curr.required || curr.parameter.groupedBy?.required;

    let parameterPath: ParameterPath;

    // If the parameter is optional it will be put in the "options" parameter bag, so add "options" to the path.
    if (isRequired) {
      parameterPath = sourcePath;
    } else {
      parameterPath = ["options", ...sourcePath];
    }

    return {
      ...acc,
      [name]: parameterPath
    };
  }, {} as { [propertyName: string]: ParameterPath });

  return {
    parameterPath: parameters,
    mapper
  };
}

function isSingleRequestBody(
  requestBody: ParameterDetails | ParameterDetails[]
): requestBody is ParameterDetails {
  return !Array.isArray(requestBody);
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

  return `${parameterGroupName}: [${parameters.join()}]`;
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
    const { bodyMapper, headersMapper, isError } = responses[code];
    const bodyMapperString = buildMapper(bodyMapper, "bodyMapper");
    const headersMapperString = buildMapper(headersMapper, "headersMapper");
    const isErrorMapperString = isError ? `isError: ${isError}` : "";
    parsedResponses.push(`${code}: {
        ${bodyMapperString}${headersMapperString}${isErrorMapperString}
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
    allModelsNames,
    clientDetails,
    false /** isInline */
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
      const uniqueTypeName =
        operationGroupClass.getName() === type ? `${type}Model` : type;
      const typeName = param.nullable
        ? uniqueTypeName + " | null"
        : uniqueTypeName;

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
  modelNames: Set<string>,
  clientDetails: ClientDetails,
  isInline = false
) {
  operationGroupDetails.operations.forEach(operation => {
    const {
      baseMethodParameters,
      overloadParameterDeclarations
    } = getOperationParameterSignatures(
      operation,
      clientDetails.parameters,
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
      isAsync: operation.isLRO || clientDetails.enableTracing
    });

    addOperationOverloads(
      operationMethod,
      operation,
      overloadParameterDeclarations,
      returnType
    );

    writeOperationBody(
      operationMethod,
      operation,
      overloadParameterDeclarations,
      clientDetails,
      responseName,
      isInline
    );
  });
}

/**
 * Writes the operation body
 */
function writeOperationBody(
  generatedOperation: MethodDeclaration,
  operationDetails: OperationDetails,
  overloadDeclarations: OverloadDeclarations,
  clientDetails: ClientDetails,
  responseName: string,
  isInline: boolean
): void {
  if (overloadDeclarations.length === 1) {
    // No overloads
    writeNoOverloadsOperationBody(
      operationDetails,
      responseName,
      generatedOperation,
      overloadDeclarations[0],
      clientDetails,
      isInline
    );
  } else {
    // This condition implies that the user can specify a contentType,
    // and this contentType can change how the request is serialized.
    writeMultiMediaTypeOperationBody(
      generatedOperation,
      operationDetails,
      overloadDeclarations,
      responseName,
      clientDetails,
      isInline
    );
  }
}

type OverloadDeclarations = OptionalKind<
  ParameterDeclarationStructure & {
    description: string;
    isContentType?: boolean | undefined;
  }
>[][];

/**
 * Adds any required overloads to a TSMorph method
 * @param generatedOperation TsMorph method
 * @param operationDetails  Operation Details extracted from the code model
 * @param overloadDeclarations Available overloads
 * @param returnType Return type for the generated operation
 */
function addOperationOverloads(
  generatedOperation: MethodDeclaration,
  operationDetails: OperationDetails,
  overloadDeclarations: OverloadDeclarations,
  returnType: string
): void {
  if (overloadDeclarations.length === 1) {
    // We have a single method definition so no need for overloads
    return;
  }

  for (const overload of overloadDeclarations) {
    generatedOperation.addOverload({
      parameters: overload,
      returnType,
      docs: [generateOperationJSDoc(overload, operationDetails.description)]
    });
  }
}

function writeNoOverloadsOperationBody(
  operation: OperationDetails,
  responseName: string,
  operationMethod: MethodDeclaration,
  parameterDeclarations: ParameterWithDescription[],
  clientDetails: ClientDetails,
  isInline: boolean
): void {
  const finalStateVia =
    operation.lroOptions && operation.lroOptions["final-state-via"];

  const operationSpecName = `${operation.name}OperationSpec`;

  const toOptionsBase = operation.isLRO
    ? `this.getOperationOptions(options, "${finalStateVia}")`
    : `coreHttp.operationOptionsToRequestOptionsBase(options || {})`;

  let options = clientDetails.enableTracing ? "updatedOptions" : toOptionsBase;

  const sendParams = parameterDeclarations
    .map(p => (p.name === "options" ? `options: ${options}` : p.name))
    .join(",");

  if (clientDetails.enableTracing) {
    const operationName = operationMethod.getName();
    operationMethod.addStatements([
      `const { span, updatedOptions } = createSpan("${clientDetails.className}-${operationName}", ${toOptionsBase});`
    ]);
  }

  operationMethod.addStatements(
    `const operationArguments: coreHttp.OperationArguments = {${sendParams}}`
  );

  if (operation.isLRO) {
    writeLROOperationBody(
      "operationArguments",
      responseName,
      operationSpecName,
      operationMethod,
      finalStateVia,
      isInline
    );
  } else {
    writeSendOperationRequest(
      responseName,
      operationMethod,
      operationSpecName,
      clientDetails,
      isInline
    );
  }
}

function writeSendOperationRequest(
  responseName: string,
  operationMethod: MethodDeclaration,
  operationSpecName: string,
  clientDetails: ClientDetails,
  isInline = false
) {
  const client = isInline ? "" : ".client";
  const sendRequestStatement = `this${client}.sendOperationRequest(operationArguments, ${operationSpecName})`;
  if (!clientDetails.enableTracing) {
    // If tracing is not enabled just return
    operationMethod.addStatements(
      `return ${sendRequestStatement} as Promise<${responseName}>`
    );
  } else {
    // When tracing is enabled we want to report success and failures through OpenTelemetry
    // so we create a span and mark it as succeeded or failed
    operationMethod.addStatements(
      `try {
        const result = await ${sendRequestStatement}
        return result as ${responseName};
      } catch(error) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: error.message
      });
        throw error;
      } finally {
        span.end();
      }`
    );
  }
}

function writeLROOperationBody(
  operationParamsName: string,
  responseName: string,
  operationSpecName: string,
  methodDeclaration: MethodDeclaration,
  finalStateVia?: string,
  isInline?: boolean
) {
  const client = isInline ? "" : ".client";
  const sendRequestStatement = `this${client}.sendOperationRequest(args, spec)`;

  const finalStateStr = finalStateVia
    ? `finalStateVia: "${finalStateVia.toLowerCase()}"`
    : "";

  methodDeclaration.addStatements([
    `const sendOperation = (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) => ${sendRequestStatement} as Promise<${responseName}>;`,
    `const initialOperationResult = await sendOperation(${operationParamsName}, ${operationSpecName});`,
    `return new LROPoller({
      initialOperationArguments: ${operationParamsName},
      initialOperationSpec: ${operationSpecName},
      initialOperationResult,
      sendOperation,
      ${finalStateStr}
    });`
  ]);

  methodDeclaration.setReturnType(`Promise<LROPoller<${responseName}>>`);
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
  clientDetails: ClientDetails,
  isInline = false
): void {
  operationMethod.addStatements([
    "let operationSpec: coreHttp.OperationSpec;",
    "let operationArguments: coreHttp.OperationArguments;"
  ]);

  // We need to use the contentType parameter to determine which spec to use.
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
    const contentTypeValues = getContentTypeInfo(request);

    contentTypePosition = overloadParameters.findIndex(param => {
      return param.isContentType;
    });

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

    // Get parameters for current overload
    const params = overloadParameters
      .map((param, index) => `${param.name}: args[${index}]`)
      .join(",");

    // Get conditional to handle the current oveload
    const conditional = contentTypeValues
      .map(type => `args[${contentTypePosition}] === "${type}"`)
      .join(" || ");

    // Get the string for current overload assignments of operation spec and arguments
    const assignments = [
      `operationSpec = ${operation.name}$${mediaType}OperationSpec`,
      `operationArguments = {${params}};`
    ].join("\n");

    const elseif = i === 0 ? "if" : "else if";

    // Add conditional statement to handle the current overload
    operationMethod.addStatements([
      `${elseif} (${conditional}) {
        ${assignments}
       }`
    ]);
  }

  // Add an else clause that throws an error. This should never happen as long as a contentType was provided by the user.
  operationMethod.addStatements([
    `else {
    throw new TypeError(\`"contentType" must be a valid value but instead was "\${args[${contentTypePosition}]}".\`);
  }`
  ]);

  const toOptionsBase = `coreHttp.operationOptionsToRequestOptionsBase(operationArguments.options || {})`;

  if (clientDetails.enableTracing) {
    const operationName = operationMethod.getName();
    operationMethod.addStatements([
      `const { span, updatedOptions } = createSpan("${clientDetails.className}-${operationName}", ${toOptionsBase});`,
      `operationArguments.options = updatedOptions;`
    ]);
  } else {
    operationMethod.addStatements([
      `operationArguments.options = ${toOptionsBase};`
    ]);
  }

  if (!operation.isLRO) {
    writeSendOperationRequest(
      responseName,
      operationMethod,
      "operationSpec",
      clientDetails,
      isInline
    );
  } else {
    const finalStateVia =
      operation.lroOptions && operation.lroOptions["final-state-via"];

    writeLROOperationBody(
      "operationArguments",
      responseName,
      "operationSpec",
      operationMethod,
      finalStateVia,
      isInline
    );
  }
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

function hasMediaType(
  operationDetails: OperationDetails,
  mediaType: KnownMediaType
) {
  if (!operationDetails.requests.some(r => !!r.mediaType)) {
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

  const hasJson = operationGroupDetails.operations.some(operation =>
    hasMediaType(operation, KnownMediaType.Json)
  );

  const needsDefault = !hasXml && !hasJson;

  file.addStatements("// Operation Specifications");

  if (hasXml) {
    writeSerializer(hasMappers, file, SerializerKind.Xml);
  }

  if (hasJson || needsDefault) {
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
            initializer: writer => writeSpec(operationSpec, writer)
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

  addTracingOperationImports(clientDetails, operationGroupFile);

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
