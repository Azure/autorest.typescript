// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ByteMultiByte
 *
 * @summary call operation ByteMultiByte
 */
async function pathsByteMultiByteSample() {
  const client = createUrlRestClient();
  const bytePath = "{Your bytePath}";
  const result = await client
    .path("/paths/byte/multibyte/{bytePath}", bytePath)
    .get();
  console.log(result);
}

async function main() {
  pathsByteMultiByteSample();
}

main().catch(console.error);
