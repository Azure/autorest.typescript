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
 * This sample demonstrates how to call operation PutAsyncNoRetrycanceled
 *
 * @summary call operation PutAsyncNoRetrycanceled
 */
async function lROsPutAsyncNoRetrycanceledSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/putasync/noretry/canceled")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutAsyncNoRetrycanceledSample();
}

main().catch(console.error);
