// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get value that is base64 encoded
 *
 * @summary Get value that is base64 encoded
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getBase64Encoded.json
 */
async function stringGetBase64Encoded() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/base64Encoding").get();
  console.log(result);
}

async function main() {
  stringGetBase64Encoded();
}

main().catch(console.error);
