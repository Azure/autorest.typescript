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
async function queriesDateValidSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/date/2012-01-01").get();
  console.log(result);
}

async function main() {
  queriesDateValidSample();
}

main().catch(console.error);
