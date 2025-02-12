// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 *
 * @summary Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getWhitespace.json
 */
async function stringGetWhitespace(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/whitespace").get();
  console.log(result);
}

async function main(): Promise<void> {
  await stringGetWhitespace();
}

main().catch(console.error);
