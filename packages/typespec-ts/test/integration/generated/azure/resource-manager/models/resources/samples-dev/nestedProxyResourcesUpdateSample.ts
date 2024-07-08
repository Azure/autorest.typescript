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
async function nestedProxyResourcesUpdateSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const topLevelTrackedResourceName = "{Your topLevelTrackedResourceName}";
  const nextedProxyResourceName = "{Your nextedProxyResourceName}";
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
      nextedProxyResourceName,
    )
    .patch({ body: { properties: { description: "{Your description}" } } });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  nestedProxyResourcesUpdateSample();
}

main().catch(console.error);
