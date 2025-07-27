// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("initiate key rotation on Data Product", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should initiate key rotation on Data Product for dataProductsRotateKeyMaximumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
    await client.dataProducts.rotateKey(
      "aoiresourceGroupName",
      "dataproduct01",
      { keyVaultUrl: "https://myKeyVault.vault.azure.net" },
    );
    // Test passes if no exception is thrown
  });
});
