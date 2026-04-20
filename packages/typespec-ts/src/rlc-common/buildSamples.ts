// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RLCModel, RLCSampleGroup, File as RLCFile } from "./interfaces.js";
import { sampleTemplate } from "./static/sampleTemplate.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";
import * as path from "path";

// Build sample files for the model based on the sample groups
export function buildSamples(model: RLCModel) {
  if (!model.options || !model.options.packageDetails) {
    return;
  }
  const sampleGroups: RLCSampleGroup[] | undefined = model.sampleGroups;
  if (!sampleGroups || sampleGroups.length === 0) {
    return;
  }
  const sampleFiles: RLCFile[] = [];
  for (const sampleGroup of sampleGroups) {
    const sampleGroupFileContents = hbs.compile(sampleTemplate, {
      noEscape: true
    });
    const filePath = path.join("samples-dev", `${sampleGroup.filename}.ts`);
    sampleFiles.push({
      path: filePath,
      content: sampleGroupFileContents(sampleGroup)
    });
  }
  return sampleFiles;
}
