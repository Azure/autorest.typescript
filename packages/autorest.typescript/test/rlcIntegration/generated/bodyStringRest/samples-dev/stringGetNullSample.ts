// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get null string value value
 *
 * @summary Get null string value value
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getNull.json
 */
async function stringGetNull() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/null").get();
  console.log(result);
}

async function main() {
  stringGetNull();
}

main().catch(console.error);
