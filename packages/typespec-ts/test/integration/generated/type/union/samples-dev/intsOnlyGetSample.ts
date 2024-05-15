// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function intsOnlyGetSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/ints-only").get();
  console.log(result);
}

async function main() {
  intsOnlyGetSample();
}

main().catch(console.error);
