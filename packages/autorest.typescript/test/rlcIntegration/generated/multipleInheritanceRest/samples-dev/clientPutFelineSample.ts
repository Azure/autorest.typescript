// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutFeline
 *
 * @summary call operation PutFeline
 */
async function clientPutFelineSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/feline").put();
  console.log(result);
}

async function main() {
  clientPutFelineSample();
}

main().catch(console.error);
