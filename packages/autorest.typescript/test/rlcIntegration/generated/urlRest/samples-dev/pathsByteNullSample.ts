// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ByteNull
 *
 * @summary call operation ByteNull
 */
async function pathsByteNullSample() {
  const client = createUrlRestClient();
  const bytePath = "{Your bytePath}";
  const result = await client
    .path("/paths/byte/null/{bytePath}", bytePath)
    .get();
  console.log(result);
}

async function main() {
  pathsByteNullSample();
}

main().catch(console.error);
