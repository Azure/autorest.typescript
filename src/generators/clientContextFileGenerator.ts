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
import { OptionsBag } from "../utils/optionsBag";

export function generateClientContext(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project,
  optionsBag: OptionsBag
) {
  const importedModels = new Set<string>();
  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );

  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );

  const clientContextClassName = `${clientDetails.className}Context`;
  const clientContextFileName = normalizeName(
    clientContextClassName,
    NameType.File
  );

  const sourceFile = project.createSourceFile(
    `${clientDetails.srcPath}/${clientContextFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  !optionsBag.useCoreV2 && writePackageInfo(sourceFile, packageDetails);

  const contextClass = buildClass(
    sourceFile,
    clientContextClassName,
    optionsBag
  );

  if (optionsBag.hideClients) {
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
    hasLRO,
    optionsBag
  );

  const hasCredentials = !!clientDetails.options.addCredentials;
  writeImports(sourceFile, hasLRO, importedModels, hasCredentials, optionsBag);
  sourceFile.fixUnusedIdentifiers();
}

interface WriteConstructorBodyParameters {
  clientParams: ParameterDetails[];
  clientDetails: ClientDetails;
}

function writeImports(
  sourceFile: SourceFile,
  hasLRO: boolean,
  importedModels: Set<string>,
  hasCredentials: boolean,
  optionsBag: OptionsBag
) {
  if (!optionsBag.useCoreV2) {
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
  hasLRO: boolean,
  optionsBag: OptionsBag
) {
  const requiredParams = getRequiredParameters(clientParams);
  const addBlankLine = true;
  const requiredParameters = getRequiredParamAssignments(requiredParams);
  const constantParameters = getConstantClientParamAssignments(clientParams);
  classConstructor.addStatements([
    writeStatements(getRequiredParamChecks(requiredParams), addBlankLine),
    writeStatement(
      writeDefaultOptions(
        clientParams.some(p => p.name === "credentials"),
        hasLRO,
        clientDetails,
        optionsBag
      )
    )
  ]);

  !optionsBag.useCoreV2 &&
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
  hasLRO: boolean,
  clientDetails: ClientDetails,
  optionsBag: OptionsBag
) {
  const credentialScopes = getCredentialScopesValue(
    clientDetails.options.credentialScopes
  );
  const addScopes = credentialScopes
    ? `if(!options.credentialScopes) {
    options.credentialScopes = ${credentialScopes}
  }`
    : "";

  return !optionsBag.useCoreV2
    ? `// Initializing default values for options
  if (!options) {
     options = {};
   }

  if (!options.userAgent) {
     const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
     options.userAgent = \`\${packageName}/\${packageVersion} \${defaultUserAgent}\`;
   }

   ${addScopes}

  super(${hasCredentials ? "credentials" : `undefined`}, options);
  
  this.requestContentType = "application/json; charset=utf-8";
  
  `
    : `// Initializing default values for options
  if (!options) {
    options = {};
  }
  const defaults: ${clientDetails.className}OptionalParams = {
    requestContentType: "application/json; charset=utf-8"
  };
  const optionsWithDefaults = {
    ...defaults,
    ...options,
    baseUri: ${getEndpointV2(clientDetails.endpoint, optionsBag)}
  };
  super(optionsWithDefaults);
  `;
}

function buildClass(
  sourceFile: SourceFile,
  clientContextClassName: string,
  optionsBag: OptionsBag
) {
  return sourceFile.addClass({
    name: clientContextClassName,
    extends: !optionsBag.useCoreV2
      ? "coreHttp.ServiceClient"
      : "coreClient.ServiceClient",
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

function getEndpointV2({ endpoint }: EndpointDetails, optionsBag: OptionsBag) {
  const updatedEndpoint = optionsBag.allowInsecureConnection
    ? endpoint?.replace("https://", "http://")
    : endpoint?.replace("http://", "https://");
  return `options.endpoint ${
    updatedEndpoint ? ` || "${updatedEndpoint}"` : ""
  }`;
}
