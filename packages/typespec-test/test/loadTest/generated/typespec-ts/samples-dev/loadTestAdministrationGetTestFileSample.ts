// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTestFile
 *
 * @summary call operation GetTestFile
 */
async function loadTestAdministrationGetTestFileSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const fileName = "{Your fileName}";
  const result = await client
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .get();
  console.log(result);
}

async function main() {
  loadTestAdministrationGetTestFileSample();
}

main().catch(console.error);
