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
 * This sample demonstrates how to call operation Delete202NoRetry204
 *
 * @summary call operation Delete202NoRetry204
 */
async function lROsDelete202NoRetry204Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/delete/202/noretry/204")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsDelete202NoRetry204Sample();
}

main().catch(console.error);
