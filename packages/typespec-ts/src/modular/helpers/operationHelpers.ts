import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";
import { toPascalCase } from "../../utils/casingUtils.js";
import {
  BodyParameter,
  ModularCodeModel,
  Operation,
  OperationGroup,
  Parameter,
  Property,
  Response,
  Type
} from "../modularCodeModel.js";
import { buildType } from "./typeHelpers.js";
import {
  Imports as RuntimeImports,
  NameType,
  OperationResponse,
  getResponseBaseName,
  getResponseTypeName,
  normalizeName,
  getParameterBaseName,
  ResponseMetadata,
  ParameterMetadatas
} from "@azure-tools/rlc-common";
import { getClassicalLayerPrefix, getOperationName } from "./namingHelpers.js";
import {
  getFixmeForMultilineDocs,
  getDocsFromDescription
} from "./docsHelpers.js";
import {
  getCollectionFormatHelper,
  hasCollectionFormatInfo
} from "../../utils/operationUtil.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { Program, NoTarget } from "@typespec/compiler";
import { reportDiagnostic } from "../../lib.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";
import { isDefined } from "@azure/core-util";

function getRLCResponseType(rlcResponse?: Omit<OperationResponse, "path">) {
  if (!rlcResponse?.responses) {
    return;
  }
  return rlcResponse?.responses
    .map((resp) => {
      const baseResponseName = getResponseBaseName(
        rlcResponse.operationGroup,
        rlcResponse.operationName,
        resp.statusCode
      );
      // Get the information to build the Response Interface
      return resp.predefinedName ?? getResponseTypeName(baseResponseName);
    })
    .join(" | ");
}

export function getSendPrivateFunction(
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> {
  const { name } = getOperationName(operation);

  const parameters = getOperationSignatureParameters(operation, clientType);
  const typeDerivedParameters = parameters.slice(1, -1);
  const typeDerivedParamNames = typeDerivedParameters.map(({ name }) => name);
  typeDerivedParameters.forEach((param) => (param.name = `_${param.name}`));

  const hasRequestOptions = operation.rlcParameter.parameters.some(
    (parameter) =>
      parameter.body?.body?.length ||
      parameter.parameters?.some(
        (parameterMetadata) => !parameterMetadata.param.isConstant
      )
  );
  const serializerOutputProperties = [
    hasRequestOptions ? "requestOptions" : undefined,
    ...typeDerivedParamNames
  ].filter(isDefined);

  const returnType = `StreamableMethod<${getRLCResponseType(
    operation.rlcResponse
  )}>`;

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();
  //TODO: Implement overload operations
  const contentType =
    operation.parameters.find(isContentType)?.clientDefaultValue;
  const index = operation.rlcParameter.parameters.findIndex(
    (parameterMetadatas) => {
      parameterMetadatas.parameters?.some(({ type, param }) => {
        // TODO: validate that this actually checks the content type
        return (
          type === "header" &&
          param.name === "contentType" &&
          param.default === contentType
        );
      });
    }
  );
  const suffix = index > 0 ? index : "";
  const serializeFunctionName =
    "_" +
    normalizeName(
      `${getOperationName(operation).name}OptionsSerialize${suffix}`,
      NameType.Method
    );

  const statements: string[] = [];
  const destructureLHS = serializerOutputProperties.length
    ? `const {${serializerOutputProperties.join(", ")}} =`
    : undefined;
  const serializeArguments = [
    ...typeDerivedParamNames.map((name) => `${name}: _${name}`),
    "options"
  ];
  const serializeFunctionCall = `${serializeFunctionName}({
        ${serializeArguments.join(", ")}
        })`;
  const destructuringAssignment = [
    destructureLHS,
    serializeFunctionCall
  ].filter(isDefined);
  if (destructuringAssignment.length) {
    statements.push(...destructuringAssignment, ";\n");
  }

  statements.push(
    `const requestParameters = operationOptionsToRequestParameters(options) as ${
      getOperationName(operation, { casing: "pascal" }).name
    }Parameters;`
  );

  const pathParameters = [
    `"${operationPath}"`,
    ...getPathParameters(operation)
  ].join(", ");
  const hasHeaderParameter = operation.rlcParameter.parameters.some(
    ({ parameters }) =>
      parameters?.some(
        ({ type, param }) => type === "header" && param.name !== "contentType"
      )
  );
  const hasQueryParameter = operation.rlcParameter.parameters.some(
    ({ parameters }) => parameters?.some(({ type }) => type === "query")
  );
  const hasPathParameter = operation.rlcParameter.parameters.some(
    ({ parameters }) => parameters?.some(({ type }) => type === "path")
  );

  const requestOptionProperties = [
    "...requestParameters",
    `...requestOptions`,
    hasHeaderParameter
      ? "headers: { ...requestParameters.headers, ...requestOptions.headers }"
      : undefined,
    hasQueryParameter
      ? "queryParameters: { ...requestParameters.queryParameters, ...requestOptions.queryParameters }"
      : undefined,
    hasPathParameter
      ? "pathParameters: { ...requestParameters.pathParameters, ...requestOptions.pathParameters }"
      : undefined
  ].filter(isDefined);
  const requestOptions = `{
      ${requestOptionProperties.join(",\n")}
    }`;
  const responseTypeCast = operation.isOverload
    ? `as ${returnType}`
    : undefined;
  const requestCall = [
    `context
    .path(${pathParameters})
    .${operationMethod}(${
      hasRequestOptions ? requestOptions : "requestParameters"
    })`,
    responseTypeCast
  ].filter(isDefined);
  const returnStatement = ["return", requestCall.join(" ")];
  statements.push(returnStatement.join(" "), ";");

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType,
    statements
  };

  return functionStatement;
}

