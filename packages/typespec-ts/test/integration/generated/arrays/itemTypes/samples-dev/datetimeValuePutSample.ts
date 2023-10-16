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
async function datetimeValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client
    .path("/type/array/datetime")
    .put({ body: [new Date()] });
  console.log(result);
}

async function main() {
  datetimeValuePutSample();
}

main().catch(console.error);
