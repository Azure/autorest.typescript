import {
  addImportToSpecifier,
  getResponseBaseName,
  getResponseTypeName,
  Imports as RuntimeImports,
  NameType,
  OperationResponse
} from "@azure-tools/rlc-common";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import {
  FunctionDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure
} from "ts-morph";

import { toPascalCase } from "../../utils/casingUtils.js";
import {
  getDocsFromDescription,
  getFixmeForMultilineDocs
} from "../helpers/docsHelpers.js";
import {
  getClassicalLayerPrefix,
  getOperationName
} from "../helpers/namingHelpers.js";
import { buildType } from "../helpers/typeHelpers.js";
import {
  BodyParameter,
  Client,
  ModularCodeModel,
  Operation,
  ParameterLocation,
  Property,
  Type
} from "../modularCodeModel.js";

import { isDefined } from "@azure/core-util";
import _ from "lodash";
import { Parameter } from "../modularCodeModel.js";
import { serializeType } from "../serialization/serializers.js";
import { SerializationContext } from "../serialization/util.js";

export function getRLCResponseType(rlcResponse?: OperationResponse) {
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

export function getRLCLroLogicalResponse(rlcResponse?: OperationResponse) {
  const logicalResponse = (rlcResponse?.responses ?? []).filter(
    (r) => r.predefinedName && r.predefinedName.endsWith(`LogicalResponse`)
  );
  return logicalResponse.length > 0
    ? logicalResponse[0]!.predefinedName!
    : "any";
}

export function getSendPrivateFunction(
  dpgContext: SdkContext,
  operation: Operation,
  clientType: string,
  serializationContext: SerializationContext | undefined,
  runtimeImports: RuntimeImports
): OptionalKind<FunctionDeclarationStructure> {
  const parameters = getOperationSignatureParameters(operation, clientType);
  const { name } = getOperationName(operation);
  const returnType = `StreamableMethod<${getRLCResponseType(
    operation.rlcResponse
  )}>`;

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: false,
    isExported: true,
    name: `_${name}Send`,
    parameters,
    returnType
  };

  const operationPath = operation.url;
  const operationMethod = operation.method.toLowerCase();
  const optionalParamName = parameters.filter(
    (p) => p.type?.toString().endsWith("OptionalParams")
  )[0]?.name;

  const statements: string[] = [];
  statements.push(
    `return context.path("${operationPath}", ${getPathParameters(
      operation
    )}).${operationMethod}({...operationOptionsToRequestParameters(${optionalParamName}), ${getRequestParameters(
      dpgContext,
      operation,
      serializationContext!,
      runtimeImports
    )}}) ${operation.isOverload ? `as ${returnType}` : ``} ;`
  );

  return {
    ...functionStatement,
    statements
  };
}

export function getDeserializePrivateFunction(
  dpgContext: SdkContext,
  operation: Operation,
  needSubClient: boolean,
  needUnexpectedHelper: boolean,
  runtimeImports: RuntimeImports,
  serializationContext: SerializationContext | undefined
): OptionalKind<FunctionDeclarationStructure> {
  const { name } = getOperationName(operation);
  const parameters: OptionalKind<ParameterDeclarationStructure>[] = [
    {
      name: "result",
      type: getRLCResponseType(operation.rlcResponse)
    }
  ];
  // TODO: Support LRO + paging operation
  // https://github.com/Azure/autorest.typescript/issues/2313
  const isLroOnly = isLroOnlyOperation(operation);

  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType;
  if (isLroOnly && operation.method.toLowerCase() !== "patch") {
    returnType = buildLroReturnType(operation);
  } else if (response?.type?.type) {
    returnType = buildType(
      response.type.name,
      response.type,
      response.type.format
    );
  } else {
    returnType = { name: "", type: "void" };
  }

  const functionStatement: OptionalKind<FunctionDeclarationStructure> = {
    isAsync: true,
    isExported: true,
    name: `_${name}Deserialize`,
    parameters,
    returnType: `Promise<${returnType.type}>`
  };
  const statements: string[] = [];
  if (needUnexpectedHelper) {
    statements.push(
      `if(${needSubClient ? "UnexpectedHelper." : ""}isUnexpected(result)){`,
      `throw createRestError(result);`,
      "}"
    );
    addImportToSpecifier("restClient", runtimeImports, "createRestError");
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
        `throw createRestError(result);`,
        "}"
      );
      addImportToSpecifier("restClient", runtimeImports, "createRestError");
    }
  }

  let deserializedType = isLroOnly
    ? operation?.lroMetadata?.finalResult
    : response?.type ?? "void"; // Is setting void here correct? We are handling the case where no response above but here we are
  let hasLroSubPath = operation?.lroMetadata?.finalResultPath !== undefined;
  let deserializedRoot = hasLroSubPath
    ? `result.body.${operation?.lroMetadata?.finalResultPath}`
    : "result.body";
  // TODO: Hard-coded for LRO PATCH case for now
  // https://github.com/Azure/autorest.typescript/issues/2314
  if (isLroOnly && operation.method.toLowerCase() === "patch") {
    deserializedType = response.type;
    hasLroSubPath = false;
    deserializedRoot = "result.body";
  }
  if (isLroOnly) {
    const lroLogicalResponse = getRLCLroLogicalResponse(operation.rlcResponse);
    statements.push(`result = result as ${lroLogicalResponse};`);
    if (hasLroSubPath) {
      statements.push(
        `if(${deserializedRoot.split(".").join("?.")} === undefined) {
          throw createRestError(\`Expected a result in the response at position "${deserializedRoot}"\`, result);
        }
        `
      );
    }
  }

  if (isDefined(deserializedType?.tcgcType)) {
    statements.push(
      `return ${deserializeResponseValue(
        dpgContext,
        serializationContext!,
        deserializedType,
        deserializedRoot,
        runtimeImports
      )}`
    );
  } else if (returnType.type === "void") {
    statements.push("return");
  } else {
    statements.push(`return result.body`);
  }
  return {
    ...functionStatement,
    statements
  };
}

