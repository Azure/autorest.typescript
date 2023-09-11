// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetLongNull
 *
 * @summary call operation GetLongNull
 */
async function queriesGetLongNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/long/null").get();
  console.log(result);
}

async function main() {
  queriesGetLongNullSample();
}

main().catch(console.error);
