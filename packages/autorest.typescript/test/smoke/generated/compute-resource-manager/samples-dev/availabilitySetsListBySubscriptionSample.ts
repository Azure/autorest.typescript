// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvailabilitySetsListBySubscriptionOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all availability sets in a subscription.
 *
 * @summary Lists all availability sets in a subscription.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ListAvailabilitySetsInASubscription.json
 */
async function listAvailabilitySetsInASubscription(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscriptionId}";
  const expand = "virtualMachines\\$ref";
  const options: AvailabilitySetsListBySubscriptionOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.availabilitySets.listBySubscription(
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listAvailabilitySetsInASubscription();
}

main().catch(console.error);
