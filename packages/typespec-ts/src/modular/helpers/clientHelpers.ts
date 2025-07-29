import { ModularEmitterOptions } from "../interfaces.js";
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

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { SdkContext } from "../../utils/interfaces.js";
import { getClassicalClientName } from "./namingHelpers.js";
import { getTypeExpression } from "../type-expressions/get-type-expression.js";
import { isCredentialType } from "./typeHelpers.js";

interface ClientParameterOptions {
  onClientOnly?: boolean;
  requiredOnly?: boolean;
  optionalOnly?: boolean;
  skipArmSpecific?: boolean;
  skipEndpointTemplate?: boolean;
  apiVersionAsRequired?: boolean;
}

export function getClientParameters(
  client: SdkClientType<SdkServiceOperation>,
  dpgContext: SdkContext,
  options: ClientParameterOptions = {
    requiredOnly: false,
    onClientOnly: false,
    optionalOnly: false,
    skipArmSpecific: false,
    skipEndpointTemplate: false,
    apiVersionAsRequired: true
  }
) {
  const clientParams: (SdkParameter | SdkHttpParameter)[] = [];
  for (const property of client.clientInitialization.parameters) {
    if (
      property.type.kind === "union" &&
      property.type.variantTypes[0]?.kind === "endpoint"
    ) {
      if (options.skipEndpointTemplate) {
        clientParams.push(property);
      } else {
        clientParams.push(...property.type.variantTypes[0].templateArguments);
      }
    } else if (property.type.kind === "endpoint") {
      clientParams.push(property);
    } else if (!clientParams.find((p) => p.name === property.name)) {
      clientParams.push(property);
    }
  }

  const hasDefaultValue = (p: SdkParameter | SdkHttpParameter) =>
    p.clientDefaultValue || p.__raw?.defaultValue || p.type.kind === "constant";
  const isRequired = (p: SdkParameter | SdkHttpParameter) =>
    !p.optional &&
    ((!hasDefaultValue(p) &&
      !(
        p.type.kind === "endpoint" &&
        p.type.templateArguments[0] &&
        hasDefaultValue(p.type.templateArguments[0])
      )) ||
      (options.apiVersionAsRequired && p.isApiVersionParam));
  const isOptional = (p: SdkParameter | SdkHttpParameter) =>
    p.optional || hasDefaultValue(p);
  const skipCredentials = (p: SdkParameter | SdkHttpParameter) =>
    p.kind !== "credential";
  const skipMethodParam = (p: SdkParameter | SdkHttpParameter) =>
    p.kind !== "method";
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
    skipArmSpecific: false,
    apiVersionAsRequired: false
  }
): OptionalKind<ParameterDeclarationStructure>[] {
  const name = getClassicalClientName(client);
  const optionsParam = {
    name: "options",
    type: `${name}OptionalParams`,
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
  const endpointParameter = getClientParameters(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true,
    skipEndpointTemplate: true
  }).find((x) => x.kind === "endpoint");

  // Handle API version parameter
  const apiVersionParam = getClientParameters(client, dpgContext).find(
    (x) => x.isApiVersionParam
  );

  if (endpointParameter && endpointParameter.clientDefaultValue) {
    // Use the default endpoint template from the parameter
    const defaultEndpoint = endpointParameter.clientDefaultValue as string;

    if (apiVersionParam && apiVersionParam.clientDefaultValue) {
      const apiVersionParamName = getClientParameterName(apiVersionParam);
      context.addStatements(
        `const ${apiVersionParamName} = options.${apiVersionParamName} ?? "${apiVersionParam.clientDefaultValue}";`
      );
      context.addStatements(
        `const endpointUrl = options.endpoint ?? \`${defaultEndpoint}/\${${apiVersionParamName}}\`;`
      );
      return "endpointUrl";
    } else {
      context.addStatements(
        `const endpointUrl = options.endpoint ?? "${defaultEndpoint}";`
      );
      return "endpointUrl";
    }
  }

  // Fallback to a default endpoint
  if (apiVersionParam && apiVersionParam.clientDefaultValue) {
    const apiVersionParamName = getClientParameterName(apiVersionParam);
    context.addStatements(
      `const ${apiVersionParamName} = options.${apiVersionParamName} ?? "${apiVersionParam.clientDefaultValue}";`
    );
    context.addStatements(
      `const endpointUrl = options.endpoint ?? \`https://management.azure.com/\${${apiVersionParamName}}\`;`
    );
    return "endpointUrl";
  } else {
    context.addStatements(
      `const endpointUrl = options.endpoint ?? "https://management.azure.com";`
    );
    return "endpointUrl";
  }
}

export function buildGetClientCredentialParam(
  client: SdkClientType<SdkServiceOperation>,
  _emitterOptions: ModularEmitterOptions
): string {
  const credentialParam = getClientParameters(client, {} as SdkContext).find(
    (p) => isCredentialType(p.type)
  );

  if (credentialParam) {
    return "credential";
  }

  return "undefined";
}

export function buildGetClientOptionsParam(
  context: StatementedNode,
  emitterOptions: ModularEmitterOptions,
  _endpointParam: string
): string {
  // Build user agent information
  context.addStatements(
    `const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;`
  );
  context.addStatements(
    `const userAgentInfo = \`azsdk-js-${emitterOptions.options.packageDetails?.name ?? "client"}/1.0.0\`;`
  );
  context.addStatements(
    `const userAgentPrefix = prefixFromOptions ? \`\${prefixFromOptions} azsdk-js-api \${userAgentInfo}\` : \`azsdk-js-api \${userAgentInfo}\`;`
  );

  // Extract apiVersion from options to avoid passing it to the underlying client
  context.addStatements(
    `const { apiVersion: _, ...updatedOptions } = { ...options, userAgentOptions: { userAgentPrefix }, loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info } };`
  );

  return "updatedOptions";
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
