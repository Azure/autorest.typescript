import {
  getImportSpecifier,
  PackageFlavor,
  Imports as RuntimeImports
} from "@azure-tools/rlc-common";
import {
  OptionalKind,
  ParameterDeclarationStructure,
  SourceFile,
  StatementedNode
} from "ts-morph";
import { Client, ModularCodeModel } from "../modularCodeModel.js";
import { getClientName } from "./namingHelpers.js";
import { getType, isCredentialType } from "./typeHelpers.js";
import { SdkContext } from "../../utils/interfaces.js";

export function getClientParameters(
  client: Client,
  dpgContext: SdkContext,
  isClassicalClient = false
): OptionalKind<ParameterDeclarationStructure>[] {
  const { parameters } = client;
  const name = getClientName(client);
  const optionsParam = {
    name: "options",
    type: `${name}ClientOptionalParams`,
    initializer: "{}"
  };

  const params: OptionalKind<ParameterDeclarationStructure>[] = [
    ...parameters
      .filter(
        (p) =>
          p.optional === false &&
          p.type.type !== "constant" &&
          (p.clientDefaultValue === null || p.clientDefaultValue === undefined)
      )
      .map<OptionalKind<ParameterDeclarationStructure>>((p) => {
        const typeMetadata = getType(p.type, p.format);
        let typeName = typeMetadata.name;
        if (typeMetadata.nullable) {
          typeName = `${typeName} | null`;
        }
        return {
          name: p.clientName,
          type: typeName
        };
      })
  ];
  // Add promoted client-level parameters for classical clients
  if (isClassicalClient && dpgContext.rlcOptions?.azureArm) {
    // added subscriptionId parameter for ARM clients
    params.push({
      name: "subscriptionId",
      type: `string`
    });
  }
  params.push(optionsParam);

  return params;
}

export function buildGetClientEndpointParam(
  context: StatementedNode,
  client: Client
): string {
  // Special case: endpoint URL not defined
  if (client.url === "") {
    const endpointParam = client.parameters.find(
      (x) => x.location === "endpointPath"
    );
    return `options.endpoint ?? options.baseUrl ?? ${endpointParam?.clientName}`;
  }

  const urlParams = client.parameters.filter(
    (x) => x.location === "path" || x.location === "endpointPath"
  );

  for (const param of urlParams) {
    if (param.clientDefaultValue) {
      const defaultValue =
        typeof param.clientDefaultValue === "string"
          ? `"${param.clientDefaultValue}"`
          : param.clientDefaultValue;
      context.addStatements(
        `const ${param.clientName} = options.${param.clientName} ?? ${defaultValue};`
      );
    } else if (param.optional) {
      context.addStatements(
        `const ${param.clientName} = options.${param.clientName};`
      );
    }
  }

  let parameterizedEndpointUrl = client.url;
  for (const param of urlParams) {
    parameterizedEndpointUrl = parameterizedEndpointUrl.replace(
      `{${param.restApiName}}`,
      `\${${param.clientName}}`
    );
  }

  context.addStatements(
    `const endpointUrl = options.endpoint ?? options.baseUrl ?? \`${parameterizedEndpointUrl}\``
  );
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
  const userAgentOptions = buildUserAgentOptions(context, "azsdk-js-api");
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

  expr += `}`;

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
  sdkUserAgentPrefix: string
): string {
  const userAgentStatements = `
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = ${
      "prefixFromOptions ? `${prefixFromOptions} " +
      sdkUserAgentPrefix +
      "` : " +
      `"${sdkUserAgentPrefix}"`
    };
  `;

  context.addStatements(userAgentStatements);

  return `{ userAgentPrefix }`;
}

export function importCredential(
  runtimeImports: RuntimeImports,
  clientSourceFile: SourceFile
): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("coreAuth", runtimeImports),
    namedImports: ["TokenCredential", "KeyCredential"]
  });
}
