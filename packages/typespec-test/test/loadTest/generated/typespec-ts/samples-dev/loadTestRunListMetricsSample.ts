// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureLoadTestingClient, {
  LoadTestRunListMetricsParameters,
  paginate,
} from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMetrics
 *
 * @summary call operation ListMetrics
 */
async function loadTestRunListMetricsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testRunId = "{Your testRunId}";
  const options: LoadTestRunListMetricsParameters = {
    body: { filters: [{ name: '{Your "name"}', values: ['{Your "values"}'] }] },
    queryParameters: {
      aggregation: '{Your "aggregation"}',
      interval: '{Your "interval"}',
      metricName: '{Your "metricName"}',
      metricNamespace: '{Your "metricNamespace"}',
      timespan: '{Your "timespan"}',
    },
  };
  const initialResponse = await client
    .path("/test-runs/{testRunId}/metrics", testRunId)
    .post(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  loadTestRunListMetricsSample();
}

main().catch(console.error);
