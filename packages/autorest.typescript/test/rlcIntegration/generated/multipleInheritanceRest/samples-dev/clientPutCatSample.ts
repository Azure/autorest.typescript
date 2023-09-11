// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutCat
 *
 * @summary call operation PutCat
 */
async function clientPutCatSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/cat").put();
  console.log(result);
}

async function main() {
  clientPutCatSample();
}

main().catch(console.error);
