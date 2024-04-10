// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAppComponents
 *
 * @summary call operation GetAppComponents
 */
async function loadTestAdministrationGetAppComponentsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const result = await client
    .path("/tests/{testId}/app-components", testId)
    .get();
  console.log(result);
}

async function main() {
  loadTestAdministrationGetAppComponentsSample();
}

main().catch(console.error);
