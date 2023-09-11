// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUnionsClient, { SendIntArrayParameters } from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendIntArray
 *
 * @summary call operation SendIntArray
 */
async function sendIntArraySample() {
  const client = createUnionsClient();
  const options: SendIntArrayParameters = { body: { simpleUnion: 123 } };
  const result = await client.path("/type/union/int-array").post(options);
  console.log(result);
}

async function main() {
  sendIntArraySample();
}

main().catch(console.error);
