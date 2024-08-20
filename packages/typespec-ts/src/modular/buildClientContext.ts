import { Client, ModularCodeModel } from "./modularCodeModel.js";
import {
  NameType,
  getImportSpecifier,
  isAzurePackage,
  normalizeName
} from "@azure-tools/rlc-common";
import { SourceFile, StructureKind } from "ts-morph";
import {
  buildGetClientCredentialParam,
  buildGetClientEndpointParam,
  buildGetClientOptionsParam,
  getClientParameters,
  importCredential
} from "./helpers/clientHelpers.js";

import { SdkContext } from "../utils/interfaces.js";
import { addDeclaration } from "../framework/declaration.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getType } from "./helpers/typeHelpers.js";
import { importModels } from "./buildOperations.js";

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
): SourceFile {
  const { description, subfolder } = client;
  const name = getClientName(client);
  const params = getClientParameters(client, dpgContext);
  const srcPath = codeModel.modularOptions.sourceRoot;
  const clientContextFile = codeModel.project.createSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }/api/${normalizeName(name, NameType.File)}Context.ts`
  );

  importCredential(codeModel.runtimeImports, clientContextFile);
  importModels(
    srcPath,
    clientContextFile,
    codeModel.project,
    subfolder !== "" ? 1 : 0
  );
  clientContextFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("restClient", codeModel.runtimeImports),
    namedImports: ["ClientOptions", "Client", "getClient"]
  });

  addDeclaration(
    clientContextFile,
    {
      kind: StructureKind.Interface,
      isExported: true,
      name: `${client.rlcClientName}`,
      extends: ["Client"]
    },
    client
  );

  addDeclaration(
    clientContextFile,
    {
      kind: StructureKind.Interface,
      name: `${name}ClientOptionalParams`,
      isExported: true,
      extends: ["ClientOptions"],
      properties: client.parameters
        .filter((p) => {
          return (
            p.optional || (p.type.type !== "constant" && p.clientDefaultValue)
          );
        })
        .map((p) => {
          return {
            name: p.clientName,
            type: getType(p.type).name,
            hasQuestionToken: true,
            docs: getDocsFromDescription(p.description)
          };
        }),
      docs: ["Optional parameters for the client."]
    },
    client.parameters
  );

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
    returnType: `${client.rlcClientName}`,
    parameters: params,
    isExported: true
  });

  const endpointParam = buildGetClientEndpointParam(factoryFunction, client);
  const credentialParam = buildGetClientCredentialParam(client, codeModel);
  const optionsParam = buildGetClientOptionsParam(
    factoryFunction,
    codeModel,
    endpointParam
  );

  factoryFunction.addStatements(
    `const clientContext = getClient(${endpointParam}, ${credentialParam}, ${optionsParam});`
  );

  const { customHttpAuthHeaderName, customHttpAuthSharedKeyPrefix } =
    codeModel.options;

  if (customHttpAuthHeaderName && customHttpAuthSharedKeyPrefix) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier: getImportSpecifier("coreAuth", codeModel.runtimeImports),
      namedImports: ["isKeyCredential"]
    });

    factoryFunction.addStatements(`
      if(isKeyCredential(credential)) {
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
    const apiVersionParam = client.parameters.find((x) => x.isApiVersion);

    if (apiVersionParam?.location === "query") {
      if (apiVersionParam.clientDefaultValue) {
        apiVersionPolicyStatement += `const ${apiVersionParam.clientName} = options.${apiVersionParam.clientName} ?? "${apiVersionParam.clientDefaultValue}";`;
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
            }api-version=\${${apiVersionParam.clientName}}\`;
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
