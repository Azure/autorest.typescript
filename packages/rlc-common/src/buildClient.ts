// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  InterfaceDeclarationStructure,
  OptionalKind,
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure,
  WriterFunction
} from "ts-morph";
import * as path from "path";
import { NameType, normalizeName } from "./helpers/nameUtils.js";
import { isConstantSchema } from "./helpers/schemaHelpers.js";
import { buildMethodShortcutImplementation } from "./buildMethodShortcuts.js";
import { RLCModel, Schema, File, PathParameter } from "./interfaces.js";
import {
  getClientName,
  getImportModuleName
} from "./helpers/nameConstructors.js";

function getClientOptionsInterface(
  clientName: string,
  optionalUrlParameters?: PathParameter[]
): OptionalKind<InterfaceDeclarationStructure> | undefined {
  if (!optionalUrlParameters || optionalUrlParameters.length === 0) {
    return undefined;
  }

  const properties = optionalUrlParameters.map((param) => {
    return {
      name: param.name,
      type: param.type,
      hasQuestionToken: true
    };
  });

  return {
    name: `${clientName}Options`,
    extends: ["ClientOptions"],
    isExported: true,
    properties
  };
}

export function buildClient(model: RLCModel): File | undefined {
  const name = normalizeName(model.libraryName, NameType.File);
  const { srcPath, options } = model;
  const project = new Project();
  const filePath = path.join(srcPath, `${name}.ts`);
  const clientFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  // Get all paths
  const clientInterfaceName = getClientName(model);

  normalizeUrlInfo(model);
  const urlParameters = model?.urlInfo?.urlParameters?.filter(
    // Do not include parameters with constant values in the signature, these should go in the options bag
    (p) => p.value === undefined
  );

  const optionalUrlParameters = model?.urlInfo?.urlParameters?.filter(
    // Do not include parameters with constant values in the signature, these should go in the options bag
    (p) => Boolean(p.value)
  );

  const clientOptionsInterface = getClientOptionsInterface(
    clientInterfaceName,
    optionalUrlParameters
  );

  if (clientOptionsInterface) {
    clientFile.addInterface(clientOptionsInterface);
  }

  if (!model.options) {
    return undefined;
  }
  const { multiClient, batch } = model.options;
  const { addCredentials, credentialScopes, credentialKeyHeaderName } =
    model.options;
  const credentialTypes =
    credentialScopes && credentialScopes.length > 0 ? ["TokenCredential"] : [];

  if (credentialKeyHeaderName) {
    credentialTypes.push("KeyCredential");
  }

  const commonClientParams = [
    ...(urlParameters ?? []),
    ...(addCredentials === false ||
    !isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
      ? []
      : [
          {
            name: "credentials",
            type: credentialTypes.join(" | "),
            description: `uniquely identify client credential`
          }
        ])
  ];

  const allClientParams = [
    ...commonClientParams,
    {
      name: "options",
      type: `${clientOptionsInterface?.name ?? "ClientOptions"} = {}`,
      description: "the parameter for all optional parameters"
    }
  ];
  const functionStatement = {
    isExported: true,
    name: `createClient`,
    parameters: allClientParams,
    docs: [
      {
        description:
          `Initialize a new instance of \`${clientInterfaceName}\` \n` +
          allClientParams
            .map((param) => {
              return `@param ${param.name} type: ${param.type
                .split("=")[0]
                .split(" ")
                .join("")}, ${
                param.description ?? "The parameter " + param.name
              }`;
            })
            .join("\n")
      }
    ],
    returnType: clientInterfaceName,
    isDefaultExport: false,
    statements: getClientFactoryBody(model, clientInterfaceName)
  };

  if (!multiClient || !batch || batch.length === 1) {
    functionStatement.isDefaultExport = true;
  }
  clientFile.addFunction(functionStatement);

  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  if (
    addCredentials &&
    isSecurityInfoDefined(credentialScopes, credentialKeyHeaderName)
  ) {
    clientFile.addImportDeclarations([
      {
        namedImports: credentialTypes,
        moduleSpecifier: "@azure/core-auth"
      }
    ]);
  }
  clientFile.addImportDeclarations([
    {
      namedImports: [`${clientInterfaceName}`],
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./clientDefinitions",
          esModulesName: "./clientDefinitions.js"
        },
        model
      )
    }
  ]);
  return { path: filePath, content: clientFile.getFullText() };
}

function isSecurityInfoDefined(
  credentialScopes?: string[],
  credentialKeyHeaderName?: string
) {
  return (
    (credentialScopes && credentialScopes.length > 0) || credentialKeyHeaderName
  );
}

