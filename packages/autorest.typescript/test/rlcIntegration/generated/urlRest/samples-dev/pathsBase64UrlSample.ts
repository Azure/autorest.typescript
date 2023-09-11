// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Base64Url
 *
 * @summary call operation Base64Url
 */
async function pathsBase64UrlSample() {
  const client = createUrlRestClient();
  const base64UrlPath = "{Your base64UrlPath}";
  const result = await client
    .path("/paths/string/bG9yZW0/{base64UrlPath}", base64UrlPath)
    .get();
  console.log(result);
}

async function main() {
  pathsBase64UrlSample();
}

main().catch(console.error);
