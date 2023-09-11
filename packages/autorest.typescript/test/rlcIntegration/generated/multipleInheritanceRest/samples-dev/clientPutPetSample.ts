// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
async function clientPutPetSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/pet").put();
  console.log(result);
}

async function main() {
  clientPutPetSample();
}

main().catch(console.error);
