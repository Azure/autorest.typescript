// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPutNonResourceParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutNonResource
 *
 * @summary call operation PutNonResource
 */
async function lROsPutNonResourceSample() {
  const client = createLRORestClient();
  const options: LROsPutNonResourceParameters = {
    body: { name: "{Your name}", id: "{Your id}" },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/putnonresource/202/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPutNonResourceSample();
}

main().catch(console.error);
