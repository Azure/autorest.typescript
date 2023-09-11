// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayStringNoCollectionFormatEmpty
 *
 * @summary call operation ArrayStringNoCollectionFormatEmpty
 */
async function queriesArrayStringNoCollectionFormatEmptySample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/array/none/string/empty").get();
  console.log(result);
}

async function main() {
  queriesArrayStringNoCollectionFormatEmptySample();
}

main().catch(console.error);
