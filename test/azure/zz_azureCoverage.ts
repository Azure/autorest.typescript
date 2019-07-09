// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import * as coreHttp from "@azure/core-http";

import { AutoRestReportServiceForAzure } from "./generated/AzureReport/autoRestReportServiceForAzure";
import { AutoRestReportServiceForAzureOptions } from "./generated/AzureReport/models";

var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: AutoRestReportServiceForAzureOptions = {
  baseUri: "http://localhost:3000"
};
var testClient = new AutoRestReportServiceForAzure(credentials, clientOptions);

describe("typescript", function() {
  it("should have full Azure test coverage", async function() {
    console.log();
    console.log("----- Azure coverage report -----");
    const result = await testClient.getReport();
    var total = Object.keys(result).length;
    var passed = 0;

    Object.keys(result).forEach(function(item) {
      if (result[item] > 0) {
        passed++;
      } else {
        console.log("No coverage for scenario: " + item);
      }
    });
    var percentage = Math.floor((passed / total) * 100);
    console.log(
      "Passed: " +
        passed +
        ", Total: " +
        total +
        ", coverage: " +
        percentage +
        "% ."
    );
    console.log();
  });
});
