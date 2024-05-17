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
async function unknownValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client
    .path("/type/array/unknown")
    .put({ body: ["Unknown Type"] });
  console.log(result);
}

async function main() {
  unknownValuePutSample();
}

main().catch(console.error);
