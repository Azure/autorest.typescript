// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureArmResourceClient from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetByResourceGroup
 *
 * @summary call operation GetByResourceGroup
 */
async function singletonTrackedResourcesGetByResourceGroupSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default",
      subscriptionId,
      resourceGroupName,
    )
    .get();
  console.log(result);
}

async function main() {
  singletonTrackedResourcesGetByResourceGroupSample();
}

main().catch(console.error);
