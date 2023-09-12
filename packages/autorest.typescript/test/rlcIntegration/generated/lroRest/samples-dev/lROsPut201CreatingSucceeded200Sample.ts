// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsPut201CreatingSucceeded200Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put201CreatingSucceeded200
 *
 * @summary call operation Put201CreatingSucceeded200
 */
async function lROsPut201CreatingSucceeded200Sample() {
  const client = createLRORestClient();
  const options: LROsPut201CreatingSucceeded200Parameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/put/201/creating/succeeded/200")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut201CreatingSucceeded200Sample();
}

main().catch(console.error);
