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
async function queriesByteMultiByteSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/byte/multibyte").get();
  console.log(result);
}

async function main() {
  queriesByteMultiByteSample();
}

main().catch(console.error);
