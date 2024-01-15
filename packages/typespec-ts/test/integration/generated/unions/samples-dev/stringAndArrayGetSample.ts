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
async function stringAndArrayGetSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/string-and-array").get();
  console.log(result);
}

async function main() {
  stringAndArrayGetSample();
}

main().catch(console.error);
