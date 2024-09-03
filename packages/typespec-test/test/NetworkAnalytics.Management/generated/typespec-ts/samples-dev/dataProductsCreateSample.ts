// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create data product resource.
 *
 * @summary create data product resource.
 * x-ms-original-file: 2023-11-15/DataProducts_Create_MaximumSet_Gen.json
 */
async function dataProductsCreateMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataProducts.create(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      properties: {
        provisioningState: "Succeeded",
        publisher: "Microsoft",
        product: "MCC",
        majorVersion: "1.0.0",
        owners: ["abc@micros.com"],
        redundancy: "Disabled",
        purviewAccount: "testpurview",
        purviewCollection: "134567890",
        privateLinksEnabled: "Disabled",
        publicNetworkAccess: "Enabled",
        customerManagedKeyEncryptionEnabled: "Enabled",
        customerEncryptionKey: {
          keyVaultUri: "https://KeyVault.vault.azure.net",
          keyName: "keyName",
          keyVersion: "keyVersion",
        },
        networkacls: {
          virtualNetworkRule: [
            {
              id: "/subscriptions/subscriptionId/resourcegroups/resourceGroupName/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName",
              action: "Allow",
              state: "",
            },
          ],
          ipRules: [{ value: "1.1.1.1", action: "Allow" }],
          allowedQueryIpRangeList: ["1.1.1.1"],
          defaultAction: "Allow",
        },
        managedResourceGroupConfiguration: {
          name: "managedResourceGroupName",
          location: "eastus",
        },
        currentMinorVersion: "1.0.1",
        consumptionEndpoints: {},
      },
      identity: {
        type: "UserAssigned",
        userAssignedIdentities: {
          "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
            {},
        },
      },
      tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
      location: "eastus",
    },
  );
  console.log(result);
}

async function main() {
  dataProductsCreateMaximumSetGen();
}

main().catch(console.error);
