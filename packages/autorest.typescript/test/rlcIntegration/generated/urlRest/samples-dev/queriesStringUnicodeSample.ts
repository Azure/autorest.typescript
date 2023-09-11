// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StringUnicode
 *
 * @summary call operation StringUnicode
 */
async function queriesStringUnicodeSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/string/unicode/").get();
  console.log(result);
}

async function main() {
  queriesStringUnicodeSample();
}

main().catch(console.error);
