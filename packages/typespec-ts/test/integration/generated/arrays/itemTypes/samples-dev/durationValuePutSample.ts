// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient, {
  DurationValuePutParameters,
} from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function durationValuePutSample() {
  const client = createArrayItemTypesClient();
  const options: DurationValuePutParameters = { body: ["{Your body}"] };
  const result = await client.path("/type/array/duration").put(options);
  console.log(result);
}

async function main() {
  durationValuePutSample();
}

main().catch(console.error);
