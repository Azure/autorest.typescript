// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation FloatNull
 *
 * @summary call operation FloatNull
 */
async function queriesFloatNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/float/null").get();
  console.log(result);
}

async function main() {
  queriesFloatNullSample();
}

main().catch(console.error);
