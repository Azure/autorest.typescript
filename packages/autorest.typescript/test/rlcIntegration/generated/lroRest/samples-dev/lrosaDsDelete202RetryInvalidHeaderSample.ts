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
 * This sample demonstrates how to call operation Delete202RetryInvalidHeader
 *
 * @summary call operation Delete202RetryInvalidHeader
 */
async function lrosaDsDelete202RetryInvalidHeaderSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/delete/202/retry/invalidheader")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsDelete202RetryInvalidHeaderSample();
}

main().catch(console.error);
