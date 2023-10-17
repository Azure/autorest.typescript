// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetServerMetricsConfig
 *
 * @summary call operation GetServerMetricsConfig
 */
async function loadTestAdministrationGetServerMetricsConfigSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const result = await client
    .path("/tests/{testId}/server-metrics-config", testId)
    .get();
  console.log(result);
}

async function main() {
  loadTestAdministrationGetServerMetricsConfigSample();
}

main().catch(console.error);
