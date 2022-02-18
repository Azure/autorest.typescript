import {
  CodeModel,
  Operation,
  ParameterLocation,
  ImplementationLocation
} from "@autorest/codemodel";

import {
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure,
  WriterFunction
} from "ts-morph";
import * as path from 'path';

import { getAutorestOptions, getSession } from "../autorestSession";
import { transformBaseUrl } from "../transforms/urlTransforms";
import { NameType, normalizeName } from "../utils/nameUtils";
import { isConstantSchema } from "./schemaHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { generateMethodShortcutImplementation } from "./generateMethodShortcuts";
import { Paths } from "./interfaces";
import { pathDictionary } from './generateClientDefinition';

export function generateClient(model: CodeModel, project: Project) {
  const name = normalizeName(
    getLanguageMetadata(model.language).name,
    NameType.File
  );
  const { srcPath } = getAutorestOptions();
  const clientFile = project.createSourceFile(path.join(srcPath, `${name}.ts`), undefined, {
    overwrite: true
  });

  // Get all paths
  const clientName = getLanguageMetadata(model.language).name;
  const uriParameter = getClientUriParameter();

  const { addCredentials, credentialKeyHeaderName, multiClient } = getAutorestOptions();
  const credentialTypes = addCredentials ? ["TokenCredential"] : [];

  if (credentialKeyHeaderName) {
    credentialTypes.push("KeyCredential");
  }

  const commonClientParams = [
    ...(uriParameter ? [{ name: uriParameter, type: "string" }] : []),
    ...(addCredentials === false
      ? []
      : [{ name: "credentials", type: credentialTypes.join(" | ") }])
  ];
  const clientInterfaceName = `${clientName}RestClient`;

  const functionStatement = {
    isExported: true,
    name: `${clientName}`,
    parameters: [
      ...commonClientParams,
      { name: "options", type: "ClientOptions = {}" }
    ],
    returnType: clientInterfaceName,
    isDefaultExport: false,
    statements: getClientFactoryBody(clientInterfaceName, pathDictionary)
  }

  if (!multiClient) {
    functionStatement.isDefaultExport = true;
  }
  clientFile.addFunction(functionStatement);

  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  clientFile.addImportDeclarations([
    {
      namedImports: credentialTypes,
      moduleSpecifier: "@azure/core-auth"
    },
    {
      namedImports: [`${clientName}RestClient`],
      moduleSpecifier: './clientDefinitions'
    }
  ]);
}

function getClientFactoryBody(
  clientTypeName: string,
  paths: Paths
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
  const { rlcShortcut } = getAutorestOptions();
  const { model } = getSession();
  const { endpoint, parameterName } = transformBaseUrl(model);
  let baseUrl: string;
  if (parameterName) {
    const parsedEndpoint = endpoint?.replace(
      `{${parameterName}}`,
      `\${${parameterName}}`
    );
    baseUrl = `options.baseUrl ?? \`${parsedEndpoint}\``;
  } else {
    baseUrl = `options.baseUrl ?? "${endpoint}"`;
  }

  const apiVersion = getApiVersion();
  let apiVersionStatement: string = "";
  if (apiVersion) {
    apiVersionStatement = `options.apiVersion = options.apiVersion ?? "${apiVersion}"`;
  }

  const baseUrlStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "baseUrl", initializer: baseUrl }]
  };

  const { credentialScopes, credentialKeyHeaderName } = getAutorestOptions();

  const scopesString =
    credentialScopes && credentialScopes.length
      ? credentialScopes.map(cs => `"${cs}"`).join(", ")
      : "";
  const scopes = scopesString ? `scopes: [${scopesString}],` : "";

  const apiKeyHeaderName = credentialKeyHeaderName
    ? `apiKeyHeaderName: "${credentialKeyHeaderName}",`
    : "";

  const credentials =
    scopes || apiKeyHeaderName
      ? `options = {
      ...options,
      credentials: {
        ${scopes}
        ${apiKeyHeaderName}
      }
    }`
      : "";

  const getClient = `const client = getClient(
      baseUrl, ${credentials ? "credentials," : ""} options
    ) as ${clientTypeName};
    `;

  let returnStatement = `return client;`;

  if (rlcShortcut) {
    const shortcutImplementations = generateMethodShortcutImplementation(
      model,
      paths
    );
    const shortcutBody = Object.keys(shortcutImplementations).map(key => {
      // If the operation group has an empty name, it means its operations are client
      // level operations so we need to spread the definitions. Otherwise they are
      // within an operation group so we add them as key: value
      return `${key ? `"${key}":` : "..."} {${shortcutImplementations[
        key
      ].join()}}`;
    });
    returnStatement = `return { ...client, ${shortcutBody.join()} };`;
  }

  return [
    baseUrlStatement,
    apiVersionStatement,
    credentials,
    getClient,
    returnStatement
  ];
}

function getApiVersion(): string | undefined {
  const { model } = getSession();
  if (!model.globalParameters || !model.globalParameters.length) {
    return undefined;
  }

  const apiVersionParam = model.globalParameters
    .filter(
      gp =>
        gp.implementation === ImplementationLocation.Client &&
        gp.protocol.http?.in === ParameterLocation.Query
    )
    .find(
      param =>
        getLanguageMetadata(param.language).serializedName === "api-version"
    );

  if (apiVersionParam && isConstantSchema(apiVersionParam.schema)) {
    return apiVersionParam.schema.value.value.toString();
  }

  return undefined;
}

function getClientUriParameter() {
  const { model } = getSession();
  const { parameterName } = transformBaseUrl(model);
  return parameterName;
}
