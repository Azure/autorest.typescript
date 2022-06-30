// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, {
  StringPutWhitespaceParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 *
 * @summary Set String value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/string_putWhitespace.json
 */
async function stringPutWhitespace() {
  const client = createClient();
  const options: StringPutWhitespaceParameters = {
    body:
      "<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>"
  };
  const result = await client.path("/string/whitespace").put(options);
  console.log(result);
}

stringPutWhitespace().catch(console.error);
