// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createHealthInsightsClinicalMatchingClient from "@azure-rest/health-insights-clinicalmatching";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetJob
 *
 * @summary call operation GetJob
 */
async function getJobSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createHealthInsightsClinicalMatchingClient(
    endpoint,
    credential,
  );
  const jobId = "{Your jobId}";
  const result = await client.path("/trialmatcher/jobs/{jobId}", jobId).get();
  console.log(result);
}

async function main() {
  getJobSample();
}

main().catch(console.error);
