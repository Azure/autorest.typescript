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
 * This sample demonstrates how to call operation DeleteAsyncRelativeRetrySucceeded
 *
 * @summary call operation DeleteAsyncRelativeRetrySucceeded
 */
async function lRORetrysDeleteAsyncRelativeRetrySucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/deleteasync/retry/succeeded")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysDeleteAsyncRelativeRetrySucceededSample();
}

main().catch(console.error);