export function getRequestOptionsSerializePrivateFunctions(
  dpgContext: SdkContext,
  operationGroup: OperationGroup,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): OptionalKind<FunctionDeclarationStructure>[] {
  return operationGroup.operations
    .flatMap((operation) => {
      const operationParameters = operation.parameters
        .filter(
          (parameter) =>
            parameter.implementation === "Method" &&
            parameter.type.type !== "constant" &&
            parameter.clientDefaultValue === undefined &&
            !parameter.optional
        )
        .map((parameter) =>
          buildType(parameter.clientName, parameter.type, parameter.format)
        );
      const bodyParameter = operation.bodyParameter
        ? buildType(
            operation.bodyParameter.clientName,
            operation.bodyParameter.type,
            operation.bodyParameter.type.format
          )
        : undefined;
      const parameterDeclarations = [
        ...operationParameters,
        bodyParameter,
        { name: "options", type: getOperationOptionsName(operation, true) }
      ].filter(isDefined);

      const parameter = {
        name: "parameters",
        type: `{
          ${parameterDeclarations
            .map(({ name, type }) => `${name}: ${type}`)
            .join(",\n")}
        }`
      };
      const operationParameterPropertyDeclarations = operationParameters.map(
        (param) => `${param.name}: ${param.type ?? "unknown"}`
      );
      const requestParameters = getRequestParameters(
        dpgContext,
        operation,
        importSet,
        runtimeImports
      );
      const requestOptionsProperty = requestParameters.length
        ? `requestOptions: {${requestParameters.join(",\n")}}`
        : undefined;
      const nonRequestOptions = operation.parameters
        .filter(
          (parameter) =>
            parameter.implementation === "Method" &&
            parameter.type.type !== "constant" &&
            parameter.clientDefaultValue === undefined &&
            !parameter.optional
        )
        .map((parameter) => parameter.restApiName);
      const returnObjectProperties = [
        ...nonRequestOptions,
        requestOptionsProperty
      ].filter(isDefined);
      const returnObject = returnObjectProperties.length
        ? `{${returnObjectProperties.join(",\n")}}`
        : undefined;
      const destructureStatement = `const {${parameterDeclarations
        .map((parameter) => parameter.name)
        .join(", ")}} = ${parameter.name};`;
      const returnStatement = returnObject
        ? `return ${returnObject};`
        : undefined;
      const statements = [destructureStatement, returnStatement]
        .filter(isDefined)
        .join("\n");

      return operation.rlcParameter.parameters.map((parameterMetadatas, i) => {
        const suffix = i || "";
        const functionName =
          "_" +
          normalizeName(
            `${getOperationName(operation).name}OptionsSerialize${suffix}`,
            NameType.Method
          );

        const requestOptionsTypes = getRequestOptionsTypes(
          parameterMetadatas,
          i,
          operation.groupName,
          operation.name
        );
        const returnTypeRequestOptionsDeclaration = requestOptionsTypes.length
          ? `requestOptions: ${requestOptionsTypes.join(" & ")}`
          : undefined;
        const returnObjectTypeProperties = [
          ...operationParameterPropertyDeclarations,
          returnTypeRequestOptionsDeclaration
        ].filter(isDefined);
        const returnType = returnObjectTypeProperties.length
          ? `{${returnObjectTypeProperties.join(",\n")}}`
          : undefined;

        const functionDeclaration: OptionalKind<FunctionDeclarationStructure> =
          {
            isAsync: false,
            isExported: true,
            name: functionName,
            parameters: [parameter],
            returnType,
            statements
          };
        return functionDeclaration;
      });
    })
    .filter(isDefined);
}

