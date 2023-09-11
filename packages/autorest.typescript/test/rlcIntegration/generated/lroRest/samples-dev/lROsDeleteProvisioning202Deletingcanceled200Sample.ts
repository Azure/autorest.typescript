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
 * This sample demonstrates how to call operation DeleteProvisioning202Deletingcanceled200
 *
 * @summary call operation DeleteProvisioning202Deletingcanceled200
 */
async function lROsDeleteProvisioning202Deletingcanceled200Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/delete/provisioning/202/deleting/200/canceled")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsDeleteProvisioning202Deletingcanceled200Sample();
}

main().catch(console.error);
