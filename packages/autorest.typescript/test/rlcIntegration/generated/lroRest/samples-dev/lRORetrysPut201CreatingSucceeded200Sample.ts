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
 * This sample demonstrates how to call operation Put201CreatingSucceeded200
 *
 * @summary call operation Put201CreatingSucceeded200
 */
async function lRORetrysPut201CreatingSucceeded200Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/put/201/creating/succeeded/200")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysPut201CreatingSucceeded200Sample();
}

main().catch(console.error);
