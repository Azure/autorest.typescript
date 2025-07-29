// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListProjects
 *
 * @summary call operation ListProjects
 */
async function listProjectsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const result = await client.path("/authoring/analyze-text/projects").get();
  console.log(result);
}

async function main(): Promise<void> {
  await listProjectsSample();
}

main().catch(console.error);
