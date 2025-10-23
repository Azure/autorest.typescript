// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get savings plan.
 *
 * @summary get savings plan.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanItemExpandedGet.json
 */
async function savingsPlanItemWithExpandedRenewPropertiesGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const clientOptions = { expand: "renewProperties" };
  const client = new BillingBenefitsClient(
    credential,
    subscriptionId,
    clientOptions,
  );
  const result = await client.savingsPlan.get(
    "20000000-0000-0000-0000-000000000000",
    "30000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to get savings plan.
 *
 * @summary get savings plan.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanItemGet.json
 */
async function savingsPlanItemGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.savingsPlan.get(
    "20000000-0000-0000-0000-000000000000",
    "30000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await savingsPlanItemWithExpandedRenewPropertiesGet();
  await savingsPlanItemGet();
}

main().catch(console.error);
