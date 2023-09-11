// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StringEmpty
 *
 * @summary call operation StringEmpty
 */
async function queriesStringEmptySample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/string/empty").get();
  console.log(result);
}

async function main() {
  queriesStringEmptySample();
}

main().catch(console.error);
