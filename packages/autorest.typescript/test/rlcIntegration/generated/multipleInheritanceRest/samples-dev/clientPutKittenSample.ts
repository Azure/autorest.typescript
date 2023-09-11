// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutKitten
 *
 * @summary call operation PutKitten
 */
async function clientPutKittenSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/kitten").put();
  console.log(result);
}

async function main() {
  clientPutKittenSample();
}

main().catch(console.error);
