// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RLCModel } from "../interfaces.js";

const mgmtSampleEnvText = `
# App registration secret for AAD authentication
AZURE_CLIENT_SECRET=
AZURE_CLIENT_ID=
AZURE_TENANT_ID= 
`;

const sampleEnvText = `
// please add your env vars
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
      content: model.options?.azureArm
        ? mgmtSampleEnvText.trim()
        : sampleEnvText.trim()
    };
  }
}
