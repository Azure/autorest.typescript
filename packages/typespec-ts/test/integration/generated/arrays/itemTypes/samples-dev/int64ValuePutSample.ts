// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createArrayItemTypesClient from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function int64ValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/int64").put({ body: [123] });
  console.log(result);
}

async function main() {
  int64ValuePutSample();
}

main().catch(console.error);
