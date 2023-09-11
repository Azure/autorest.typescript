// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringTsvValid
 *
 * @summary call operation ArrayStringTsvValid
 */
async function queriesArrayStringTsvValidSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/tsv/string/valid").get();
  console.log(result);
}

async function main() {
  queriesArrayStringTsvValidSample();
}

main().catch(console.error);
