// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureHealthInsightsClient from "@azure-rest/health-insights-radiologyinsights";
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
  const client = createAzureHealthInsightsClient(endpoint, credential);
  const id = "{Your id}";
  const result = await client.path("/radiology-insights/jobs/{id}", id).get();
  console.log(result);
}

async function main() {
  getJobSample();
}

main().catch(console.error);
