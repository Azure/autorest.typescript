// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation EnumNull
 *
 * @summary call operation EnumNull
 */
async function pathsEnumNullSample() {
  const client = createUrlRestClient();
  const enumPath = "red color";
  const result = await client
    .path("/paths/string/null/{enumPath}", enumPath)
    .get();
  console.log(result);
}

async function main() {
  pathsEnumNullSample();
}

main().catch(console.error);
