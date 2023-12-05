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
async function modelsOnlySendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/models-only")
    .post({ body: { prop: { name: "{Your name}" } } });
  console.log(result);
}

async function main() {
  modelsOnlySendSample();
}

main().catch(console.error);
