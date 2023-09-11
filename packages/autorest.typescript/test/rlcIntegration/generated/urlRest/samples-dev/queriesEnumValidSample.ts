// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation EnumValid
 *
 * @summary call operation EnumValid
 */
async function queriesEnumValidSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/enum/green%20color").get();
  console.log(result);
}

async function main() {
  queriesEnumValidSample();
}

main().catch(console.error);
