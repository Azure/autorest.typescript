// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, {
  getLongRunningPoller,
} from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SwapDeployments
 *
 * @summary call operation SwapDeployments
 */
async function swapDeploymentsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const projectName = "{Your projectName}";
  const initialResponse = await client
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments:swap",
      projectName,
    )
    .post({
      body: {
        firstDeploymentName: "{Your firstDeploymentName}",
        secondDeploymentName: "{Your secondDeploymentName}",
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  swapDeploymentsSample();
}

main().catch(console.error);
