// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListMetrics
 *
 * @summary call operation ListMetrics
 */
async function loadTestRunListMetricsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/metrics", testRunId)
    .post({
      body: { filters: [{ name: "{Your name}", values: ["{Your values}"] }] },
      queryParameters: {
        aggregation: "{Your aggregation}",
        interval: "PT5S",
        metricName: "{Your metricName}",
        metricNamespace: "{Your metricNamespace}",
        timespan: "{Your timespan}",
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunListMetricsSample();
}

main().catch(console.error);