export function getOperationSignatureParameters(
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
    parameters.set(operation.bodyParameter?.clientName, {
      hasQuestionToken: operation.bodyParameter.optional,
      ...buildType(
        operation.bodyParameter.clientName,
        operation.bodyParameter.type,
        operation.bodyParameter.type.format
      )
    });
  }
  // Add context as the first parameter
  const contextParam = { name: "context", type: clientType };

  // Add the options parameter
  const optionsParam = {
    name: parameters.has("options") ? "optionalParams" : "options",
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
): OptionalKind<FunctionDeclarationStructure> & { propertyName?: string } {
  if (isPagingOnlyOperation(operation)) {
    // Case 1: paging-only operation
    return getPagingOnlyOperationFunction(operation, clientType);
  } else if (isLroOnlyOperation(operation)) {
    // Case 2: lro-only operation
    return getLroOnlyOperationFunction(operation, clientType);
  } else if (isLroAndPagingOperation(operation)) {
    // Case 3: both paging + lro operation is not supported yet so handle them as normal operation and customization may be needed
    // https://github.com/Azure/autorest.typescript/issues/2313
  }

  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);
  // TODO: Support operation overloads
  const response = operation.responses[0]!;
  let returnType = { name: "", type: "void" };
  if (response.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = buildType(type.name, type, type.format);
  }
  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.description),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: true,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `Promise<${returnType.type}>`
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

function getLroOnlyOperationFunction(operation: Operation, clientType: string) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);
  const returnType = buildLroReturnType(operation);
  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.description),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: false,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `PollerLike<OperationState<${returnType.type}>, ${returnType.type}>`
  };

  const statements: string[] = [];
  statements.push(`
  return getLongRunningPoller(context, _${name}Deserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _${name}Send(${parameters
      .map((p) => p.name)
      .join(", ")})
  }) as PollerLike<OperationState<${returnType.type}>, ${returnType.type}>;
  `);

  return {
    ...functionStatement,
    statements
  };
}

export function buildLroReturnType(operation: Operation) {
  const metadata = operation.lroMetadata;
  if (metadata !== undefined && metadata.finalResult !== undefined) {
    const type = metadata.finalResult;
    return buildType(type.name, type, type.format);
  }
  return { name: "", type: "void" };
}

export function getPagingOnlyOperationFunction(
  operation: Operation,
  clientType: string
) {
  // Extract required parameters
  const parameters: OptionalKind<ParameterDeclarationStructure>[] =
    getOperationSignatureParameters(operation, clientType);

  // TODO: Support operation overloads
  const response = operation.responses[0];
  let returnType = { name: "", type: "void" };
  if (response?.type?.type) {
    const type =
      extractPagingType(response.type, operation.itemName) ?? response.type;
    returnType = buildType(type.name, type, type.format);
  }
  const { name, fixme = [] } = getOperationName(operation);
  const functionStatement = {
    docs: [
      ...getDocsFromDescription(operation.description),
      ...getFixmeForMultilineDocs(fixme)
    ],
    isAsync: false,
    isExported: true,
    name,
    propertyName: operation.name,
    parameters,
    returnType: `PagedAsyncIterableIterator<${returnType.type}>`
  };

  const statements: string[] = [];
  const options = [];
  if (operation.itemName) {
    options.push(`itemName: "${operation.itemName}"`);
  }
  if (operation.continuationTokenName) {
    options.push(`nextLinkName: "${operation.continuationTokenName}"`);
  }
  statements.push(
    `return buildPagedAsyncIterator(
      context, 
      () => _${name}Send(${parameters.map((p) => p.name).join(", ")}), 
      _${name}Deserialize,
      ${options.length > 0 ? `{${options.join(", ")}}` : ``}
      );`
  );

  return {
    ...functionStatement,
    statements
  };
}

