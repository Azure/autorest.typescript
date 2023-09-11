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
async function pathsStringUnicodeSample() {
  const client = createUrlRestClient();
  const stringPath = undefined;
  const result = await client
    .path("/paths/string/unicode/{stringPath}", stringPath)
    .get();
  console.log(result);
}

async function main() {
  pathsStringUnicodeSample();
}

main().catch(console.error);
