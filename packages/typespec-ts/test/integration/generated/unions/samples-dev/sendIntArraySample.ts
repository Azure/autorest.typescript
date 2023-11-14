// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendIntArray
 *
 * @summary call operation SendIntArray
 */
async function sendIntArraySample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/int-array")
    .post({ body: { simpleUnion: 123 } });
  console.log(result);
}

async function main() {
  sendIntArraySample();
}

main().catch(console.error);
