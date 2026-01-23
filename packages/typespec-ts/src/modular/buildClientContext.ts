import { ModularEmitterOptions } from "./interfaces.js";
import {
  NameType,
  isAzurePackage,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  buildGetClientCredentialParam,
  buildGetClientEndpointParam,
  buildGetClientOptionsParam,
  getClientParameterName,
  getClientParameters,
  getClientParametersDeclaration
} from "./helpers/clientHelpers.js";

import { SdkContext } from "../utils/interfaces.js";
import { SourceFile } from "ts-morph";
import {
  getClassicalClientName,
  getClientName
} from "./helpers/namingHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import { buildEnumTypes, getApiVersionEnum } from "./emitModels.js";
import {
  SdkClientType,
  SdkCredentialParameter,
  SdkEndpointParameter,
  SdkHttpParameter,
  SdkMethodParameter,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { useContext } from "../contextManager.js";
import { refkey } from "../framework/refkey.js";
import { reportDiagnostic } from "../lib.js";
import { NoTarget } from "@typespec/compiler";
import { CloudSettingHelpers } from "./static-helpers-metadata.js";

/**
 * This function gets the path of the file containing the modular client context
 */
export function getClientContextPath(
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
): string {
  const [_, client] = clientMap;
  const { subfolder } = getModularClientOptions(clientMap);
  const name = getClientName(client);
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const contentPath = `${srcPath}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }api/${normalizeName(name, NameType.File)}Context.ts`;
  return contentPath;
}

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
): SourceFile {
  const project = useContext("outputProject");
  const dependencies = useDependencies();
  const [hierarchy, client] = clientMap;
  const name = getClientName(client);
  const { rlcClientName } = getModularClientOptions(clientMap);
  const requiredParams = getClientParametersDeclaration(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true,
    apiVersionAsRequired: true
  });
  const clientContextFile = project.createSourceFile(
    getClientContextPath(clientMap, emitterOptions)
  );

  // Get all client parameters (both required and optional) for the interface
  const requiredInterfaceProperties = getClientParameters(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true,
  })
    .filter((p) => {
      const clientParamName = getClientParameterName(p);
      return (
        clientParamName !== "endpointParam" && clientParamName !== "credential"
      );
    })
    .map((p) => {
      return {
        name: getClientParameterName(p),
        type: getTypeExpression(dpgContext, p.type),
        hasQuestionToken: false,
        docs: getDocsWithKnownVersion(dpgContext, p)
      };
    });

  // Collect names of required properties to avoid duplicates
  const requiredPropertyNames = new Set(
    requiredInterfaceProperties.map((p) => p.name)
  );

  const optionalInterfaceProperties = getClientParameters(client, dpgContext, {
    onClientOnly: false,
    optionalOnly: true
  })
    .filter((p) => {
      const clientParamName = getClientParameterName(p);
      return (
        clientParamName !== "endpointParam" &&
        clientParamName !== "credential" &&
        clientParamName !== "endpoint" &&
        !requiredPropertyNames.has(clientParamName) // Avoid duplicating required properties
      );
    })
    .map((p) => {
      return {
        name: getClientParameterName(p),
        type: getTypeExpression(dpgContext, p.type),
        hasQuestionToken: true,
        docs: getDocsWithKnownVersion(dpgContext, p)
      };
    });

  clientContextFile.addInterface({
    isExported: true,
    name: `${rlcClientName}`,
    extends: [resolveReference(dependencies.Client)],
    docs: getDocsFromDescription(client.doc),
    properties: [...requiredInterfaceProperties, ...optionalInterfaceProperties]
  });

  const propertiesInOptions = getClientParameters(client, dpgContext, {
    optionalOnly: true
  })
    .filter((p) => getClientParameterName(p) !== "endpoint")
    .map((p) => {
      return {
        name: getClientParameterName(p),
        type:
          p.name.toLowerCase() === "apiversion"
            ? "string"
            : getTypeExpression(dpgContext, p.type),
        hasQuestionToken: true,
        docs: getDocsWithKnownVersion(dpgContext, p)
      };
    });
  if (dpgContext.arm) {
    propertiesInOptions.push({
      name: "cloudSetting",
      type: `${resolveReference(CloudSettingHelpers.AzureSupportedClouds)}`,
      hasQuestionToken: true,
      docs: [`Specifies the Azure cloud environment for the client.`]
    });
  }
  // check if we have duplication options
  const existingOptionNames = new Set<string>();
  for (const property of propertiesInOptions) {
    if (existingOptionNames.has(property.name)) {
      reportDiagnostic(dpgContext.program, {
        code: "parameter-name-conflict",
        format: { parameterName: property.name },
        target: NoTarget
      });
    }
    existingOptionNames.add(property.name);
  }
  clientContextFile.addInterface({
    name: `${getClassicalClientName(client)}OptionalParams`,
    isExported: true,
    extends: [resolveReference(dependencies.ClientOptions)],
    properties: propertiesInOptions,
    docs: ["Optional parameters for the client."]
  });

  // TODO use binder here
  // (for now) now logger for unbranded pkgs
  if (isAzurePackage(emitterOptions)) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier: "../".repeat(hierarchy.length + 1) + "logger.js",
      namedImports: ["logger"]
    });
  }

  const factoryFunction = clientContextFile.addFunction({
    docs: getDocsFromDescription(client.doc),
    name: `create${name}`,
    returnType: `${rlcClientName}`,
    parameters: getClientParametersDeclaration(client, dpgContext, {
      onClientOnly: false,
      requiredOnly: true
    }),
    isExported: true
  });

  const { endpointParamName: endpointParam, assignedOptionalParams } =
    buildGetClientEndpointParam(factoryFunction, dpgContext, client);
  const credentialParam = buildGetClientCredentialParam(client, emitterOptions);

  // Get api version param early so we can use its name when building options
  const apiVersionParam = getClientParameters(client, dpgContext).find(
    (x) => x.isApiVersionParam
  );
  const apiVersionParamName = apiVersionParam
    ? getClientParameterName(apiVersionParam)
    : undefined;

  const optionsParam = buildGetClientOptionsParam(
    factoryFunction,
    emitterOptions,
    endpointParam,
    apiVersionParamName
  );

  factoryFunction.addStatements(
    `const clientContext = ${resolveReference(
      dependencies.getClient
    )}(${endpointParam}, ${credentialParam}, ${optionsParam});`
  );

  const { customHttpAuthHeaderName, customHttpAuthSharedKeyPrefix } =
    emitterOptions.options;

  if (customHttpAuthHeaderName && customHttpAuthSharedKeyPrefix) {
    factoryFunction.addStatements(`
      if(${resolveReference(dependencies.isKeyCredential)}(credential)) {
        clientContext.pipeline.addPolicy({ 
          name: "customKeyCredentialPolicy",
          sendRequest(request, next) {
            request.headers.set("${customHttpAuthHeaderName}", "${customHttpAuthSharedKeyPrefix} " + credential.key);
            return next(request);
          }
        });
      }
      `);
  }

  let apiVersionStatement = ``;
  const endpointParameter = getClientParameters(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true,
    skipEndpointTemplate: true
  }).find((x) => x.kind === "endpoint");
  if (apiVersionParam) {
    const templateArguments =
      endpointParameter && endpointParameter.type.kind === "endpoint"
        ? endpointParameter.type.templateArguments
        : endpointParameter && endpointParameter.type.kind === "union"
          ? endpointParameter.type.variantTypes[0]?.templateArguments
          : [];
    const apiVersionInEndpoint =
      templateArguments && templateArguments.find((p) => p.isApiVersionParam);
    if (!apiVersionInEndpoint && apiVersionParam.clientDefaultValue) {
      apiVersionStatement += `const ${apiVersionParamName} = options.${apiVersionParamName};`;
    }
  } else if (isAzurePackage(emitterOptions)) {
    apiVersionStatement += `
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }`;
  } else {
    apiVersionStatement += `
        if (options.apiVersion) {
          console.warn("This client does not support client api-version, please change it at the operation level");
        }`;
  }
  factoryFunction.addStatements(apiVersionStatement);

  const contextRequiredParam = requiredParams.filter(
    (p) =>
      p.name !== "endpointParam" &&
      p.name !== "credential" &&
      p.name !== "options"
  );

  // Collect names of required parameters to avoid duplicates
  const requiredParamNames = new Set(contextRequiredParam.map((p) => p.name));

  // Also include optional parameters from clientInitialization that should be passed through
  const contextOptionalParams = getClientParameters(client, dpgContext, {
    optionalOnly: true,
    onClientOnly: false
  }).filter((p) => {
    const clientParamName = getClientParameterName(p);
    return (
      clientParamName !== "endpointParam" &&
      clientParamName !== "credential" &&
      clientParamName !== "endpoint" &&
      !requiredParamNames.has(clientParamName) // Avoid duplicating required parameters
    );
  });

  // Build context params, checking if param was already assigned as a required param
  const allContextParams = [
    ...contextRequiredParam.map((p) => p.name),
    ...contextOptionalParams.map((p) => {
      const clientParamName = getClientParameterName(p);
      // If this param was already assigned (e.g., as a required param or in endpoint building), use the value directly
      // Otherwise, get it from options
      if (
        requiredParamNames.has(clientParamName) ||
        (assignedOptionalParams && assignedOptionalParams.has(clientParamName))
      ) {
        return clientParamName;
      }
      return `${clientParamName}: options.${clientParamName}`;
    })
  ];

  if (allContextParams.length) {
    factoryFunction.addStatements(
      `return { ...clientContext, ${allContextParams.join(", ")}} as ${rlcClientName};`
    );
  } else {
    factoryFunction.addStatements(`return clientContext;`);
  }

  clientContextFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );

  clientContextFile.fixUnusedIdentifiers();
  return clientContextFile;
}

function getDocsWithKnownVersion(
  dpgContext: SdkContext,
  param:
    | SdkMethodParameter
    | SdkEndpointParameter
    | SdkCredentialParameter
    | SdkHttpParameter
) {
  const docs = getDocsFromDescription(param.doc);
  if (param.name.toLowerCase() !== "apiversion") {
    return docs;
  }
  const apiVersionEnum = getApiVersionEnum(dpgContext);
  if (apiVersionEnum) {
    const [_, knownValuesEnum] = buildEnumTypes(
      dpgContext,
      apiVersionEnum,
      true
    );
    docs.push(
      `Known values of {@link ${resolveReference(refkey(knownValuesEnum.name, "knownValues"))}} that the service accepts.`
    );
  }
  return docs;
}
