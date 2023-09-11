// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUnionsClient, { SendIntParameters } from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendInt
 *
 * @summary call operation SendInt
 */
async function sendIntSample() {
  const client = createUnionsClient();
  const options: SendIntParameters = { body: { simpleUnion: 123 } };
  const result = await client.path("/type/union/int").post(options);
  console.log(result);
}

async function main() {
  sendIntSample();
}

main().catch(console.error);
