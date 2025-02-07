// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Put value that is base64url encoded
 *
 * @summary Put value that is base64url encoded
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putBase64UrlEncoded.json
 */
async function stringPutBase64UrlEncoded(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client
    .path("/string/base64UrlEncoding")
    .put({ body: "YSBzdHJpbmcgdGhhdCBnZXRzIGVuY29kZWQgd2l0aCBiYXNlNjR1cmw" });
  console.log(result);
}

async function main(): Promise<void> {
  await stringPutBase64UrlEncoded();
}

main().catch(console.error);
