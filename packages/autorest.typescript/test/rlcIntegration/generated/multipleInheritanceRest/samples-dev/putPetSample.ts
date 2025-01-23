// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutPet
 *
 * @summary call operation PutPet
 */
async function putPetSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/pet")
    .put({ body: { name: "{Your name}" }, contentType: "application/json" });
  console.log(result);
}

async function main() {
  await putPetSample();
}

main().catch(console.error);
