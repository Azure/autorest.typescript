// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  getLongRunningPoller,
} from "@azure-rest/load-testing";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation CreateOrUpdateTestRun
 *
 * @summary call operation CreateOrUpdateTestRun
 */
async function loadTestRunCreateOrUpdateTestRunSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const initialResponse = await client
    .path("/test-runs/{testRunId}", testRunId)
    .patch({
      body: {
        passFailCriteria: {
          passFailMetrics: {
            key: {
              clientMetric: "response_time_ms",
              aggregate: "count",
              condition: "{Your condition}",
              requestName: "{Your requestName}",
              value: 123,
              action: "continue",
            },
          },
        },
        secrets: { key: { value: "{Your value}", type: "AKV_SECRET_URI" } },
        certificate: {
          value: "{Your value}",
          type: "AKV_CERT_URI",
          name: "{Your name}",
        },
        environmentVariables: { key: "{Your environmentVariables}" },
        loadTestConfiguration: {
          engineInstances: 123,
          splitAllCSVs: true,
          quickStartTest: true,
          optionalLoadTestConfig: {
            endpointUrl: "{Your endpointUrl}",
            virtualUsers: 123,
            rampUpTime: 123,
            duration: 123,
          },
        },
        displayName: "{Your displayName}",
        testId: "{Your testId}",
        description: "{Your description}",
      },
      queryParameters: { oldTestRunId: "{Your oldTestRunId}" },
      contentType: "application/merge-patch+json",
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunCreateOrUpdateTestRunSample();
}

main().catch(console.error);
