// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPut200Acceptedcanceled200Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put200Acceptedcanceled200
 *
 * @summary call operation Put200Acceptedcanceled200
 */
async function lROsPut200Acceptedcanceled200Sample() {
  const client = createLRORestClient();
  const options: LROsPut200Acceptedcanceled200Parameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/put/200/accepted/canceled/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut200Acceptedcanceled200Sample();
}

main().catch(console.error);
