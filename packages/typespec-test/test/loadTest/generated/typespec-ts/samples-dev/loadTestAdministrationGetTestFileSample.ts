// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetTestFile
 *
 * @summary call operation GetTestFile
 */
async function loadTestAdministrationGetTestFileSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const fileName = "{Your fileName}";
  const result = await client
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestAdministrationGetTestFileSample();
}

main().catch(console.error);
