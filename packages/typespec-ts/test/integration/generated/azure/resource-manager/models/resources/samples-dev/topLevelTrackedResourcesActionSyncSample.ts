// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureArmResourceClient from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ActionSync
 *
 * @summary call operation ActionSync
 */
async function topLevelTrackedResourcesActionSyncSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const topLevelTrackedResourceName = "{Your topLevelTrackedResourceName}";
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync",
      subscriptionId,
      resourceGroupName,
      topLevelTrackedResourceName,
    )
    .post({ body: { message: "{Your message}", urgent: true } });
  console.log(result);
}

async function main() {
  topLevelTrackedResourcesActionSyncSample();
}

main().catch(console.error);
