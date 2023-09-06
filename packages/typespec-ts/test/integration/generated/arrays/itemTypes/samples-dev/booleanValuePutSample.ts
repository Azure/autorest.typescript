// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  BooleanValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function booleanValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: BooleanValuePutParameters = { body: [true] };
  const result = await client.path("/type/array/boolean").put(options);
  console.log(result);
}

async function main() {
  booleanValuePutSample();
}

main().catch(console.error);
