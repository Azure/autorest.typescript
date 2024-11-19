// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateServerMetricsConfig
 *
 * @summary call operation CreateOrUpdateServerMetricsConfig
 */
async function loadTestRunCreateOrUpdateServerMetricsConfigSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/server-metrics-config", testRunId)
    .patch({
      body: {
        metrics: {
          key: {
            resourceId: "{Your resourceId}",
            metricNamespace: "{Your metricNamespace}",
            displayDescription: "{Your displayDescription}",
            name: "{Your name}",
            aggregation: "{Your aggregation}",
            unit: "{Your unit}",
            resourceType: "{Your resourceType}",
          },
        },
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  loadTestRunCreateOrUpdateServerMetricsConfigSample();
}

main().catch(console.error);
