// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTestRuns
 *
 * @summary call operation ListTestRuns
 */
async function loadTestRunListTestRunsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
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

async function main() {
  loadTestRunListTestRunsSample();
}

main().catch(console.error);
