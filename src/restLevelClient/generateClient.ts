import {
  CodeModel,
  Operation,
  ParameterLocation,
  ImplementationLocation
} from "@autorest/codemodel";

import { getResponseTypeName } from "./operationHelpers";

import {
  CallSignatureDeclarationStructure,
  MethodSignatureStructure,
  OptionalKind,
  Project,
  SourceFile,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
  VariableStatementStructure,
  WriterFunction,
  Writers
} from "ts-morph";

import { getAutorestOptions, getSession } from "../autorestSession";
import { transformBaseUrl } from "../transforms/urlTransforms";
import { NameType, normalizeName } from "../utils/nameUtils";
import { isConstantSchema } from "./schemaHelpers";
import { getLanguageMetadata } from "../utils/languageHelpers";
type PathParameter = { name: string; description?: string };

type Methods = {
  [key: string]: [
    {
      optionsName: string;
      description: string;
      hasOptionalOptions: boolean;
      returnType: string;
    }
  ];
};
type Paths = {
  [key: string]: {
    name: string;
    pathParameters: PathParameter[];
    methods: Methods;
  };
};

export function generatePathFirstClient(model: CodeModel, project: Project) {
  const name = normalizeName(
    getLanguageMetadata(model.language).name,
    NameType.File
  );
  const clientFile = project.createSourceFile(`src/${name}.ts`, undefined, {
    overwrite: true
  });

  // Get all paths
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const pathDictionary: Paths = {};
  for (const operationGroup of model.operationGroups) {
    for (const operation of operationGroup.operations) {
      const operationName = getLanguageMetadata(operation.language).name;
      const operationDescription = getLanguageMetadata(operation.language)
        .description;
      const pathParameters: PathParameter[] =
        operation.parameters
          ?.filter(p => p.protocol.http?.in === ParameterLocation.Path)
          .map(p => {
            const languageMetadata = getLanguageMetadata(p.language);
            return {
              name: languageMetadata.serializedName || languageMetadata.name,
              description: languageMetadata.description
            };
          }) || [];

      for (const request of operation.requests || []) {
        const path: string = (request.protocol.http?.path as string) || "";
        const method = request.protocol.http?.method;

        if (path && method) {
          if (!pathDictionary[path]) {
            pathDictionary[path] = {
              pathParameters,
              methods: {},
              name: operationName
            };
          }
          const hasOptionalOptions = !request.signatureParameters?.some(
            p => p.required
          );

          const newMethod = {
            description: operationDescription,
            optionsName: getOperationOptionsType(operation, importedParameters),
            hasOptionalOptions,
            returnType: `Promise<${getOperationReturnType(
              operation,
              importedResponses
            )}>`
          };

          if (pathDictionary[path].methods[`${method}`]) {
            pathDictionary[path].methods[`${method}`].push(newMethod);
          } else {
            pathDictionary[path].methods[`${method}`] = [newMethod];
          }
        }
      }
    }
  }

  clientFile.addInterface({
    name: "Routes",
    isExported: true,
    callSignatures: getPathFirstRoutesInterfaceDefinition(
      pathDictionary,
      clientFile
    )
  });

  const clientName = getLanguageMetadata(model.language).name;
  const uriParameter = getClientUriParameter();

  const { addCredentials, credentialKeyHeaderName } = getAutorestOptions();
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
  const clientIterfaceName = `${clientName}RestClient`;
  // const factoryTypeName = `${clientName}Factory`;
  clientFile.addTypeAlias({
    isExported: true,
    name: clientIterfaceName,
    type: Writers.intersectionType(
      "Client",
      Writers.objectType({ properties: [{ name: "path", type: "Routes" }] })
    )
  });

  clientFile.addFunction({
    isExported: true,
    name: clientName,
    parameters: [
      ...commonClientParams,
      { name: "options", type: "ClientOptions = {}" }
    ],
    returnType: clientIterfaceName,
    isDefaultExport: true,
    statements: getClientFactoryBody(clientIterfaceName)
  });

  if (importedParameters.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedParameters],
      moduleSpecifier: "./parameters"
    });
  }

  if (importedResponses.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedResponses],
      moduleSpecifier: "./responses"
    });
  }

  clientFile.addImportDeclarations([
    {
      namedImports: ["getClient", "ClientOptions", "Client"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  clientFile.addImportDeclarations([
    {
      namedImports: credentialTypes,
      moduleSpecifier: "@azure/core-auth"
    }
  ]);
}

function getOperationOptionsType(
  operation: Operation,
  importedParameters = new Set<string>()
) {
  const paramsName = `${
    getLanguageMetadata(operation.language).name
  }Parameters`;
  importedParameters.add(paramsName);

  return paramsName;
}

function getClientFactoryBody(
  clientTypeName: string
): string | WriterFunction | (string | WriterFunction | StatementStructures)[] {
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

  const getClient = `return getClient(
      baseUrl,
      ${credentials ? "credentials," : ""}
      options
    ) as ${clientTypeName};`;

  return [baseUrlStatement, apiVersionStatement, credentials, getClient];
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

function getOperationReturnType(
  operation: Operation,
  importedResponses = new Set<string>()
) {
  let returnType: string = "HttpResponse";
  if (operation.responses && operation.responses.length) {
    const responses = [...operation.responses, ...(operation.exceptions || [])];

    const responseTypes = responses
      .filter(
        r => r.protocol.http?.statusCodes && r.protocol.http?.statusCodes.length
      )
      .map(r => {
        const responseName = getResponseTypeName(operation, r);
        importedResponses.add(responseName);
        return responseName;
      });

    if (responseTypes.length) {
      returnType = responseTypes.join(" | ");
    }
  }

  return returnType;
}

function getPathFirstRoutesInterfaceDefinition(
  paths: Paths,
  sourcefile: SourceFile
): CallSignatureDeclarationStructure[] {
  const signatures: CallSignatureDeclarationStructure[] = [];
  for (const key of Object.keys(paths)) {
    generatePathFirstRouteMethodsDefinition(
      paths[key].name,
      paths[key].methods,
      sourcefile
    );
    const pathParams = paths[key].pathParameters;
    signatures.push({
      docs: [
        `Resource for '${key
          .replace(/}/g, "\\}")
          .replace(
            /{/g,
            "\\{"
          )}' has methods for the following verbs: ${Object.keys(
          paths[key].methods
        ).join(", ")}`
      ],
      parameters: [
        { name: "path", type: `"${key}"` },
        ...pathParams.map(p => {
          return { name: p.name, type: "string", description: p.description };
        })
      ],
      returnType: paths[key].name,
      kind: StructureKind.CallSignature
    });
  }
  return signatures;
}

function getClientUriParameter() {
  const { model } = getSession();
  const { parameterName } = transformBaseUrl(model);
  return parameterName;
}

function generatePathFirstRouteMethodsDefinition(
  operationName: string,
  methods: Methods,
  file: SourceFile
): void {
  const methodDefinitions: OptionalKind<MethodSignatureStructure>[] = [];
  for (const key of Object.keys(methods)) {
    const method = methods[key];
    const description = methods[key][0].description;

    let areAllOptional = !method.some(m => !m.hasOptionalOptions);

    methodDefinitions.push({
      name: key,
      ...(description && { docs: [{ description }] }),
      parameters: [
        {
          name: "options",
          hasQuestionToken: areAllOptional,
          type: method.map(m => m.optionsName).join(" | ")
        }
      ],
      returnType: method.map(m => m.returnType).join(" | ")
    });
  }

  file.addInterface({
    methods: methodDefinitions,
    name: operationName,
    isExported: true
  });
}
