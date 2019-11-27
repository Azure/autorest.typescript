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
import { CodeModel } from "@azure-tools/codemodel";

export function generateClient(
  codeModel: CodeModel,
  clientDetails: ClientDetails,
  project: Project
) {
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

  const clientConstructor = clientClass.addConstructor({
    docs: [
      // TODO: Parameter list will need to be generated based on real
      // client parameter list.
      `Initializes a new instance of the ${clientDetails.className} class.
@param options The parameter options`
    ],
    parameters: [
      {
        name: "options",
        hasQuestionToken: true,
        type: "any" // TODO Use the right type `Models.${clientDetails.className}Options`
      }
    ]
  });

  clientConstructor.addStatements([
    "super(options);",
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
