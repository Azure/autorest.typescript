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
async function queriesByteEmptySample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/byte/empty").get();
  console.log(result);
}

async function main() {
  queriesByteEmptySample();
}

main().catch(console.error);
