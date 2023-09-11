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
 * This sample demonstrates how to call operation PutNonRetry400
 *
 * @summary call operation PutNonRetry400
 */
async function lrosaDsPutNonRetry400Sample() {
  const client = createLRORestClient();
  const initialResponse = await client.path("/lro/nonretryerror/put/400").put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutNonRetry400Sample();
}

main().catch(console.error);
