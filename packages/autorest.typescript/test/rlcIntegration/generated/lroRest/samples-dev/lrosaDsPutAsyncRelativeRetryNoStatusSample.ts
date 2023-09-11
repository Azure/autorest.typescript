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
 * This sample demonstrates how to call operation PutAsyncRelativeRetryNoStatus
 *
 * @summary call operation PutAsyncRelativeRetryNoStatus
 */
async function lrosaDsPutAsyncRelativeRetryNoStatusSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/putasync/retry/nostatus")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutAsyncRelativeRetryNoStatusSample();
}

main().catch(console.error);
