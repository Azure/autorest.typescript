// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  LoadTestAdministrationUploadTestFileParameters,
} from "@azure-rest/load-testing";
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
  const options: LoadTestAdministrationUploadTestFileParameters = {
    body: "{Your body}",
    queryParameters: { fileType: "{Your fileType}" },
    contentType: "application/octet-stream",
  };
  const result = await client
    .path("/tests/{testId}/files/{fileName}", testId, fileName)
    .put(options);
  console.log(result);
}

async function main() {
  loadTestAdministrationUploadTestFileSample();
}

main().catch(console.error);
