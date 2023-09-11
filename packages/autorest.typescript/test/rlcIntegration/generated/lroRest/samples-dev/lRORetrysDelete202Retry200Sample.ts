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
 * This sample demonstrates how to call operation Delete202Retry200
 *
 * @summary call operation Delete202Retry200
 */
async function lRORetrysDelete202Retry200Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/delete/202/retry/200")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysDelete202Retry200Sample();
}

main().catch(console.error);
