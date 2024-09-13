// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetKitten
 *
 * @summary call operation GetKitten
 */
async function getKittenSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client.path("/multipleInheritance/kitten").get();
  console.log(result);
}

async function main() {
  getKittenSample();
}

main().catch(console.error);
