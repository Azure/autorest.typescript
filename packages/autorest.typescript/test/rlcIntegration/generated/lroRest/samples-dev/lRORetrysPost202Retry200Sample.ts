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
 * This sample demonstrates how to call operation Post202Retry200
 *
 * @summary call operation Post202Retry200
 */
async function lRORetrysPost202Retry200Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/post/202/retry/200")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysPost202Retry200Sample();
}

main().catch(console.error);
