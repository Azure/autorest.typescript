// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmResourceClient, { paginate } from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListByResourceGroup
 *
 * @summary call operation ListByResourceGroup
 */
async function topLevelTrackedResourcesListByResourceGroupSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
      subscriptionId,
      resourceGroupName,
    )
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  topLevelTrackedResourcesListByResourceGroupSample();
}

main().catch(console.error);
