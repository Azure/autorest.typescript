// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { NetworkAnalyticsApi } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

describe("assign role to the data product", () => {
  let recorder: Recorder;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should assign role to the data product for dataProductsAddUserRoleMaximumSetGen", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "00000000-0000-0000-0000-00000000000";
    const client = new NetworkAnalyticsApi(credential, subscriptionId);
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
  });
});
