// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "../../src/index.js";

describe("assign role to the data product", () => {
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

  it("should assign role to the data product for dataProductsAddUserRoleMaximumSetGen", async function () {
    const result = await client.dataProducts.addUserRole(
      "aoiresourceGroupName",
      "dataproduct01",
      {
        roleId: "00000000-0000-0000-0000-00000000000",
        principalId: "00000000-0000-0000-0000-00000000000",
        userName: "UserName",
        dataTypeScope: ["scope"],
        principalType: "User",
        role: "Reader",
      },
    );
    assert.ok(result);
    assert.strictEqual(result.roleId, "00000000-0000-0000-0000-00000000000");
    assert.strictEqual(
      result.principalId,
      "00000000-0000-0000-0000-00000000000",
    );
    assert.strictEqual(result.userName, "UserName");
    assert.ok(Array.isArray(result.dataTypeScope));
    assert.strictEqual(result.dataTypeScope.length, 1);
    assert.strictEqual(result.dataTypeScope[0], "scope");
    assert.strictEqual(result.principalType, "User");
  });
});
