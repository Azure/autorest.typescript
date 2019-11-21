// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Generator } from "./generator";
import { CodeModel } from "@azure-tools/codemodel";
import { transformMapper } from "../mapperTransforms";
import { Project, VariableDeclarationKind } from "ts-morph";

export class MappersGenerator implements Generator {
  constructor(private codeModel: CodeModel, private project: Project) {}

  public async process(): Promise<void> {
    const mappers = (this.codeModel.schemas.objects || []).map(transformMapper);
    const mappersFile = this.project.createSourceFile(
      "src/models/mappers.ts",
      undefined,
      { overwrite: true }
    );

    mappersFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });

    for (const mapper of mappers) {
      // Generate the mapper definition and replace object
      // key strings with the unquoted name
      const mapperString = JSON.stringify(mapper, undefined, 2).replace(
        /\"([^"]+)\":/g,
        "$1:"
      );

      if (mapper.type.className) {
        mappersFile.addVariableStatement({
          isExported: true,
          declarations: [
            {
              name: mapper.type.className,
              type: "coreHttp.CompositeMapper",
              initializer: mapperString
            }
          ],
          declarationKind: VariableDeclarationKind.Const,
          leadingTrivia: writer => writer.blankLine()
        });
      } else {
        throw new Error("Mapper does not have a className");
      }
    }
  }
}
