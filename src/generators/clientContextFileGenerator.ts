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
import { ImplementationLocation, SchemaType } from "@azure-tools/codemodel";
import {
  getCredentialsCheck,
  getCredentialsParameter
} from "./utils/parameterUtils";
import { BaseUrlDetails } from "../transforms/urlTransforms";

export function generateClientContext(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );
  const requiredParams = getRequiredParameters(clientParams);
  const hasCredentials = !!clientDetails.options.addCredentials;
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

  writeImports(sourceFile);
  writePackageInfo(sourceFile, packageDetails);

  const contextClass = buildClass(sourceFile, clientContextClassName);
  writeClassProperties(contextClass, clientParams);

  const classConstructor = buildConstructor(contextClass, {
    clientContextClassName,
    hasCredentials,
    requiredParams
  });

  writeConstructorBody(classConstructor, {
    clientParams,
    hasCredentials,
    clientDetails,
    requiredPaams: requiredParams
  });
}

interface WriteConstructorBodyParameters {
  hasCredentials: boolean;
  requiredPaams: ParameterDetails[];
  clientParams: ParameterDetails[];
  clientDetails: ClientDetails;
}

function writeImports(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });
}

function writePackageInfo(
  sourceFile: SourceFile,
  packageDetails: PackageDetails
) {
  sourceFile.addStatements([
    `\n\n`,
    `const packageName = "${packageDetails.name}";`,
    `const packageVersion = "${packageDetails.version}";`
  ]);
}

function writeClassProperties(
  contextClass: ClassDeclaration,
  clientParams: ParameterDetails[]
) {
  contextClass.addProperties(
    clientParams.map(param => {
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
  {
    clientParams,
    hasCredentials,
    requiredPaams,
    clientDetails
  }: WriteConstructorBodyParameters
) {
  const optionalParams = getOptionalParameters(clientParams);
  const addBlankLine = true;
  const requiredParameters = getRequiredParamAssignments(requiredPaams);
  const constantParameters = getConstantClientParamAssignments(clientParams);
  const optionalParameters = getOptionalParameterAssignments(optionalParams);
  classConstructor.addStatements([
    writeStatement(getCredentialsCheck(hasCredentials)),
    writeStatements(getRequiredParamChecks(requiredPaams), addBlankLine),
    writeStatement(writeDefaultOptions(hasCredentials)),
    requiredParameters.length ? "// Parameter assignments" : "",
    writeStatements(getRequiredParamAssignments(requiredPaams), addBlankLine),
    constantParameters.length
      ? "// Assigning values to Constant parameters"
      : "",
    writeStatements(constantParameters, addBlankLine),
    writeStatement(getBaseUriStatement(clientDetails.baseUrl), addBlankLine),
    optionalParameters.length
      ? "// Replacing parameter defaults with user-provided parameters."
      : "",
    writeStatements(optionalParameters)
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

function writeDefaultOptions(hasCredentials: boolean) {
  return `// Initializing default values for options
  if (!options) {
     options = {};
   }

  if (!options.userAgent) {
     const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
     options.userAgent = \`\${packageName}/\${packageVersion} \${defaultUserAgent}\`;
   }
  
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
  hasCredentials: boolean;
  requiredParams: ParameterDetails[];
}

function buildConstructor(
  contextClass: ClassDeclaration,
  {
    clientContextClassName,
    hasCredentials,
    requiredParams
  }: BuildContructorParams
) {
  return contextClass.addConstructor({
    docs: [
      `Initializes a new instance of the ${clientContextClassName} class.\n
@param options The parameter options`
    ],
    parameters: [
      ...getCredentialsParameter(hasCredentials),
      ...requiredParams.map(p => ({
        name: p.name,
        type: p.typeDetails.typeName
      })),
      {
        name: "options",
        hasQuestionToken: true,
        type: `any`
      }
    ]
  });
}

function getOptionalParameters(parameters: ParameterDetails[]) {
  /**
   * Getting parameters that are not marked as required, and the ones that are not marked as required
   * but are constants or have a defaultValue
   */
  return parameters.filter(
    p => !p.required || p.defaultValue || p.schemaType === SchemaType.Constant
  );
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

function getBaseUriStatement(baseUrl: BaseUrlDetails) {
  const uri = baseUrl.baseUrl;
  return `this.baseUri = options.baseUri || this.baseUri ${
    uri ? ` || "${uri}"` : ""
  };`;
}

function getConstantClientParamAssignments(
  clientParameters: ParameterDetails[]
) {
  return clientParameters
    .filter(p => !!p.defaultValue || p.schemaType === SchemaType.Constant)
    .map(({ name, defaultValue }) => `this.${name} = ${defaultValue}`);
}

function getRequiredParamChecks(requiredParameters: ParameterDetails[]) {
  return requiredParameters.map(
    ({ name }) => `if(${name} === undefined) {
    throw new Error("'${name}' cannot be null");
  }`
  );
}

function getOptionalParameterAssignments(
  optionalParameters: ParameterDetails[]
) {
  return optionalParameters.map(
    ({
      name
    }) => `if(options.${name} !== null && options.${name} !== undefined) {
      this.${name} = options.${name};
  }`
  );
}

function getRequiredParamAssignments(requiredParameters: ParameterDetails[]) {
  return requiredParameters.map(({ name }) => `this.${name} = ${name};`);
}
