// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  ModelValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function modelValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: ModelValuePutParameters = {
    body: [
      { property: '{Your "property"}', children: [{} as any /**FIXME */] },
    ],
  };
  const result = await client.path("/type/array/model").put(options);
  console.log(result);
}

async function main() {
  modelValuePutSample();
}

main().catch(console.error);
