// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  Int32ValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function int32ValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: Int32ValuePutParameters = { body: [123] };
  const result = await client.path("/type/array/int32").put(options);
  console.log(result);
}

async function main() {
  int32ValuePutSample();
}

main().catch(console.error);
