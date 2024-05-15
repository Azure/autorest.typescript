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
async function int64ValueGetSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/int64").get();
  console.log(result);
}

async function main() {
  int64ValueGetSample();
}

main().catch(console.error);
