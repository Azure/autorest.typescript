// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureCoreClient, {
  CreateOrUpdateParameters,
} from "@msinternal/azurecore";
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
  const options: CreateOrUpdateParameters = {
    body: {
      name: "{Your name}",
      orders: [{ userId: 123, detail: "{Your detail}" }],
    },
    contentType: "application/merge-patch+json",
  };
  const result = await client
    .path("/azure/core/basic/users/{id}", id)
    .patch(options);
  console.log(result);
}

async function main() {
  createOrUpdateSample();
}

main().catch(console.error);