function getRequestOptionsTypes(
  { parameters, body }: ParameterMetadatas,
  i: number,
  operationGroup: string,
  operationName: string
): string[] {
  const types: Array<string | undefined> = new Array(5).fill(undefined);

  const bodyCondition = body?.body?.length;
  types[0] = bodyCondition ? "BodyParam" : undefined;

  parameters?.forEach((parameter) => {
    const queryCondition = parameter.type === "query";
    const pathCondition = parameter.type === "path";
    const headerCondition =
      parameter.type === "header" && parameter.name !== "contentType";
    const contentTypeCondition =
      parameter.type === "header" && parameter.name === "contentType";

    types[1] = queryCondition ? "QueryParam" : types[1];
    types[2] = pathCondition ? "PathParam" : types[2];
    types[3] = headerCondition ? "HeaderParam" : types[3];
    types[4] = contentTypeCondition ? "MediaTypesParam" : types[4];
  });

  const parameterBaseName = getParameterBaseName(operationGroup, operationName);
  const nameSuffix = String(i ? i : "");

  return types
    .filter(isDefined)
    .map((paramType) => `${parameterBaseName}${paramType}${nameSuffix}`);
}

export function getDeserializePrivateFunction(
  operation: Operation,
  needSubClient: boolean,
  needUnexpectedHelper: boolean
): OptionalKind<FunctionDeclarationStructure> {
  const responseType = getRLCResponseType(operation.rlcResponse);
  const parameters: OptionalKind<ParameterDeclarationStructure>[] = [
    {
      name: "result",
      type: responseType
    }
  ];

  const statements: string[] = [];
  if (needUnexpectedHelper) {
    statements.push(
      `if(${needSubClient ? "UnexpectedHelper." : ""}isUnexpected(result)){`,
      "throw result.body",
      "}"
    );
  } else {
    const validStatus = [
      ...new Set(
        operation.responses
          .flatMap((r) => r.statusCodes)
          .filter((s) => s !== "default")
      )
    ];

    if (validStatus.length > 0) {
      statements.push(
        `if(${validStatus
          .map((s) => `result.status !== "${s}"`)
          .join(" || ")}){`,
        "throw result.body",
        "}"
      );
    }
  }

  const { name } = getOperationName(operation);
  const { returnType, responseUnionStatements } = getResponseUnionMetadata(
    operation.responses
  );

  statements.push(...responseUnionStatements);

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: true,
    isExported: true,
    name: `_${name}Deserialize`,
    parameters,
    returnType: `Promise<${returnType}>`,
    statements
  };

  return {
    ...functionStatement,
    statements
  };
}

function getResponseUnionMetadata(responses: Response[]) {
  const expectedResponses = responses
    .map((response) => {
      return {
        ...response,
        statusCodes: response.statusCodes.filter(
          (statusCode): statusCode is number => statusCode !== "default"
        )
      };
    })
    .filter((response) => response.statusCodes.length);

  const responseUnionMetadata = expectedResponses
    .map((response) => {
      const returnType = buildType(
        response.type.name,
        response.type,
        response.type.format
      ).type;
      if (returnType === "void") {
        return;
      }
      const statusCodes = response.statusCodes.map(
        (statusCode) => `"${statusCode}"`
      );
      const deserializeFunctionName = getSerializeFunctionName(
        response.type,
        "Deserialize"
      );

      return { statusCodes, deserializeFunctionName, returnType };
    })
    .filter(isDefined);

  const responseUnionStatements = getStatements(responseUnionMetadata);

  const returnType = responseUnionMetadata.length
    ? responseUnionMetadata.map(({ returnType }) => returnType).join(" | ")
    : "void";
  return { returnType, responseUnionStatements };

  function getStatements(
    responseUnionMetadata: {
      statusCodes: string[];
      deserializeFunctionName?: string;
    }[]
  ): string[] {
    return responseUnionMetadata.flatMap(
      ({ statusCodes, deserializeFunctionName }) => {
        const returnStatement = deserializeFunctionName
          ? `return ${deserializeFunctionName}(result);`
          : "return result.body;";

        const statements =
          responseUnionMetadata.length === 1
            ? [returnStatement]
            : [
                `if ([${statusCodes.join(", ")}].includes(result.status)){`,
                returnStatement,
                `}`
              ];
        return statements;
      }
    );
  }
}

function getSerializeFunctionName(
  type: Type,
  direction: "Serialize" | "Deserialize"
) {
  if (!type.name) {
    return undefined;
  }
  const baseName = `${type.name}${direction}`;
  return `_${normalizeName(baseName, NameType.Method)}`;
}

type ResponseTypeMetadata = {
  type: Type;
  typeResponses: Array<{
    response: Response;
    rlcResponses: ResponseMetadata[];
    operationGroupName: string;
    operationName: string;
  }>;
};

