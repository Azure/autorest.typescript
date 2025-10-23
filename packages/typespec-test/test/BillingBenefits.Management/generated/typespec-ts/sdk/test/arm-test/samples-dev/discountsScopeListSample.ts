// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list discounts that are applicable for a given scope. Currently supported scopes: billing accounts
 *
 * @summary list discounts that are applicable for a given scope. Currently supported scopes: billing accounts
 * x-ms-original-file: 2024-11-01-preview/ApplicableDiscountsList.json
 */
async function discountScopeList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.discounts.scopeList(
    "providers/Microsoft.Billing/billingAccounts/{acctId}",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await discountScopeList();
}

main().catch(console.error);
