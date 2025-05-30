// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation DeleteTest
 *
 * @summary call operation DeleteTest
 */
async function loadTestAdministrationDeleteTestSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const result = await client.path("/tests/{testId}", testId).delete();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestAdministrationDeleteTestSample();
}

main().catch(console.error);
