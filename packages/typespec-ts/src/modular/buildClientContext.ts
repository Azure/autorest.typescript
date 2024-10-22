import { Client, ModularCodeModel } from "./modularCodeModel.js";
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
import { getClientName } from "./helpers/namingHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  _client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
): SourceFile {
  const { description, subfolder, tcgcClient: client } = _client;
  const dependencies = useDependencies();
  const name = getClientName(client);
  const requiredParams = getClientParametersDeclaration(_client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true
  });
  const srcPath = codeModel.modularOptions.sourceRoot;
  const clientContextFile = codeModel.project.createSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }/api/${normalizeName(name, NameType.File)}Context.ts`
  );

  clientContextFile.addInterface({
    isExported: true,
    name: `${_client.rlcClientName}`,
    extends: [resolveReference(dependencies.Client)],
    docs: getDocsFromDescription(description)
  });

  clientContextFile.addInterface({
    name: `${name}ClientOptionalParams`,
    isExported: true,
    extends: [resolveReference(dependencies.ClientOptions)],
    properties: getClientParameters(_client, dpgContext, {
      optionalOnly: true
    })
      .filter((p) => p.name !== "endpoint")
      .map((p) => {
        return {
          name: normalizeName(p.name, NameType.Parameter),
          type:
            p.name.toLowerCase() === "apiversion"
              ? "string"
              : getTypeExpression(dpgContext, p.type),
          hasQuestionToken: true,
          docs: getDocsFromDescription(p.doc)
        };
      }),
    docs: ["Optional parameters for the client."]
  });

  // TODO use binder here
  // (for now) now logger for unbranded pkgs
  if (isAzurePackage(codeModel)) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier:
        codeModel.clients.length > 1 ? "../../logger.js" : "../logger.js",
      namedImports: ["logger"]
    });
  }

  const factoryFunction = clientContextFile.addFunction({
    docs: getDocsFromDescription(description),
    name: `create${name}`,
    returnType: `${_client.rlcClientName}`,
    parameters: requiredParams,
    isExported: true
  });

  const endpointParam = buildGetClientEndpointParam(
    factoryFunction,
    dpgContext,
    _client
  );
  const credentialParam = buildGetClientCredentialParam(_client, codeModel);
  const optionsParam = buildGetClientOptionsParam(
    factoryFunction,
    codeModel,
    endpointParam
  );

  factoryFunction.addStatements(
    `const clientContext = ${resolveReference(
      dependencies.getClient
    )}(${endpointParam}, ${credentialParam}, ${optionsParam});`
  );

  const { customHttpAuthHeaderName, customHttpAuthSharedKeyPrefix } =
    codeModel.options;

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

  if (dpgContext.hasApiVersionInClient) {
    const apiVersionParam = getClientParameters(_client, dpgContext).find(
      (x) => x.isApiVersionParam && x.kind === "method"
    );

    if (apiVersionParam) {
      if (apiVersionParam.clientDefaultValue) {
        apiVersionPolicyStatement += `const apiVersion = options.apiVersion ?? "${apiVersionParam.clientDefaultValue}";`;
      }

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
  } else if (isAzurePackage(codeModel)) {
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

  factoryFunction.addStatements("return clientContext;");

  clientContextFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );

  clientContextFile.fixUnusedIdentifiers();
  return clientContextFile;
}
