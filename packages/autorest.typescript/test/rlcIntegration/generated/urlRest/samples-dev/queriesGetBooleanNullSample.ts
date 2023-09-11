// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetBooleanNull
 *
 * @summary call operation GetBooleanNull
 */
async function queriesGetBooleanNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/bool/null").get();
  console.log(result);
}

async function main() {
  queriesGetBooleanNullSample();
}

main().catch(console.error);
