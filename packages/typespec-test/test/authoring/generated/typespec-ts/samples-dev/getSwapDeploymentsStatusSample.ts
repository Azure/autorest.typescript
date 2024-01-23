// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSwapDeploymentsStatus
 *
 * @summary call operation GetSwapDeploymentsStatus
 */
async function getSwapDeploymentsStatusSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
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

async function main() {
  getSwapDeploymentsStatusSample();
}

main().catch(console.error);
