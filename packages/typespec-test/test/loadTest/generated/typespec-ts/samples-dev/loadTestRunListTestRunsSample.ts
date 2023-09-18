// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  LoadTestRunListTestRunsParameters,
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
  const options: LoadTestRunListTestRunsParameters = {
    queryParameters: {
      orderby: "{Your orderby}",
      search: "{Your search}",
      testId: "{Your testId}",
      executionFrom: new Date(),
      executionTo: new Date(),
      status: "{Your status}",
      maxpagesize: 123,
    },
  };
  const initialResponse = await client.path("/test-runs").get(options);
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
