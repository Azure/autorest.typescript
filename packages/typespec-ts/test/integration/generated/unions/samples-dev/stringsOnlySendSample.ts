// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Send
 *
 * @summary call operation Send
 */
async function stringsOnlySendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/strings-only")
    .post({ body: { prop: "a" } });
  console.log(result);
}

async function main() {
  stringsOnlySendSample();
}

main().catch(console.error);
