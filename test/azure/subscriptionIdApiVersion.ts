// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import * as coreHttp from "@azure/core-http";
import * as assert from "assert";
import { MicrosoftAzureTestUrl } from "./generated/SubscriptionIdApiVersion/microsoftAzureTestUrl";
import { MicrosoftAzureTestUrlOptions } from "./generated/SubscriptionIdApiVersion/models";

var dummySubscriptionId = "a878ae02-6106-429z-9397-58091ee45g98";
var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: MicrosoftAzureTestUrlOptions = {
  baseUri: "http://localhost:3000"
};

describe("typescript", function() {
  describe("Azure Swagger Url", function() {
    var testClient = new MicrosoftAzureTestUrl(
      credentials,
      dummySubscriptionId,
      clientOptions
    );

    it("should correctly send the subscriptionId as path parameter and api-version as a query parameter in the request url", async function() {
      const result = await testClient.group.getSampleResourceGroup(
        "testgroup101"
      );
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });
  });
});
