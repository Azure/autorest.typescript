// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to cancel discount. Stops applying the benefit.
 *
 * @summary cancel discount. Stops applying the benefit.
 * x-ms-original-file: 2024-11-01-preview/DiscountCancel.json
 */
async function discountCancel(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "30000000-0000-0000-0000-000000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.discounts.cancel("testrg", "testdiscount");
  console.log(result);
}

async function main(): Promise<void> {
  await discountCancel();
}

main().catch(console.error);
