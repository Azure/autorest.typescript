import { ModularEmitterOptions } from "../modularCodeModel.js";
import {
  OptionalKind,
  ParameterDeclarationStructure,
  StatementedNode
} from "ts-morph";
import {
  SdkClientType,
  SdkHttpParameter,
  SdkParameter,
  SdkServiceOperation
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
  skipArmSpecific?: boolean;
}

export function getClientParameters(
  client: SdkClientType<SdkServiceOperation>,
  dpgContext: SdkContext,
  options: ClientParameterOptions = {
    requiredOnly: false,
    onClientOnly: false,
    optionalOnly: false,
    skipArmSpecific: false
  }
) {
  const clientParams: (SdkParameter | SdkHttpParameter)[] = [];
  for (const property of client.initialization.properties) {
    if (
      property.type.kind === "union" &&
      property.type.variantTypes[0]?.kind === "endpoint"
    ) {
      clientParams.push(...property.type.variantTypes[0].templateArguments);
    } else if (property.type.kind === "endpoint") {
      clientParams.push(property);
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
    p.kind !== "method" || (p.kind === "method" && p.isApiVersionParam);
  const armSpecific = (p: SdkParameter | SdkHttpParameter) =>
    !(p.kind === "endpoint" && dpgContext.arm);
  const filters = [
    options.requiredOnly ? isRequired : undefined,
    dpgContext.rlcOptions?.addCredentials === false
      ? skipCredentials
      : undefined,
    options.optionalOnly ? isOptional : undefined,
    options.onClientOnly ? skipMethodParam : undefined,
    options.skipArmSpecific ? undefined : armSpecific
  ];
  const params = clientParams.filter((p) =>
    filters.every((filter) => !filter || filter(p))
  );

  return params;
}

export function getClientParametersDeclaration(
  client: SdkClientType<SdkServiceOperation>,
  dpgContext: SdkContext,
  options: ClientParameterOptions = {
    optionalOnly: false,
    requiredOnly: false,
    onClientOnly: false,
    skipArmSpecific: false
  }
): OptionalKind<ParameterDeclarationStructure>[] {
  const name = getClientName(client);
  const optionsParam = {
    name: "options",
    type: `${name}ClientOptionalParams`,
    initializer: "{}"
  };

  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...getClientParameters(client, dpgContext, options).map<
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
  client: SdkClientType<SdkServiceOperation>
): string {
  // Special case: endpoint URL not defined
  const endpointParam = getClientParameters(client, dpgContext, {
    onClientOnly: true
  }).find((x) => x.kind === "endpoint" || x.kind === "path");
  if (endpointParam) {
    if (endpointParam.type.kind === "endpoint") {
      let parameterizedEndpointUrl = endpointParam.type.serverUrl;
      parameterizedEndpointUrl = parameterizedEndpointUrl.replace(`{`, `\${`);
      const endpointUrl = `const endpointUrl = options.endpoint ?? options.baseUrl ?? \`${parameterizedEndpointUrl}\``;
      context.addStatements(endpointUrl);
      return "endpointUrl";
    }
    return `options.endpoint ?? options.baseUrl ?? String(${getClientParameterName(endpointParam)})`;
  }
  const urlParams = getClientParameters(client, dpgContext, {
    skipArmSpecific: true
  }).filter((x) => x.kind === "endpoint" || x.kind === "path");

  for (const param of urlParams) {
    if (
      param.kind === "endpoint" &&
      param.type.kind === "endpoint" &&
      param.type.templateArguments.length > 1
    ) {
      for (const templateParam of param.type.templateArguments) {
        const paramName = getClientParameterName(templateParam);
        if (templateParam.clientDefaultValue) {
          const defaultValue =
            typeof templateParam.clientDefaultValue === "string"
              ? `"${templateParam.clientDefaultValue}"`
              : templateParam.clientDefaultValue;
          context.addStatements(
            `const ${paramName} = options.${paramName} ?? ${defaultValue};`
          );
        } else if (templateParam.optional) {
          context.addStatements(`const ${paramName} = options.${paramName};`);
        }
      }
      return "endpointParam";
    } else if (
      param.kind === "endpoint" &&
      param.type.kind === "endpoint" &&
      param.type.templateArguments.length === 1
    ) {
      const endpointUrl = `const endpointUrl = options.endpoint ?? options.baseUrl ?? \`${param.type.templateArguments[0]?.clientDefaultValue}\``;
      context.addStatements(endpointUrl);
      return "endpointUrl";
    }
  }

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
  emitterOptions: ModularEmitterOptions,
  endpointParam: string
): string {
  const userAgentOptions = buildUserAgentOptions(
    context,
    emitterOptions,
    "azsdk-js-api"
  );
  const loggingOptions = buildLoggingOptions(emitterOptions.options.flavor);
  const credentials = buildCredentials(emitterOptions, endpointParam);

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
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
): string {
  if (
    emitterOptions.options.addCredentials &&
    (emitterOptions.options.credentialScopes ||
      emitterOptions.options.credentialKeyHeaderName)
  ) {
    return (
      client.initialization.properties.find((x) => isCredentialType(x.type))
        ?.name ?? "undefined"
    );
  } else {
    return "undefined";
  }
}

function buildCredentials(
  emitterOptions: ModularEmitterOptions,
  endpointParam: string
): string | undefined {
  if (!emitterOptions.options.addCredentials) {
    return undefined;
  }

  const { credentialScopes, credentialKeyHeaderName } = emitterOptions.options;

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
  emitterOptions: ModularEmitterOptions,
  sdkUserAgentPrefix: string
): string {
  const userAgentStatements = [];
  const prefixFromOptions =
    "const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;";
  userAgentStatements.push(prefixFromOptions);

  const clientPackageName =
    emitterOptions.options.packageDetails?.nameWithoutScope ??
    emitterOptions.options.packageDetails?.name ??
    "";
  const packageVersion = emitterOptions.options.packageDetails?.version ?? "";

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
