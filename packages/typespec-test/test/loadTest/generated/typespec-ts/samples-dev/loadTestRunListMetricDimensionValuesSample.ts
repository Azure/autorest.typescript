// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureLoadTestingClient, {
  LoadTestRunListMetricDimensionValuesParameters,
  paginate,
} from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMetricDimensionValues
 *
 * @summary call operation ListMetricDimensionValues
 */
async function loadTestRunListMetricDimensionValuesSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testRunId = "{Your testRunId}";
  const name = "{Your name}";
  const options: LoadTestRunListMetricDimensionValuesParameters = {
    queryParameters: {
      interval: "{Your interval}",
      metricName: "{Your metricName}",
      metricNamespace: "{Your metricNamespace}",
      timespan: "{Your timespan}",
    },
  };
  const initialResponse = await client
    .path(
      "/test-runs/{testRunId}/metric-dimensions/{name}/values",
      testRunId,
      name
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  loadTestRunListMetricDimensionValuesSample();
}

main().catch(console.error);
