// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from "@azure-tools/codemodel";
import { transformCodeModel } from "../transforms";
import { Project, PropertySignatureStructure, StructureKind } from "ts-morph";

export class ModelsGenerator implements Generator {
  constructor(private codeModel: CodeModel, private project: Project) {}

  getTemplate(): string {
    return "";
  }

  public async process(): Promise<void> {
    const clientDetails = transformCodeModel(this.codeModel);

    const modelsIndexFile = this.project.createSourceFile(
      "src/models/index.ts",
      undefined,
      { overwrite: true }
    );

    modelsIndexFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });

    for (const model of clientDetails.models) {
      modelsIndexFile.addInterface({
        name: model.name,
        docs: [model.description],
        isExported: true,
        properties: model.properties
          .filter(p => !p.isConstant)
          .map<PropertySignatureStructure>(p => ({
            name: p.name,
            hasQuestionToken: !p.required,
            isReadonly: p.readOnly,
            type: p.type,
            docs: p.description ? [p.description] : undefined,
            kind: StructureKind.PropertySignature
          }))
      });
    }

    for (const union of clientDetails.unions) {
      modelsIndexFile.addTypeAlias({
        name: union.name,
        docs: [union.description],
        isExported: true,
        type: union.values.join(" | "),
        trailingTrivia: writer => writer.newLine()
      });
    }
  }
}
