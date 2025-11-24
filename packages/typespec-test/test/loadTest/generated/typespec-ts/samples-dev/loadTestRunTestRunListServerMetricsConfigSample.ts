// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation TestRunListServerMetricsConfig
 *
 * @summary call operation TestRunListServerMetricsConfig
 */
async function loadTestRunTestRunListServerMetricsConfigSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client.path("/test-runs/{testRunId}/server-metrics-config", testRunId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestRunTestRunListServerMetricsConfigSample();
}

main().catch(console.error);
