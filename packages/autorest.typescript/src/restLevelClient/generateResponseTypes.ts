// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import { transform } from "./transforms/transform";
import { buildResponseTypes } from "@azure-tools/rlc-codegen";
import * as path from "path";
import { getAutorestOptions } from "../autorestSession";

export function generateResponseInterfaces(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildResponseTypes(rlcModels);
  if (preparedContent) {
    project.createSourceFile(
      path.join(srcPath, `responses.ts`),
      preparedContent.content,
      {
        overwrite: true
      }
    );
  }
}
