// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation UnixTimeUrl
 *
 * @summary call operation UnixTimeUrl
 */
async function pathsUnixTimeUrlSample() {
  const client = createUrlRestClient();
  const unixTimeUrlPath = "{Your unixTimeUrlPath}";
  const result = await client
    .path("/paths/int/1460505600/{unixTimeUrlPath}", unixTimeUrlPath)
    .get();
  console.log(result);
}

async function main() {
  pathsUnixTimeUrlSample();
}

main().catch(console.error);
