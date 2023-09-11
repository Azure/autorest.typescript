// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StringUrlNonEncoded
 *
 * @summary call operation StringUrlNonEncoded
 */
async function pathsStringUrlNonEncodedSample() {
  const client = createUrlRestClient();
  const stringPath = undefined;
  const result = await client
    .path("/paths/string/begin!*'();:@&=+$,end/{stringPath}", stringPath)
    .get();
  console.log(result);
}

async function main() {
  pathsStringUrlNonEncodedSample();
}

main().catch(console.error);
