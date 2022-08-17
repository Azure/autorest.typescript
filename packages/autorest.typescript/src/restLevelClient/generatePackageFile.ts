// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import { buildPackageFile } from "@azure-tools/rlc-codegen";
import { transform } from "./transforms/transform";
import { hasRLCSamplesGenerated } from "../generators/samples/rlcSampleGenerator";

export function generatePackageJson(model: CodeModel, project: Project) {
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildPackageFile(rlcModels, hasRLCSamplesGenerated);
  if (preparedContent) {
    project.createSourceFile("package.json", preparedContent.content, {
      overwrite: true
    });
  }
}