function getClientFactoryBody(
  model: RLCModel,
  clientTypeName: string
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
  if (!model.options || !model.options.packageDetails || !model.urlInfo) {
    return "";
  }
  const { includeShortcuts, packageDetails } = model.options;
  let clientPackageName = packageDetails.nameWithoutScope ?? "";
  const packageVersion = packageDetails.version;
  const { endpoint, urlParameters } = model.urlInfo;

  const optionalUrlParameters: string[] = [];

  for (const param of urlParameters ?? []) {
    if (param.value) {
      const value =
        typeof param.value === "string" ? `"${param.value}"` : param.value;
      optionalUrlParameters.push(
        `const ${param.name} = options.${param.name} ?? ${value}`
      );
    }
  }

  let baseUrl: string;
  if (urlParameters && endpoint) {
    let parsedEndpoint = endpoint;
    urlParameters.forEach((urlParameter) => {
      parsedEndpoint = parsedEndpoint.replace(
        `{${urlParameter.name}}`,
        `\${${urlParameter.name}}`
      );
    });

    baseUrl = `options.baseUrl ?? \`${parsedEndpoint}\``;
  } else {
    baseUrl = `options.baseUrl ?? "${endpoint}"`;
  }

  let apiVersionStatement: string = "";
  // Set the default api-version when we have a default AND its position is query/none
  if (
    (model.apiVersionInfo?.definedPosition === "query" ||
      model.apiVersionInfo?.definedPosition === "none") &&
    !!model.apiVersionInfo?.defaultValue
  ) {
    apiVersionStatement = `options.apiVersion = options.apiVersion ?? "${model.apiVersionInfo?.defaultValue}"`;
  }

  if (!clientPackageName.endsWith("-rest")) {
    clientPackageName = clientPackageName + "-rest";
  }
  const userAgentInfoStatement =
    "const userAgentInfo = `azsdk-js-" +
    clientPackageName +
    "/" +
    packageVersion +
    "`;";
  const userAgentPrefix =
    "options.userAgentOptions && options.userAgentOptions.userAgentPrefix ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`: `${userAgentInfo}`;";
  const userAgentStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "userAgentPrefix", initializer: userAgentPrefix }]
  };

  const userAgentOptionsStatement = `options = {
      ...options,
      userAgentOptions: {
        userAgentPrefix
      }
    }`;

  const baseUrlStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "baseUrl", initializer: baseUrl }]
  };

  const { credentialScopes, credentialKeyHeaderName } = model.options;

  const scopesString =
    credentialScopes && credentialScopes.length
      ? credentialScopes.map((cs) => `"${cs}"`).join(", ")
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
        },
      }`
      : "";

  const getClient = `const client = getClient(
        baseUrl, ${credentials ? "credentials," : ""} options
      ) as ${clientTypeName};
      `;

  let returnStatement = `return client;`;

  if (includeShortcuts) {
    const shortcutImplementations = buildMethodShortcutImplementation(
      model.paths
    );
    const shortcutBody = Object.keys(shortcutImplementations).map((key) => {
      // If the operation group has an empty name, it means its operations are client
      // level operations so we need to spread the definitions. Otherwise they are
      // within an operation group so we add them as key: value
      return `${
        key && key !== "client" ? `"${key}":` : "..."
      } {${shortcutImplementations[key].join()}}`;
    });
    returnStatement = `return { ...client, ${shortcutBody.join()} };`;
  }

  return [
    ...optionalUrlParameters,
    baseUrlStatement,
    apiVersionStatement,
    credentials,
    userAgentInfoStatement,
    userAgentStatement,
    userAgentOptionsStatement,
    getClient,
    returnStatement
  ];
}

function normalizeUrlInfo(model: RLCModel) {
  if (
    !model ||
    !model.urlInfo ||
    !model.urlInfo.endpoint ||
    !model.urlInfo.urlParameters ||
    model.urlInfo.urlParameters.length === 0
  ) {
    return;
  }

  let parsedEndpoint = model.urlInfo.endpoint;
  const urlParameters = model.urlInfo.urlParameters;
  urlParameters.forEach((urlParameter) => {
    const name = urlParameter.name;
    const normalizedName = normalizeName(name, NameType.Parameter);
    if (name !== normalizedName) {
      urlParameter.name = normalizedName;
      parsedEndpoint = parsedEndpoint.replace(
        `{${name}}`,
        `{${normalizedName}}`
      );
    }
  });
  model.urlInfo.endpoint = parsedEndpoint;
}
