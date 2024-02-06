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
import { buildMethodShortcutImplementation } from "./buildMethodShortcuts.js";
import { RLCModel, File, PathParameter } from "./interfaces.js";
import {
  getClientName,
  getImportModuleName
} from "./helpers/nameConstructors.js";
import { getImportSpecifier } from "./helpers/importsUtil.js";

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
  const { srcPath } = model;
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
  const {
    addCredentials,
    credentialScopes,
    credentialKeyHeaderName,
    customHttpAuthHeaderName,
    customHttpAuthSharedKeyPrefix,
    branded
  } = model.options;
  const credentialTypes = credentialScopes ? ["TokenCredential"] : [];

  if (credentialKeyHeaderName || customHttpAuthHeaderName) {
    credentialTypes.push("KeyCredential");
  }

  const commonClientParams = [
    ...(urlParameters ?? []),
    ...(addCredentials === false ||
    !isSecurityInfoDefined(
      credentialScopes,
      credentialKeyHeaderName,
      customHttpAuthHeaderName
    )
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
              return `@param ${param.name} - ${
                param.description ?? "The parameter " + param.name
              }`;
            })
            .join("\n")
      }
    ],
    returnType: clientInterfaceName,
    isDefaultExport: false,
    statements: getClientFactoryBody(
      model,
      clientInterfaceName,
      credentialTypes.length > 1
    )
  };

  if (!multiClient || !batch || batch.length === 1) {
    functionStatement.isDefaultExport = true;
  }
  clientFile.addFunction(functionStatement);

  const paths = srcPath.replace(/\//g, path.sep).split(path.sep);
  while (paths.length > 0 && paths[paths.length - 1] === "") {
    paths.pop();
  }
  const parentPath =
    paths.lastIndexOf("src") > -1
      ? paths.length - 1 - paths.lastIndexOf("src")
      : 0;

  const loggerPath = `${
    parentPath > 0 ? "../".repeat(parentPath) : "./"
  }logger`;
  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions"],
      moduleSpecifier: getImportSpecifier(
        "restClient",
        model.importInfo.runtimeImports
      )
    }
  ]);
  if (branded !== false) {
    clientFile.addImportDeclarations([
      {
        namedImports: ["logger"],
        moduleSpecifier: getImportModuleName(
          {
            cjsName: loggerPath,
            esModulesName: `${loggerPath}.js`
          },
          model
        )
      }
    ]);
  }

  const includeKeyCredentialHelper =
    customHttpAuthHeaderName &&
    customHttpAuthSharedKeyPrefix &&
    credentialTypes.length > 1 &&
    credentialTypes.includes("KeyCredential");
  if (
    addCredentials &&
    isSecurityInfoDefined(
      credentialScopes,
      credentialKeyHeaderName,
      customHttpAuthHeaderName
    )
  ) {
    clientFile.addImportDeclarations([
      {
        namedImports: credentialTypes.concat(
          includeKeyCredentialHelper ? ["isKeyCredential"] : []
        ),
        moduleSpecifier: getImportSpecifier(
          "coreAuth",
          model.importInfo.runtimeImports
        )
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
  credentialKeyHeaderName?: string,
  customHttpAuthHeaderName?: string
) {
  return (
    credentialScopes || credentialKeyHeaderName || customHttpAuthHeaderName
  );
}

export function getClientFactoryBody(
  model: RLCModel,
  clientTypeName: string,
  isMultipleCredential: boolean
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
  if (!model.options || !model.options.packageDetails || !model.urlInfo) {
    return "";
  }
  const { includeShortcuts, packageDetails, branded, addCredentials } =
    model.options;
  let clientPackageName =
    packageDetails!.nameWithoutScope ?? packageDetails?.name ?? "";
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
  // Set the default api-version when we have a default AND its position is query
  if (
    (model.apiVersionInfo?.definedPosition === "query") &&
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

  const customHeaderOptions = model.telemetryOptions?.customRequestIdHeaderName
    ? `,
    telemetryOptions: {
      clientRequestIdHeaderName:
        options.telemetryOptions?.clientRequestIdHeaderName ??
        "${model.telemetryOptions?.customRequestIdHeaderName}"
    }`
    : "";

  const baseUrlStatement: VariableStatementStructure = {
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "baseUrl", initializer: baseUrl }]
  };

  const { credentialScopes, credentialKeyHeaderName } = model.options;
  const scopesString = credentialScopes
    ? credentialScopes.map((cs) => `"${cs}"`).join(", ") ||
      "`${baseUrl}/.default`"
    : "";
  const scopes = scopesString
    ? `scopes: options.credentials?.scopes ?? [${scopesString}],`
    : "";

  const apiKeyHeaderName = credentialKeyHeaderName
    ? `apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "${credentialKeyHeaderName}",`
    : "";
  const loggerOptions =
    branded !== false
      ? `,
  loggingOptions: {
    logger: options.loggingOptions?.logger ?? logger.info
  }`
      : "";

  const credentialsOptions =
    (scopes || apiKeyHeaderName) && addCredentials
      ? `,
      credentials: {
        ${scopes}
        ${apiKeyHeaderName}
      }`
      : "";
  const overrideOptionsStatement = `options = {
        ...options,
        userAgentOptions: {
          userAgentPrefix
        }${loggerOptions}${customHeaderOptions}${credentialsOptions}
      }`;

  const getClient = `const client = getClient(
        baseUrl, ${credentialsOptions ? "credentials," : ""} options
      ) as ${clientTypeName};
      `;
  const { customHttpAuthHeaderName, customHttpAuthSharedKeyPrefix } =
    model.options;
  let customHttpAuthStatement = "";
  if (customHttpAuthHeaderName && customHttpAuthSharedKeyPrefix) {
    if (isMultipleCredential) {
      customHttpAuthStatement = `if (isKeyCredential(credentials)) {
        client.pipeline.addPolicy({
          name: "customKeyCredentialPolicy",
          async sendRequest(request, next) {
            request.headers.set("Authorization", "bearer " + credentials.key);
            return next(request);
          },
        });
      }`;
    } else {
      customHttpAuthStatement = `
      client.pipeline.addPolicy({
        name: "customKeyCredentialPolicy",
        async sendRequest(request, next) {
          request.headers.set("${customHttpAuthHeaderName}", "${customHttpAuthSharedKeyPrefix} " + credentials.key);
          return next(request);
        }
      });`;
    }
  }

  let apiVersionPolicyStatement = "";
  if (model.apiVersionInfo?.definedPosition !== "query") {
    apiVersionPolicyStatement = "client.pipeline.removePolicy({name: 'ApiVersionPolicy'})";
  }
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
    userAgentInfoStatement,
    userAgentStatement,
    overrideOptionsStatement,
    getClient,
    apiVersionPolicyStatement,
    customHttpAuthStatement,
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
