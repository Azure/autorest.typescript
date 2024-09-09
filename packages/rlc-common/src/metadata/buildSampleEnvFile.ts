// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RLCModel } from "../interfaces.js";

const sampleEnvText = `
# App registration secret for AAD authentication
AZURE_CLIENT_SECRET=
AZURE_CLIENT_ID=
AZURE_TENANT_ID= 
`;

export function buildSampleEnvFile(model: RLCModel) {
  if (
    model.options?.generateMetadata === true ||
    model.options?.generateSample === true
  ) {
    let filePath = "sample.env";
    return {
      path: filePath,
      content: sampleEnvText.trim()
    };
  }
}
