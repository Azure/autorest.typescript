// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, PropertyDeclarationStructure } from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { ParameterDetails } from "../models/parameterDetails";
import {
  ImplementationLocation,
  SchemaType,
  ConstantSchema
} from "@azure-tools/codemodel";
import {
  getCredentialsCheck,
  getCredentialsParameter
} from "./utils/parameterUtils";

export function generateClientContext(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const clientContextClassName = `${clientDetails.className}Context`;
  const clientContextFileName = normalizeName(
    clientContextClassName,
    NameType.File
  );

  const sourceFile = project.createSourceFile(
    `src/${clientContextFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  sourceFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  sourceFile.addImportDeclaration({
    namespaceImport: "Models",
    moduleSpecifier: "./models"
  });

  sourceFile.addStatements([
    `\n\n`,
    `const packageName = "${packageDetails.name}";`,
    `const packageVersion = "${packageDetails.version}";`
  ]);

  const contextClass = sourceFile.addClass({
    name: clientContextClassName,
    extends: "coreHttp.ServiceClient",
    isExported: true
  });

  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );

  const constructorParams = clientParams.filter(
    param => !param.defaultValue && param.schemaType !== SchemaType.Constant
  );

  const requiredGlobals = constructorParams.filter(p => p.required);
  const optionalGlobals = constructorParams.filter(p => !p.required);

  contextClass.addProperties(
    clientParams.map(param => {
      return {
        name: param.name,
        type: param.typeDetails.typeName,
        hasQuestionToken: !param.required
      } as PropertyDeclarationStructure;
    })
  );
  const hasCredentials = !!clientDetails.options.addCredentials;
  const classConstructor = contextClass.addConstructor({
    docs: [
      `Initializes a new instance of the ${clientContextClassName} class.\n
@param options The parameter options`
    ],
    parameters: [
      ...getCredentialsParameter(hasCredentials),
      ...requiredGlobals.map(p => ({
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

  // This could all be expressed as one string template, but we may need to
  // optionally skip some segments based on generation options
  classConstructor.addStatements([
    getCredentialsCheck(hasCredentials),
    ...getRequiredParamChecks(requiredGlobals),
    `if (!options) {
       options = {};
     }`,
    `if (!options.userAgent) {
       const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
       options.userAgent = \`\${packageName}/\${packageVersion} \${defaultUserAgent}\`;
     }\n`,
    `super(${hasCredentials ? "credentials" : `undefined`}, options);\n\n`,
    `this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
     this.requestContentType = "application/json; charset=utf-8";`,
    ...getRequiredParamAssignments(requiredGlobals),
    ...getOptionalParameterAssignments(optionalGlobals),
    ...getConstantClientParamAssignments(clientParams)
  ]);
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
