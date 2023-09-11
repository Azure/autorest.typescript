// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation StringUrlEncoded
 *
 * @summary call operation StringUrlEncoded
 */
async function pathsStringUrlEncodedSample() {
  const client = createUrlRestClient();
  const stringPath = undefined;
  const result = await client
    .path(
      "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
      stringPath
    )
    .get();
  console.log(result);
}

async function main() {
  pathsStringUrlEncodedSample();
}

main().catch(console.error);
