// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetFeline
 *
 * @summary call operation GetFeline
 */
async function clientGetFelineSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/feline").get();
  console.log(result);
}

async function main() {
  clientGetFelineSample();
}

main().catch(console.error);
