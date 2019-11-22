// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { CodeModel } from "@azure-tools/codemodel";
import * as namingUtils from "../utils/nameUtils";

export async function generateClient(
  codeModel: CodeModel,
  project: Project
): Promise<void> {
  const clientFileName = namingUtils.getClientFileName(codeModel.info.title);
  const clientClassName = namingUtils.getClientClassName(codeModel.info.title);
  const clientContextClassName = namingUtils.getClientContextClassName(
    codeModel.info.title
  );
  const clientContextFileName = namingUtils.getClientContextFileName(
    codeModel.info.title
  );
  const modelsName = namingUtils.getModelsName(codeModel.info.title);
  const mappersName = namingUtils.getMappersName(codeModel.info.title);

  const clientFile = project.createSourceFile(
    `src/${clientFileName}.ts`,
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
    moduleSpecifier: `./${clientContextFileName}`
  });

  const clientClass = clientFile.addClass({
    name: clientClassName,
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
      `Initializes a new instance of the ${clientClassName} class.
@param options The parameter options`
    ],
    parameters: [
      {
        name: "options",
        hasQuestionToken: true,
        type: `Models.${clientClassName}Options`
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
      { name: clientClassName },
      { name: clientContextClassName },
      { name: "Models", alias: modelsName },
      { name: "Mappers", alias: mappersName }
    ]
  });

  clientFile.addExportDeclaration({
    moduleSpecifier: "./operations"
  });
}
