// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, { getLongRunningPoller } from "@msinternal/authoring";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function deleteSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const projectName = "{Your projectName}";
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await deleteSample();
}

main().catch(console.error);
