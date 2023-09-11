// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTenBillion
 *
 * @summary call operation GetTenBillion
 */
async function pathsGetTenBillionSample() {
  const client = createUrlRestClient();
  const longPath = undefined;
  const result = await client
    .path("/paths/long/10000000000/{longPath}", longPath)
    .get();
  console.log(result);
}

async function main() {
  pathsGetTenBillionSample();
}

main().catch(console.error);
