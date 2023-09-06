// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  NullableFloatValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function nullableFloatValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: NullableFloatValuePutParameters = { body: [123] };
  const result = await client.path("/type/array/nullable-float").put(options);
  console.log(result);
}

async function main() {
  nullableFloatValuePutSample();
}

main().catch(console.error);
