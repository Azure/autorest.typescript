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
async function stringsOnlyGetSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/strings-only").get();
  console.log(result);
}

async function main() {
  stringsOnlyGetSample();
}

main().catch(console.error);
