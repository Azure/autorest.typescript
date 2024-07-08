// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmResourceClient, {
  getLongRunningPoller,
} from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function topLevelTrackedResourcesDeleteSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const topLevelTrackedResourceName = "{Your topLevelTrackedResourceName}";
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  topLevelTrackedResourcesDeleteSample();
}

main().catch(console.error);
