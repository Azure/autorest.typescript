// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmModelsCommonTypesManagedIdentityClient from "@azure/arm-managedIdentity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function getSample() {
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
    .get();
  console.log(result);
}

async function main() {
  getSample();
}

main().catch(console.error);
