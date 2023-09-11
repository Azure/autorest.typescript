// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutHorse
 *
 * @summary call operation PutHorse
 */
async function clientPutHorseSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/horse").put();
  console.log(result);
}

async function main() {
  clientPutHorseSample();
}

main().catch(console.error);
