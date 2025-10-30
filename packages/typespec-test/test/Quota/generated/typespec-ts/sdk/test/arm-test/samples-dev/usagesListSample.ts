// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaClient } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a list of current usage for all resources for the scope specified.
 *
 * @summary get a list of current usage for all resources for the scope specified.
 * x-ms-original-file: 2025-09-01/getComputeUsages.json
 */
async function quotasListUsagesForCompute(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new QuotaClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.usages.list(
    "subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Compute/locations/eastus",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to get a list of current usage for all resources for the scope specified.
 *
 * @summary get a list of current usage for all resources for the scope specified.
 * x-ms-original-file: 2025-09-01/getMachineLearningServicesUsages.json
 */
async function quotasListUsagesMachineLearningServices(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new QuotaClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.usages.list(
    "subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.MachineLearningServices/locations/eastus",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to get a list of current usage for all resources for the scope specified.
 *
 * @summary get a list of current usage for all resources for the scope specified.
 * x-ms-original-file: 2025-09-01/getNetworkUsages.json
 */
async function quotasListUsagesForNetwork(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new QuotaClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.usages.list(
    "subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Network/locations/eastus",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await quotasListUsagesForCompute();
  await quotasListUsagesMachineLearningServices();
  await quotasListUsagesForNetwork();
}

main().catch(console.error);
