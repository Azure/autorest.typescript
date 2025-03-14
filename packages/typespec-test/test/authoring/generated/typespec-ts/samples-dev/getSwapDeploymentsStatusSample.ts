// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetSwapDeploymentsStatus
 *
 * @summary call operation GetSwapDeploymentsStatus
 */
async function getSwapDeploymentsStatusSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const projectName = "{Your projectName}";
  const deploymentName = "{Your deploymentName}";
  const jobId = "{Your jobId}";
  const result = await client
    .path(
      "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/swap/jobs/{jobId}",
      projectName,
      deploymentName,
      jobId,
    )
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await getSwapDeploymentsStatusSample();
}

main().catch(console.error);
