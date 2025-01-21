// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set string value empty ''
 *
 * @summary Set string value empty ''
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putEmpty.json
 */
async function stringPutEmpty() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/empty").put({ body: "" });
  console.log(result);
}

async function main() {
  await stringPutEmpty();
}

main().catch(console.error);
