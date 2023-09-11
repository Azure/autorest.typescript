// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncSubResource
 *
 * @summary call operation PutAsyncSubResource
 */
async function lROsPutAsyncSubResourceSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/putsubresourceasync/202/200")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutAsyncSubResourceSample();
}

main().catch(console.error);
