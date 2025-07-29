// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListDeployments
 *
 * @summary call operation ListDeployments
 */
async function listDeploymentsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const projectName = "{Your projectName}";
  const result = await client
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments",
      projectName,
    )
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await listDeploymentsSample();
}

main().catch(console.error);
