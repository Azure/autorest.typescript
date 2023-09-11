// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ArrayCsvInPath
 *
 * @summary call operation ArrayCsvInPath
 */
async function pathsArrayCsvInPathSample() {
  const client = createUrlRestClient();
  const arrayPath = ["{Your arrayPath}"];
  const result = await client
    .path(
      "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
      arrayPath
    )
    .get();
  console.log(result);
}

async function main() {
  pathsArrayCsvInPathSample();
}

main().catch(console.error);
