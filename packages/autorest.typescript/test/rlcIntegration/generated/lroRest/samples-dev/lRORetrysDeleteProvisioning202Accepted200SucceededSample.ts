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
 * This sample demonstrates how to call operation DeleteProvisioning202Accepted200Succeeded
 *
 * @summary call operation DeleteProvisioning202Accepted200Succeeded
 */
async function lRORetrysDeleteProvisioning202Accepted200SucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/retryerror/delete/provisioning/202/accepted/200/succeeded")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lRORetrysDeleteProvisioning202Accepted200SucceededSample();
}

main().catch(console.error);
