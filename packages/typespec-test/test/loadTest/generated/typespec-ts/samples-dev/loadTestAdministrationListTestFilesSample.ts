// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTestFiles
 *
 * @summary call operation ListTestFiles
 */
async function loadTestAdministrationListTestFilesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testId = "{Your testId}";
  const initialResponse = await client
    .path("/tests/{testId}/files", testId)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  loadTestAdministrationListTestFilesSample();
}

main().catch(console.error);
