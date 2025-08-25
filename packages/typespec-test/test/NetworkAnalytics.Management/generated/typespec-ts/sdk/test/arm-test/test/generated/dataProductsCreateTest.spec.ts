// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("create data product resource", () => {
  let recorder: Recorder;
  let client: NetworkAnalyticsApi;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const credential = createTestCredential();
    const subscriptionId = env.SUBSCRIPTION_ID || "<SUBSCRIPTION_ID>";
    const clientOptions = recorder.configureClientOptions({});
    client = new NetworkAnalyticsApi(credential, subscriptionId, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should create data product resource for dataProductsCreateMaximumSetGen", async function () {
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
    assert.strictEqual(
      result.properties.resourceGuid,
      "00000000-0000-0000-0000-000000000000",
    );
    assert.strictEqual(result.properties.provisioningState, "Succeeded");
    assert.strictEqual(result.properties.publisher, "Microsoft");
    assert.strictEqual(result.properties.product, "MCC");
    assert.strictEqual(result.properties.majorVersion, "1.0.0");
    assert.ok(Array.isArray(result.properties.owners));
    assert.strictEqual(result.properties.owners.length, 1);
    assert.strictEqual(result.properties.redundancy, "Disabled");
    assert.strictEqual(result.properties.purviewAccount, "testpurview");
    assert.strictEqual(result.properties.purviewCollection, "134567890");
    assert.strictEqual(result.properties.privateLinksEnabled, "Disabled");
    assert.strictEqual(result.properties.publicNetworkAccess, "Enabled");
    assert.strictEqual(
      result.properties.customerManagedKeyEncryptionEnabled,
      "Enabled",
    );
    assert.ok(Array.isArray(result.properties.availableMinorVersions));
    assert.strictEqual(result.properties.availableMinorVersions.length, 2);
    assert.strictEqual(result.properties.currentMinorVersion, "1.0.1");
    assert.strictEqual(
      result.properties.documentation,
      "https://learn.microsoft.com/",
    );
    assert.strictEqual(
      result.properties.keyVaultUrl,
      "https://myKeyVault.vault.azure.net",
    );
    assert.strictEqual(
      result.identity.principalId,
      "00000000-0000-0000-0000-000000000000",
    );
    assert.strictEqual(
      result.identity.tenantId,
      "00000000-0000-0000-0000-000000000000",
    );
    assert.strictEqual(result.identity.type, "IdentityType");
    assert.strictEqual(
      result.id,
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/aoiresourceGroupName/providers/Microsoft.NetworkAnalytics/DataProducts/dataproduct01",
    );
    assert.strictEqual(result.name, "dataproduct01");
    assert.strictEqual(result.type, "Microsoft.NetworkAnalytics/DataProducts");
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(
      result.tags.userSpecifiedKeyName,
      "userSpecifiedKeyValue",
    );
    assert.strictEqual(result.systemData.createdBy, "abc@micros.com");
    assert.strictEqual(result.systemData.createdByType, "User");
    assert.strictEqual(
      result.systemData.createdAt,
      new Date("2023-09-04T08:26:27.1506343Z"),
    );
    assert.strictEqual(result.systemData.lastModifiedBy, "abc@micros.com");
    assert.strictEqual(result.systemData.lastModifiedByType, "User");
    assert.strictEqual(
      result.systemData.lastModifiedAt,
      new Date("2023-09-04T08:26:27.1506343Z"),
    );
  });
});
