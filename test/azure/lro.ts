// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import { assert } from "chai";
import { should } from "chai";
import "chai/register-should";
import * as msAssert from "../util/msAssert";
import * as coreHttp from "@azure/core-http";

import {
  AutoRestLongRunningOperationTestService,
  AutoRestLongRunningOperationTestServiceModels
} from "./generated/Lro/autoRestLongRunningOperationTestService";
import { AutoRestLongRunningOperationTestServiceOptions } from "../azuremetadata/generated/Lro/src/models";

var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: AutoRestLongRunningOperationTestServiceOptions = {
  baseUri: "http://localhost:3000",
  requestPolicyFactories: [
    coreHttp.exponentialRetryPolicy(3, 0, 0, 0),
    coreHttp.deserializationPolicy()
  ],
  longRunningOperationRetryTimeout: 0
};

describe("typescript", function() {
  describe("Swagger LRO Happy BAT", function() {
    var testClient = new AutoRestLongRunningOperationTestService(
      credentials,
      clientOptions
    );
    var product: AutoRestLongRunningOperationTestServiceModels.Product = {
      location: "West US"
    };

    it("should work with Put201CreatingSucceeded200", async () => {
      await testClient.lROs.put201CreatingSucceeded200({ product: product });
    });

    it("should work with Put201CreatingFailed200", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.put201CreatingFailed200({ product: product })
      );
      assert.deepEqual(
        error.message,
        'Long running operation failed with status: "Failed".'
      );
    });

    it("should work with Put200UpdatingSucceeded204", async () => {
      await testClient.lROs.put200UpdatingSucceeded204({ product: product });
    });

    it("should work with Put200Acceptedcanceled200", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.put200Acceptedcanceled200({ product: product })
      );
      error.message.should.contain(
        'Long running operation failed with status: "Canceled".'
      );
    });

    it("should work with PutAsyncNoRetrySucceeded", async () => {
      const result = await testClient.lROs.putAsyncNoRetrySucceeded({
        product: product
      });
      result._response.parsedBody.should.deep.equal({
        id: "100",
        name: "foo",
        provisioningState: "Succeeded"
      });
    });

    it("should work with PutNoHeaderInRetry", async () => {
      const result = await testClient.lROs.putNoHeaderInRetry({
        product: product
      });
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with PutAsyncNoHeaderInRetry", async () => {
      const result = await testClient.lROs.putAsyncNoHeaderInRetry({
        product: product
      });
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with PutSubResource", async () => {
      const result = await testClient.lROs.putSubResource();
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with PutAsyncSubResource", async () => {
      const result = await testClient.lROs.putAsyncSubResource();
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with PutNonResource", async () => {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        name: "doesNotMatter", //server will return a fixed faked value anyway
        id: "doesNotMatter"
      };
      const result = await testClient.lROs.putNonResource({ sku: sku });
      result.id.should.equal("100");
      result.name.should.equal("sku");
    });

    it("should work with PutAsyncNonResource", async () => {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        name: "doesNotMatter", //server will return a fixed faked value anyway
        id: "doesNotMatter"
      };
      const result = await testClient.lROs.putAsyncNonResource({ sku: sku });
      result.id.should.equal("100");
      result.name.should.equal("sku");
    });

    it("should work with DeleteNoHeaderInRetry", async () => {
      //a little odd, but the server side will fake to have something to delete
      //hence, no need to pass in an argument
      await testClient.lROs.deleteNoHeaderInRetry();
    });

    it("should work with DeleteAsyncNoHeaderInRetry", async () => {
      if (!coreHttp.isNode) {
        // This test is failing for Node.js in non-Windows environments. The browser tests in
        // non-Windows environments work fine, so we're skipping this test in the bad environments.
        await testClient.lROs.deleteAsyncNoHeaderInRetry();
      }
    });

    it("should work with put202Retry200", async () => {
      const result = await testClient.lROs.put202Retry200({ product: product });
      result.id.should.equal("100");
    });

    it("should work with Put200Succeeded", async () => {
      const result = await testClient.lROs.put200Succeeded({
        product: product
      });
      result.should.exist;
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with Put200SucceededNoState", async () => {
      const result = await testClient.lROs.put200SucceededNoState({
        product: product
      });
      result.id.should.equal("100");
    });

    it("should work with PutAsyncRetrySucceeded", async () => {
      const result = await testClient.lROs.putAsyncRetrySucceeded({
        product: product
      });
      result.provisioningState.should.equal("Succeeded");
    });

    it("should work with PutAsyncRetryFailed", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.putAsyncRetryFailed({ product: product })
      );
      error.message.should.contains("Long running operation failed");
    });

    it("should work with PutAsyncNoRetrycanceled", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.putAsyncNoRetrycanceled({ product: product })
      );
      error.message.should.contains("Long running operation failed");
    });

    it("should work with delete204Succeeded", async () => {
      await testClient.lROs.delete204Succeeded();
    });

    it("should work with delete202Retry200", async () => {
      await testClient.lROs.delete202Retry200();
    });

    it("should work with delete202NoRetry204", async () => {
      await testClient.lROs.delete202NoRetry204();
    });

    it("should work with DeleteProvisioning202Accepted200Succeeded", async () => {
      await testClient.lROs.deleteProvisioning202Accepted200Succeeded();
    });

    it("should work with deleteProvisioning202DeletingFailed200", async () => {
      await testClient.lROs.deleteProvisioning202DeletingFailed200();
    });

    it("should work with deleteProvisioning202Deletingcanceled200", async () => {
      await testClient.lROs.deleteProvisioning202Deletingcanceled200();
    });

    it("should work with DeleteAsyncRetrySucceeded", async () => {
      await testClient.lROs.deleteAsyncRetrySucceeded();
    });

    it("should work with deleteAsyncNoRetrySucceeded", async () => {
      await testClient.lROs.deleteAsyncNoRetrySucceeded();
    });

    it("should work with DeleteAsyncRetrycanceled", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.deleteAsyncRetrycanceled()
      );
      error.message.should.contains("Long running operation failed");
    });

    it("should work with DeleteAsyncRetryFailed", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.deleteAsyncRetryFailed()
      );
      error.message.should.contains("Long running operation failed");
    });

    it("should work with post202Retry200", async () => {
      await testClient.lROs.post202Retry200({ product: product });
    });

    it("should work with post202NoRetry204", async () => {
      await testClient.lROs.post202NoRetry204({ product: product });
    });

    it("should work with LROPostDoubleHeadersFinalLocationGet", async () => {
      await testClient.lROs.postDoubleHeadersFinalLocationGet({ product });
    });

    it("should work with LROPostDoubleHeadersFinalAzureHeaderGet", async () => {
      await testClient.lROs.postDoubleHeadersFinalAzureHeaderGet({ product });
    });

    it("should work with LROPostDoubleHeadersFinalAzureHeaderGetDefault", async () => {
      await testClient.lROs.postDoubleHeadersFinalAzureHeaderGetDefault({
        product
      });
    });

    it("should work with Post200WithPayload", async () => {
      const result = await testClient.lROs.post200WithPayload();
      result.id.should.equal("1");
    });

    it("should work with PostAsyncRetrySucceeded", async () => {
      const result = await testClient.lROs.postAsyncRetrySucceeded({
        product: product
      });
      result.id.should.equal("100");
    });

    it("should work with PostAsyncNoRetrySucceeded", async () => {
      const result = await testClient.lROs.postAsyncNoRetrySucceeded({
        product: product
      });
      result.id.should.equal("100");
    });

    it("should work with PostAsyncRetrycanceled", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROs.postAsyncRetrycanceled({ product: product })
      );
      error.message.should.contains(
        'Long running operation failed with status: "Canceled".'
      );
    });

    it("should work with PostAsyncRetryFailed", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROs.postAsyncRetryFailed({ product: product })
      );
      error.message.should.contains(
        'Long running operation failed with error: "Internal Server Error".'
      );
      const errObject = error.body;
      errObject.error.code.should.equal(500);
      errObject.error.message.should.equal("Internal Server Error");
    });

    /** LRO Retrys **/
    it("retry should work with Put201CreatingSucceeded200", async () => {
      await testClient.lRORetrys.put201CreatingSucceeded200({
        product: product
      });
    });

    it("retry should work with PutAsyncRelativeRetrySucceeded", async () => {
      await testClient.lRORetrys.putAsyncRelativeRetrySucceeded({
        product: product
      });
    });

    it("retry should work with DeleteProvisioning202Accepted200Succeeded", async () => {
      await testClient.lRORetrys.deleteProvisioning202Accepted200Succeeded();
    });

    it("should work with Delete202Retry200", async () => {
      await testClient.lRORetrys.delete202Retry200();
    });

    it("should work with DeleteAsyncRelativeRetrySucceeded", async () => {
      await testClient.lRORetrys.deleteAsyncRelativeRetrySucceeded();
    });

    it("should work with Post202Retry200", async () => {
      await testClient.lRORetrys.post202Retry200({ product: product });
    });

    it("should work with PostAsyncRelativeRetrySucceeded", async () => {
      await testClient.lRORetrys.postAsyncRelativeRetrySucceeded({
        product: product
      });
    });

    it("should work with Custom Headers", async () => {
      var options = {
        product: product,
        customHeaders: {
          "x-ms-client-request-id": "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
        }
      };
      await testClient.lROsCustomHeader.putAsyncRetrySucceeded(options);
      await testClient.lROsCustomHeader.postAsyncRetrySucceeded(options);
      await testClient.lROsCustomHeader.put201CreatingSucceeded200(options);
      await testClient.lROsCustomHeader.post202Retry200(options);
    });
  });

  describe("Swagger LRO Sad BAT", function() {
    var testClient = new AutoRestLongRunningOperationTestService(
      credentials,
      clientOptions
    );
    testClient.longRunningOperationRetryTimeout = 0;
    var product = { location: "West US" };

    it("should throw on PutNonRetry400", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putNonRetry400({ product: product })
      );
      error.message.should.equal("Expected bad request message");
    });

    it("should throw on PutNonRetry201Creating400", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putNonRetry201Creating400({ product: product })
      );
      error.message.should.equal(`Error from the server`);
    });

    it("should throw on LRONonRetryPut201Creating400InvalidJson", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.putNonRetry201Creating400InvalidJson({
          product: product
        })
      );
      error.body.should.equal(`<{ "message" : "Error from the server" }`);
      error.code.should.equal("PARSE_ERROR");
      error.message.should.equal(
        `Error "SyntaxError: Unexpected token < in JSON at position 0" occurred while parsing the response body - <{ "message" : "Error from the server" }.`
      );
      error.name.should.equal("Error");
      error.request.should.exist;
      error.response.should.exist;
      error.stack.should.exist;
      error.statusCode.should.equal(400);
    });

    it("should throw on PutAsyncRelativeRetry400", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.putAsyncRelativeRetry400({ product: product })
      );
      should().not.exist(error.body);
      should().not.exist(error.code);
      error.message.should.equal("");
      error.name.should.equal("Error");
      error.request.should.exist;
      error.response.should.exist;
      error.stack.should.exist;
      error.statusCode.should.equal(400);
    });

    it("should throw on DeleteNonRetry400", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.deleteNonRetry400()
      );
      error.message.should.contains("Expected");
    });

    it("should throw on Delete202NonRetry400", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.delete202NonRetry400()
      );
      error.message.should.equal("Expected bad request message");
      error.statusCode.should.equal(400);
    });

    it("should throw on DeleteAsyncRelativeRetry400", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.deleteAsyncRelativeRetry400()
      );
      error.message.should.equal("Expected bad request message");
      error.statusCode.should.equal(400);
    });

    it("should throw on PostNonRetry400", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.postNonRetry400({ product: product })
      );
      error.message.should.contains("Expected bad request message");
    });

    it("should throw on Post202NonRetry400", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.post202NonRetry400({ product: product })
      );
      error.message.should.equal("Expected bad request message");
      error.statusCode.should.equal(400);
    });

    it("should throw on PostAsyncRelativeRetry400", async () => {
      const error: coreHttp.RestError = await msAssert.throwsAsync(
        testClient.lROSADs.postAsyncRelativeRetry400({ product: product })
      );
      error.message.should.equal("Expected bad request message");
      error.statusCode.should.equal(400);
    });

    it("should throw on PutError201NoProvisioningStatePayload", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putError201NoProvisioningStatePayload({
          product: product
        })
      );
      error.message.should.contains(
        "The response from long running operation does not contain a body."
      );
    });

    it("should throw on PutAsyncRelativeRetryNoStatusPayload", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putAsyncRelativeRetryNoStatusPayload({
          product: product
        })
      );
      error.message.should.contains(
        "The response from long running operation does not contain a body."
      );
    });

    it("should throw on PutAsyncRelativeRetryNoStatus", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putAsyncRelativeRetryNoStatus({ product: product })
      );
      error.message.should.contains(
        'The response "{ }" from long running operation does not contain the status property.'
      );
    });

    it("should throw on Delete204Succeeded", async () => {
      await testClient.lROSADs.delete204Succeeded();
    });

    it("should throw on DeleteAsyncRelativeRetryNoStatus", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.deleteAsyncRelativeRetryNoStatus()
      );
      error.message.should.contains(
        'The response "{ }" from long running operation does not contain the status property.'
      );
    });

    it("should not throw on Post202NoLocation", async () => {
      await testClient.lROSADs.post202NoLocation({ product: product });
    });

    it("should throw on PostAsyncRelativeRetryNoPayload", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.postAsyncRelativeRetryNoPayload({ product: product })
      );
      error.message.should.contains(
        "The response from long running operation does not contain a body."
      );
    });

    it("should throw on Put200InvalidJson", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.put200InvalidJson({ product: product })
      );
      error.message.should.match(/SyntaxError/gi);
      error.message.should.match(/JSON/gi);
    });

    it("should throw on PutAsyncRelativeRetryInvalidHeader", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putAsyncRelativeRetryInvalidHeader({
          product: product
        })
      );
      error.should.be.instanceof(Error);
    });

    it("should throw on PutAsyncRelativeRetryInvalidJsonPolling", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.putAsyncRelativeRetryInvalidJsonPolling({
          product: product
        })
      );
      error.message.should.match(/SyntaxError/gi);
      error.message.should.match(/JSON/gi);
    });

    it("should throw on Delete202RetryInvalidHeader", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.delete202RetryInvalidHeader()
      );
      error.should.be.instanceof(Error);
    });

    it("should throw on DeleteAsyncRelativeRetryInvalidHeader", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.deleteAsyncRelativeRetryInvalidHeader()
      );
      error.should.be.instanceof(Error);
    });

    it("should throw on DeleteAsyncRelativeRetryInvalidJsonPolling", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.deleteAsyncRelativeRetryInvalidJsonPolling()
      );
      error.message.should.match(/SyntaxError/gi);
      error.message.should.match(/JSON/gi);
    });

    it("should throw on Post202RetryInvalidHeader", async () => {
      const promise = testClient.lROSADs.post202RetryInvalidHeader({
        product: product
      });
      if (coreHttp.isNode) {
        await msAssert.throwsAsync(promise);
      } else {
        await promise;
      }
    });

    it("should throw on PostAsyncRelativeRetryInvalidHeader", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.postAsyncRelativeRetryInvalidHeader({
          product: product
        })
      );
      error.should.be.instanceof(Error);
    });

    it("should throw on PostAsyncRelativeRetryInvalidJsonPolling", async () => {
      const error = await msAssert.throwsAsync(
        testClient.lROSADs.postAsyncRelativeRetryInvalidJsonPolling({
          product: product
        })
      );
      error.message.should.match(/SyntaxError/gi);
      error.message.should.match(/JSON/gi);
    });
  });
});
