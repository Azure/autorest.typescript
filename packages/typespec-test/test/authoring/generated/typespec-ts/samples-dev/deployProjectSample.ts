// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, {
  getLongRunningPoller,
} from "@msinternal/authoring";
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
  const projectName = "{Your projectName}";
  const deploymentName = "{Your deploymentName}";
  const initialResponse = await client
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
      projectName,
      deploymentName,
    )
    .put({ body: {} });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  deployProjectSample();
}

main().catch(console.error);
