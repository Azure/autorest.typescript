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
 * This sample demonstrates how to call operation Put201CreatingFailed200
 *
 * @summary call operation Put201CreatingFailed200
 */
async function lROsPut201CreatingFailed200Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/put/201/created/failed/200")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut201CreatingFailed200Sample();
}

main().catch(console.error);
