// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import * as path from "path";
import { getAutorestOptions } from "../autorestSession";
import { buildTopLevelIndex, RLCModel } from "@azure-tools/rlc-codegen";

export function generateTopLevelIndexFile(
  rlcModels: RLCModel,
  project: Project
) {
  const { srcPath } = getAutorestOptions();
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
    // post handle the file position
    indexFile.moveToDirectory(fileDirectory);
  }
}
