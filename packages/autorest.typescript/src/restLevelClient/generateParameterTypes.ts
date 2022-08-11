// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import * as path from "path";
import { getAutorestOptions } from "../autorestSession";
import { transform } from "./transforms/transform";
import { buildParameterTypes } from "@azure-tools/rlc-codegen";

/**
 * Generates the interfaces describing each operation parameters
 */
export function generateParameterInterfaces(
  model: CodeModel,
  project: Project
) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildParameterTypes(rlcModels);
  if (preparedContent) {
    project.createSourceFile(
      path.join(srcPath, `parameters.ts`),
      preparedContent.content,
      {
        overwrite: true
      }
    );
  }
}
