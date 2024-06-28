import {
  getImportSpecifier,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import { SourceFile } from "ts-morph";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { SdkContext } from "../utils/interfaces.js";
import { importModels } from "./buildOperations.js";
import {
  getClientParameters,
  importCredential
} from "./helpers/clientHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { getType } from "./helpers/typeHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";

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

  let factoryFunction;
  importCredential(codeModel.runtimeImports, clientContextFile);
  importModels(srcPath, clientContextFile, codeModel.project, subfolder);
  clientContextFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("restClient", codeModel.runtimeImports),
    namedImports: ["ClientOptions"]
  });

  clientContextFile.addInterface({
    name: `${name}ClientOptions`,
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
      })
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
