// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  PropertyDeclarationStructure,
  ConstructorDeclaration,
  CodeBlockWriter,
  ClassDeclaration,
  SourceFile
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { ParameterDetails } from "../models/parameterDetails";
import { ImplementationLocation, SchemaType } from "@autorest/codemodel";
import { EndpointDetails } from "../transforms/urlTransforms";
import { formatJsDocParam } from "./utils/parameterUtils";
import { getAutorestOptions } from "../autorestSession";

export function generateClientContext(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const {
    useCoreV2,
    hideClients,
    addCredentials,
    srcPath
  } = getAutorestOptions();

  const importedModels = new Set<string>();
  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );

  const hasLro = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLro)
  );

  const clientContextClassName = `${clientDetails.className}Context`;
  const clientContextFileName = normalizeName(
    clientContextClassName,
    NameType.File
  );

  const sourceFile = project.createSourceFile(
    `${srcPath}/${clientContextFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  !useCoreV2 && writePackageInfo(sourceFile, packageDetails);

  const contextClass = buildClass(sourceFile, clientContextClassName);

  if (hideClients) {
    contextClass.addJsDoc({
      tags: [
        {
          tagName: "internal"
        }
      ]
    });
  }

  writeClassProperties(contextClass, clientParams, importedModels);

  const classConstructor = buildConstructor(contextClass, {
    clientContextClassName,
    clientClassName: clientDetails.className,
    clientParams,
    importedModels
  });

  writeConstructorBody(
    classConstructor,
    {
      clientParams,
      clientDetails
    },
    hasLro
  );

  const hasCredentials = !!addCredentials;
  writeImports(sourceFile, hasLro, importedModels, hasCredentials);
  sourceFile.fixUnusedIdentifiers();
}

interface WriteConstructorBodyParameters {
  clientParams: ParameterDetails[];
  clientDetails: ClientDetails;
}

function writeImports(
  sourceFile: SourceFile,
  hasLro: boolean,
  importedModels: Set<string>,
  hasCredentials: boolean
) {
  const { useCoreV2 } = getAutorestOptions();

  if (!useCoreV2) {
    sourceFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });
  } else {
    sourceFile.addImportDeclaration({
      namespaceImport: "coreClient",
      moduleSpecifier: "@azure/core-client"
    });
    if (hasCredentials) {
      sourceFile.addImportDeclaration({
        namespaceImport: "coreAuth",
        moduleSpecifier: "@azure/core-auth"
      });
    }
  }

  if (importedModels.size) {
    sourceFile.addImportDeclaration({
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    });
  }
}

function writePackageInfo(
  sourceFile: SourceFile,
  packageDetails: PackageDetails
) {
  sourceFile.addStatements([
    `\n\n`,
    `const packageName = "${packageDetails.name || ""}";`,
    `const packageVersion = "${packageDetails.version || ""}";`
  ]);
}

function writeClassProperties(
  contextClass: ClassDeclaration,
  clientParams: ParameterDetails[],
  importedModels: Set<string>
) {
  const params = clientParams.filter(p => !p.isSynthetic);
  params.forEach(({ typeDetails }) =>
    typeDetails.usedModels.forEach(model => importedModels.add(model))
  );
  contextClass.addProperties(
    params.map(param => {
      return {
        name: param.name,
        type: param.typeDetails.typeName,
        hasQuestionToken: !param.required
      } as PropertyDeclarationStructure;
    })
  );
}

function writeConstructorBody(
  classConstructor: ConstructorDeclaration,
  { clientParams, clientDetails }: WriteConstructorBodyParameters,
  hasLro: boolean
) {
  const { useCoreV2 } = getAutorestOptions();

  const requiredParams = getRequiredParameters(clientParams);
  const addBlankLine = true;
  const requiredParameters = getRequiredParamAssignments(requiredParams);
  const constantParameters = getConstantClientParamAssignments(clientParams);
  classConstructor.addStatements([
    writeStatements(getRequiredParamChecks(requiredParams), addBlankLine),
    writeStatement(
      writeDefaultOptions(
        clientParams.some(p => p.name === "credentials"),
        hasLro,
        clientDetails
      )
    )
  ]);

  !useCoreV2 &&
    classConstructor.addStatements([
      writeStatement(getEndpointStatement(clientDetails.endpoint), addBlankLine)
    ]);

  classConstructor.addStatements([
    requiredParameters.length ? "// Parameter assignments" : "",
    writeStatements(getRequiredParamAssignments(requiredParams), addBlankLine),
    constantParameters.length
      ? "// Assigning values to Constant parameters"
      : "",
    writeStatements(constantParameters, addBlankLine)
  ]);
}

const writeStatement = (content: string, shouldAddBlankLine = false) => (
  writer: CodeBlockWriter
) => {
  if (content) {
    writer.writeLine(content);
    shouldAddBlankLine && writer.blankLine();
  }
};

const writeStatements = (lines: string[], shouldAddBlankLine = false) => (
  writer: CodeBlockWriter
) => {
  lines.forEach(line => writer.writeLine(line));
  shouldAddBlankLine && writer.blankLine();
};

function getCredentialScopesValue(credentialScopes?: string | string[]) {
  if (Array.isArray(credentialScopes)) {
    return `[${credentialScopes.map(scope => `"${scope}"`).join()}]`;
  } else if (typeof credentialScopes === "string") {
    return `"${credentialScopes}"`;
  }

  return credentialScopes;
}

function writeDefaultOptions(
  hasCredentials: boolean,
  hasLro: boolean,
  clientDetails: ClientDetails
) {
  const { useCoreV2, credentialScopes, packageDetails } = getAutorestOptions();

  const credentialScopesValues = getCredentialScopesValue(credentialScopes);
  const addScopes = credentialScopes
    ? `if(!options.credentialScopes) {
    options.credentialScopes = ${credentialScopesValues}
  }`
    : "";

  const defaults = !hasCredentials
    ? `const defaults: ${clientDetails.className}OptionalParams = {
    requestContentType: "application/json; charset=utf-8"
  };`
    : `const defaults: ${clientDetails.className}OptionalParams = {
    requestContentType: "application/json; charset=utf-8",
    credential: credentials
  };`;

  return !useCoreV2
    ? `// Initializing default values for options
  if (!options) {
     options = {};
  }

  const defaultUserAgent = \`azsdk-js-\${packageName.replace("@azure/","")}/\${packageVersion} \${coreHttp.getDefaultUserAgentValue()}\`;
  
  ${addScopes}

  super(${hasCredentials ? "credentials" : `undefined`}, {
    ...options,
    userAgent: options.userAgent
      ? \`\${options.userAgent} \${defaultUserAgent}\`
      : \`\${defaultUserAgent}\`
  });
  
  this.requestContentType = "application/json; charset=utf-8";
  
  `
    : `// Initializing default values for options
  if (!options) {
    options = {};
  }
  ${defaults}

  const packageDetails = \`azsdk-js-${packageDetails.name.replace(
    "@azure/",
    ""
  )}/${packageDetails.version}\`;
  const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? \`\${options.userAgentOptions.userAgentPrefix} \${packageDetails}\`
        : \`\${packageDetails}\`;
  
  ${addScopes}
  const optionsWithDefaults = {
    ...defaults,
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    baseUri: ${getEndpoint(clientDetails.endpoint)}
  };
  super(optionsWithDefaults);
  `;
}

