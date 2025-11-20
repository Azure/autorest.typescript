// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to validate savings plan purchase.
 *
 * @summary validate savings plan purchase.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanValidatePurchase.json
 */
async function savingsPlanValidatePurchase(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.validatePurchase({
    benefits: [
      {
        properties: {
          appliedScopeProperties: {
            resourceGroupId:
              "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/testrg",
          },
          appliedScopeType: "Single",
          billingScopeId: "/subscriptions/10000000-0000-0000-0000-000000000000",
          commitment: { amount: 15.23, currencyCode: "USD", grain: "Hourly" },
          displayName: "ComputeSavingsPlan_2021-07-01",
          term: "P1Y",
        },
        sku: { name: "Compute_Savings_Plan" },
      },
      {
        properties: {
          appliedScopeProperties: {
            resourceGroupId:
              "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/RG",
          },
          appliedScopeType: "Single",
          billingScopeId: "/subscriptions/10000000-0000-0000-0000-000000000000",
          commitment: { amount: 20, currencyCode: "USD", grain: "Hourly" },
          displayName: "ComputeSavingsPlan_2021-07-01",
          term: "P1Y",
        },
        sku: { name: "Compute_Savings_Plan" },
      },
    ],
  });
  console.log(result);
}

async function main(): Promise<void> {
  await savingsPlanValidatePurchase();
}

main().catch(console.error);
