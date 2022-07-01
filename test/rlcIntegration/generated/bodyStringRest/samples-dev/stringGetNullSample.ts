// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get null string value value
 *
 * @summary Get null string value value
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/string_getNull.json
 */
async function stringGetNull() {
  const client = createClient();
  const result = await client.path("/string/null").get();
  console.log(result);
}

stringGetNull().catch(console.error);
