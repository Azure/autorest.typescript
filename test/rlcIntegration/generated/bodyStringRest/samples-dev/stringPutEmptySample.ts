// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, {
  StringPutEmptyParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set string value empty ''
 *
 * @summary Set string value empty ''
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/string_putEmpty.json
 */
async function stringPutEmpty() {
  const client = createClient();
  const options: StringPutEmptyParameters = { body: "" };
  const result = await client.path("/string/empty").put(options);
  console.log(result);
}

stringPutEmpty().catch(console.error);
