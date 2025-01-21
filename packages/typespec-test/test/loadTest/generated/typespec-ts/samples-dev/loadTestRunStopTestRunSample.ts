// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StopTestRun
 *
 * @summary call operation StopTestRun
 */
async function loadTestRunStopTestRunSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}:stop", testRunId)
    .post();
  console.log(result);
}

async function main() {
  await loadTestRunStopTestRunSample();
}

main().catch(console.error);
