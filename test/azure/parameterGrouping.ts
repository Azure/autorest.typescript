// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import * as coreHttp from "@azure/core-http";
import { assertEx } from "@ts-common/azure-js-dev-tools";
import { assert } from "chai";
import { AutoRestParameterGroupingTestService } from "./generated/AzureParameterGrouping/autoRestParameterGroupingTestService";
import {
  AutoRestParameterGroupingTestServiceOptions,
  ParameterGroupingPostOptionalOptionalParams
} from "./generated/AzureParameterGrouping/models";

var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: AutoRestParameterGroupingTestServiceOptions = {
  baseUri: "http://localhost:3000"
};

describe("typescript", function() {
  var body = 1234;
  var header = "header";
  var query = 21;
  var path = "path";

  describe("Azure Parameter Grouping", function() {
    var testClient = new AutoRestParameterGroupingTestService(
      credentials,
      clientOptions
    );
    it("should accept valid required parameters", async function() {
      const result = await testClient.parameterGrouping.postRequired({
        body: body,
        customHeader: header,
        query: query,
        path: path
      });
      result._response.status.should.equal(200);
    });

    it("should accept required parameters but null optional parameters", async function() {
      const result = await testClient.parameterGrouping.postRequired({
        body: body,
        path: path
      });
      result._response.status.should.equal(200);
    });

    it("should reject null required parameters", async function() {
      const error = await assertEx.throwsAsync(
        testClient.parameterGrouping.postRequired(null)
      );
      assert(error);
      assert.strictEqual(
        error.message,
        "parameterGroupingPostRequiredParameters.path cannot be null or undefined."
      );
    });

    it("should accept valid optional parameters", async function() {
      const options: ParameterGroupingPostOptionalOptionalParams = {
        parameterGroupingPostOptionalParameters: {
          query: query,
          customHeader: header
        }
      };
      const result = await testClient.parameterGrouping.postOptional(options);
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });

    it("should accept null optional parameters", async function() {
      const options: ParameterGroupingPostOptionalOptionalParams = {
        parameterGroupingPostOptionalParameters: null
      };
      const result = await testClient.parameterGrouping.postOptional(options);
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });

    it("should allow multiple parameter groups", async function() {
      var options = {
        firstParameterGroup: { headerOne: header, queryOne: query },
        parameterGroupingPostMultiParamGroupsSecondParamGroup: {
          headerTwo: "header2",
          queryTwo: 42
        }
      };
      const result = await testClient.parameterGrouping.postMultiParamGroups(
        options
      );
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });

    it("should allow multiple parameter groups with some defaults omitted", async function() {
      var options = {
        firstParameterGroup: { headerOne: header },
        parameterGroupingPostMultiParamGroupsSecondParamGroup: { queryTwo: 42 }
      };
      const result = await testClient.parameterGrouping.postMultiParamGroups(
        options
      );
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });

    it("should allow parameter group objects to be shared between operations", async function() {
      var options = {
        firstParameterGroup: { headerOne: header, queryOne: 42 }
      };
      const result = await testClient.parameterGrouping.postSharedParameterGroupObject(
        options
      );
      assert(result);
      assert(result._response);
      assert.strictEqual(result._response.status, 200);
    });
  });
});
