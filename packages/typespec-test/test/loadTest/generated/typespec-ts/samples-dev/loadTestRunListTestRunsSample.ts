// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListTestRuns
 *
 * @summary call operation ListTestRuns
 */
async function loadTestRunListTestRunsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const result = await client
    .path("/test-runs")
    .get({
      queryParameters: {
        orderby: "{Your orderby}",
        search: "{Your search}",
        testId: "{Your testId}",
        executionFrom: "{Your executionFrom}",
        executionTo: "{Your executionTo}",
        status: "{Your status}",
        maxpagesize: 123,
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunListTestRunsSample();
}

main().catch(console.error);
