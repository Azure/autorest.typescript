// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPut200UpdatingSucceeded204Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put200UpdatingSucceeded204
 *
 * @summary call operation Put200UpdatingSucceeded204
 */
async function lROsPut200UpdatingSucceeded204Sample() {
  const client = createLRORestClient();
  const options: LROsPut200UpdatingSucceeded204Parameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/put/200/updating/succeeded/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut200UpdatingSucceeded204Sample();
}

main().catch(console.error);
