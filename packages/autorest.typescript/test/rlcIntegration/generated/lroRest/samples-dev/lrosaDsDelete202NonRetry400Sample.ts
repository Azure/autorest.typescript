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
 * This sample demonstrates how to call operation Delete202NonRetry400
 *
 * @summary call operation Delete202NonRetry400
 */
async function lrosaDsDelete202NonRetry400Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/nonretryerror/delete/202/retry/400")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsDelete202NonRetry400Sample();
}

main().catch(console.error);
