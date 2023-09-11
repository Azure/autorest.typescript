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
 * This sample demonstrates how to call operation DeleteAsyncNoHeaderInRetry
 *
 * @summary call operation DeleteAsyncNoHeaderInRetry
 */
async function lROsDeleteAsyncNoHeaderInRetrySample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/deleteasync/noheader/202/204")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsDeleteAsyncNoHeaderInRetrySample();
}

main().catch(console.error);
