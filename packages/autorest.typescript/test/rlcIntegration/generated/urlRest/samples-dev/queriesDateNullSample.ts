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
async function queriesDateNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/date/null").get();
  console.log(result);
}

async function main() {
  queriesDateNullSample();
}

main().catch(console.error);
