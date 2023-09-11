// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringPipesValid
 *
 * @summary call operation ArrayStringPipesValid
 */
async function queriesArrayStringPipesValidSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/pipes/string/valid").get();
  console.log(result);
}

async function main() {
  queriesArrayStringPipesValidSample();
}

main().catch(console.error);
