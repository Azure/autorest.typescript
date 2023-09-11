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
async function pathsStringNullSample() {
  const client = createUrlRestClient();
  const stringPath = "{Your stringPath}";
  const result = await client
    .path("/paths/string/null/{stringPath}", stringPath)
    .get();
  console.log(result);
}

async function main() {
  pathsStringNullSample();
}

main().catch(console.error);
