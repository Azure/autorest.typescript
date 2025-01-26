// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createHeaderRestClient from "@msinternal/header-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Send a post request with header value "Content-Type": "text/html"
 *
 * @summary Send a post request with header value "Content-Type": "text/html"
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramProtectedKey.json
 */
async function headerParamProtectedKey(): Promise<void> {
  const client = createHeaderRestClient();
  const result = await client
    .path("/header/param/protectedkey")
    .post({ headers: { "Content-Type": "text/html" } });
  console.log(result);
}

async function main(): Promise<void> {
  await headerParamProtectedKey();
}

main().catch(console.error);
