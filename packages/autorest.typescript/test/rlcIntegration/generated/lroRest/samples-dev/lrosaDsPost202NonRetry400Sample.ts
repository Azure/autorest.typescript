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
 * This sample demonstrates how to call operation Post202NonRetry400
 *
 * @summary call operation Post202NonRetry400
 */
async function lrosaDsPost202NonRetry400Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/nonretryerror/post/202/retry/400")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPost202NonRetry400Sample();
}

main().catch(console.error);
