// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmResourceClient, {
  getLongRunningPoller,
} from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Update
 *
 * @summary call operation Update
 */
async function topLevelTrackedResourcesUpdateSample() {
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
    .patch({
      body: {
        tags: { key: "{Your tags}" },
        location: "{Your location}",
        properties: { description: "{Your description}" },
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  topLevelTrackedResourcesUpdateSample();
}

main().catch(console.error);
