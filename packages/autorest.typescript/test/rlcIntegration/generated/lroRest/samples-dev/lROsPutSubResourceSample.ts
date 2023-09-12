// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutSubResourceParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutSubResource
 *
 * @summary call operation PutSubResource
 */
async function lROsPutSubResourceSample() {
  const client = createLRORestClient();
  const options: LROsPutSubResourceParameters = {
    body: { properties: { provisioningState: "{Your provisioningState}" } },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/putsubresource/202/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutSubResourceSample();
}

main().catch(console.error);
