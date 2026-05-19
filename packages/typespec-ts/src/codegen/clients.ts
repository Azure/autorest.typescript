// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Client context file generator.
 *
 * Generates `api/{name}Context.ts` from a TSClient node in the code model.
 * Produces:
 * - Client interface (e.g., `FooContext extends Client`)
 * - Options interface (e.g., `FooClientOptionalParams extends ClientOptions`)
 * - Factory function (e.g., `createFoo(endpoint, options): FooContext`)
 *
 * Zero TCGC imports — only code model types + ts-morph.
 */

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import type {
  TSClient,
  TSClientParameter,
  TSGenerationSettings
} from "../codemodel/index.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import { refkey } from "../framework/refkey.js";
import { CloudSettingHelpers } from "../modular/static-helpers-metadata.js";

/**
 * Emit the client context file for a single client.
 */
export function emitClientContext(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile | undefined {
  const dependencies = useDependencies();
  const subfolder = client.path.join("/");

  const filePath = `${settings.sourceRoot}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }api/${normalizeName(client.modularName, NameType.File)}Context.ts`;

  const file = project.createSourceFile(filePath);

  // ── Logger import (Azure only) ──
  if (settings.flavor === "azure") {
    file.addImportDeclaration({
      moduleSpecifier: "../".repeat(client.path.length + 1) + "logger.js",
      namedImports: ["logger"]
    });
  }

  // ── Client interface ──
  const requiredProperties = client.parameters
    .filter((p) => !p.isEndpoint && !p.isCredential && p.required)
    .map((p) => ({
      name: p.name,
      type: p.type,
      hasQuestionToken: false,
      docs: buildParamDocs(p, client)
    }));

  const requiredPropertyNames = new Set(
    requiredProperties.map((property) => property.name)
  );

  const optionalProperties = client.parameters
    .filter((p) => !p.required || p.hasDefaultValue)
    .filter(
      (p) =>
        !p.isEndpoint && !p.isCredential && !requiredPropertyNames.has(p.name)
    )
    .map((p) => ({
      name: p.name,
      type: p.type,
      hasQuestionToken: true,
      docs: buildParamDocs(p, client)
    }));

  file.addInterface({
    isExported: true,
    name: client.contextTypeName,
    extends: [resolveReference(dependencies.Client)],
    docs: client.docs,
    properties: [...requiredProperties, ...optionalProperties]
  });

  // ── Options interface ──
  const useStringForApiVersion =
    client.apiVersion?.parameterName.toLowerCase() === "apiversion";
  const optionsProperties = client.parameters
    .filter((p) => p.hasDefaultValue || !p.required)
    .filter((p) => p.name !== "endpoint")
    .map((p) => ({
      name: p.name,
      type: p.isApiVersion && useStringForApiVersion ? "string" : p.type,
      hasQuestionToken: true,
      docs: buildParamDocs(p, client)
    }));

  if (settings.isArm) {
    optionsProperties.push({
      name: "cloudSetting",
      type: `${resolveReference(CloudSettingHelpers.AzureSupportedClouds)}`,
      hasQuestionToken: true,
      docs: ["Specifies the Azure cloud environment for the client."]
    });
  }

  file.addInterface({
    name: `${client.name}OptionalParams`,
    isExported: true,
    extends: [resolveReference(dependencies.ClientOptions)],
    properties: optionsProperties,
    docs: ["Optional parameters for the client."]
  });

  // ── Factory function ──
  const factoryParams = client.parameters
    .filter((p) => p.required && !p.hasDefaultValue && !p.isApiVersion)
    .map((p) => ({
      name: p.name,
      type: p.type
    }));
  factoryParams.push({
    name: "options",
    type: `${client.name}OptionalParams`
  });

  const fn = file.addFunction({
    docs: client.docs,
    name: `create${client.modularName}`,
    returnType: client.contextTypeName,
    parameters: factoryParams.map((p) => ({
      name: p.name,
      type: p.type,
      ...(p.name === "options" ? { initializer: "{}" } : {})
    })),
    isExported: true
  });

  // Factory body: endpoint setup
  const assignedOptionalParams = emitEndpointSetup(fn, client, settings);

  // Factory body: options setup
  emitOptionsSetup(fn, client, settings);

  // Factory body: getClient call
  fn.addStatements(
    `const clientContext = ${resolveReference(
      dependencies.getClient
    )}(endpointUrl, ${client.credential.parameterName}, updatedOptions);`
  );

  // Factory body: custom auth policy
  if (
    settings.customHttpAuthHeaderName &&
    settings.customHttpAuthSharedKeyPrefix
  ) {
    fn.addStatements(`
      if(${resolveReference(dependencies.isKeyCredential)}(credential)) {
        clientContext.pipeline.addPolicy({
          name: "customKeyCredentialPolicy",
          sendRequest(request, next) {
            request.headers.set("${settings.customHttpAuthHeaderName}", "${settings.customHttpAuthSharedKeyPrefix} " + credential.key);
            return next(request);
          }
        });
      }`);
  }

  // Factory body: api version handling
  emitApiVersionHandling(fn, client, settings);

  // Factory body: return statement
  emitReturnStatement(fn, client, assignedOptionalParams);

  // Fix imports
  file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
  file.fixUnusedIdentifiers();

  return file;
}

// ─── Factory body helpers ─────────────────────────────────────────────

function emitEndpointSetup(
  fn: any,
  client: TSClient,
  settings: TSGenerationSettings
): Set<string> {
  const assignedOptionalParams = new Set<string>();
  const coreEndpoint = settings.isArm
    ? `options.endpoint ?? ${resolveReference(CloudSettingHelpers.getArmEndpoint)}(options.cloudSetting)`
    : "options.endpoint";

  const ep = client.endpoint;
  if (ep.isParameterized && ep.serverUrl) {
    for (const tp of ep.templateParameters) {
      if (tp.clientDefaultValue) {
        const defaultStr =
          typeof tp.clientDefaultValue === "string"
            ? `"${tp.clientDefaultValue}"`
            : tp.clientDefaultValue;
        fn.addStatements(
          `const ${tp.name} = options.${tp.name} ?? ${defaultStr};`
        );
        assignedOptionalParams.add(tp.name);
      } else if (tp.isOptional) {
        fn.addStatements(`const ${tp.name} = options.${tp.name};`);
        assignedOptionalParams.add(tp.name);
      }
    }

    let url = ep.serverUrl;
    for (const tp of ep.templateParameters) {
      url = url.replace(`{${tp.tcgcName}}`, `\${${tp.name}}`);
    }
    fn.addStatements(`const endpointUrl = ${coreEndpoint} ?? \`${url}\`;`);
    return assignedOptionalParams;
  }

  if (ep.templateParameters.length > 0) {
    const firstArg = ep.templateParameters[0];
    const defaultStr = firstArg?.clientDefaultValue
      ? typeof firstArg.clientDefaultValue === "string"
        ? `"${firstArg.clientDefaultValue}"`
        : firstArg.clientDefaultValue
      : `String(${getEndpointParamName(client)})`;
    fn.addStatements(`const endpointUrl = ${coreEndpoint} ?? ${defaultStr};`);
    return assignedOptionalParams;
  }

  fn.addStatements(`const endpointUrl = ${coreEndpoint};`);
  return assignedOptionalParams;
}

function emitOptionsSetup(
  fn: any,
  client: TSClient,
  settings: TSGenerationSettings
): void {
  // User agent prefix
  fn.addStatements(
    `const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;`
  );

  const pkgName = settings.packageName ?? "";
  const pkgVersion = settings.packageVersion ?? "";
  if (pkgName && pkgVersion) {
    fn.addStatements(
      `const userAgentInfo = \`azsdk-js-${pkgName}/${pkgVersion}\`;`
    );
    fn.addStatements(
      `const userAgentPrefix = prefixFromOptions ? \`\${prefixFromOptions} azsdk-js-api \${userAgentInfo}\` : \`azsdk-js-api \${userAgentInfo}\`;`
    );
  } else {
    fn.addStatements(
      `const userAgentPrefix = prefixFromOptions ? \`\${prefixFromOptions} azsdk-js-api\` : \`azsdk-js-api\`;`
    );
  }

  // Build options destructure
  const apiVersionParam = client.apiVersion?.parameterName ?? "apiVersion";
  let optionsExpr = `const { ${apiVersionParam}: _, ...updatedOptions } = {...options,`;
  optionsExpr += `userAgentOptions: { userAgentPrefix },`;

  if (settings.flavor === "azure") {
    optionsExpr += `loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },`;
  }

  if (settings.addCredentials) {
    const scopesStr = settings.credentialScopes
      ? settings.credentialScopes.map((cs) => `"${cs}"`).join(", ") ||
        "`${endpointUrl}/.default`"
      : "";
    const scopes = scopesStr
      ? `scopes: options.credentials?.scopes ?? [${scopesStr}],`
      : "";
    const apiKeyHeader = settings.credentialKeyHeaderName
      ? `apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "${settings.credentialKeyHeaderName}",`
      : "";
    if (scopes || apiKeyHeader) {
      optionsExpr += `credentials: { ${scopes}${apiKeyHeader} },`;
    }
  }

  optionsExpr += `};`;
  fn.addStatements(optionsExpr);
}

function emitApiVersionHandling(
  fn: any,
  client: TSClient,
  settings: TSGenerationSettings
): void {
  if (client.apiVersion) {
    if (
      !client.apiVersion.isInEndpointTemplate &&
      client.apiVersion.clientDefaultValue
    ) {
      fn.addStatements(
        `const ${client.apiVersion.parameterName} = options.${client.apiVersion.parameterName};`
      );
    }
  } else if (settings.flavor === "azure") {
    fn.addStatements(`
      if (options.apiVersion) {
        logger.warning("This client does not support client api-version, please change it at the operation level");
      }`);
  } else {
    fn.addStatements(`
      if (options.apiVersion) {
        console.warn("This client does not support client api-version, please change it at the operation level");
      }`);
  }
}

function emitReturnStatement(
  fn: any,
  client: TSClient,
  assignedOptionalParams: Set<string>
): void {
  const contextRequiredParams = client.parameters.filter(
    (p) =>
      !p.isEndpoint &&
      !p.isCredential &&
      p.name !== "options" &&
      p.required
  );

  const requiredParamNames = new Set(
    contextRequiredParams.map((param) => param.name)
  );

  const contextOptionalParams = client.parameters.filter(
    (p) =>
      !p.isEndpoint &&
      !p.isCredential &&
      p.name !== "options" &&
      !requiredParamNames.has(p.name) &&
      (!p.required || p.hasDefaultValue)
  );

  const allContextParams = [
    ...contextRequiredParams.map((p) => p.name),
    ...contextOptionalParams.map((p) => {
      if (
        requiredParamNames.has(p.name) ||
        assignedOptionalParams.has(p.name)
      ) {
        return p.name;
      }
      return `${p.name}: options.${p.name}`;
    })
  ];

  if (allContextParams.length) {
    fn.addStatements(
      `return { ...clientContext, ${allContextParams.join(", ")}} as ${client.contextTypeName};`
    );
  } else {
    fn.addStatements(`return clientContext;`);
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────

function getEndpointParamName(client: TSClient): string {
  return client.parameters.find((p) => p.isEndpoint)?.name ?? "endpointParam";
}

function buildParamDocs(param: TSClientParameter, client: TSClient): string[] {
  const docs = [...param.docs];
  if (
    param.isApiVersion &&
    client.apiVersion?.knownValuesEnumName &&
    client.apiVersion.parameterName.toLowerCase() === "apiversion"
  ) {
    docs.push(
      `Known values of {@link ${resolveReference(refkey(client.apiVersion.knownValuesEnumName, "knownValues"))}} that the service accepts.`
    );
  }
  return docs;
}
