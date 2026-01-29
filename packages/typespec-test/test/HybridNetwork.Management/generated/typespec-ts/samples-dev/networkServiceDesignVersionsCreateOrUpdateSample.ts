// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network service design version.
 *
 * @summary creates or updates a network service design version.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignVersionCreate.json
 */
async function createOrUpdateANetworkServiceDesignVersionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignVersions.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    "1.0.0",
    {
      location: "eastus",
      properties: {
        configurationGroupSchemaReferences: {
          MyVM_Configuration: {
            id: "/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/publishers/contosoGroup/networkServiceDesignGroups/NSD_contoso/configurationGroupSchemas/MyVM_Configuration_Schema",
          },
        },
        resourceElementTemplates: [],
        versionState: "Active",
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateANetworkServiceDesignVersionResource();
}

main().catch(console.error);
