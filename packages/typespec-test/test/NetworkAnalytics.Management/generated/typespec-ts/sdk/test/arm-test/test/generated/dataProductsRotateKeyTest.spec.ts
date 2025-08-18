// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("initiate key rotation on Data Product", () => {
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

  it("should initiate key rotation on Data Product for dataProductsRotateKeyMaximumSetGen", async function () {
    await client.dataProducts.rotateKey(
      "aoiresourceGroupName",
      "dataproduct01",
      { keyVaultUrl: "https://myKeyVault.vault.azure.net" },
    );
    /* Test passes if no exception is thrown */
  });
});
