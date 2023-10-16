// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function getSample() {
  const client = createAzureCoreClient();
  const id = 123;
  const result = await client.path("/azure/core/basic/users/{id}", id).get();
  console.log(result);
}

async function main() {
  getSample();
}

main().catch(console.error);
