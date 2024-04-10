// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendInt
 *
 * @summary call operation SendInt
 */
async function sendIntSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/int")
    .post({ body: { simpleUnion: 123 } });
  console.log(result);
}

async function main() {
  sendIntSample();
}

main().catch(console.error);
