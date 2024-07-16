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
async function nullableBooleanValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client
    .path("/type/array/nullable-boolean")
    .put({ body: [true] });
  console.log(result);
}

async function main() {
  nullableBooleanValuePutSample();
}

main().catch(console.error);
