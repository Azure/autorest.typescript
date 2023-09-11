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
 * This sample demonstrates how to call operation PostAsyncRelativeRetrySucceeded
 *
 * @summary call operation PostAsyncRelativeRetrySucceeded
 */
async function lRORetrysPostAsyncRelativeRetrySucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/postasync/retry/succeeded")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysPostAsyncRelativeRetrySucceededSample();
}

main().catch(console.error);
