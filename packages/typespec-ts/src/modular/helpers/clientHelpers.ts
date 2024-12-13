import { Client, ModularCodeModel } from "../modularCodeModel.js";
import {
  OptionalKind,
  ParameterDeclarationStructure,
  StatementedNode
} from "ts-morph";
import {
  SdkHttpParameter,
  SdkParameter
} from "@azure-tools/typespec-client-generator-core";

import {
  NameType,
  normalizeName,
  PackageFlavor
} from "@azure-tools/rlc-common";
import { SdkContext } from "../../utils/interfaces.js";
import { getClientName } from "./namingHelpers.js";
import { getTypeExpression } from "../type-expressions/get-type-expression.js";
import { isCredentialType } from "./typeHelpers.js";

interface ClientParameterOptions {
  onClientOnly?: boolean;
  requiredOnly?: boolean;
  optionalOnly?: boolean;
}

export function getClientParameters(
  _client: Client,
  dpgContext: SdkContext,
  options: ClientParameterOptions = {
    requiredOnly: false,
    onClientOnly: false,
    optionalOnly: false
  }
) {
  const client = _client.tcgcClient;
  const clientParams: (SdkParameter | SdkHttpParameter)[] = [];
  for (const property of client.initialization.properties) {
    if (
      property.type.kind === "union" &&
      property.type.variantTypes[0]?.kind === "endpoint"
    ) {
      clientParams.push(...property.type.variantTypes[0].templateArguments);
    } else if (property.type.kind === "endpoint") {
      clientParams.push(...property.type.templateArguments);
    } else if (!clientParams.find((p) => p.name === property.name)) {
      clientParams.push(property);
    }
  }
  const hasDefaultValue = (p: SdkParameter | SdkHttpParameter) =>
    p.clientDefaultValue || p.__raw?.defaultValue || p.type.kind === "constant";
  const isRequired = (p: SdkParameter | SdkHttpParameter) =>
    !p.optional && !hasDefaultValue(p);
  const isOptional = (p: SdkParameter | SdkHttpParameter) =>
    p.optional || hasDefaultValue(p);
  const skipCredentials = (p: SdkParameter | SdkHttpParameter) =>
    p.kind !== "credential";
  const skipMethodParam = (p: SdkParameter | SdkHttpParameter) =>
    p.kind !== "method" ||
    (p.kind === "method" &&
      p.isApiVersionParam &&
      _client.parameters.find((p) => p.isApiVersion));
  const armSpecific = (p: SdkParameter | SdkHttpParameter) =>
    !(p.kind === "endpoint" && dpgContext.arm);
  const filters = [
    options.requiredOnly ? isRequired : undefined,
    dpgContext.rlcOptions?.addCredentials === false
      ? skipCredentials
      : undefined,
    options.optionalOnly ? isOptional : undefined,
    options.onClientOnly ? skipMethodParam : undefined,
    armSpecific
  ];
  const params = clientParams.filter((p) =>
    filters.every((filter) => !filter || filter(p))
  );

  return params;
}

export function getClientParametersDeclaration(
  _client: Client,
  dpgContext: SdkContext,
  options: ClientParameterOptions = {
    optionalOnly: false,
    requiredOnly: false,
    onClientOnly: false
  }
): OptionalKind<ParameterDeclarationStructure>[] {
  const client = _client.tcgcClient;
  const name = getClientName(client);
  const optionsParam = {
    name: "options",
    type: `${name}ClientOptionalParams`,
    initializer: "{}"
  };

  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...getClientParameters(_client, dpgContext, options).map<
      OptionalKind<ParameterDeclarationStructure>
    >((p) => {
      const typeExpression = getClientParameterTypeExpression(dpgContext, p);
      const name = getClientParameterName(p);
      return {
        name,
        type: typeExpression
      };
    })
  ];
  params.push(optionsParam);

  return params;
}

function getClientParameterTypeExpression(
  context: SdkContext,
  parameter: SdkParameter | SdkHttpParameter
) {
  // Special handle to work around the fact that TCGC creates a union type for endpoint. The reason they do this
  // is to provide a way for users to either pass the value to fill in the template of the whole endpoint. Basically they are
  // inserting a variant with {endpoint}.
  // Our emitter allows this through the options.endpoint.
  if (parameter.type.kind === "union") {
    const endpointVariant = parameter.type.variantTypes.find(
      (p) => p.kind === "endpoint"
    );
    if (endpointVariant) {
      return getTypeExpression(context, endpointVariant);
    }
  }
  return getTypeExpression(context, parameter.type);
}

export function getClientParameterName(
  parameter: SdkParameter | SdkHttpParameter
) {
  // We have been calling this endpointParam, so special handling this here to make sure there are no unexpected side effects
  if (
    (parameter.type.kind === "union" &&
      parameter.type.variantTypes.some((v) => v.kind === "endpoint")) ||
    ((parameter.kind === "endpoint" || parameter.kind === "path") &&
      parameter.name.toLowerCase() === "endpoint")
  ) {
    return "endpointParam";
  }

  return normalizeName(parameter.name, NameType.Parameter, true);
}

