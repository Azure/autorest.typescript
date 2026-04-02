// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createHealthInsightsClinicalMatchingClient from "@azure-rest/health-insights-clinicalmatching";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetJob
 *
 * @summary call operation GetJob
 */
async function getJobSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createHealthInsightsClinicalMatchingClient(endpointParam, credential);
  const jobId = "{Your jobId}";
  const result = await client.path("/trialmatcher/jobs/{jobId}", jobId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await getJobSample();
}

main().catch(console.error);