function getResponseTypeMetadata(
  operationGroup: OperationGroup
): ResponseTypeMetadata[] {
  const typeMap = new Map<string, ResponseTypeMetadata>();
  operationGroup.operations.forEach((operation) => {
    operation.responses
      .map((response) => {
        return {
          ...response,
          statusCodes: response.statusCodes.filter(
            (statusCode): statusCode is number => statusCode !== "default"
          )
        };
      })
      .filter((response) => response.statusCodes.length)
      .forEach((response) => {
        const type = response.type;
        const typeName = type.name;
        if (!typeName) {
          return;
        }

        if (!typeMap.get(typeName))
          typeMap.set(typeName, {
            type,
            typeResponses: []
          });
        const { typeResponses } = typeMap.get(typeName)!;

        typeResponses.push({
          response,
          rlcResponses: operation.rlcResponse.responses.filter(
            (rlcResponseMetadata) =>
              response.statusCodes.includes(
                Number(rlcResponseMetadata.statusCode)
              )
          ),
          operationGroupName: operation.groupName,
          operationName: operation.name
        });
      });
  });

  return Array.from(typeMap.values());
}

export function getResponseDeserializePrivateFunctions(
  operationGroup: OperationGroup,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): Array<OptionalKind<FunctionDeclarationStructure>> {
  const responseTypeMetadata = getResponseTypeMetadata(operationGroup);
  return responseTypeMetadata.map(({ type, typeResponses }) => {
    const resultType = typeResponses
      .flatMap(({ rlcResponses, operationGroupName, operationName }) => {
        return rlcResponses.map((rlcResponseMetadata) => {
          return getRLCResponseType({
            operationName,
            operationGroup: operationGroupName,
            responses: [rlcResponseMetadata]
          });
        });
      })
      .sort()
      .filter((type, i, arr) => type !== arr[i + 1]) // is unique
      .join(" | ");

    const responsesAreBinaryPayload = typeResponses.map(
      ({ response }) => response.isBinaryPayload
    );
    if (
      !responsesAreBinaryPayload.every((x) => x) &&
      responsesAreBinaryPayload.some((x) => x)
    ) {
      // not sure how to handle the same type having a binary payload in different operations using
      // the same type
      // i'd imagine it shouldn't happen
      throw Error();
    }
    const isBinaryPayload = responsesAreBinaryPayload.some((x) => x);

    const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
      isAsync: false,
      isExported: true,
      name: getSerializeFunctionName(type, "Deserialize"),
      parameters: [
        {
          name: "result",
          type: resultType
        }
      ],
      returnType: buildType(type.name, type, type.format).type,
      statements: getDeserializeBody(
        type,
        isBinaryPayload,
        importSet,
        runtimeImports
      )
    };

    return functionStatement;

    function getDeserializeBody(
      type: Type,
      isBinaryPayload: boolean,
      importSet: Map<string, Set<string>>,
      runtimeImports: RuntimeImports
    ) {
      if (type.type === "any" || isBinaryPayload) {
        return ["return result.body"];
      }

      const properties = getAllProperties(type);
      if (properties.length > 0) {
        return [
          `return {`,
          getResponseMapping(
            properties,
            "result.body",
            importSet,
            runtimeImports
          ).join(",\n"),
          `}`
        ];
      }

      return [
        `return ${deserializeResponseValue(
          type,
          "result.body",
          importSet,
          runtimeImports,
          type.nullable !== undefined ? !type.nullable : false,
          type.format
        )}`
      ];
    }
  });
}

function getOperationSignatureParameters(
  operation: Operation,
  clientType: string
): OptionalKind<ParameterDeclarationStructure>[] {
  const optionsType = getOperationOptionsName(operation, true);
  const parameters: Map<
    string,
    OptionalKind<ParameterDeclarationStructure>
  > = new Map();

  operation.parameters
    .filter(
      (p) =>
        p.implementation === "Method" &&
        p.type.type !== "constant" &&
        p.clientDefaultValue === undefined &&
        !p.optional
    )
    .map((p) => buildType(p.clientName, p.type, p.format))
    .forEach((p) => {
      parameters.set(p.name, p);
    });

  if (operation.bodyParameter) {
    parameters.set(
      operation.bodyParameter?.clientName,
      buildType(
        operation.bodyParameter.clientName,
        operation.bodyParameter.type,
        operation.bodyParameter.type.format
      )
    );
  }
  // Add context as the first parameter
  const contextParam = { name: "context", type: clientType };

  // Add the options parameter
  const optionsParam = {
    name: "options",
    type: optionsType,
    initializer: "{ requestOptions: {} }"
  };

  const finalParameters = [contextParam, ...parameters.values(), optionsParam];

  return finalParameters;
}

/**
 * This operation builds and returns the function declaration for an operation.
 */
export function getOperationFunction(
  operation: Operation,
  clientType: string
): OptionalKind<FunctionDeclarationStructure> {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);
  const { returnType } = getResponseUnionMetadata(operation.responses);
  const { name, fixme = [] } = getOperationName(operation);

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    docs: [
      ...getDocsFromDescription(operation.description),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: true,
    isExported: true,
    name: normalizeName(operation.name, NameType.Operation, true),
    parameters,
    returnType: `Promise<${returnType}>`
  };

  const statements: string[] = [];
  statements.push(
    `const result = await _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")});`
  );
  statements.push(`return _${name}Deserialize(result);`);
  return {
    ...functionStatement,
    statements
  };
}
export function getOperationOptionsName(
  operation: Operation,
  includeGroupName = false
) {
  const prefix =
    includeGroupName && operation.name.indexOf("_") === -1
      ? getClassicalLayerPrefix(operation, NameType.Interface)
      : "";
  const optionName = `${prefix}${toPascalCase(operation.name)}Options`;
  if (operation.bodyParameter?.type.name === optionName) {
    return optionName.replace(/Options$/, "RequestOptions");
  }
  return optionName;
}

