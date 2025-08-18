// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("list data products by resource group", () => {
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

  it("should list data products by resource group for dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen", async function () {
    const resArray = new Array();
    for await (const item of client.dataProducts.listByResourceGroup(
      "aoiresourceGroupName",
    )) {
      resArray.push(item);
    }
    assert.ok(resArray);
    assert.strictEqual(resArray.length, 1);
    assert.strictEqual(
      resArray[0].id,
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/aoiresourceGroupName/providers/Microsoft.NetworkAnalytics/DataProducts/dataproduct01",
    );
    assert.strictEqual(resArray[0].location, "eastus");
  });
});
