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
async function queriesDateTimeNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/datetime/null").get();
  console.log(result);
}

async function main() {
  queriesDateTimeNullSample();
}

main().catch(console.error);
