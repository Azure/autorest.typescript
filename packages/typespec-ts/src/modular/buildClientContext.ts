import { FunctionDeclaration, Project, SourceFile } from "ts-morph";
import { getClientParameters } from "./helpers/clientHelpers.js";
import { importCredential } from "./helpers/credentialHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
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

  clientContextFile.addImportDeclaration({
    moduleSpecifier: "../rest/index.js",
    namedImports: [`${client.name}Context`]
  });

  clientContextFile.addExportDeclaration({
    moduleSpecifier: "../rest/index.js",
    namedExports: [`${client.name}Context`]
  });
  // clientContextFile.addExportAssignment({
  //   expression: `${client.name}Context`
  // });

  const factoryFunction = clientContextFile.addFunction({
    docs: [description],
    name: `create${name}`,
    returnType: `${client.name}Context`,
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
    importCredential(credentialsParam.type, clientContextFile);
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
