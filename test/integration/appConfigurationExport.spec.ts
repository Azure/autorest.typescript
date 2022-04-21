// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppConfigurationClient } from "./generated/appconfigurationexport/src";
import { assert } from "chai";
import { readFileSync } from "../utils/fileSystem";
import { isNode } from "@azure/core-util";

if (isNode) {
  describe("Check Internal Header", () => {
    let client: AppConfigurationClient;

    beforeEach(() => {
      const endpoint: string = "sampleEndPoint";
      client = new AppConfigurationClient(endpoint, {
        allowInsecureConnection: true
      });
      assert.notEqual(client, null);
    });

    it("Client Class File must have Internal Header", async () => {
      const content: string = readFileSync(
        "./test/integration/generated/appconfigurationexport/src/appConfigurationClient.ts",
        "utf-8"
      );

      const containsInternal = content.includes("/** @internal */");

      assert.equal(containsInternal, true, "Expected internal Header missing");
    });
  });
}
