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
 * This sample demonstrates how to call operation PutError201NoProvisioningStatePayload
 *
 * @summary call operation PutError201NoProvisioningStatePayload
 */
async function lrosaDsPutError201NoProvisioningStatePayloadSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/put/201/noprovisioningstatepayload")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutError201NoProvisioningStatePayloadSample();
}

main().catch(console.error);
