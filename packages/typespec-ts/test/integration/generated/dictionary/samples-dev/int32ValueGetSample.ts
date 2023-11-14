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
async function int32ValueGetSample() {
  const client = createDictClient();
  const result = await client.path("/type/dictionary/int32").get();
  console.log(result);
}

async function main() {
  int32ValueGetSample();
}

main().catch(console.error);
