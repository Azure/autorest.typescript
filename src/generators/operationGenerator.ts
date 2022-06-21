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
import { ParameterDetails } from "../models/parameterDetails";
import { getOperationParameterSignatures } from "./utils/parameterUtils";
import { KnownMediaType } from "@azure-tools/codegen";
import {
  SchemaType,
  ParameterLocation,
  ChoiceSchema,
  SealedChoiceSchema,
  ConstantSchema
} from "@autorest/codemodel";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { shouldImportParameters } from "./utils/importUtils";
import {
  getAllModelsNames,
  getOperationResponseType
} from "./utils/responseTypeUtils";
import { Mapper, ParameterPath } from "@azure/core-http";
import { generateOperationJSDoc } from "./utils/docsUtils";
import { addTracingOperationImports } from "./utils/tracingUtils";
import {
  addPagingEsNextRef,
  addPagingImports,
  preparePageableOperations,
  writeAsyncIterators
} from "./utils/pagingOperations";
import { calculateMethodName } from "./utils/operationsUtils";
import { getAutorestOptions } from "../autorestSession";

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
  const { srcPath } = getAutorestOptions();
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
      `${srcPath}/operations/index.ts`,
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
  const { srcPath } = getAutorestOptions();
  const name = normalizeName(operationGroupDetails.name, NameType.File);
  const hasMappers = !!clientDetails.mappers.length;
  const operationGroupFile = project.createSourceFile(
    `${srcPath}/operations/${name}.ts`,
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

  operationGroupFile.fixUnusedIdentifiers();
}