/**
 * This function build the request parameters that we will provide to the
 * RLC internally. This will translate High Level parameters into the RLC ones.
 * Figuring out what goes in headers, body, path and qsp.
 */
function getRequestParameters(
  dpgContext: SdkContext,
  operation: Operation,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): string[] {
  if (!operation.parameters) {
    return [];
  }
  const operationParameters = operation.parameters.filter(
    (p) => p.implementation !== "Client" && !isContentType(p)
  );

  const contentTypeParameter = operation.parameters.find(isContentType);

  const parametersImplementation: Record<
    "header" | "query" | "body",
    { paramMap: string; param: Parameter }[]
  > = {
    header: [],
    query: [],
    body: []
  };

  for (const param of operationParameters) {
    if (
      param.location === "header" ||
      param.location === "query" ||
      param.location === "body"
    ) {
      parametersImplementation[param.location].push({
        paramMap: getParameterMap(param, importSet, runtimeImports),
        param
      });
    }
  }

  const parameterPropertyDeclarations = [];

  parameterPropertyDeclarations.push(
    contentTypeParameter ? getContentTypeValue(contentTypeParameter) : undefined
  );

  parameterPropertyDeclarations.push(
    parametersImplementation.header.length
      ? `headers: {${parametersImplementation.header
          .map((i) =>
            buildHeaderParameter(dpgContext.program, i.paramMap, i.param)
          )
          .join(",\n")}}`
      : undefined
  );

  parameterPropertyDeclarations.push(
    parametersImplementation.query.length
      ? `queryParameters: {${parametersImplementation.query
          .map((i) => i.paramMap)
          .join(",\n")}}`
      : undefined
  );

  parameterPropertyDeclarations.push(
    !operation.bodyParameter && parametersImplementation.body.length
      ? `body: {${parametersImplementation.body
          .map((i) => i.paramMap)
          .join(",\n")}}`
      : undefined
  );

  parameterPropertyDeclarations.push(
    operation.bodyParameter
      ? buildBodyParameter(operation.bodyParameter, importSet, runtimeImports)
      : undefined
  );

  return parameterPropertyDeclarations.filter(isDefined);
}

// Specially handle the type for headers because we only allow string/number/boolean values
function buildHeaderParameter(
  program: Program,
  paramMap: string,
  param: Parameter
): string {
  if (!param.optional && param.type.nullable === true) {
    reportDiagnostic(program, {
      code: "nullable-required-header",
      target: NoTarget
    });
    return paramMap;
  }
  const conditions = [];
  if (param.optional) {
    conditions.push(`options?.${param.clientName} !== undefined`);
  }
  if (param.type.nullable === true) {
    conditions.push(`options?.${param.clientName} !== null`);
  }
  return conditions.length > 0
    ? `...(${conditions.join(" && ")} ? {${paramMap}} : {})`
    : paramMap;
}

function buildBodyParameter(
  bodyParameter: BodyParameter,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (bodyParameter.type.type === "model") {
    const bodyParts: string[] = getRequestModelMapping(
      bodyParameter.type,
      bodyParameter.clientName,
      importSet,
      runtimeImports
    );

    if (bodyParameter && bodyParts.length > 0) {
      return `body: {${bodyParts.join(",\n")}}`;
    }
  }

  if (bodyParameter.type.type === "list") {
    if (bodyParameter.type.elementType?.type === "model") {
      const bodyParts = getRequestModelMapping(
        bodyParameter.type.elementType,
        "p",
        importSet,
        runtimeImports
      );
      return `body: (${bodyParameter.clientName} ?? []).map((p) => { return {
        ${bodyParts.join(", ")}
      };})`;
    }
    return `body: ${bodyParameter.clientName}`;
  }

  if (
    bodyParameter.type.type === "byte-array" &&
    !bodyParameter.isBinaryPayload
  ) {
    const specifier = getImportSpecifier("coreUtil", runtimeImports);
    const coreUtilSet = importSet.get(specifier);
    if (!coreUtilSet) {
      importSet.set(specifier, new Set<string>().add("uint8ArrayToString"));
    } else {
      coreUtilSet.add("uint8ArrayToString");
    }
    return bodyParameter.optional
      ? `body: typeof ${bodyParameter.clientName} === 'string'
    ? uint8ArrayToString(${bodyParameter.clientName}, "${getEncodingFormat(
          bodyParameter.type
        )}")
    : ${bodyParameter.clientName}`
      : `body: uint8ArrayToString(${
          bodyParameter.clientName
        }, "${getEncodingFormat(bodyParameter.type)}")`;
  } else if (bodyParameter.isBinaryPayload) {
    return `body: ${bodyParameter.clientName}`;
  }
  return;
}

