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
async function enumsOnlyGetSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/enums-only").get();
  console.log(result);
}

async function main() {
  enumsOnlyGetSample();
}

main().catch(console.error);
