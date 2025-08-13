// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("list data products by resource group", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should list data products by resource group for dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
    const resArray = new Array();
    for await (const item of client.dataProducts.listByResourceGroup(
      "aoiresourceGroupName",
    )) {
      resArray.push(item);
    }
    assert.ok(resArray);
    assert.ok(Array.isArray(resArray[0].value));
    assert.strictEqual(resArray[0].value.length, 1);
  });
});
