// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ByteEmpty
 *
 * @summary call operation ByteEmpty
 */
async function pathsByteEmptySample() {
  const client = createUrlRestClient();
  const bytePath = "";
  const result = await client
    .path("/paths/byte/empty/{bytePath}", bytePath)
    .get();
  console.log(result);
}

async function main() {
  pathsByteEmptySample();
}

main().catch(console.error);
