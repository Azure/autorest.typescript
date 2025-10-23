// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to elevate as owner on savings plan order based on billing permissions.
 *
 * @summary elevate as owner on savings plan order based on billing permissions.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanOrderElevate.json
 */
async function savingsPlanOrderElevate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.savingsPlanOrder.elevate(
    "20000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await savingsPlanOrderElevate();
}

main().catch(console.error);