function getEncodingFormat(type: { format?: string }) {
  const supportedFormats = ["base64url", "base64", "byte"];

  if (!supportedFormats.includes(type.format ?? "")) {
    return "base64";
  }

  return type.format;
}

/**
 * This function helps with renames, translating client names to rest api names
 */
function getParameterMap(
  param: Parameter | Property,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
): string {
  if (isConstant(param)) {
    return getConstantValue(param);
  }

  if (hasCollectionFormatInfo((param as any).location, (param as any).format)) {
    return getCollectionFormat(param as Parameter, importSet, runtimeImports);
  }

  // if the parameter or property is optional, we don't need to handle the default value
  if (isOptional(param)) {
    return getOptional(param, importSet, runtimeImports);
  }

  if (isRequired(param)) {
    return getRequired(param, importSet, runtimeImports);
  }

  throw new Error(`Parameter ${param.clientName} is not supported`);
}

function getCollectionFormat(
  param: Parameter,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  const collectionInfo = getCollectionFormatHelper(
    param.location,
    param.format ?? ""
  );
  if (!collectionInfo) {
    throw "Has collection format info but without helper function detected";
  }
  const isMulti = (param.format ?? "").toLowerCase() === "multi";
  const additionalParam = isMulti ? `, "${param.restApiName}"` : "";
  if (!param.optional) {
    return `"${param.restApiName}": ${collectionInfo}(${serializeRequestValue(
      param.type,
      param.clientName,
      importSet,
      runtimeImports,
      true,
      param.format
    )}${additionalParam})`;
  }
  return `"${param.restApiName}": options?.${
    param.clientName
  } !== undefined ? ${collectionInfo}(${serializeRequestValue(
    param.type,
    "options?." + param.clientName,
    importSet,
    runtimeImports,
    false,
    param.format
  )}${additionalParam}): undefined`;
}

function isContentType(param: Parameter): boolean {
  return (
    param.location === "header" &&
    param.restApiName.toLowerCase() === "content-type"
  );
}

function getContentTypeValue(param: Parameter | Property) {
  const defaultValue =
    param.clientDefaultValue ?? param.type.clientDefaultValue;

  if (!defaultValue) {
    throw new Error(
      `Constant ${param.clientName} does not have a default value`
    );
  }

  return `contentType: "${defaultValue}"`;
}

type RequiredType = (Parameter | Property) & {
  type: { optional: false | undefined; value: string };
};

function isRequired(param: Parameter | Property): param is RequiredType {
  return !param.optional;
}

function getRequired(
  param: RequiredType,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": {${getRequestModelMapping(
      param.type,
      param.clientName,
      importSet,
      runtimeImports
    ).join(",")}}`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    param.type,
    param.clientName,
    importSet,
    runtimeImports,
    true,
    param.format === undefined &&
      (param as Parameter).location === "header" &&
      param.type.type === "datetime"
      ? "headerDefault"
      : param.format
  )}`;
}

type ConstantType = (Parameter | Property) & {
  type: { type: "constant"; value: string };
};

function getConstantValue(param: ConstantType) {
  const defaultValue =
    param.clientDefaultValue ?? param.type.clientDefaultValue;

  if (!defaultValue) {
    throw new Error(
      `Constant ${param.clientName} does not have a default value`
    );
  }

  return `"${param.restApiName}": "${defaultValue}"`;
}

function isConstant(param: Parameter | Property): param is ConstantType {
  return (
    param.type.type === "constant" && param.clientDefaultValue !== undefined
  );
}

type OptionalType = (Parameter | Property) & {
  type: { optional: true };
};

function isOptional(param: Parameter | Property): param is OptionalType {
  return Boolean(param.optional);
}

function getOptional(
  param: OptionalType,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (param.type.type === "model") {
    return `"${param.restApiName}": {${getRequestModelMapping(
      param.type,
      "options?." + param.clientName + "?",
      importSet,
      runtimeImports
    ).join(", ")}}`;
  }
  return `"${param.restApiName}": ${serializeRequestValue(
    param.type,
    `options?.${param.clientName}`,
    importSet,
    runtimeImports,
    false,
    param.format === undefined &&
      (param as Parameter).location === "header" &&
      param.type.type === "datetime"
      ? "headerDefault"
      : param.format
  )}`;
}

/**
 * Builds the assignment for when a property or parameter has a default value
 */
function getDefaultValue(param: Parameter | Property) {
  return (param.clientDefaultValue ?? param.type.clientDefaultValue) !==
    undefined
    ? `${param.optional ? "??" : ""} "${
        param.clientDefaultValue ?? param.type.clientDefaultValue
      }"`
    : "";
}

