// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network site.
 *
 * @summary creates or updates a network site.
 * x-ms-original-file: 2025-03-30/SiteNetworkServiceCreate.json
 */
async function createSiteNetworkService(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.siteNetworkServices.createOrUpdate(
    "rg1",
    "testSiteNetworkServiceName",
    {
      location: "westUs2",
      properties: {
        desiredStateConfigurationGroupValueReferences: {
          MyVM_Configuration: {
            id: "/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/configurationgroupvalues/MyVM_Configuration1",
          },
        },
        networkServiceDesignVersionResourceReference: {
          id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/TestPublisher/networkServiceDesignGroups/TestNetworkServiceDesignGroupName/networkServiceDesignVersions/1.0.0",
          idType: "Open",
        },
        siteReference: {
          id: "/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/sites/testSite",
        },
      },
      sku: { name: "Standard" },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a network site.
 *
 * @summary creates or updates a network site.
 * x-ms-original-file: 2025-03-30/SiteNetworkServiceFirstPartyCreate.json
 */
async function createFirstPartySiteNetworkService(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.siteNetworkServices.createOrUpdate(
    "rg1",
    "testSiteNetworkServiceName",
    {
      location: "westUs2",
      properties: {
        desiredStateConfigurationGroupValueReferences: {
          MyVM_Configuration: {
            id: "/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/configurationgroupvalues/MyVM_Configuration1",
          },
        },
        networkServiceDesignVersionResourceReference: {
          id: "/subscriptions/subid/resourcegroups/rg/providers/Microsoft.HybridNetwork/publishers/TestPublisher/networkServiceDesignGroups/TestNetworkServiceDesignGroupName/networkServiceDesignVersions/1.0.0",
          idType: "Secret",
        },
        siteReference: {
          id: "/subscriptions/subid/resourcegroups/contosorg1/providers/microsoft.hybridnetwork/sites/testSite",
        },
      },
      sku: { name: "Standard" },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createSiteNetworkService();
  await createFirstPartySiteNetworkService();
}

main().catch(console.error);
