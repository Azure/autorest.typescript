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
 * This sample demonstrates how to call operation PostAsyncRetryFailed
 *
 * @summary call operation PostAsyncRetryFailed
 */
async function lROsPostAsyncRetryFailedSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/postasync/retry/failed")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPostAsyncRetryFailedSample();
}

main().catch(console.error);
