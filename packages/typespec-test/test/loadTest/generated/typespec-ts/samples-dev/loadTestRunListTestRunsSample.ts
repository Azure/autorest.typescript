// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
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
  const initialResponse = await client
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
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunListTestRunsSample();
}

main().catch(console.error);
