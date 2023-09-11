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
async function pathsStringEmptySample() {
  const client = createUrlRestClient();
  const stringPath = "";
  const result = await client
    .path("/paths/string/empty/{stringPath}", stringPath)
    .get();
  console.log(result);
}

async function main() {
  pathsStringEmptySample();
}

main().catch(console.error);
