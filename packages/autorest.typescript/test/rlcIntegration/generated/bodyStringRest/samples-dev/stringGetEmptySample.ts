// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get empty string value value ''
 *
 * @summary Get empty string value value ''
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getEmpty.json
 */
async function stringGetEmpty() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/empty").get();
  console.log(result);
}

stringGetEmpty().catch(console.error);
