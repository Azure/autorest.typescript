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
 * This sample demonstrates how to call operation Post202NoRetry204
 *
 * @summary call operation Post202NoRetry204
 */
async function lROsPost202NoRetry204Sample() {
  const client = createLRORestClient();
  const initialResponse = await client.path("/lro/post/202/noretry/204").post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPost202NoRetry204Sample();
}

main().catch(console.error);
