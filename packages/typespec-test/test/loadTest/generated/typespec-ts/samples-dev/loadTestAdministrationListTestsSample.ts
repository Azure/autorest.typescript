// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  paginate,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTests
 *
 * @summary call operation ListTests
 */
async function loadTestAdministrationListTestsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const initialResponse = await client
    .path("/tests")
    .get({
      queryParameters: {
        orderby: "{Your orderby}",
        search: "{Your search}",
        lastModifiedStartTime: "{Your lastModifiedStartTime}",
        lastModifiedEndTime: "{Your lastModifiedEndTime}",
        maxpagesize: 123,
      },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  await loadTestAdministrationListTestsSample();
}

main().catch(console.error);
