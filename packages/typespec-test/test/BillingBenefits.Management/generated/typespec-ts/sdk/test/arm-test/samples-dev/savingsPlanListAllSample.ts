// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list savings plans.
 *
 * @summary list savings plans.
 * x-ms-original-file: 2024-11-01-preview/SavingsPlansList.json
 */
async function savingsPlansList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.savingsPlan.listAll({
    filter: "(properties%2farchived+eq+false)",
    orderby: "properties/displayName asc",
    skiptoken: 50,
    take: 1,
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await savingsPlansList();
}

main().catch(console.error);
