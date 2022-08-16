// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import * as path from "path";
import { getAutorestOptions } from "../autorestSession";
import { CodeModel } from "@autorest/codemodel";
import { transform } from "./transforms/transform";
import { buildTopLevelIndex } from "@azure-tools/rlc-codegen";

export function generateTopLevelIndexFile(model: CodeModel, project: Project) {
  const { srcPath } = getAutorestOptions();
  const importedParameters = new Set<string>();
  const importedResponses = new Set<string>();
  const clientImports = new Set<string>();
  const rlcModels = transform(model, {
    importedParameters,
    importedResponses,
    clientImports
  });

  const preparedContent = buildTopLevelIndex(rlcModels);
  if (preparedContent) {
    const fileDirectory = path.join(srcPath as string, "../../");
    const indexFile = project.createSourceFile(
      "/src/index.ts",
      preparedContent.content,
      {
        overwrite: true
      }
    );
    indexFile.moveToDirectory(fileDirectory);
  }
}
