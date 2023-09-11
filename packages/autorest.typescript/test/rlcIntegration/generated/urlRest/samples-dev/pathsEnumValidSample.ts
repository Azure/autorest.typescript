// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation EnumValid
 *
 * @summary call operation EnumValid
 */
async function pathsEnumValidSample() {
  const client = createUrlRestClient();
  const enumPath = "red color";
  const result = await client
    .path("/paths/enum/green%20color/{enumPath}", enumPath)
    .get();
  console.log(result);
}

async function main() {
  pathsEnumValidSample();
}

main().catch(console.error);
