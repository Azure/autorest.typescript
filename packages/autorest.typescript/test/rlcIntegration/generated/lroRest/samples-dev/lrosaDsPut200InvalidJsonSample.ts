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
 * This sample demonstrates how to call operation Put200InvalidJson
 *
 * @summary call operation Put200InvalidJson
 */
async function lrosaDsPut200InvalidJsonSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/put/200/invalidjson")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPut200InvalidJsonSample();
}

main().catch(console.error);
