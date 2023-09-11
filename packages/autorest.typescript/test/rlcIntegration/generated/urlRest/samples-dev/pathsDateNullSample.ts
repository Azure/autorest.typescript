// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DateNull
 *
 * @summary call operation DateNull
 */
async function pathsDateNullSample() {
  const client = createUrlRestClient();
  const datePath = new Date();
  const result = await client
    .path("/paths/date/null/{datePath}", datePath)
    .get();
  console.log(result);
}

async function main() {
  pathsDateNullSample();
}

main().catch(console.error);
