// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a savings plan order.
 *
 * @summary get a savings plan order.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanOrderExpandedGet.json
 */
async function savingsPlanOrderWithExpandedPaymentsGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const clientOptions = { expand: "schedule" };
  const client = new BillingBenefitsClient(
    credential,
    subscriptionId,
    clientOptions,
  );
  const result = await client.savingsPlanOrder.get(
    "20000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to get a savings plan order.
 *
 * @summary get a savings plan order.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlanOrderGet.json
 */
async function savingsPlanOrderGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.savingsPlanOrder.get(
    "20000000-0000-0000-0000-000000000000",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await savingsPlanOrderWithExpandedPaymentsGet();
  await savingsPlanOrderGet();
}

main().catch(console.error);
