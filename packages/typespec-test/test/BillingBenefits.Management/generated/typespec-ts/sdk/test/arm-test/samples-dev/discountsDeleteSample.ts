// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete discount. Clears the metadata from the user's view.
 *
 * @summary delete discount. Clears the metadata from the user's view.
 * x-ms-original-file: 2024-11-01-preview/DiscountsDelete.json
 */
async function reservationOrderAliasCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "30000000-0000-0000-0000-000000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  await client.discounts.delete("testrg", "testdiscount");
}

async function main(): Promise<void> {
  await reservationOrderAliasCreate();
}

main().catch(console.error);
