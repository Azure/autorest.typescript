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
async function float32ValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/float32").put({ body: [123] });
  console.log(result);
}

async function main() {
  float32ValuePutSample();
}

main().catch(console.error);
