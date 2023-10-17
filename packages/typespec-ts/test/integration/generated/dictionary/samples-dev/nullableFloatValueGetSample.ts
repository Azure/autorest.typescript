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
async function nullableFloatValueGetSample() {
  const client = createDictClient();
  const result = await client.path("/type/dictionary/nullable-float").get();
  console.log(result);
}

async function main() {
  nullableFloatValueGetSample();
}

main().catch(console.error);
