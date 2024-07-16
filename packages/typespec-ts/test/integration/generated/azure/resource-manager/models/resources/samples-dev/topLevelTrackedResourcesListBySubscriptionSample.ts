// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureArmResourceClient, { paginate } from "@azure/arm-resources";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListBySubscription
 *
 * @summary call operation ListBySubscription
 */
async function topLevelTrackedResourcesListBySubscriptionSample() {
  const client = createAzureArmResourceClient();
  const subscriptionId = "{Your subscriptionId}";
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
      subscriptionId,
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
  topLevelTrackedResourcesListBySubscriptionSample();
}

main().catch(console.error);
