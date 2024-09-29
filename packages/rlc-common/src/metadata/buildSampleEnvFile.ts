// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RLCModel } from "../interfaces.js";

const sampleEnvText = `
# Feel free to add your own environment variables.
`;

export function buildSampleEnvFile(model: RLCModel) {
  if (
    (model.options?.generateMetadata === true ||
      model.options?.generateSample === true) &&
    model.options?.flavor === "azure"
  ) {
    const filePath = "sample.env";
    return {
      path: filePath,
      content: sampleEnvText.trim()
    };
  }
}
