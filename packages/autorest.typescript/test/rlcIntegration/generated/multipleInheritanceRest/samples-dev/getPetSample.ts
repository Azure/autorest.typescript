// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetPet
 *
 * @summary call operation GetPet
 */
async function getPetSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/pet").get();
  console.log(result);
}

async function main(): Promise<void> {
  await getPetSample();
}

main().catch(console.error);
