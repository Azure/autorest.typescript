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
 * This sample demonstrates how to call operation PostAsyncRetrycanceled
 *
 * @summary call operation PostAsyncRetrycanceled
 */
async function lROsPostAsyncRetrycanceledSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/postasync/retry/canceled")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPostAsyncRetrycanceledSample();
}

main().catch(console.error);
