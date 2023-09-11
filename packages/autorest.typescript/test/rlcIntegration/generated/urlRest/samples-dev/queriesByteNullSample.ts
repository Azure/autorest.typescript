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
async function queriesByteNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/byte/null").get();
  console.log(result);
}

async function main() {
  queriesByteNullSample();
}

main().catch(console.error);
