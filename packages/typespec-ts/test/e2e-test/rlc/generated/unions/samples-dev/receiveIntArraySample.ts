// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReceiveIntArray
 *
 * @summary call operation ReceiveIntArray
 */
async function receiveIntArraySample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/receive/int-array").get();
  console.log(result);
}

async function main() {
  receiveIntArraySample();
}

main().catch(console.error);
