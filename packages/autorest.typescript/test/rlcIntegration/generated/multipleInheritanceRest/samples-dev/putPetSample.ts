// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient, {
  PutPetParameters
} from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutPet
 *
 * @summary call operation PutPet
 */
async function putPetSample() {
  const client = createMultipleInheritanceRestClient();
  const options: PutPetParameters = {
    body: { name: '{Your "name"}' },
    contentType: "application/json"
  };
  const result = await client.path("/multipleInheritance/pet").put(options);
  console.log(result);
}

async function main() {
  putPetSample();
}

main().catch(console.error);
