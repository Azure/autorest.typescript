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
async function enumsOnlySendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/enums-only")
    .post({ body: { prop: { lr: "left", ud: "up" } } });
  console.log(result);
}

async function main() {
  enumsOnlySendSample();
}

main().catch(console.error);
