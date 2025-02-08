// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation PutPet
 *
 * @summary call operation PutPet
 */
async function putPetSample(): Promise<void> {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/pet")
    .put({ body: { name: "{Your name}" }, contentType: "application/json" });
  console.log(result);
}

async function main(): Promise<void> {
  await putPetSample();
}

main().catch(console.error);
