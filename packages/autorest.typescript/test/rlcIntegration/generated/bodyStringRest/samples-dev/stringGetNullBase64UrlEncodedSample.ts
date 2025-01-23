// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get null value that is expected to be base64url encoded
 *
 * @summary Get null value that is expected to be base64url encoded
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_getNullBase64UrlEncoded.json
 */
async function stringGetNullBase64UrlEncoded() {
  const client = createBodyStringRestClient();
  const result = await client.path("/string/nullBase64UrlEncoding").get();
  console.log(result);
}

async function main() {
  await stringGetNullBase64UrlEncoded();
}

main().catch(console.error);
