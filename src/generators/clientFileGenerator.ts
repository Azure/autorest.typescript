// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getModelsName, getMappersName } from "../utils/nameUtils";

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const modelsName = getModelsName(clientDetails.className);
  const mappersName = getMappersName(clientDetails.className);
  const clientContextClassName = `${clientDetails.className}Context`;
  const clientContextFileName = `${clientDetails.sourceFileName}Context`;

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

  clientClass.addProperties([
    // TODO: Generate these based on operation groups list
    // {
    //   name: "string",
    //   type: "operations.String",
    //   leadingTrivia: writer => writer.write("// Operation groups")
    // },
    // { name: "enumModel", type: "operations.EnumModel" }
  ]);

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
        type: `Models.${clientDetails.className}Options`
      }
    ]
  });

  clientConstructor.addStatements([
    "super(options);"
    // TODO: Generate these based on operation groups list
    // "this.string = new operations.String(this);",
    // "this.enumModel = new operations.EnumModel(this);"
  ]);

  clientFile.addExportDeclaration({
    leadingTrivia: writer => writer.write("// Operation Specifications\n\n"),
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
