// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DateValid
 *
 * @summary call operation DateValid
 */
async function pathsDateValidSample() {
  const client = createUrlRestClient();
  const datePath = "2012-01-01";
  const result = await client
    .path("/paths/date/2012-01-01/{datePath}", datePath)
    .get();
  console.log(result);
}

async function main() {
  pathsDateValidSample();
}

main().catch(console.error);
