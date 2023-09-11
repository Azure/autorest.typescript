// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DateTimeNull
 *
 * @summary call operation DateTimeNull
 */
async function pathsDateTimeNullSample() {
  const client = createUrlRestClient();
  const dateTimePath = new Date();
  const result = await client
    .path("/paths/datetime/null/{dateTimePath}", dateTimePath)
    .get();
  console.log(result);
}

async function main() {
  pathsDateTimeNullSample();
}

main().catch(console.error);
