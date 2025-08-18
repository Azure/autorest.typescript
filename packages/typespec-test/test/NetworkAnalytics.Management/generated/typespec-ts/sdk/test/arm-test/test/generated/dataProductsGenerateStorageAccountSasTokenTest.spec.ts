// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("generate sas token for storage account", () => {
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

  it("should generate sas token for storage account for dataProductsGenerateStorageAccountSasTokenMaximumSetGen", async function () {
    const result = await client.dataProducts.generateStorageAccountSasToken(
      "aoiresourceGroupName",
      "dataproduct01",
      {
        startTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
        expiryTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
        ipAddress: "1.1.1.1",
      },
    );
    assert.ok(result);
    assert.strictEqual(result.storageAccountSasToken, "storageAccountSasToken");
  });
});
