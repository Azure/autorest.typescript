// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createParametrizedHostClient, {
  ListCollectionsParameters,
} from "@msinternal/parametrized-host";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListCollections
 *
 * @summary call operation ListCollections
 */
async function listCollectionsSample() {
  const credential = new DefaultAzureCredential();
  const client = createParametrizedHostClient(credential);
  const options: ListCollectionsParameters = {
    queryParameters: { "api-version": "{Your api-version}" },
  };
  const result = await client.path("/app/collections").get(options);
  console.log(result);
}

async function main() {
  listCollectionsSample();
}

main().catch(console.error);
