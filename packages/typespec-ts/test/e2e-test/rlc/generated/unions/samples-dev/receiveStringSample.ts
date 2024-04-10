// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReceiveString
 *
 * @summary call operation ReceiveString
 */
async function receiveStringSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/receive/string").get();
  console.log(result);
}

async function main() {
  receiveStringSample();
}

main().catch(console.error);
