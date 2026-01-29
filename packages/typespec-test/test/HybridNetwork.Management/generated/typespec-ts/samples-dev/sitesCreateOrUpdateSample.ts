// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network site.
 *
 * @summary creates or updates a network site.
 * x-ms-original-file: 2025-03-30/SiteCreate.json
 */
async function createNetworkSite(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.sites.createOrUpdate("rg1", "testSite", {
    location: "westUs2",
    properties: {
      nfvis: [
        { name: "nfvi1", location: "westUs2", nfviType: "AzureCore" },
        {
          name: "nfvi2",
          customLocationReference: {
            id: "/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation1",
          },
          nfviType: "AzureArcKubernetes",
        },
        {
          name: "nfvi3",
          customLocationReference: {
            id: "/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation2",
          },
          nfviType: "AzureOperatorNexus",
        },
      ],
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createNetworkSite();
}

main().catch(console.error);
