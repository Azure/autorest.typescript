// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListMetricDimensionValues
 *
 * @summary call operation ListMetricDimensionValues
 */
async function loadTestRunListMetricDimensionValuesSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const name = "{Your name}";
  const result = await client
    .path(
      "/test-runs/{testRunId}/metric-dimensions/{name}/values",
      testRunId,
      name,
    )
    .get({
      queryParameters: {
        interval: "PT5S",
        metricName: "{Your metricName}",
        metricNamespace: "{Your metricNamespace}",
        timespan: "{Your timespan}",
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunListMetricDimensionValuesSample();
}

main().catch(console.error);
