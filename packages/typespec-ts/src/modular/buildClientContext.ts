import {
  FunctionDeclaration,
  OptionalKind,
  ParameterDeclarationStructure,
  Project,
  SourceFile
} from "ts-morph";
import { getParameterType } from "./helpers/parameterHelpers.js";
import { Client, Parameter } from "./modularCodeModel.js";

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  client: Client,
  project: Project,
  srcPath: string = "src"
): SourceFile {
  const { description, parameters } = client;
  const name = getClientName(client);
  const clientContextFile = project.createSourceFile(
    `${srcPath}/src/api/${name}Context.ts`
  );

  const factoryFunction = clientContextFile.addFunction({
    docs: [description],
    name: `create${name}`,
    returnType: `${name}Context`,
    parameters: getClientParameters(client),
    isExported: true
  });

  const credentialsParam = parameters.find(
    (p) => p.clientName === "credential"
  );

  const baseUrlParam: Parameter | undefined = parameters.find(
    (p) => p.location === "endpointPath"
  );

  let baseUrl: string | undefined = "endpoint";
  if (baseUrlParam) {
    baseUrl =
      baseUrlParam.type.type === "constant"
        ? baseUrlParam.type.value
        : baseUrlParam.clientName;
  }

  factoryFunction.addStatements([`const baseUrl = ${baseUrl}`]);
  let getClientStatement = `const clientContext = getClient(baseUrl, options)`;

  // If the client needs credentials we need to pass those to getClient
  if (credentialsParam) {
    importCredential(credentialsParam, clientContextFile);
    addCredentialOptionsStatement(credentialsParam, factoryFunction);
    getClientStatement = `const clientContext = getClient(baseUrl, credential, options)`;
  }

  factoryFunction.addStatements([getClientStatement, "return clientContext;"]);

  clientContextFile.addImportDeclarations([
    {
      moduleSpecifier: "../rest/index.js",
      defaultImport: "getClient"
    }
  ]);

  clientContextFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );

  return clientContextFile;
}

/**
 * This function adds the statements to pass the credential to getClient
 */
function addCredentialOptionsStatement(
  credential: Parameter,
  factoryFunction: FunctionDeclaration
): void {
  switch (credential.type.type) {
    case "Key":
      if (!credential.type.policy?.key) {
        throw new Error(`Key credential does not define a header name`);
      }
      factoryFunction.addStatements(
        `options.credentials = {...options.credentials, apiKeyHeaderName: "${credential.type.policy.key}"}`
      );
      return;
    default:
      return;
  }
}

/**
 * Thuis function adds an import to the soruce file to import the right credential
 */
function importCredential(
  credential: Parameter,
  clientSourceFile: SourceFile
): void {
  switch (credential.type.type) {
    case "Key":
      clientSourceFile.addImportDeclaration({
        moduleSpecifier: "@azure/core-auth",
        namedImports: ["AzureKeyCredential"]
      });
      return;
    case "OAuth2":
      clientSourceFile.addImportDeclaration({
        moduleSpecifier: "@azure/core-auth",
        namedImports: ["TokenCredential"]
      });
      return;
    default:
      throw new Error(
        `Credential of type ${credential.type.type} is not yet supported`
      );
  }
}

function getClientParameters({ parameters, name }: Client) {
  let optionsParam = {
    name: "options",
    type: `${name}Options`,
    initializer: "{}"
  };

  if (
    !parameters
      .filter((p) => p.implementation === "Client" && !p.isApiVersion)
      .some((p) => p.optional || (!p.optional && p.clientDefaultValue))
  ) {
    optionsParam = {
      name: "options",
      type: `ClientOptions`,
      initializer: "{}"
    };
  }

  const signatureParams = [
    ...parameters
      .filter((p) => p.type.type !== "constant")
      .map<OptionalKind<ParameterDeclarationStructure>>((p) => {
        return {
          name: p.clientName,
          type: getParameterType(p)
        };
      }),
    optionsParam
  ];

  return signatureParams;
}

export function getClientName(client: Client) {
  return client.name.replace(/Client$/, "");
}
