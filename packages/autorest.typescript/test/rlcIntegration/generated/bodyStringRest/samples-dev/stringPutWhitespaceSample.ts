// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 *
 * @summary Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putWhitespace.json
 */
async function stringPutWhitespace() {
  const client = createBodyStringRestClient();
  const result = await client
    .path("/string/whitespace")
    .put({
      body: "    Now is the time for all good men to come to the aid of their country    ",
    });
  console.log(result);
}

async function main() {
  stringPutWhitespace();
}

main().catch(console.error);
