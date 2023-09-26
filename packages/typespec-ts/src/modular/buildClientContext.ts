import { SourceFile } from "ts-morph";
import {
  getClientParameters,
  importCredential
} from "./helpers/clientHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { importModels } from "./buildOperations.js";
import { SdkContext } from "../utils/interfaces.js";

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client
): SourceFile {
  const { description, subfolder } = client;
  const name = getClientName(client);
  const params = getClientParameters(client);
  const srcPath = codeModel.modularOptions.sourceRoot;
  const clientContextFile = codeModel.project.createSourceFile(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }/api/${name}Context.ts`
  );

  let factoryFunction;
  importCredential(clientContextFile);
  importModels(srcPath, clientContextFile, codeModel.project, subfolder);
  clientContextFile.addImportDeclaration({
    moduleSpecifier: "@azure-rest/core-client",
    namedImports: ["ClientOptions"]
  });

  clientContextFile.addInterface({
    name: `${name}ClientOptions`,
    isExported: true,
    extends: ["ClientOptions"]
  });

  if (isRLCMultiEndpoint(dpgContext)) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier: `../../rest/${subfolder}/index.js`,
      namedImports: [`Client`]
    });

    clientContextFile.addExportDeclaration({
      moduleSpecifier: `../../rest/${subfolder}/index.js`,
      namedExports: [`Client`]
    });
    factoryFunction = clientContextFile.addFunction({
      docs: getDocsFromDescription(description),
      name: `create${name}`,
      returnType: `Client.${client.name}`,
      parameters: params,
      isExported: true
    });
  } else {
    const rlcClientName = client.rlcClientName;
    clientContextFile.addImportDeclaration({
      moduleSpecifier: `${
        subfolder && subfolder !== "" ? "../" : ""
      }../rest/index.js`,
      namedImports: [`${rlcClientName}`]
    });

    clientContextFile.addExportDeclaration({
      moduleSpecifier: `${
        subfolder && subfolder !== "" ? "../" : ""
      }../rest/index.js`,
      namedExports: [`${rlcClientName}`]
    });

    factoryFunction = clientContextFile.addFunction({
      docs: getDocsFromDescription(description),
      name: `create${name}`,
      returnType: `${rlcClientName}`,
      parameters: params,
      isExported: true
    });
  }

  const paramNames = params.map((p) => p.name);
  const getClientStatement = `const clientContext = getClient(${paramNames.join(
    ","
  )})`;

  factoryFunction.addStatements([getClientStatement, "return clientContext;"]);

  if (isRLCMultiEndpoint(dpgContext)) {
    clientContextFile.addImportDeclarations([
      {
        moduleSpecifier: `../../rest/${subfolder}/index.js`,
        namedImports: ["createClient as getClient"]
      }
    ]);
  } else {
    clientContextFile.addImportDeclarations([
      {
        moduleSpecifier: `${
          subfolder && subfolder !== "" ? "../" : ""
        }../rest/index.js`,
        defaultImport: "getClient"
      }
    ]);
  }

  clientContextFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );

  clientContextFile.fixUnusedIdentifiers();
  return clientContextFile;
}
