// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAppComponents
 *
 * @summary call operation GetAppComponents
 */
async function loadTestRunGetAppComponentsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .get();
  console.log(result);
}

async function main() {
  loadTestRunGetAppComponentsSample();
}

main().catch(console.error);
