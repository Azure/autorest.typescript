// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a reservation order alias.
 *
 * @summary get a reservation order alias.
 * x-ms-original-file: 2024-11-01-preview/ReservationOrderAliasGet.json
 */
async function reservationOrderAliasGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.reservationOrderAlias.get(
    "reservationOrderAlias123",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await reservationOrderAliasGet();
}

main().catch(console.error);
