// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutError201NoProvisioningStatePayloadParameters,
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
  const options: LrosaDsPutError201NoProvisioningStatePayloadParameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/put/201/noprovisioningstatepayload")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutError201NoProvisioningStatePayloadSample();
}

main().catch(console.error);
