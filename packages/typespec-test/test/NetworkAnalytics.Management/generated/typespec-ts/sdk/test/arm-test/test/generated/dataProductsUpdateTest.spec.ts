// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("update data product resource", () => {
  let recorder: Recorder;
  let client: NetworkAnalyticsApi;
  let subscriptionId: string;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    client = new NetworkAnalyticsApi(
      createTestCredential(),
      subscriptionId,
      recorder.configureClientOptions({}),
    );
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should update data product resource for dataProductsUpdateMaximumSetGen", async function () {
    const result = await client.dataProducts.update(
      "aoiresourceGroupName",
      "dataproduct01",
      {
        identity: {
          type: "UserAssigned",
          userAssignedIdentities: {
            "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
              {},
          },
        },
        tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
        properties: {
          owners: ["abc@micros.com", "def@micros.com"],
          purviewAccount: "testpurview",
          purviewCollection: "134567890",
          privateLinksEnabled: "Disabled",
          currentMinorVersion: "1.0.1",
        },
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
  });
});
