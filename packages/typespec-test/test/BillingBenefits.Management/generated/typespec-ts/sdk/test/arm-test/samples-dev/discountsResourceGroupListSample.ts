// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list discounts at resource group level
 *
 * @summary list discounts at resource group level
 * x-ms-original-file: 2024-11-01-preview/DiscountListResourceGroup.json
 */
async function discountsResourceGroupList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "30000000-0000-0000-0000-000000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.discounts.resourceGroupList("testrg")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await discountsResourceGroupList();
}

main().catch(console.error);
