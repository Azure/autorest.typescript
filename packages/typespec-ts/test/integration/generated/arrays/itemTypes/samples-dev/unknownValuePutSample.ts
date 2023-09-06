// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  UnknownValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function unknownValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: UnknownValuePutParameters = { body: ["Unknown Type"] };
  const result = await client.path("/type/array/unknown").put(options);
  console.log(result);
}

async function main() {
  unknownValuePutSample();
}

main().catch(console.error);