export function buildGetClientEndpointParam(
  context: StatementedNode,
  dpgContext: SdkContext,
  client: Client
): string {
  // Special case: endpoint URL not defined
  if (client.url === "") {
    const endpointParam = getClientParameters(client, dpgContext, {
      onClientOnly: true
    }).find((x) => x.kind === "endpoint" || x.kind === "path");
    if (endpointParam) {
      if (dpgContext.rlcOptions?.flavor === "azure") {
        return `options.endpoint ?? options.baseUrl ?? String(${getClientParameterName(endpointParam)})`;
      } else {
        // unbranded does not have the deprecated baseUrl parameter
        return `options.endpoint ?? String(${getClientParameterName(endpointParam)})`;
      }
    }
  }

  const urlParams = getClientParameters(client, dpgContext).filter(
    (x) => x.kind === "endpoint" || x.kind === "path"
  );

  for (const param of urlParams) {
    const paramName = getClientParameterName(param);
    if (param.clientDefaultValue) {
      const defaultValue =
        typeof param.clientDefaultValue === "string"
          ? `"${param.clientDefaultValue}"`
          : param.clientDefaultValue;
      context.addStatements(
        `const ${paramName} = options.${paramName} ?? ${defaultValue};`
      );
    } else if (param.optional) {
      context.addStatements(`const ${paramName} = options.${paramName};`);
    }
  }

  let parameterizedEndpointUrl = client.url;
  for (const param of urlParams) {
    parameterizedEndpointUrl = parameterizedEndpointUrl.replace(
      `{${param.serializedName}}`,
      `\${${getClientParameterName(param)}}`
    );
  }
  let endpointUrl = "";
  if (dpgContext.rlcOptions?.flavor === "azure") {
    endpointUrl = `const endpointUrl = options.endpoint ?? options.baseUrl ?? \`${parameterizedEndpointUrl}\``;
  } else {
    // unbranded does not have the deprecated baseUrl parameter
    endpointUrl = `const endpointUrl = options.endpoint ?? \`${parameterizedEndpointUrl}\``;
  }
  context.addStatements(endpointUrl);
  return "endpointUrl";
}

/**
 * Builds the options to be passed to getClient
 *
 * @param context - context in which the options are being passed; statements will be added to this context
 *                  to help build the options shape
 * @returns - an expression representing the options to be passed in to getClient
 */
export function buildGetClientOptionsParam(
  context: StatementedNode,
  codeModel: ModularCodeModel,
  endpointParam: string
): string {
  const userAgentOptions = buildUserAgentOptions(
    context,
    codeModel,
    "azsdk-js-api"
  );
  const loggingOptions = buildLoggingOptions(codeModel.options.flavor);
  const credentials = buildCredentials(codeModel, endpointParam);

  let expr = "const { apiVersion: _, ...updatedOptions } = {";

  expr += "...options,";

  if (userAgentOptions) {
    expr += `userAgentOptions: ${userAgentOptions},`;
  }
  if (loggingOptions) {
    expr += `loggingOptions: ${loggingOptions},`;
  }
  if (credentials) {
    expr += `credentials: ${credentials},`;
  }

  expr += `};`;

  context.addStatements(expr);
  return "updatedOptions";
}

export function buildGetClientCredentialParam(
  client: Client,
  codeModel: ModularCodeModel
): string {
  if (
    codeModel.options.addCredentials &&
    (codeModel.options.credentialScopes ||
      codeModel.options.credentialKeyHeaderName)
  ) {
    return (
      client.parameters.find((x) => isCredentialType(x.type))?.clientName ??
      "undefined"
    );
  } else {
    return "undefined";
  }
}

function buildCredentials(
  codeModel: ModularCodeModel,
  endpointParam: string
): string | undefined {
  if (!codeModel.options.addCredentials) {
    return undefined;
  }

  const { credentialScopes, credentialKeyHeaderName } = codeModel.options;

  const scopesString = credentialScopes
    ? credentialScopes.map((cs) => `"${cs}"`).join(", ") ||
      `\`\${${endpointParam}}/.default\``
    : "";
  const scopes = scopesString
    ? `scopes: options.credentials?.scopes ?? [${scopesString}],`
    : "";

  const apiKeyHeaderName = credentialKeyHeaderName
    ? `apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "${credentialKeyHeaderName}",`
    : "";

  if (!scopes && !apiKeyHeaderName) {
    return undefined;
  }

  return `{ ${scopes}${apiKeyHeaderName} }`;
}

function buildLoggingOptions(flavor?: PackageFlavor): string | undefined {
  if (flavor !== "azure") {
    return undefined;
  }

  return `{ logger: options.loggingOptions?.logger ?? logger.info }`;
}

export function buildUserAgentOptions(
  context: StatementedNode,
  codeModel: ModularCodeModel,
  sdkUserAgentPrefix: string
): string {
  const userAgentStatements = [];
  const prefixFromOptions =
    "const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;";
  userAgentStatements.push(prefixFromOptions);

  const clientPackageName =
    codeModel.options.packageDetails?.nameWithoutScope ??
    codeModel.options.packageDetails?.name ??
    "";
  const packageVersion = codeModel.options.packageDetails?.version ?? "";

  const userAgentInfoStatement =
    packageVersion && clientPackageName && sdkUserAgentPrefix.includes("api")
      ? "const userAgentInfo = `azsdk-js-" +
        clientPackageName +
        "/" +
        packageVersion +
        "`;"
      : "";

  if (userAgentInfoStatement) {
    userAgentStatements.push(userAgentInfoStatement);
  }
  const userAgentPrefix = `const userAgentPrefix = ${
    "prefixFromOptions ? `${prefixFromOptions} " +
    sdkUserAgentPrefix +
    `${userAgentInfoStatement ? " ${userAgentInfo}" : ""}` +
    "` : `" +
    `${sdkUserAgentPrefix}` +
    `${userAgentInfoStatement ? " ${userAgentInfo}`" : "`"}`
  };`;
  userAgentStatements.push(userAgentPrefix);

  context.addStatements(userAgentStatements.join("\n"));

  return `{ userAgentPrefix }`;
}
