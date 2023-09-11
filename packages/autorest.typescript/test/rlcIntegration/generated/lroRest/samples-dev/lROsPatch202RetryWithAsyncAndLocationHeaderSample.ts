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
 * This sample demonstrates how to call operation Patch202RetryWithAsyncAndLocationHeader
 *
 * @summary call operation Patch202RetryWithAsyncAndLocationHeader
 */
async function lROsPatch202RetryWithAsyncAndLocationHeaderSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/patch/202/retry/asyncAndLocationHeader")
    .patch();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPatch202RetryWithAsyncAndLocationHeaderSample();
}

main().catch(console.error);