function extractPagingType(type: Type, itemName?: string): Type | undefined {
  if (!itemName) {
    return undefined;
  }
  const prop = (type.properties ?? [])
    ?.filter((prop) => prop.restApiName === itemName)
    .map((prop) => prop.type);
  if (prop.length === 0) {
    return undefined;
  }
  return prop[0]?.type === "list" && prop[0].elementType
    ? prop[0].elementType
    : undefined;
}
export function getOperationOptionsName(
  operation: Operation,
  includeGroupName = false
) {
  const prefix =
    includeGroupName && operation.name.indexOf("_") === -1
      ? getClassicalLayerPrefix(operation, NameType.Interface)
      : "";
  const optionName = `${prefix}${toPascalCase(operation.name)}OptionalParams`;
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
  serializationContext: SerializationContext,
  runtimeImports: RuntimeImports
): string {
  if (!operation.parameters) {
    return "";
  }
  const operationParameters = operation.parameters.filter(
    (p) => p.implementation !== "Client" && !isContentType(p)
  );

  const contentTypeParameter = operation.parameters.find(isContentType);

  const parametersImplementation: Partial<
    Record<ParameterLocation, Parameter[] | BodyParameter[]>
  > = _.groupBy(operationParameters, (p) => p.location);

  parametersImplementation["body"] = isDefined(operation.bodyParameter)
    ? [operation.bodyParameter]
    : parametersImplementation["body"];

  const params = [
    ...(contentTypeParameter
      ? [getContentTypeValue(contentTypeParameter)]
      : []),
    ...[
      (
        [
          ["headers", "header"],
          ["queryParameters", "query"],
          ["body", "body"]
        ] as const
      )
        .map(
          ([id, location]) => [id, parametersImplementation[location]] as const
        )
        .filter(([_, paramList]) => paramList?.length)
        .flatMap(([id, paramList]) =>
          paramList!.map((i) => {
            const initializer = serializeType({
              dpgContext,
              functionType: "serialize",
              serializationContext,
              type: i.tcgcType!,
              valueExpr:
                id === "body" ? i.clientName : `options?.${i.clientName}`,
              importCallback: (importType, importedName) =>
                addImportToSpecifier(importType, runtimeImports, importedName)
            });
            return `${id}: ${initializer}`;
          })
        )
    ]
  ];

  return params.join(",\n");
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

  if (defaultValue) {
    return `contentType: options.${param.clientName} as any ?? "${defaultValue}"`;
  } else {
    return `contentType: ${
      !param.optional
        ? "contentType"
        : "options." + param.clientName + " as any"
    }`;
  }
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
function getPathParameters(operation: Operation) {
  if (!operation.parameters) {
    return "";
  }

  let pathParams = "";
  for (const param of operation.parameters) {
    if (param.location === "path") {
      if (!param.optional) {
        pathParams += `${pathParams !== "" ? "," : ""} ${param.clientName}`;
        continue;
      }

      const defaultValue = getDefaultValue(param);

      pathParams += `${pathParams !== "" ? "," : ""} options.${
        param.clientName
      }`;

      if (defaultValue) {
        pathParams += ` ?? "${defaultValue}"`;
      }
    }
  }

  return pathParams;
}

/**
 * This function helps converting strings into JS complex types recursively.
 * We need to drill down into Array elements to make sure that the element type is
 * deserialized correctly
 */
function deserializeResponseValue(
  dpgContext: SdkContext,
  serializationContext: SerializationContext,
  type: Type,
  restValue: string,
  runtimeImports: RuntimeImports
): string {
  return serializeType({
    dpgContext,
    functionType: "deserialize",
    serializationContext,
    type: type.tcgcType!,
    valueExpr: restValue,
    importCallback: (importType, importedName) =>
      addImportToSpecifier(importType, runtimeImports, importedName)
  });
}

function isLroAndPagingOperation(op: Operation): boolean {
  return op.discriminator === "lropaging";
}

export function isLroOnlyOperation(op: Operation): boolean {
  return op.discriminator === "lro";
}

export function hasPagingOnlyOperation(
  client: Client,
  needRLC?: boolean
): boolean;
export function hasPagingOnlyOperation(
  codeModel: ModularCodeModel,
  needRLC?: boolean
): boolean;
export function hasPagingOnlyOperation(
  clientOrCodeModel: Client | ModularCodeModel,
  needRLC: boolean = false
): boolean {
  let clients: Client[] = [];
  if ((clientOrCodeModel as any)?.operationGroups) {
    clients = [clientOrCodeModel as Client];
  } else if ((clientOrCodeModel as any)?.clients) {
    clients = (clientOrCodeModel as ModularCodeModel).clients;
  }
  return clients.some(
    (c) =>
      (needRLC ? c.rlcHelperDetails.hasPaging : false) ||
      (c.operationGroups ?? []).some((og) =>
        (og.operations ?? []).some(isPagingOnlyOperation)
      )
  );
}

export function isPagingOnlyOperation(op: Operation): boolean {
  return op.discriminator === "paging";
}

export function getAllAncestors(type: Type): Type[] {
  const ancestors: Type[] = [];
  type?.parents?.forEach((p) => {
    ancestors.push(p);
    ancestors.push(...getAllAncestors(p));
  });
  return ancestors;
}
