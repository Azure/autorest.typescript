// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureCoreClient from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function createOrUpdateSample() {
  const client = createAzureCoreClient();
  const id = 123;
  const result = await client
    .path("/azure/core/basic/users/{id}", id)
    .patch({
      body: {
        name: "{Your name}",
        orders: [{ userId: 123, detail: "{Your detail}" }],
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  createOrUpdateSample();
}

main().catch(console.error);
