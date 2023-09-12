// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPost202NonRetry400Parameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post202NonRetry400
 *
 * @summary call operation Post202NonRetry400
 */
async function lrosaDsPost202NonRetry400Sample() {
  const client = createLRORestClient();
  const options: LrosaDsPost202NonRetry400Parameters = {
    body: {
      properties: { provisioningState: "{Your provisioningState}" },
      tags: { key: "{Your tags}" },
      location: "{Your location}"
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/nonretryerror/post/202/retry/400")
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPost202NonRetry400Sample();
}

main().catch(console.error);
