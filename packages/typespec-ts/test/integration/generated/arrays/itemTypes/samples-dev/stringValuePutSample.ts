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
async function stringValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client
    .path("/type/array/string")
    .put({ body: ["{Your body}"] });
  console.log(result);
}

async function main() {
  stringValuePutSample();
}

main().catch(console.error);
