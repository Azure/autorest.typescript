// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDictClient from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function durationValueGetSample() {
  const client = createDictClient();
  const result = await client.path("/type/dictionary/duration").get();
  console.log(result);
}

async function main() {
  durationValueGetSample();
}

main().catch(console.error);
