// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMetricDimensionValues
 *
 * @summary call operation ListMetricDimensionValues
 */
async function loadTestRunListMetricDimensionValuesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const name = "{Your name}";
  const initialResponse = await client
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
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  await loadTestRunListMetricDimensionValuesSample();
}

main().catch(console.error);
