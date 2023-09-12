// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LROsCustomHeaderPost202Retry200Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post202Retry200
 *
 * @summary call operation Post202Retry200
 */
async function lROsCustomHeaderPost202Retry200Sample() {
  const client = createLRORestClient();
  const options: LROsCustomHeaderPost202Retry200Parameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/customheader/post/202/retry/200")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsCustomHeaderPost202Retry200Sample();
}

main().catch(console.error);
