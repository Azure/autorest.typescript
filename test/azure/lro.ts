// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as msAssert from "../util/msAssert";
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AutoRestLongRunningOperationTestService, AutoRestLongRunningOperationTestServiceModels } from './generated/Lro/autoRestLongRunningOperationTestService';

var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: msRestAzure.AzureServiceClientOptions = {
  requestPolicyFactories: [
    msRest.exponentialRetryPolicy(3, 0, 0, 0),
    msRest.deserializationPolicy()
  ],
  noRetryPolicy: true,
  longRunningOperationRetryTimeout: 0
};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Swagger LRO Happy BAT', function () {
    var testClient = new AutoRestLongRunningOperationTestService(credentials, baseUri, clientOptions);
    var product: AutoRestLongRunningOperationTestServiceModels.Product = { location: 'West US' };

    it('should work with Put201CreatingSucceeded200', async () => {
      await testClient.lROs.put201CreatingSucceeded200({ product: product });
    });

    it('should work with Put201CreatingFailed200', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.put201CreatingFailed200({ product: product }));
      error.message.should.be.exactly('Long running operation failed with status: "Failed".');
    });

    it('should work with Put200UpdatingSucceeded204', async () => {
      await testClient.lROs.put200UpdatingSucceeded204({ product: product });
    });

    it('should work with Put200Acceptedcanceled200', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.put200Acceptedcanceled200({ product: product }));
      error.message.should.containEql('Long running operation failed with status: "Canceled".');
    });

    it('should work with PutAsyncNoRetrySucceeded', async () => {
      const result = await testClient.lROs.putAsyncNoRetrySucceeded({ product: product });
      should(result).eql({ id: '100', name: 'foo', provisioningState: "Succeeded" });
    });

    it('should work with PutNoHeaderInRetry', async () => {
      const result = await testClient.lROs.putNoHeaderInRetry({ product: product });
      result.provisioningState.should.be.exactly('Succeeded');
    });

    it('should work with PutAsyncNoHeaderInRetry', async () => {
      const result = await testClient.lROs.putAsyncNoHeaderInRetry({ product: product });
      result.provisioningState.should.be.exactly('Succeeded');
    });

    it('should work with PutSubResource', async () => {
      const result = await testClient.lROs.putSubResource();
      result.provisioningState.should.be.exactly('Succeeded');
    });

    it('should work with PutAsyncSubResource', async () => {
      const result = await testClient.lROs.putAsyncSubResource();
      result.provisioningState.should.be.exactly('Succeeded');
    });

    it('should work with PutNonResource', async () => {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        'name': 'doesNotMatter', //server will return a fixed faked value anyway
        'id': 'doesNotMatter'
      };
      const result = await testClient.lROs.putNonResource({ sku: sku });
      result.id.should.be.exactly('100');
      result.name.should.be.exactly('sku');
    });

    it('should work with PutAsyncNonResource', async () => {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        'name': 'doesNotMatter', //server will return a fixed faked value anyway
        'id': 'doesNotMatter'
      };
      const result = await testClient.lROs.putAsyncNonResource({ sku: sku });
      result.id.should.be.exactly('100');
      result.name.should.be.exactly('sku');
    });

    it('should work with DeleteNoHeaderInRetry', async () => {
      //a little odd, but the server side will fake to have something to delete
      //hence, no need to pass in an argument
      await testClient.lROs.deleteNoHeaderInRetry();
    });

    it('should work with DeleteAsyncNoHeaderInRetry', async () => {
      if (!msRest.isNode) {
        // This test is failing for Node.js in non-Windows environments. The browser tests in
        // non-Windows environments work fine, so we're skipping this test in the bad environments.
        await testClient.lROs.deleteAsyncNoHeaderInRetry();
      }
    });

    it('should work with put202Retry200', async () => {
      const result = await testClient.lROs.put202Retry200({ product: product });
      should(result.id).be.exactly('100');
    });

    it('should work with Put200Succeeded', async () => {
      const result = await testClient.lROs.put200Succeeded({ product: product });
      should.exist(result);
      should(result.provisioningState).be.exactly('Succeeded');
    });

    it('should work with Put200SucceededNoState', async () => {
      const result = await testClient.lROs.put200SucceededNoState({ product: product });
      should(result.id).be.exactly('100');
    });

    it('should work with PutAsyncRetrySucceeded', async () => {
      const result = await testClient.lROs.putAsyncRetrySucceeded({ product: product });
      result.provisioningState.should.be.exactly('Succeeded');
    });

    it('should work with PutAsyncRetryFailed', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.putAsyncRetryFailed({ product: product }));
      error.message.should.containEql('Long running operation failed');
    });

    it('should work with PutAsyncNoRetrycanceled', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.putAsyncNoRetrycanceled({ product: product }));
      error.message.should.containEql('Long running operation failed');
    });

    it('should work with delete204Succeeded', async () => {
      await testClient.lROs.delete204Succeeded();
    });

    it('should work with delete202Retry200', async () => {
      await testClient.lROs.delete202Retry200();
    });

    it('should work with delete202NoRetry204', async () => {
      await testClient.lROs.delete202NoRetry204();
    });

    it('should work with DeleteProvisioning202Accepted200Succeeded', async () => {
      await testClient.lROs.deleteProvisioning202Accepted200Succeeded();
    });

    it('should work with deleteProvisioning202DeletingFailed200', async () => {
      await testClient.lROs.deleteProvisioning202DeletingFailed200();
    });

    it('should work with deleteProvisioning202Deletingcanceled200', async () => {
      await testClient.lROs.deleteProvisioning202Deletingcanceled200();
    });

    it('should work with DeleteAsyncRetrySucceeded', async () => {
      await testClient.lROs.deleteAsyncRetrySucceeded();
    });

    it('should work with deleteAsyncNoRetrySucceeded', async () => {
      await testClient.lROs.deleteAsyncNoRetrySucceeded();
    });

    it('should work with DeleteAsyncRetrycanceled', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.deleteAsyncRetrycanceled());
      error.message.should.containEql('Long running operation failed');
    });

    it('should work with DeleteAsyncRetryFailed', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.deleteAsyncRetryFailed());
      error.message.should.containEql('Long running operation failed');
    });

    it('should work with post202Retry200', async () => {
      await testClient.lROs.post202Retry200({ product: product });
    });

    it('should work with post202NoRetry204', async () => {
      await testClient.lROs.post202NoRetry204({ product: product });
    });

    it('should work with Post200WithPayload', async () => {
      const result = await testClient.lROs.post200WithPayload();
      result.id.should.equal("1");
    });

    it('should work with PostAsyncRetrySucceeded', async () => {
      const result = await testClient.lROs.postAsyncRetrySucceeded({ product: product });
      result.id.should.be.exactly('100');
    });

    it('should work with PostAsyncNoRetrySucceeded', async () => {
      const result = await testClient.lROs.postAsyncNoRetrySucceeded({ product: product });
      result.id.should.be.exactly('100');
    });

    it('should work with PostAsyncRetrycanceled', async () => {
      const error = await msAssert.throwsAsync(testClient.lROs.postAsyncRetrycanceled({ product: product }));
      error.message.should.containEql('Long running operation failed with status: "Canceled".');
    });

    it('should work with PostAsyncRetryFailed', async () => {
      const error: msRest.RestError = await msAssert.throwsAsync(testClient.lROs.postAsyncRetryFailed({ product: product }));
      error.message.should.containEql('Long running operation failed with error: "Internal Server Error".');
      const errObject = error.body;
      errObject.error.code.should.be.exactly(500);
      errObject.error.message.should.be.exactly('Internal Server Error');
    });

    /** LRO Retrys **/
    it('retry should work with Put201CreatingSucceeded200', async () => {
      await testClient.lRORetrys.put201CreatingSucceeded200({ product: product });
    });

    it('retry should work with PutAsyncRelativeRetrySucceeded', async () => {
      await testClient.lRORetrys.putAsyncRelativeRetrySucceeded({ product: product });
    });

    it('retry should work with DeleteProvisioning202Accepted200Succeeded', async () => {
      await testClient.lRORetrys.deleteProvisioning202Accepted200Succeeded();
    });

    it('should work with Delete202Retry200', async () => {
      await testClient.lRORetrys.delete202Retry200();
    });

    it('should work with DeleteAsyncRelativeRetrySucceeded', async () => {
      await testClient.lRORetrys.deleteAsyncRelativeRetrySucceeded();
    });

    it('should work with Post202Retry200', async () => {
      await testClient.lRORetrys.post202Retry200({ product: product });
    });

    it('should work with PostAsyncRelativeRetrySucceeded', async () => {
      await testClient.lRORetrys.postAsyncRelativeRetrySucceeded({ product: product });
    });

    it('should work with Custom Headers', async () => {
      var options = {
        product: product,
        customHeaders: {
          'x-ms-client-request-id': '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
        }
      };
      await testClient.lROsCustomHeader.putAsyncRetrySucceeded(options);
      await testClient.lROsCustomHeader.postAsyncRetrySucceeded(options);
      await testClient.lROsCustomHeader.put201CreatingSucceeded200(options);
      await testClient.lROsCustomHeader.post202Retry200(options);
    });
  });

  describe('Swagger LRO Sad BAT', function () {
    var testClient = new AutoRestLongRunningOperationTestService(credentials, baseUri, clientOptions);
    testClient.longRunningOperationRetryTimeout = 0;
    var product = { location: 'West US' };

    it('should throw on PutNonRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putNonRetry400({ product: product }));
      error.message.should.containEql('Expected bad request message');
    });

    it('should throw on PutNonRetry201Creating400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putNonRetry201Creating400({ product: product }));
      error.message.should.containEql(`"Error from the server"`);
    });

    it('should throw on PutAsyncRelativeRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putAsyncRelativeRetry400({ product: product }));
      error.message.should.equal(`Invalid status code (400) with response body "" occurred when polling for operation status.`);
    });

    it('should throw on DeleteNonRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.deleteNonRetry400());
      error.message.should.containEql('Expected');
    });

    it('should throw on Delete202NonRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.delete202NonRetry400());
      error.message.should.containEql('{"message":"Expected bad request message","status":400}');
    });

    it('should throw on DeleteAsyncRelativeRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.deleteAsyncRelativeRetry400());
      error.message.should.containEql('{"message":"Expected bad request message","status":400}');
    });

    it('should throw on PostNonRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.postNonRetry400({ product: product }));
      error.message.should.containEql('Expected bad request message');
    });

    it('should throw on Post202NonRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.post202NonRetry400({ product: product }));
      error.message.should.containEql('{"message":"Expected bad request message","status":400}');
    });

    it('should throw on PostAsyncRelativeRetry400', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.postAsyncRelativeRetry400({ product: product }));
      error.message.should.containEql('{"message":"Expected bad request message","status":400}');
    });

    it('should throw on PutError201NoProvisioningStatePayload', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putError201NoProvisioningStatePayload({ product: product }));
      error.message.should.containEql('The response from long running operation does not contain a body.');
    });

    it('should throw on PutAsyncRelativeRetryNoStatusPayload', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putAsyncRelativeRetryNoStatusPayload({ product: product }));
      error.message.should.containEql('The response from long running operation does not contain a body.');
    });

    it('should throw on PutAsyncRelativeRetryNoStatus', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putAsyncRelativeRetryNoStatus({ product: product }));
      error.message.should.containEql('The response "{ }" from long running operation does not contain the status property.');
    });

    it('should throw on Delete204Succeeded', async () => {
      await testClient.lROSADs.delete204Succeeded();
    });

    it('should throw on DeleteAsyncRelativeRetryNoStatus', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.deleteAsyncRelativeRetryNoStatus());
      error.message.should.containEql('The response "{ }" from long running operation does not contain the status property.');
    });

    it('should not throw on Post202NoLocation', async () => {
      await testClient.lROSADs.post202NoLocation({ product: product });
    });

    it('should throw on PostAsyncRelativeRetryNoPayload', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.postAsyncRelativeRetryNoPayload({ product: product }));
      error.message.should.containEql('The response from long running operation does not contain a body.');
    });

    it('should throw on Put200InvalidJson', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.put200InvalidJson({ product: product }));
      error.message.should.match(/SyntaxError/ig);
      error.message.should.match(/JSON/ig);
    });

    it('should throw on PutAsyncRelativeRetryInvalidHeader', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putAsyncRelativeRetryInvalidHeader({ product: product }));
      error.should.be.instanceof(Error);
    });

    it('should throw on PutAsyncRelativeRetryInvalidJsonPolling', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.putAsyncRelativeRetryInvalidJsonPolling({ product: product }));
      error.message.should.match(/SyntaxError/ig);
      error.message.should.match(/JSON/ig);
    });

    it('should throw on Delete202RetryInvalidHeader', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.delete202RetryInvalidHeader());
      error.should.be.instanceof(Error);
    });

    it('should throw on DeleteAsyncRelativeRetryInvalidHeader', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.deleteAsyncRelativeRetryInvalidHeader());
      error.should.be.instanceof(Error);
    });

    it('should throw on DeleteAsyncRelativeRetryInvalidJsonPolling', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.deleteAsyncRelativeRetryInvalidJsonPolling());
      error.message.should.match(/SyntaxError/ig);
      error.message.should.match(/JSON/ig);
    });

    it('should throw on Post202RetryInvalidHeader', async () => {
      const promise: Promise<void> = testClient.lROSADs.post202RetryInvalidHeader({ product: product });
      if (msRest.isNode) {
        await msAssert.throwsAsync(promise);
      } else {
        await promise;
      }
    });

    it('should throw on PostAsyncRelativeRetryInvalidHeader', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.postAsyncRelativeRetryInvalidHeader({ product: product }));
      error.should.be.instanceof(Error);
    });

    it('should throw on PostAsyncRelativeRetryInvalidJsonPolling', async () => {
      const error = await msAssert.throwsAsync(testClient.lROSADs.postAsyncRelativeRetryInvalidJsonPolling({ product: product }));
      error.message.should.match(/SyntaxError/ig);
      error.message.should.match(/JSON/ig);
    });
  });
});
