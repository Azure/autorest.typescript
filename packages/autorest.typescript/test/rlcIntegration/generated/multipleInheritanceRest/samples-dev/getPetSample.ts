// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetPet
 *
 * @summary call operation GetPet
 */
async function getPetSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/pet").get();
  console.log(result);
}

async function main() {
  getPetSample();
}

main().catch(console.error);