/**
 * Extracts the path parameters
 */
function getPathParameters(operation: Operation): string[] {
  return operation.parameters
    .filter((param) => param.location === "path")
    .map((param) => {
      if (!param.optional) {
        return param.clientName;
      }

      const defaultValue = getDefaultValue(param);
      const pathParam = [
        `options.${param.clientName}`,
        defaultValue ? `?? "${defaultValue}"` : undefined
      ]
        .filter(isDefined)
        .join(" ");

      return pathParam;
    });
}

function getNullableCheck(name: string, type: Type) {
  if (!type.nullable) {
    return "";
  }

  return `${name} === null ? null :`;
}

/**
 *
 * This function helps translating an HLC request to RLC request,
 * extracting properties from body and headers and building the RLC response object
 */
function getRequestModelMapping(
  modelPropertyType: Type,
  propertyPath: string = "body",
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  if (getAllProperties(modelPropertyType).length <= 0) {
    return [];
  }
  const props: string[] = [];
  const properties: Property[] = getAllProperties(modelPropertyType) ?? [];
  for (const property of properties) {
    if (property.readonly) {
      continue;
    }
    const propertyFullName = `${propertyPath}.${property.clientName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.isCoreErrorType) {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else if (
        (property.restApiName === "message" ||
          property.restApiName === "messages") &&
        (property.type.name === "ChatMessage" ||
          property.type.elementType?.name === "ChatMessage")
      ) {
        definition = `"${property.restApiName}": ${
          !property.optional
            ? `${propertyFullName} as any`
            : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
        }`;
      } else {
        definition = `"${property.restApiName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } {${getRequestModelMapping(
          property.type,
          `${propertyPath}.${property.clientName}${
            property.optional ? "?" : ""
          }`,
          importSet,
          runtimeImports
        )}}`;
      }

      props.push(definition);
    } else if (
      (property.restApiName === "message" ||
        property.restApiName === "messages") &&
      (property.type.name === "ChatMessage" ||
        property.type.elementType?.name === "ChatMessage")
    ) {
      const definition = `"${property.restApiName}": ${
        !property.optional
          ? `${propertyFullName} as any`
          : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
      }`;
      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const clientValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.clientName}"]`;
      props.push(
        `"${property.restApiName}": ${serializeRequestValue(
          property.type,
          clientValue,
          importSet,
          runtimeImports,
          !property.optional,
          property.format
        )}`
      );
    }
  }

  return props;
}

/**
 * This function helps translating an RLC response to an HLC response,
 * extracting properties from body and headers and building the HLC response object
 */
