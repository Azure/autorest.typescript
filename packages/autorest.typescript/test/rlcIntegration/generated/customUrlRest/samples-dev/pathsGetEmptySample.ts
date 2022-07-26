// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createCustomUrlRestClient from "@msinternal/custom-url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a 200 to test a valid base uri
 *
 * @summary Get a 200 to test a valid base uri
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/paths_getEmpty.json
 */
async function pathsGetEmpty() {
  const host = "host:3000";
  const client = createCustomUrlRestClient(host);
  const result = await client.path("/customuri").get();
  console.log(result);
}

pathsGetEmpty().catch(console.error);
