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
 * This sample demonstrates how to call operation DeleteAsyncRelativeRetryNoStatus
 *
 * @summary call operation DeleteAsyncRelativeRetryNoStatus
 */
async function lrosaDsDeleteAsyncRelativeRetryNoStatusSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/deleteasync/retry/nostatus")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsDeleteAsyncRelativeRetryNoStatusSample();
}

main().catch(console.error);
