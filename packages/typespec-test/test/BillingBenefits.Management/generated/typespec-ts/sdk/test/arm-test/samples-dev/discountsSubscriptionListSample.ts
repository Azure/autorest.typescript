// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list discounts at subscription level
 *
 * @summary list discounts at subscription level
 * x-ms-original-file: 2024-11-01-preview/DiscountList.json
 */
async function discountSubscriptionList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "30000000-0000-0000-0000-000000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.discounts.subscriptionList()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await discountSubscriptionList();
}

main().catch(console.error);
