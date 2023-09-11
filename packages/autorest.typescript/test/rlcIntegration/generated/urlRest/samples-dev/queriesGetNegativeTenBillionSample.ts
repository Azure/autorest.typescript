// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetNegativeTenBillion
 *
 * @summary call operation GetNegativeTenBillion
 */
async function queriesGetNegativeTenBillionSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/long/-10000000000").get();
  console.log(result);
}

async function main() {
  queriesGetNegativeTenBillionSample();
}

main().catch(console.error);
