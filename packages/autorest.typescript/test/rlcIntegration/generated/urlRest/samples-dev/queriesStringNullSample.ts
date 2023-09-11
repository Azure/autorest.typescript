// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StringNull
 *
 * @summary call operation StringNull
 */
async function queriesStringNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/string/null").get();
  console.log(result);
}

async function main() {
  queriesStringNullSample();
}

main().catch(console.error);
