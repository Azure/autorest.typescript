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
 * This sample demonstrates how to call operation Put201Succeeded
 *
 * @summary call operation Put201Succeeded
 */
async function lROsPut201SucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client.path("/lro/put/201/succeeded").put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut201SucceededSample();
}

main().catch(console.error);
