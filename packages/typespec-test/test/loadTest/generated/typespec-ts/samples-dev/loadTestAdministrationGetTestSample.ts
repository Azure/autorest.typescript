// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTest
 *
 * @summary call operation GetTest
 */
async function loadTestAdministrationGetTestSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const result = await client.path("/tests/{testId}", testId).get();
  console.log(result);
}

async function main() {
  await loadTestAdministrationGetTestSample();
}

main().catch(console.error);
