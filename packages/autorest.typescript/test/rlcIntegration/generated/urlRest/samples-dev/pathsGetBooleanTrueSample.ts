// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetBooleanTrue
 *
 * @summary call operation GetBooleanTrue
 */
async function pathsGetBooleanTrueSample() {
  const client = createUrlRestClient();
  const boolPath = undefined;
  const result = await client
    .path("/paths/bool/true/{boolPath}", boolPath)
    .get();
  console.log(result);
}

async function main() {
  pathsGetBooleanTrueSample();
}

main().catch(console.error);
