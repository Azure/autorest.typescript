// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createArrayItemTypesClient from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function stringValueGetSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/string").get();
  console.log(result);
}

async function main() {
  stringValueGetSample();
}

main().catch(console.error);
