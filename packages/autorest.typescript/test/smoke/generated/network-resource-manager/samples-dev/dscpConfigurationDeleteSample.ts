// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a DSCP Configuration.
 *
 * @summary Deletes a DSCP Configuration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DscpConfigurationDelete.json
 */
async function deleteDscpConfiguration(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const dscpConfigurationName = "mydscpConfig";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.dscpConfigurationOperations.beginDeleteAndWait(
    resourceGroupName,
    dscpConfigurationName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteDscpConfiguration();
}

main().catch(console.error);
