// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set string value null
 *
 * @summary Set string value null
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putNull.json
 */
async function stringPutNull() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/null").put();
  console.log(result);
}

stringPutNull().catch(console.error);
