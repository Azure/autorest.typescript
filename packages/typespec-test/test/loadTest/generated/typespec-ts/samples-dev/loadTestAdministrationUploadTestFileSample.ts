// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UploadTestFile
 *
 * @summary call operation UploadTestFile
 */
async function loadTestAdministrationUploadTestFileSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const fileName = "{Your fileName}";
  const result = await client
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .put({
      body: "{Your body}",
      queryParameters: { fileType: "{Your fileType}" },
      contentType: "application/octet-stream",
    });
  console.log(result);
}

async function main() {
  loadTestAdministrationUploadTestFileSample();
}

main().catch(console.error);
