// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { ParameterDetails } from "../models/parameterDetails";

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

  const globalParams = clientDetails.parameters.filter(param => param.isGlobal);
  const requiredGlobals = globalParams.filter(p => p.required);
  const optionalGlobals = globalParams.filter(p => !p.required);

  contextClass.addProperties(
    globalParams.map(param => {
      return {
        name: param.name,
        type: "any", // TODO use actual type
        hasQuestionToken: !param.required
      };
    })
  );

  const classConstructor = contextClass.addConstructor({
    docs: [
      `Initializes a new instance of the ${clientContextClassName} class.\n
@param options The parameter options`
    ],
    parameters: [
      ...requiredGlobals.map(p => ({ name: p.name, type: "any" })), //TODO: Use actual type
      {
        name: "options",
        hasQuestionToken: true,
        type: "any" // TODO: Use the correct type from models `Models.${clientDetails.className}Options`
      }
    ]
  });

  // This could all be expressed as one string template, but we may need to
  // optionally skip some segments based on generation options
  classConstructor.addStatements([
    ...getRequiredParamChecks(requiredGlobals),
    `if (!options) {
       options = {};
     }`,
    `if (!options.userAgent) {
       const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
       options.userAgent = \`\${packageName}/\${packageVersion} \${defaultUserAgent}\`;
     }\n`,
    `super(undefined, options);\n\n`,
    `this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
     this.requestContentType = "application/json; charset=utf-8";`,
    ...getRequiredParamAssignments(requiredGlobals),
    ...getOptionalParameterAssignments(optionalGlobals)
  ]);
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