export function writeGetOperationOptions(
  operationGroupClass: ClassDeclaration
) {
  const { useCoreV2 } = getAutorestOptions();
  operationGroupClass.addMethod({
    scope: Scope.Private,
    name: !useCoreV2
      ? "getOperationOptions<TOptions extends coreHttp.OperationOptions>"
      : "getOperationOptions<TOptions extends coreClient.OperationOptions>",
    parameters: [
      { name: "options", type: "TOptions | undefined" },
      {
        name: "lroResourceLocationConfig",
        type: "string",
        hasQuestionToken: true
      }
    ],
    returnType: !useCoreV2
      ? `coreHttp.RequestOptionsBase`
      : `coreClient.OperationOptions`,
    statements: !useCoreV2
      ? `
    const operationOptions: coreHttp.OperationOptions = options || {};
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
    `
      : `
    const operationOptions: coreClient.OperationOptions = options || {};
    return operationOptions;`
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
  const mediaType = buildMediaType(spec);

  // The targetMediaType should be used to determine if we want to
  // build content type. Else, we will end up with mediaType json
  // and content type xml.
  let targetMediaType: string | undefined = undefined;
  if (Array.isArray(spec.requestBody)) {
    targetMediaType = spec.requestBody[0]?.targetMediaType;
  } else {
    targetMediaType = spec.requestBody?.targetMediaType;
  }

  const contentType =
    targetMediaType !== KnownMediaType.Json
      ? buildContentType(spec)
      : undefined;

  const serializerName = spec.isXML
    ? targetMediaType !== KnownMediaType.Json
      ? "serializer: xmlSerializer"
      : "serializer"
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

      if (requestBody.required) {
        writer.write(
          `requestBody: { parameterPath: ${JSON.stringify(
            requestBody.parameterPath
          )}, mapper: {...${mapper}, required: true}},`
        );
      } else {
        writer.write(
          `requestBody: { parameterPath: ${JSON.stringify(
            requestBody.parameterPath
          )}, mapper: ${mapper}}, `
        );
      }
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

    if (spec.isXML && targetMediaType != KnownMediaType.Json) {
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
  required: boolean;
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
  let required: boolean = requestBody[0].required ?? false;

  // If one of the requestbody in the spec has required set to true,
  // we do not want to look into others.
  if (!required) {
    for (const rb of requestBody) {
      required = rb.required
        ? rb.required
        : rb.parameter.groupedBy && rb.parameter.groupedBy.required
        ? rb.parameter.groupedBy.required
        : required;

      if (required) break;
    }
  }

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
    mapper,
    required
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

  let mapperString = "";
  if (typeof mapper === "string") {
    // When mapper is a reference (string) we don't need to stringify the object
    mapperString = mapper;
  } else {
    const { constraints, ...restMapper } = mapper;
    mapperString = JSON.stringify(restMapper);
  }

  return `${mapperName}: ${mapperString},`;
}

function getReturnType(
  operation: OperationDetails,
  importedModels: Set<string>,
  modelNames: Set<string>
): string {
  const responseName = getOperationResponseType(
    operation,
    importedModels,
    modelNames
  );

  return operation.isLro
    ? `Promise<PollerLike<PollOperationState<${responseName}>,${responseName}>>`
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
    name: `${className}Impl`,
    docs: [`Class containing ${className} operations.`],
    isExported: true,
    implements: [`${className}`]
  });
  operationGroupClass.addProperty({
    name: "client",
    isReadonly: true,
    scope: Scope.Private,
    type: `${clientDetails.className}`
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
        type: `${clientDetails.className}`
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

  if (hasLroOperation(operationGroupDetails)) {
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
  const { tracingInfo } = getAutorestOptions();

  preparePageableOperations(operationGroupDetails);
  writeAsyncIterators(
    operationGroupDetails,
    clientDetails,
    operationGroupClass,
    importedModels
  );
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
    const responseName = getOperationResponseType(
      operation,
      importedModels,
      modelNames
    );
    const returnType = getReturnType(operation, importedModels, modelNames);

    const operationMethod = operationGroupClass.addMethod({
      name: calculateMethodName(operation),
      parameters: baseMethodParameters,
      scope: operation.scope,
      returnType,
      docs: [
        generateOperationJSDoc(baseMethodParameters, operation.description)
      ],
      isAsync: operation.isLro || Boolean(tracingInfo)
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

    /**
     * Create a simple method that blocks and waits for the result
     */
    if (operation.isLro && operation.pagination === undefined) {
      const responseName = getOperationResponseType(
        operation,
        importedModels,
        modelNames
      );
      const methodName = calculateMethodName(operation);
      const operationMethod = operationGroupClass.addMethod({
        name: `${methodName}AndWait`,
        parameters: baseMethodParameters,
        scope: operation.scope,
        returnType: `Promise<${responseName}>`,
        docs: [
          generateOperationJSDoc(baseMethodParameters, operation.description)
        ],
        isAsync: true
      });
      if (overloadParameterDeclarations.length > 1) {
        // Since contentType is always added as a synthetic parameter by modelerfour, it should always
        // be in the same position for all overloads.
        let contentTypePosition: number = -1;
        for (let i = 0; i < overloadParameterDeclarations.length; i++) {
          const overloadParameters = overloadParameterDeclarations[i];

          contentTypePosition = overloadParameters.findIndex(
            (param: ParameterWithDescription) => {
              return param.isContentType;
            }
          );

          // Get conditional to handle the current overload
          const conditional = getContentTypeInfo(operation.requests[i])
            ?.map(type => `args[${contentTypePosition}] === "${type}"`)
            .join(" || ");

          const assignments = `const poller = await this.${methodName}(...args);
          return poller.pollUntilDone();`;

          const elseif = i === 0 ? "if" : "else if";

          // Add conditional statement to handle the current overload
          operationMethod.addStatements([
            `${elseif} (${conditional}) {
        ${assignments}
       }`
          ]);
        }
        operationMethod.addStatements(`throw new Error("Impossible case");`);
      } else {
        operationMethod.addStatements(
          `const poller = await this.${methodName}(${baseMethodParameters
            .map(x => x.name)
            .join(",")});
            return poller.pollUntilDone();
            `
        );
      }
    }
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

/**
 * Convert OperationOptions to RequestBaseOptions
 * @param options the name of the options parameter.
 * @param isLro whether the operation is an Lro.
 */
function compileOperationOptionsToRequestOptionsBase(
  options: string,
  isLro: boolean,
  lroResourceLocationConfig?: string
): string {
  const { useCoreV2 } = getAutorestOptions();
  // In Lro we have a couple extra properties to add that's why we use
  // the private getOperationOptions function instead of the one in core-http
  return isLro
    ? `this.getOperationOptions(${options}${
        lroResourceLocationConfig === undefined
          ? ""
          : `, "${lroResourceLocationConfig}"`
      })`
    : !useCoreV2
    ? `coreHttp.operationOptionsToRequestOptionsBase(options || {})`
    : `options || {}`;
}

function writeNoOverloadsOperationBody(
  operation: OperationDetails,
  responseName: string,
  operationMethod: MethodDeclaration,
  parameterDeclarations: ParameterWithDescription[],
  clientDetails: ClientDetails,
  isInline: boolean
): void {
  const { useCoreV2, tracingInfo } = getAutorestOptions();
  const lroResourceLocationConfig =
    operation.lroOptions && operation.lroOptions["final-state-via"];

  const operationSpecName = `${operation.name}OperationSpec`;

  const vanillaOptionsName = "options";
  let options = vanillaOptionsName;

  // Options from createSpan should be used as operation options, updating
  options = compileOperationOptionsToRequestOptionsBase(
    vanillaOptionsName,
    operation.isLro,
    lroResourceLocationConfig
  );

  const sendParams = parameterDeclarations
    .map(p =>
      p.name === "options"
        ? !useCoreV2
          ? `options: ${options}`
          : `options`
        : p.name
    )
    .join(",");

  // Create an object to hold all the arguments for send request
  if (!useCoreV2) {
    operationMethod.addStatements(
      `const operationArguments: coreHttp.OperationArguments = {${sendParams}}`
    );
  }

  if (operation.isLro) {
    if (!useCoreV2) {
      writeLroOperationBody(
        clientDetails,
        "operationArguments",
        responseName,
        operationSpecName,
        operationMethod,
        lroResourceLocationConfig,
        isInline,
        !!tracingInfo
      );
    } else {
      writeLroOperationBody(
        clientDetails,
        `{${sendParams}}`,
        responseName,
        operationSpecName,
        operationMethod,
        lroResourceLocationConfig,
        isInline,
        !!tracingInfo
      );
    }
  } else {
    writeSendOperationRequest(
      responseName,
      operationMethod,
      operationSpecName,
      clientDetails,
      isInline,
      `{${sendParams}}`
    );
  }
}

// a statement that returns an options bag variable
interface OptionsStatement {
  statement: string;
  outputOptionsVarName: string;
}

function writeSendOperationRequest(
  responseName: string,
  operationMethod: MethodDeclaration,
  operationSpecName: string,
  clientDetails: ClientDetails,
  isInline = false,
  sendParams: string
) {
  const { useCoreV2, tracingInfo } = getAutorestOptions();
  const operationName = operationMethod.getName();
  const client = isInline ? "" : ".client";
  const sendRequestStatement = !useCoreV2
    ? `this${client}.sendOperationRequest(operationArguments, ${operationSpecName})`
    : `this${client}.sendOperationRequest(${sendParams}, ${operationSpecName})`;

  // When tracing is enabled we want to report success and failures through OpenTelemetry
  // so we create a span and mark it as succeeded or failed
  operationMethod.addStatements(
    getTracingClientWithSpanStatement(
      sendRequestStatement,
      responseName,
      !!tracingInfo,
      `${clientDetails.className}.${operationName}`
    )
  );
}

function getSpanStatusCode() {
  return "coreTracing.SpanStatusCode.UNSET";
}

function getTracingClientWithSpanStatement(
  sendRequestStatement: string,
  responseName: string,
  isTracingEnabled: boolean,
  spanName: string
) {
  const { useCoreV2 } = getAutorestOptions();
  if (isTracingEnabled) {
    return `
    return tracingClient.withSpan("${spanName}", options ?? {}, async options => {
      return ${sendRequestStatement} as Promise<${responseName}>;
    });`;
  } else {
    return !useCoreV2
      ? `return ${sendRequestStatement} as Promise<${responseName}>`
      : `return ${sendRequestStatement}`;
  }
}

function writeLroOperationBody(
  clientDetails: ClientDetails,
  operationParamsName: string,
  responseName: string,
  operationSpecName: string,
  methodDeclaration: MethodDeclaration,
  lroResourceLocationConfig?: string,
  isInline?: boolean,
  isTracingEnabled = false
) {
  const { useCoreV2 } = getAutorestOptions();
  const spanName = `${clientDetails.className}.${methodDeclaration.getName()}`;
  const client = isInline ? "" : ".client";
  const sendRequestStatement = `this${client}.sendOperationRequest(args, spec)`;
  const sendOperationStatement = !useCoreV2
    ? `const directSendOperation = async (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec): Promise<${responseName}> => {
      ${getTracingClientWithSpanStatement(
        sendRequestStatement,
        responseName,
        isTracingEnabled,
        spanName
      )}
      };
      const sendOperation = async (args: coreHttp.OperationArguments, spec: coreHttp.OperationSpec) => {
        const response = await directSendOperation(args, spec);
        return { flatResponse:response, rawResponse: {
          statusCode: response._response.status,
          body: (response._response as any)?.parsedBody ?? {},
          headers: response._response.headers.rawHeaders()
        }};
    }`
    : `const directSendOperation = async (args: coreClient.OperationArguments, spec: coreClient.OperationSpec): Promise<${responseName}> => {
    ${getTracingClientWithSpanStatement(
      sendRequestStatement,
      responseName,
      isTracingEnabled,
      spanName
    )}
    };
    const sendOperation = async (args: coreClient.OperationArguments, spec: coreClient.OperationSpec) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options, onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: {
        statusCode: currentRawResponse!.status,
        body: currentRawResponse!.parsedBody,
        headers: currentRawResponse!.headers.toJSON()
      }};
  }`;
  methodDeclaration.addStatements([
    sendOperationStatement,
    `const lro = new LroImpl(sendOperation,${operationParamsName},
      ${operationSpecName})`,
    `const poller = new LroEngine(lro,{ resumeFrom: options?.resumeFrom, intervalInMs: options?.updateIntervalInMs${
      lroResourceLocationConfig
        ? `, lroResourceLocationConfig: "${lroResourceLocationConfig.toLowerCase()}"`
        : ""
    } });`,
    "await poller.poll();",
    "return poller;"
  ]);

  methodDeclaration.setReturnType(
    `Promise<PollerLike<PollOperationState<${responseName}>,${responseName}>>`
  );
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
  const { useCoreV2, tracingInfo } = getAutorestOptions();
  const coreImport = !useCoreV2 ? "coreHttp" : "coreClient";

  operationMethod.addStatements([
    `let operationSpec: ${coreImport}.OperationSpec;`,
    `let operationArguments: ${coreImport}.OperationArguments;`
  ]);

  // We need to use the contentType parameter to determine which spec to use.
  const requests = operation.requests;
  if (overloadParameterDeclarations.length !== requests.length) {
    throw new Error(
      `Expected ${requests.length} overloads, but found generated ${overloadParameterDeclarations.length} for ${operation.name}`
    );
  }

  const optionsVarName = "options";
  operationMethod.addStatements([`let ${optionsVarName};`]);

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

    const optionsIndex = overloadParameters.findIndex(
      param => param.name === "options"
    );

    // Get conditional to handle the current oveload
    const conditional = contentTypeValues
      .map(type => `args[${contentTypePosition}] === "${type}"`)
      .join(" || ");

    // Get the string for current overload assignments of operation spec and arguments
    const assignments = [
      `operationSpec = ${operation.name}$${mediaType}OperationSpec`,
      `operationArguments = {${params}};`,
      `${optionsVarName} = args[${optionsIndex}];`
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

  const lroResourceLocationConfig =
    operation.lroOptions && operation.lroOptions["final-state-via"];

  operationMethod.addStatements([
    `operationArguments.options = ${compileOperationOptionsToRequestOptionsBase(
      optionsVarName,
      operation.isLro,
      lroResourceLocationConfig
    )};`
  ]);

  if (!operation.isLro) {
    writeSendOperationRequest(
      responseName,
      operationMethod,
      "operationSpec",
      clientDetails,
      isInline,
      "operationArguments"
    );
  } else {
    writeLroOperationBody(
      clientDetails,
      "operationArguments",
      responseName,
      "operationSpec",
      operationMethod,
      lroResourceLocationConfig,
      isInline,
      !!tracingInfo
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

function hasMediaType(
  operationDetails: OperationDetails,
  mediaType: KnownMediaType
) {
  return operationDetails.mediaTypes.has(mediaType);
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
  const { useCoreV2 } = getAutorestOptions();
  const hasXml = operationGroupDetails.operations.some(operation =>
    hasMediaType(operation, KnownMediaType.Xml)
  );

  const hasNonXml = operationGroupDetails.operations.some(
    operation =>
      hasMediaType(operation, KnownMediaType.Json) ||
      hasMediaType(operation, KnownMediaType.Form) ||
      hasMediaType(operation, KnownMediaType.Multipart) ||
      hasMediaType(operation, KnownMediaType.Text) ||
      hasMediaType(operation, KnownMediaType.Unknown)
  );

  const needsDefault = !hasXml && !hasNonXml;

  file.addStatements("// Operation Specifications");

  if (hasXml) {
    writeSerializer(hasMappers, file, SerializerKind.Xml);
  }

  if (hasNonXml || needsDefault) {
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
            type: !useCoreV2
              ? "coreHttp.OperationSpec"
              : "coreClient.OperationSpec",
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
  const { useCoreV2 } = getAutorestOptions();

  const isXml = kind === SerializerKind.Xml;
  const mappers = hasMappers ? "Mappers" : "{}";
  const name = isXml ? "xmlSerializer" : "serializer";
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name,
        initializer: !useCoreV2
          ? `new coreHttp.Serializer(${mappers}, /* isXml */ ${isXml});`
          : `coreClient.createSerializer(${mappers}, /* isXml */ ${isXml});`
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
  const { useCoreV2 } = getAutorestOptions();

  const { className, mappers } = clientDetails;
  addPagingEsNextRef(operationGroupDetails.operations, operationGroupFile);
  addTracingOperationImports(operationGroupFile);
  addPagingImports(operationGroupDetails.operations, operationGroupFile);

  const operationGroupInterfaceName = normalizeName(
    operationGroupDetails.name,
    NameType.OperationGroup,
    true /** shouldGuard */
  );

  operationGroupFile.addImportDeclaration({
    namedImports: [`${operationGroupInterfaceName}`],
    moduleSpecifier: "../operationsInterfaces"
  });

  if (!useCoreV2) {
    operationGroupFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });
    operationGroupFile.addImportDeclaration({
      namespaceImport: "coreTracing",
      moduleSpecifier: "@azure/core-tracing"
    });
  } else {
    operationGroupFile.addImportDeclaration({
      namespaceImport: "coreClient",
      moduleSpecifier: "@azure/core-client"
    });
    operationGroupFile.addImportDeclaration({
      namespaceImport: "coreRestPipeline",
      moduleSpecifier: "@azure/core-rest-pipeline"
    });
    operationGroupFile.addImportDeclaration({
      namespaceImport: "coreTracing",
      moduleSpecifier: "@azure/core-tracing"
    });
  }

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

  const clientClassName = `${className}`;

  const clientFileName = normalizeName(clientClassName, NameType.File);

  operationGroupFile.addImportDeclaration({
    namedImports: [`${clientClassName}`],
    moduleSpecifier: `../${clientFileName}`
  });

  if (hasLroOperation(operationGroupDetails)) {
    operationGroupFile.addImportDeclaration({
      namedImports: ["PollerLike", "PollOperationState", "LroEngine"],
      moduleSpecifier: "@azure/core-lro"
    });
    operationGroupFile.addImportDeclaration({
      namedImports: ["LroImpl"],
      moduleSpecifier: `../lroImpl`
    });
  }
}

export function hasLroOperation(operationGroupDetails: OperationGroupDetails) {
  return operationGroupDetails.operations.some(o => o.isLro);
}
