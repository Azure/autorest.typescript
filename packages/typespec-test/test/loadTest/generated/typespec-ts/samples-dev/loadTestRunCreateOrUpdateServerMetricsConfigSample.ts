// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureLoadTestingClient, {
  LoadTestRunCreateOrUpdateServerMetricsConfigParameters,
} from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateServerMetricsConfig
 *
 * @summary call operation CreateOrUpdateServerMetricsConfig
 */
async function loadTestRunCreateOrUpdateServerMetricsConfigSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testRunId = "{Your testRunId}";
  const options: LoadTestRunCreateOrUpdateServerMetricsConfigParameters = {
    body: {
      metrics: {
        key: {
          resourceId: '{Your "resourceId"}',
          metricNamespace: '{Your "metricNamespace"}',
          displayDescription: '{Your "displayDescription"}',
          name: '{Your "name"}',
          aggregation: '{Your "aggregation"}',
          unit: '{Your "unit"}',
          resourceType: '{Your "resourceType"}',
        },
      },
    },
    contentType: "application/merge-patch+json",
  };
  const result = await client
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .patch(options);
  console.log(result);
}

async function main() {
  loadTestRunCreateOrUpdateServerMetricsConfigSample();
}

main().catch(console.error);
