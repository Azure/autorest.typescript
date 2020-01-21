// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, PropertyDeclarationStructure } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import {
  getModelsName,
  getMappersName,
  normalizeName,
  NameType
} from "../utils/nameUtils";
import { ParameterDetails } from "../models/parameterDetails";
import { ImplementationLocation } from "@azure-tools/codemodel";
import { getCredentialsParameter } from "./utils/parameterUtils";

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const clientContextClassName = `${clientDetails.className}Context`;

  const clientFile = project.createSourceFile(
    `src/${clientDetails.sourceFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  clientFile.addImportDeclaration({
    namespaceImport: "Models",
    moduleSpecifier: "./models"
  });

  clientFile.addImportDeclaration({
    namespaceImport: "Mappers",
    moduleSpecifier: "./models/mappers"
  });

  clientFile.addImportDeclaration({
    namespaceImport: "operations",
    moduleSpecifier: "./operations"
  });

  clientFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  clientFile.addImportDeclaration({
    namedImports: [clientContextClassName],
    moduleSpecifier: `./${clientDetails.sourceFileName}Context`
  });

  const clientClass = clientFile.addClass({
    name: clientDetails.className,
    extends: clientContextClassName
  });

  const operations = clientDetails.operationGroups.map(og => {
    return {
      name: normalizeName(og.name, NameType.Property),
      typeName: `operations.${normalizeName(og.name, NameType.Class)}`
    };
  });

  clientClass.addProperties(
    operations.map(op => {
      return {
        name: op.name,
        type: op.typeName
      } as PropertyDeclarationStructure;
    })
  );
  const hasCredentials = !!clientDetails.options.addCredentials;
  const requiredParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );

  const clientConstructor = clientClass.addConstructor({
    docs: [
      `Initializes a new instance of the ${clientDetails.className} class.
@param options The parameter options`
    ],
    parameters: [
      ...getCredentialsParameter(hasCredentials),
      ...requiredParams.map(p => ({
        name: p.name,
        hasQuestionToken: !p.required,
        type: p.typeDetails.typeName
      })),
      {
        name: "options",
        hasQuestionToken: true,
        type: `coreHttp.ServiceClientOptions`
      }
    ]
  });

  clientConstructor.addStatements([
    `super(${getSuperParams(requiredParams, hasCredentials)});`,
    ...operations.map(
      ({ name, typeName }) => `this.${name} = new ${typeName}(this)`
    )
  ]);

  clientFile.addExportDeclaration({
    leadingTrivia: (writer: any) =>
      writer.write("// Operation Specifications\n\n"),
    namedExports: [
      { name: clientDetails.className },
      { name: clientContextClassName },
      { name: "Models", alias: modelsName },
      { name: "Mappers", alias: mappersName }
    ]
  });

  clientFile.addExportDeclaration({
    moduleSpecifier: "./operations"
  });
}

function getSuperParams(
  requiredParams: ParameterDetails[],
  hasCredentials: boolean
) {
  let allParams = ["options"];
  requiredParams.forEach(p => {
    allParams = [p.name, ...allParams];
  });

  if (hasCredentials) {
    allParams.unshift("credentials");
  }

  return allParams.join();
}
