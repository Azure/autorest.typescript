// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetBooleanFalse
 *
 * @summary call operation GetBooleanFalse
 */
async function queriesGetBooleanFalseSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/bool/false").get();
  console.log(result);
}

async function main() {
  queriesGetBooleanFalseSample();
}

main().catch(console.error);
