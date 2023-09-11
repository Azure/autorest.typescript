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
 * This sample demonstrates how to call operation PostNonRetry400
 *
 * @summary call operation PostNonRetry400
 */
async function lrosaDsPostNonRetry400Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/nonretryerror/post/400")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostNonRetry400Sample();
}

main().catch(console.error);
