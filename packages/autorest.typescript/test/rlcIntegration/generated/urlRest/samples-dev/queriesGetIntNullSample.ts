// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetIntNull
 *
 * @summary call operation GetIntNull
 */
async function queriesGetIntNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/int/null").get();
  console.log(result);
}

async function main() {
  queriesGetIntNullSample();
}

main().catch(console.error);
