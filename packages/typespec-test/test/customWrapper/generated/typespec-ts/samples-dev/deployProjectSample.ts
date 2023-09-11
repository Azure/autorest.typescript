// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAuthoringClient, {
  DeployProjectParameters,
} from "@msinternal/customWrapper";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeployProject
 *
 * @summary call operation DeployProject
 */
async function deployProjectSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const deploymentName = "{Your deploymentName}";
  const options: DeployProjectParameters = {
    body: {
      user: '{Your "user"}',
      input_type: '{Your "input_type"}',
      model: '{Your "model"}',
      input: [['{Your "input"}']],
    },
  };
  const result = await client
    .path(
      "/authoring/analyze-text/deployments/{deploymentName}",
      deploymentName
    )
    .put(options);
  console.log(result);
}

async function main() {
  deployProjectSample();
}

main().catch(console.error);
