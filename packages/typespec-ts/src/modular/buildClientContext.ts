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
  SdkHttpParameter,
  SdkParameter,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";

/**
 * This function gets the path of the file containing the modular client context
 */
export function getClientContextPath(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
): string {
  const { subfolder } = getModularClientOptions(context, client);
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
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
): SourceFile {
  const dependencies = useDependencies();
  const name = getClientName(client);
  const { rlcClientName } = getModularClientOptions(dpgContext, client);
  const requiredParams = getClientParametersDeclaration(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true,
    apiVersionAsRequired: true
  });
  const clientContextFile = emitterOptions.project.createSourceFile(
    getClientContextPath(dpgContext, client, emitterOptions)
  );

  clientContextFile.addInterface({
    isExported: true,
    name: `${rlcClientName}`,
    extends: [resolveReference(dependencies.Client)],
    docs: getDocsFromDescription(client.doc),
    properties: getClientParameters(client, dpgContext, {
      onClientOnly: false,
      requiredOnly: true,
      apiVersionAsRequired: true
    })
      .filter((p) => {
        const clientParamName = getClientParameterName(p);
        return (
          clientParamName !== "endpointParam" &&
          clientParamName !== "credential"
        );
      })
      .map((p) => {
        return {
          name: getClientParameterName(p),
          type: getTypeExpression(dpgContext, p.type),
          hasQuestionToken: false,
          docs: getDocsWithKnownVersion(dpgContext, p)
        };
      })
  });

  clientContextFile.addInterface({
    name: `${getClassicalClientName(client)}OptionalParams`,
    isExported: true,
    extends: [resolveReference(dependencies.ClientOptions)],
    properties: getClientParameters(client, dpgContext, {
      optionalOnly: true
    })
      .filter((p) => p.name !== "endpoint")
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
      }),
    docs: ["Optional parameters for the client."]
  });

  // TODO use binder here
  // (for now) now logger for unbranded pkgs
  if (isAzurePackage(emitterOptions)) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier:
        dpgContext.sdkPackage.clients.length > 1
          ? "../../logger.js"
          : "../logger.js",
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

  const endpointParam = buildGetClientEndpointParam(
    factoryFunction,
    dpgContext,
    client
  );
  const credentialParam = buildGetClientCredentialParam(client, emitterOptions);
  const optionsParam = buildGetClientOptionsParam(
    factoryFunction,
    emitterOptions,
    endpointParam
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

  let apiVersionPolicyStatement = `clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });`;
  const apiVersionParam = getClientParameters(client, dpgContext).find(
    (x) => x.isApiVersionParam
  );
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
      apiVersionPolicyStatement += `const apiVersion = options.apiVersion ?? "${apiVersionParam.clientDefaultValue}";`;
    }

    if (apiVersionParam.kind === "method") {
      apiVersionPolicyStatement += `
      clientContext.pipeline.addPolicy({
        name: 'ClientApiVersionPolicy',
        sendRequest: (req, next) => {
          // Use the apiVersion defined in request url directly
          // Append one if there is no apiVersion and we have one at client options
          const url = new URL(req.url);
          if (!url.searchParams.get("api-version")) {
            req.url = \`\${req.url}\${
              Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
            }api-version=\${${getClientParameterName(apiVersionParam)}}\`;
          }
    
          return next(req);
        },
      });`;
    }
  } else if (isAzurePackage(emitterOptions)) {
    apiVersionPolicyStatement += `
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }`;
  } else {
    apiVersionPolicyStatement += `
        if (options.apiVersion) {
          console.warn("This client does not support client api-version, please change it at the operation level");
        }`;
  }
  factoryFunction.addStatements(apiVersionPolicyStatement);

  const contextRequiredParam = requiredParams.filter(
    (p) =>
      p.name !== "endpointParam" &&
      p.name !== "credential" &&
      p.name !== "options"
  );
  if (contextRequiredParam.length) {
    factoryFunction.addStatements(
      `return { ...clientContext, ${contextRequiredParam
        .map((p) => {
          return p.name;
        })
        .join(", ")}} as ${rlcClientName};`
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
  param: SdkParameter | SdkHttpParameter
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
      `Known values of {@link ${knownValuesEnum.name}} that the service accepts.`
    );
  }
  return docs;
}
