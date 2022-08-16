// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getAutorestOptions } from "../autorestSession";
import * as path from "path";
import { Project } from "ts-morph";
import { CodeModel } from "@autorest/codemodel";
import { transform } from "./transforms/transform";
import { buildIsUnexpectedHelper } from "@azure-tools/rlc-codegen";

/**
 * Generates a helper function `isUnexpected` which takes a response
 * and checks if the status code matches any of the success status codes
 * defined in the API spec. This aids with type narrowing down.
 */
export function generateIsUnexpectedHelper(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });
  const preparedContent = buildIsUnexpectedHelper(rlcModels);
  if (preparedContent) {
    project.createSourceFile(
      path.join(srcPath, `isUnexpected.ts`),
      preparedContent.content,
      {
        overwrite: true
      }
    );
  }
}
