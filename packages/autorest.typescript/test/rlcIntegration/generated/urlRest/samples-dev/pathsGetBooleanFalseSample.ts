// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetBooleanFalse
 *
 * @summary call operation GetBooleanFalse
 */
async function pathsGetBooleanFalseSample() {
  const client = createUrlRestClient();
  const boolPath = undefined;
  const result = await client
    .path("/paths/bool/false/{boolPath}", boolPath)
    .get();
  console.log(result);
}

async function main() {
  pathsGetBooleanFalseSample();
}

main().catch(console.error);
