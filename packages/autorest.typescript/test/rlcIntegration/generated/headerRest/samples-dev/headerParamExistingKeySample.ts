// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createHeaderRestClient from "@msinternal/header-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Send a post request with header value "User-Agent": "overwrite"
 *
 * @summary Send a post request with header value "User-Agent": "overwrite"
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/header_paramExistingKey.json
 */
async function headerParamExistingKey() {
  const client = createHeaderRestClient();
  const result = await client
    .path("/header/param/existingkey")
    .post({ headers: { "User-Agent": "overwrite" } });
  console.log(result);
}

async function main() {
  headerParamExistingKey();
}

main().catch(console.error);
