// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createMultipleInheritanceRestClient from "@msinternal/multiple-inheritance-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutHorse
 *
 * @summary call operation PutHorse
 */
async function putHorseSample() {
  const client = createMultipleInheritanceRestClient();
  const result = await client
    .path("/multipleInheritance/horse")
    .put({
      body: { name: "{Your name}", isAShowHorse: true },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  putHorseSample();
}

main().catch(console.error);
