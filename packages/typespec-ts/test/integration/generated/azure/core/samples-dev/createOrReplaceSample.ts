// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureCoreClient, {
  CreateOrReplaceParameters,
} from "@msinternal/azurecore";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrReplace
 *
 * @summary call operation CreateOrReplace
 */
async function createOrReplaceSample() {
  const client = createAzureCoreClient();
  const id = 123;
  const options: CreateOrReplaceParameters = {
    body: {
      name: "{Your name}",
      orders: [{ userId: 123, detail: "{Your detail}" }],
    },
  };
  const result = await client
    .path("/azure/core/basic/users/{id}", id)
    .put(options);
  console.log(result);
}

async function main() {
  createOrReplaceSample();
}

main().catch(console.error);
