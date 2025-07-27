// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("update data product resource", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should update data product resource for dataProductsUpdateMaximumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
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
  });
});