export function getResponseMapping(
  properties: Property[],
  propertyPath: string = "result.body",
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports
) {
  const props: string[] = [];
  for (const property of properties) {
    // TODO: Do we need to also add headers in the result type?
    const propertyFullName = `${propertyPath}.${property.restApiName}`;
    if (property.type.type === "model") {
      let definition;
      if (property.type.isCoreErrorType) {
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } ${propertyFullName}`;
      } else if (
        (property.restApiName === "message" ||
          property.restApiName === "messages") &&
        (property.type.name === "ChatMessage" ||
          property.type.elementType?.name === "ChatMessage")
      ) {
        definition = `"${property.clientName}": ${
          !property.optional
            ? `${propertyFullName} as any`
            : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
        }`;
      } else {
        definition = `"${property.clientName}": ${getNullableCheck(
          propertyFullName,
          property.type
        )} ${
          !property.optional ? "" : `!${propertyFullName} ? undefined :`
        } {${getResponseMapping(
          getAllProperties(property.type) ?? [],
          `${propertyPath}.${property.restApiName}${
            property.optional ? "?" : ""
          }`,
          importSet,
          runtimeImports
        )}}`;
      }

      props.push(definition);
    } else {
      const dot = propertyPath.endsWith("?") ? "." : "";
      const restValue = `${
        propertyPath ? `${propertyPath}${dot}` : `${dot}`
      }["${property.restApiName}"]`;
      if (
        (property.restApiName === "message" ||
          property.restApiName === "messages") &&
        (property.type.name === "ChatMessage" ||
          property.type.elementType?.name === "ChatMessage")
      ) {
        props.push(
          `"${property.clientName}": ${
            !property.optional
              ? `${propertyFullName} as any`
              : `!${propertyFullName} ? undefined : ${propertyFullName} as any`
          }`
        );
      } else {
        props.push(
          `"${property.clientName}": ${deserializeResponseValue(
            property.type,
            restValue,
            importSet,
            runtimeImports,
            property.optional !== undefined ? !property.optional : false,
            property.format
          )}`
        );
      }
    }
  }

  return props;
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
function deserializeResponseValue(
  type: Type,
  restValue: string,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports,
  required: boolean,
  format?: string
): string {
  const coreSpecifier = getImportSpecifier("coreUtil", runtimeImports);
  const coreUtilSet = importSet.get(coreSpecifier);
  switch (type.type) {
    case "datetime":
      return required
        ? type.nullable
          ? `${restValue} === null ? null : new Date(${restValue})`
          : `new Date(${restValue})`
        : `${restValue} !== undefined? new Date(${restValue}): undefined`;
    case "combined":
      return `${restValue} as any`;
    case "list": {
      const prefix =
        required && !type.nullable
          ? `${restValue}`
          : `!${restValue} ? ${restValue} : ${restValue}`;
      if (type.elementType?.type === "model") {
        return `${prefix}.map(p => ({${getResponseMapping(
          getAllProperties(type.elementType) ?? [],
          "p",
          importSet,
          runtimeImports
        )}}))`;
      } else if (needsDeserialize(type.elementType)) {
        return `${prefix}.map(p => ${deserializeResponseValue(
          type.elementType!,
          "p",
          importSet,
          runtimeImports,
          required,
          type.elementType?.format
        )})`;
      } else {
        return restValue;
      }
    }
    case "byte-array":
      if (format !== "binary") {
        if (!coreUtilSet) {
          importSet.set(
            coreSpecifier,
            new Set<string>().add("stringToUint8Array")
          );
        } else {
          coreUtilSet.add("stringToUint8Array");
        }
        return `typeof ${restValue} === 'string'
        ? stringToUint8Array(${restValue}, "${format ?? "base64"}")
        : ${restValue}`;
      }
      return restValue;
    default:
      return restValue;
  }
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
function serializeRequestValue(
  type: Type,
  clientValue: string,
  importSet: Map<string, Set<string>>,
  runtimeImports: RuntimeImports,
  required: boolean,
  format?: string
): string {
  const utilSpecifier = getImportSpecifier("coreUtil", runtimeImports);
  const coreUtilSet = importSet.get(utilSpecifier);
  switch (type.type) {
    case "datetime":
      switch (type.format ?? format) {
        case "date":
          return `${clientValue}${required ? "" : "?"}.toDateString()`;
        case "time":
          return `${clientValue}${required ? "" : "?"}.toTimeString()`;
        case "rfc7231":
        case "headerDefault":
          return `${clientValue}${required ? "" : "?"}.toUTCString()`;
        case "unixTimestamp":
          return `${clientValue}${required ? "" : "?"}.getTime()`;
        case "rfc3339":
        default:
          return `${clientValue}${required ? "" : "?"}.toISOString()`;
      }
    case "list": {
      const prefix =
        required && !type.nullable
          ? `${clientValue}`
          : `!${clientValue} ? ${clientValue} : ${clientValue}`;
      if (type.elementType?.type === "model") {
        return `${prefix}.map(p => ({${getRequestModelMapping(
          type.elementType,
          "p",
          importSet,
          runtimeImports
        )}}))`;
      } else if (needsDeserialize(type.elementType)) {
        return `${prefix}.map(p => ${serializeRequestValue(
          type.elementType!,
          "p",
          importSet,
          runtimeImports,
          required,
          type.elementType?.format
        )})`;
      } else {
        return clientValue;
      }
    }
    case "byte-array":
      if (format !== "binary") {
        if (!coreUtilSet) {
          importSet.set(
            utilSpecifier,
            new Set<string>().add("uint8ArrayToString")
          );
        } else {
          coreUtilSet.add("uint8ArrayToString");
        }
        return required
          ? `uint8ArrayToString(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }")`
          : `${clientValue} !== undefined ? uint8ArrayToString(${clientValue}, "${
              getEncodingFormat({ format }) ?? "base64"
            }"): undefined`;
      }
      return clientValue;
    default:
      return clientValue;
  }
}

function needsDeserialize(type?: Type) {
  return (
    type?.type === "datetime" ||
    type?.type === "model" ||
    type?.type === "list" ||
    type?.type === "byte-array"
  );
}

export function hasLROOperation(codeModel: ModularCodeModel) {
  return (codeModel.clients ?? []).some((c) =>
    (c.operationGroups ?? []).some((og) =>
      (og.operations ?? []).some(
        (op) => op.discriminator === "lro" || op.discriminator === "lropaging"
      )
    )
  );
}

export function hasPagingOperation(codeModel: ModularCodeModel) {
  return (codeModel.clients ?? []).some((c) =>
    (c.operationGroups ?? []).some((og) =>
      (og.operations ?? []).some(
        (op) =>
          op.discriminator === "paging" || op.discriminator === "lropaging"
      )
    )
  );
}

function getAllProperties(type: Type): Property[] {
  const propertiesMap: Map<string, Property> = new Map();
  if (!type) {
    return [];
  }
  type.parents?.forEach((p) => {
    getAllProperties(p).forEach((prop) => {
      propertiesMap.set(prop.clientName, prop);
    });
  });
  type.properties?.forEach((p) => {
    propertiesMap.set(p.clientName, p);
  });
  return [...propertiesMap.values()];
}
