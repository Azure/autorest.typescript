// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient, {
  PutHorseParameters
} from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutHorse
 *
 * @summary call operation PutHorse
 */
async function putHorseSample() {
  const client = createMultipleInheritanceRestClient();
  const options: PutHorseParameters = {
    body: { isAShowHorse: true, name: '{Your "name"}' },
    contentType: "application/json"
  };
  const result = await client.path("/multipleInheritance/horse").put(options);
  console.log(result);
}

async function main() {
  putHorseSample();
}

main().catch(console.error);
