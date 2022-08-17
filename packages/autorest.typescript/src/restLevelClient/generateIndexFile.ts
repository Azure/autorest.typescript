// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../autorestSession";
import { CodeModel } from "@autorest/codemodel";
import { transform } from "./transforms/transform";
import { buildIndexFile } from "@azure-tools/rlc-codegen";
import * as path from "path";

export function generateIndexFile(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildIndexFile(rlcModels);
  if (preparedContent) {
    project.createSourceFile(
      path.join(srcPath, `index.ts`),
      preparedContent.content,
      {
        overwrite: true
      }
    );
  }
}
