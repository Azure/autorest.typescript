// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutAsyncNonResourceParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncNonResource
 *
 * @summary call operation PutAsyncNonResource
 */
async function lROsPutAsyncNonResourceSample() {
  const client = createLRORestClient();
  const options: LROsPutAsyncNonResourceParameters = {
    body: { name: '{Your "name"}', id: '{Your "id"}' },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/putnonresourceasync/202/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutAsyncNonResourceSample();
}

main().catch(console.error);
