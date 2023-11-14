// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteTestRun
 *
 * @summary call operation DeleteTestRun
 */
async function loadTestRunDeleteTestRunSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}", testRunId)
    .delete();
  console.log(result);
}

async function main() {
  loadTestRunDeleteTestRunSample();
}

main().catch(console.error);
