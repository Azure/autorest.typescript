// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BillingBenefitsClient } from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a reservation order alias.
 *
 * @summary create a reservation order alias.
 * x-ms-original-file: 2024-11-01-preview/ReservationOrderAliasCreate.json
 */
async function reservationOrderAliasCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new BillingBenefitsClient(credential, subscriptionId);
  const result = await client.reservationOrderAlias.create(
    "reservationOrderAlias123",
    {
      location: "eastus",
      properties: {
        appliedScopeProperties: {
          resourceGroupId:
            "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/testrg",
        },
        appliedScopeType: "Single",
        billingPlan: "P1M",
        billingScopeId: "/subscriptions/10000000-0000-0000-0000-000000000000",
        displayName: "ReservationOrder_2022-06-02",
        quantity: 5,
        renew: true,
        reservedResourceProperties: { instanceFlexibility: "On" },
        reservedResourceType: "VirtualMachines",
        term: "P1Y",
      },
      sku: { name: "Standard_M64s_v2" },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await reservationOrderAliasCreate();
}

main().catch(console.error);
