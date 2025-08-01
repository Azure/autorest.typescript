// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListTests
 *
 * @summary call operation ListTests
 */
async function loadTestAdministrationListTestsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const result = await client
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
  console.log(result);
}

async function main(): Promise<void> {
  await loadTestAdministrationListTestsSample();
}

main().catch(console.error);
