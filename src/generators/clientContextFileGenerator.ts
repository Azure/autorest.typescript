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

export function generateClientContext(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project,
  hideClients: boolean
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

  writePackageInfo(sourceFile, packageDetails);

  const contextClass = buildClass(sourceFile, clientContextClassName);

  if (hideClients) {
    contextClass.addJsDoc({
      tags: [
        {
          tagName: "hidden"
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
    hasLRO
  );

  writeImports(sourceFile, hasLRO, importedModels);
}

interface WriteConstructorBodyParameters {
  clientParams: ParameterDetails[];
  clientDetails: ClientDetails;
}

function writeImports(
  sourceFile: SourceFile,
  hasLRO: boolean,
  importedModels: Set<string>
) {
  sourceFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  if (importedModels.size) {
    sourceFile.addImportDeclaration({
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    });
  }

  if (hasLRO) {
    sourceFile.addImportDeclaration({
      namedImports: ["lroPolicy"],
      moduleSpecifier: "./lro"
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
  hasLRO: boolean
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
        clientDetails
      )
    ),
    writeStatement(getEndpointStatement(clientDetails.endpoint), addBlankLine),
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
  clientDetails: ClientDetails
) {
  const credentialScopes = getCredentialScopesValue(
    clientDetails.options.credentialScopes
  );
  const addScopes = credentialScopes
    ? `if(!options.credentialScopes) {
    options.credentialScopes = ${credentialScopes}
  }`
    : "";
  const addLROPolicy = hasLRO
    ? `
    // Building the request policy fatories based on the passed factories and the
    // any required factories needed by the client.
    if (Array.isArray(options.requestPolicyFactories)) {
      // When an array of factories is passed in, we'll just add the required factories,
      // in this case lroPolicy(). It is important to note that passing an array of factories
      // to a new client, bypasses core-http default factories. Just the pipelines provided will be run.
      options.requestPolicyFactories = [lroPolicy(), ...options.requestPolicyFactories]
    } else if (options.requestPolicyFactories) {
      // When we were passed a requestPolicyFactories as a function, we'll create a new one that adds the factories provided
      // in the options plus the required policies. When using this path, the pipelines passed to the client will be added to the
      // default policies added by core-http
      const optionsPolicies = options.requestPolicyFactories([lroPolicy()]) || [
        lroPolicy()
      ];
      options.requestPolicyFactories = defaultFactories => [
        ...optionsPolicies,
        ...defaultFactories
      ];
     
    } else {
      // In case no request policy factories were provided, we'll just need to create a function that will add 
      // the lroPolicy to the default pipelines added by core-http
      options.requestPolicyFactories = (defaultFactories) => ([lroPolicy(), ...defaultFactories])
    }`
    : "";

  return `// Initializing default values for options
  if (!options) {
     options = {};
   }

  if (!options.userAgent) {
     const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
     options.userAgent = \`\${packageName}/\${packageVersion} \${defaultUserAgent}\`;
   }

   ${addScopes}

  ${addLROPolicy}

  super(${hasCredentials ? "credentials" : `undefined`}, options);
  
  this.requestContentType = "application/json; charset=utf-8";
  
  `;
}

function buildClass(sourceFile: SourceFile, clientContextClassName: string) {
  return sourceFile.addClass({
    name: clientContextClassName,
    extends: "coreHttp.ServiceClient",
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
