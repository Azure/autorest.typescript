// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureArmResourceClient, {
  getLongRunningPoller,
} from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function singletonTrackedResourcesCreateOrUpdateSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .put({
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
  singletonTrackedResourcesCreateOrUpdateSample();
}

main().catch(console.error);
