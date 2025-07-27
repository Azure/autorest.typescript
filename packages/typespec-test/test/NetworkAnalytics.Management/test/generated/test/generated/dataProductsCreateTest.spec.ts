// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("create data product resource.", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should dataProductsCreateMaximumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
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
    assert.ok(result);
  });
});
