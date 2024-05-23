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
async function recursiveModelValueGetSample() {
  const client = createDictClient();
  const result = await client.path("/type/dictionary/model/recursive").get();
  console.log(result);
}

async function main() {
  recursiveModelValueGetSample();
}

main().catch(console.error);
