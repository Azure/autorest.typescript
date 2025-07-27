// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("generate sas token for storage account", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should generate sas token for storage account for dataProductsGenerateStorageAccountSasTokenMaximumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
    const result = await client.dataProducts.generateStorageAccountSasToken(
      "aoiresourceGroupName",
      "dataproduct01",
      {
        startTimeStamp: "2023-08-24T05:34:58.151Z",
        expiryTimeStamp: "2023-08-24T05:34:58.151Z",
        ipAddress: "1.1.1.1",
      },
    );
    assert.ok(result);
  });
});
