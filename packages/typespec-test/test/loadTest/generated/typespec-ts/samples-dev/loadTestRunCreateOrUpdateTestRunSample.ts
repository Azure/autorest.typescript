// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureLoadTestingClient, {
  LoadTestRunCreateOrUpdateTestRunParameters,
  getLongRunningPoller,
} from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTestRun
 *
 * @summary call operation CreateOrUpdateTestRun
 */
async function loadTestRunCreateOrUpdateTestRunSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testRunId = "{Your testRunId}";
  const options: LoadTestRunCreateOrUpdateTestRunParameters = {
    body: {
      passFailCriteria: {
        passFailMetrics: {
          key: {
            clientMetric: '{Your "clientMetric"}',
            aggregate: '{Your "aggregate"}',
            condition: '{Your "condition"}',
            requestName: '{Your "requestName"}',
            value: 123,
            action: '{Your "action"}',
          },
        },
      },
      secrets: { key: { value: '{Your "value"}', type: '{Your "type"}' } },
      certificate: {
        value: '{Your "value"}',
        type: '{Your "type"}',
        name: '{Your "name"}',
      },
      environmentVariables: { key: '{Your "environmentVariables"}' },
      loadTestConfiguration: {
        engineInstances: 123,
        splitAllCSVs: true,
        quickStartTest: true,
        optionalLoadTestConfig: {
          endpointUrl: '{Your "endpointUrl"}',
          virtualUsers: 123,
          rampUpTime: 123,
          duration: 123,
        },
      },
      displayName: '{Your "displayName"}',
      testId: '{Your "testId"}',
      description: '{Your "description"}',
    },
    queryParameters: { oldTestRunId: '{Your "oldTestRunId"}' },
    contentType: "application/merge-patch+json",
  };
  const initialResponse = await client
    .path("/test-runs/{testRunId}", testRunId)
    .patch(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  loadTestRunCreateOrUpdateTestRunSample();
}

main().catch(console.error);
