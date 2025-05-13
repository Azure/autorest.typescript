// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Addon
 *
 * @summary create a Addon
 * x-ms-original-file: 2024-09-01/Addons_CreateOrUpdate_ArcReg.json
 */
async function addonsCreateOrUpdateArcReg(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.createOrUpdate("group1", "cloud1", "arc");
  console.log(result);
}

async function main(): Promise<void> {
  await addonsCreateOrUpdateArcReg();
}

main().catch(console.error);
