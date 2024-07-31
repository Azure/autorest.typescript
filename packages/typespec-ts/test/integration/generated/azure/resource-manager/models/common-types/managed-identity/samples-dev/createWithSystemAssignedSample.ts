// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmModelsCommonTypesManagedIdentityClient from "@azure/arm-managedIdentity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateWithSystemAssigned
 *
 * @summary call operation CreateWithSystemAssigned
 */
async function createWithSystemAssignedSample() {
  const client = createAzureArmModelsCommonTypesManagedIdentityClient();
  const subscriptionId = "{Your subscriptionId}";
  const resourceGroupName = "{Your resourceGroupName}";
  const managedIdentityTrackedResourceName =
    "{Your managedIdentityTrackedResourceName}";
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.CommonTypes.ManagedIdentity/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
    )
    .put({
      body: {
        tags: { key: "{Your tags}" },
        location: "{Your location}",
        properties: {},
        identity: { type: "None", userAssignedIdentities: { key: {} } },
      },
    });
  console.log(result);
}

async function main() {
  createWithSystemAssignedSample();
}

main().catch(console.error);
