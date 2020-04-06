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
import { shouldImportParameters } from "./utils/importUtils";

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

function writeGetOperationOptions(operationGroupClass: ClassDeclaration) {
  operationGroupClass.addMethod({
    scope: Scope.Private,
    name: "getOperationOptions<TOptions extends coreHttp.OperationOptions>",
    parameters: [
      { name: "options", type: "TOptions | undefined" },
      { name: "requestMethod", type: "coreHttp.HttpMethods" },
      { name: "isLRO", type: "boolean" }
    ],
    returnType: `coreHttp.RequestOptionsBase`,
    statements: `
    const operationOptions: coreHttp.OperationOptions = options || {};
    if (isLRO) {
      operationOptions.requestOptions = {
        ...operationOptions.requestOptions,
        shouldDeserialize: shouldDeserializeLRO({ requestMethod }),
      };
    }

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

  writeGetOperationOptions(operationGroupClass);

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
        returnType: `Promise<${responseName}>`,
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

  const operationSpecName = `${operation.name}OperationSpec`;

  const operationOptions = `
  const operationOptions: coreHttp.OperationArguments = this.getOperationOptions(
    options,
    ${operationSpecName}.httpMethod,
    ${operation.isLRO}
  );`;

  operationMethod.addStatements(operationOptions);

  if (operation.isLRO) {
    writeLROOperationBody(
      sendParams,
      responseName,
      operationSpecName,
      operationMethod
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
  methodDeclaration: MethodDeclaration
) {
  const operationBody = `
  const args = {${sendParams}};
  const sendOperation = (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) =>  this.client.sendOperationRequest(args, spec) as Promise<${responseName}>;
  const initialOperationResult = await sendOperation(args, ${operationSpecName});

  return new LROPoller({
    initialOperationArguments: args,
    initialOperationSpec: ${operationSpecName},
    initialOperationResult,
    sendOperation
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
  let contentTypePosition: number = 0;
  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];
    const overloadParameters = overloadParameterDeclarations[i];
    const mediaType = request.mediaType!;
    const contentTypeInfo = getContentTypeInfo(request);

    // Ensure that a contentType exists, otherwise we won't be able to determine which operation spec to use.
    if (!contentTypeInfo) {
      throw new Error(
        `Encountered an operation media type that has unspecified values for the contentType for operation "${operation.fullName}".`
      );
    }

    contentTypePosition = contentTypeInfo.location;

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
        ${contentTypeInfo.values
          .map(type => `args[${contentTypeInfo.location}] === "${type}"`)
          .join(" || ")}
        ) {
          ${assignments}
      }`
    );
  }

  // Add an else clause that throws an error. This should never happen as long as a contentType was provided by the user.
  conditionals.push(`{
    throw new TypeError(\`"contentType" must be a valid value but instead was "\${args[0]}".\`);
  }`);

  statements += conditionals.join(" else ");

  if (!operation.isLRO) {
    statements += `return this${
      isInline ? "" : ".client"
    }.sendOperationRequest(operationArguments, operationSpec) as Promise<${responseName}>`;
  } else {
    `
    const sendOperation = (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) =>  this.client.sendOperationRequest(args, spec) as Promise<${responseName}>;
    const initialOperationResult = await sendOperation(operationArguments, operationSpec);

    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: operationSpec
      initialOperationResult,
      sendOperation
    });
    `;
  }

  operationMethod.addStatements(statements);
}

function getContentTypeInfo(
  request: OperationRequestDetails
): { location: number; values: string[] } | undefined {
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
      return {
        location: i,
        values: (schema as ChoiceSchema | SealedChoiceSchema).choices.map(
          c => c.value as string
        )
      };
    } else if (
      schema.type === SchemaType.Constant &&
      paramLowerSerializedName === "content-type" &&
      parameterInHeader
    ) {
      return {
        location: i,
        values: [(schema as ConstantSchema).value.value]
      };
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
  parameters: ParameterDetails[],
  hasMappers: boolean
): void {
  const isXml = operationGroupDetails.operations.some(o =>
    o.mediaTypes.has(KnownMediaType.Xml)
  );
  const mappers = hasMappers ? "Mappers" : "{}";
  file.addStatements("// Operation Specifications");
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "serializer",
        initializer: `new coreHttp.Serializer(${mappers}, /* isXml */ ${isXml});`
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