function buildClass(sourceFile: SourceFile, clientContextClassName: string) {
  const { useCoreV2 } = getAutorestOptions();

  return sourceFile.addClass({
    name: clientContextClassName,
    extends: !useCoreV2 ? "coreHttp.ServiceClient" : "coreClient.ServiceClient",
    isExported: true
  });
}

interface BuildContructorParams {
  clientContextClassName: string;
  clientClassName: string;
  clientParams: ParameterDetails[];
  importedModels: Set<string>;
}

function buildConstructor(
  contextClass: ClassDeclaration,
  {
    clientContextClassName,
    clientParams,
    clientClassName,
    importedModels
  }: BuildContructorParams
) {
  const requiredParams = getRequiredParameters(clientParams);
  const hasClientOptionalParams = clientParams.some(p => !p.required);
  const docs = [
    `Initializes a new instance of the ${clientContextClassName} class.`,
    ...formatJsDocParam(requiredParams),
    `@param options The parameter options`
  ]
    .filter(d => !!d)
    .join("\n");

  let clientOptionsParameterType = "coreHttp.ServiceClientOptions";

  if (hasClientOptionalParams) {
    const typeName = `${clientClassName}OptionalParams`;
    importedModels.add(typeName);
    clientOptionsParameterType = typeName;
  }

  requiredParams.forEach(({ typeDetails }) =>
    typeDetails.usedModels.forEach(model => importedModels.add(model))
  );

  return contextClass.addConstructor({
    docs: [docs],
    parameters: [
      ...requiredParams.map(p => ({
        name: p.name,
        type: p.typeDetails.typeName
      })),
      {
        name: "options",
        hasQuestionToken: true,
        type: clientOptionsParameterType
      }
    ]
  });
}

function getRequiredParameters(parameters: ParameterDetails[]) {
  /**
   * Getting parameters that are marked as required, and also don't have a defaultValue.
   * Constants are also exluded since they have defined value
   */
  return parameters.filter(
    p => p.required && p.schemaType !== SchemaType.Constant && !p.defaultValue
  );
}

function getEndpointStatement({ endpoint }: EndpointDetails) {
  return `this.baseUri = options.endpoint ${
    endpoint ? ` || "${endpoint}"` : ""
  };`;
}

function getConstantClientParamAssignments(
  clientParameters: ParameterDetails[]
) {
  return clientParameters
    .filter(p => !!p.defaultValue || p.schemaType === SchemaType.Constant)
    .map(
      ({ name, defaultValue }) =>
        `this.${name} = options.${name} ||  ${defaultValue}`
    );
}

function getRequiredParamChecks(requiredParameters: ParameterDetails[]) {
  return requiredParameters.map(
    ({ name }) => `if(${name} === undefined) {
    throw new Error("'${name}' cannot be null");
  }`
  );
}

function getRequiredParamAssignments(requiredParameters: ParameterDetails[]) {
  const disallowedClientParameters = ["credentials"];
  return requiredParameters
    .filter(({ name }) => !disallowedClientParameters.includes(name))
    .map(({ name }) => `this.${name} = ${name};`);
}

function getEndpoint({ endpoint }: EndpointDetails) {
  return `options.endpoint ${endpoint ? ` || "${endpoint}"` : ""}`;
}
