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
async function nullableModelValuePutSample() {
  const client = createArrayItemTypesClient();
  const result = await client
    .path("/type/array/nullable-model")
    .put({
      body: [
        { property: "{Your property}", children: [{} as any /**FIXME */] },
      ],
    });
  console.log(result);
}

async function main() {
  nullableModelValuePutSample();
}

main().catch(console.error);
