// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureArmResourceClient from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Update
 *
 * @summary call operation Update
 */
async function singletonTrackedResourcesUpdateSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .patch({
      body: {
        tags: { key: "{Your tags}" },
        location: "{Your location}",
        properties: { description: "{Your description}" },
      },
    });
  console.log(result);
}

async function main() {
  singletonTrackedResourcesUpdateSample();
}

main().catch(console.error);
