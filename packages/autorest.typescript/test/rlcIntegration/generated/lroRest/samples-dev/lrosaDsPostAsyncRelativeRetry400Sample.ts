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
 * This sample demonstrates how to call operation PostAsyncRelativeRetry400
 *
 * @summary call operation PostAsyncRelativeRetry400
 */
async function lrosaDsPostAsyncRelativeRetry400Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/nonretryerror/postasync/retry/400")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetry400Sample();
}

main().catch(console.error);
