﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AutoRestLongRunningOperationTestService, AutoRestLongRunningOperationTestServiceModels } from './generated/Lro/autoRestLongRunningOperationTestService';

var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: msRestAzure.AzureServiceClientOptions = {
  requestOptions: { jar: true } as any,
  requestPolicyCreators: [
    msRest.exponentialRetryPolicy(3, 0, 0, 0),
    msRest.serializationPolicy()
  ],
  noRetryPolicy: true,
  longRunningOperationRetryTimeout: 0
};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Swagger LRO Happy BAT', function () {
    var testClient = new AutoRestLongRunningOperationTestService(credentials, baseUri, clientOptions);
    var product: AutoRestLongRunningOperationTestServiceModels.Product = { location: 'West US' };

    it('should work with Put201CreatingSucceeded200', function (done) {
      testClient.lROs.put201CreatingSucceeded200({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Put201CreatingFailed200', function (done) {
      testClient.lROs.put201CreatingFailed200({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.be.exactly('Long running operation failed with status: "Failed".');
        done();
      });
    });

    it('should work with Put200UpdatingSucceeded204', function (done) {
      testClient.lROs.put200UpdatingSucceeded204({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Put200Acceptedcanceled200', function (done) {
      testClient.lROs.put200Acceptedcanceled200({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed with status: "Canceled".');
        done();
      });
    });

    it('should work with PutAsyncNoRetrySucceeded', function (done) {
      testClient.lROs.putAsyncNoRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with PutNoHeaderInRetry', function (done) {
      testClient.lROs.putNoHeaderInRetry({ product: product }, function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with PutAsyncNoHeaderInRetry', function (done) {
      testClient.lROs.putAsyncNoHeaderInRetry({ product: product }, function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with PutSubResource', function (done) {
      testClient.lROs.putSubResource(function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with PutAsyncSubResource', function (done) {
      testClient.lROs.putAsyncSubResource(function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with PutNonResource', function (done) {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        'name': 'doesNotMatter', //server will return a fixed faked value anyway
        'id': 'doesNotMatter'
      };
      testClient.lROs.putNonResource({ sku: sku }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        result.name.should.be.exactly('sku');
        done();
      });
    });

    it('should work with PutAsyncNonResource', function (done) {
      const sku: AutoRestLongRunningOperationTestServiceModels.Sku = {
        'name': 'doesNotMatter', //server will return a fixed faked value anyway
        'id': 'doesNotMatter'
      };
      testClient.lROs.putAsyncNonResource({ sku: sku }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        result.name.should.be.exactly('sku');
        done();
      });
    });

    it('should work with DeleteNoHeaderInRetry', function (done) {
      //a little odd, but the server side will fake to have something to delete
      //hence, no need to pass in an argument
      testClient.lROs.deleteNoHeaderInRetry(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with DeleteAsyncNoHeaderInRetry', function (done) {
      //a little odd, but the server side will fake to have something to delete
      //hence, no need to pass in an argument
      testClient.lROs.deleteAsyncNoHeaderInRetry(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with put202Retry200', function (done) {
      testClient.lROs.put202Retry200({ product: product }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        done();
      });
    });

    it('should work with Put200Succeeded', function (done) {
      testClient.lROs.put200Succeeded({ product: product }, function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with Put200SucceededNoState', function (done) {
      testClient.lROs.put200SucceededNoState({ product: product }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        done();
      });
    });

    it('should work with PutAsyncRetrySucceeded', function (done) {
      testClient.lROs.putAsyncRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        result.provisioningState.should.be.exactly('Succeeded');
        done();
      });
    });

    it('should work with PutAsyncRetryFailed', function (done) {
      testClient.lROs.putAsyncRetryFailed({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed');
        done();
      });
    });

    it('should work with PutAsyncNoRetrycanceled', function (done) {
      testClient.lROs.putAsyncNoRetrycanceled({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed');
        done();
      });
    });

    it('should work with delete204Succeeded', function (done) {
      testClient.lROs.delete204Succeeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with delete202Retry200', function (done) {
      testClient.lROs.delete202Retry200(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with delete202NoRetry204', function (done) {
      testClient.lROs.delete202NoRetry204(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with DeleteProvisioning202Accepted200Succeeded', function (done) {
      testClient.lROs.deleteProvisioning202Accepted200Succeeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with deleteProvisioning202DeletingFailed200', function (done) {
      testClient.lROs.deleteProvisioning202DeletingFailed200(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with deleteProvisioning202Deletingcanceled200', function (done) {
      testClient.lROs.deleteProvisioning202Deletingcanceled200(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with DeleteAsyncRetrySucceeded', function (done) {
      testClient.lROs.deleteAsyncRetrySucceeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with deleteAsyncNoRetrySucceeded', function (done) {
      testClient.lROs.deleteAsyncNoRetrySucceeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with DeleteAsyncRetrycanceled', function (done) {
      testClient.lROs.deleteAsyncRetrycanceled(function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed');
        done();
      });
    });

    it('should work with DeleteAsyncRetryFailed', function (done) {
      testClient.lROs.deleteAsyncRetryFailed(function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed');
        done();
      });
    });

    it('should work with post202Retry200', function (done) {
      testClient.lROs.post202Retry200({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with post202NoRetry204', function (done) {
      testClient.lROs.post202NoRetry204({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Post200WithPayload', function (done) {
      testClient.lROs.post200WithPayload(function (error, result) {
        should.not.exist(error);
        result.id.should.equal("1");
        done();
      });
    });

    it('should work with PostAsyncRetrySucceeded', function (done) {
      testClient.lROs.postAsyncRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        done();
      });
    });

    it('should work with PostAsyncNoRetrySucceeded', function (done) {
      testClient.lROs.postAsyncNoRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        result.id.should.be.exactly('100');
        done();
      });
    });

    it('should work with PostAsyncRetrycanceled', function (done) {
      testClient.lROs.postAsyncRetrycanceled({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed with status: "Canceled".');
        done();
      });
    });

    it('should work with PostAsyncRetryFailed', function (done) {
      testClient.lROs.postAsyncRetryFailed({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Long running operation failed with error: "Internal Server Error".');
        var errObject = (error as msRest.RestError).body;
        errObject.error.code.should.be.exactly(500);
        errObject.error.message.should.be.exactly('Internal Server Error');
        done();
      });
    });

    /** LRO Retrys **/
    it('retry should work with Put201CreatingSucceeded200', function (done) {
      testClient.lRORetrys.put201CreatingSucceeded200({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('retry should work with PutAsyncRelativeRetrySucceeded', function (done) {
      testClient.lRORetrys.putAsyncRelativeRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('retry should work with DeleteProvisioning202Accepted200Succeeded', function (done) {
      testClient.lRORetrys.deleteProvisioning202Accepted200Succeeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Delete202Retry200', function (done) {
      testClient.lRORetrys.delete202Retry200(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with DeleteAsyncRelativeRetrySucceeded', function (done) {
      testClient.lRORetrys.deleteAsyncRelativeRetrySucceeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Post202Retry200', function (done) {
      testClient.lRORetrys.post202Retry200({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with PostAsyncRelativeRetrySucceeded', function (done) {
      testClient.lRORetrys.postAsyncRelativeRetrySucceeded({ product: product }, function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should work with Custom Headers', function (done) {
      var options = {
        product: product,
        customHeaders: {
          'x-ms-client-request-id': '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
        }
      };
      testClient.lROsCustomHeader.putAsyncRetrySucceeded(options, function (error, result) {
        should.not.exist(error);
        testClient.lROsCustomHeader.postAsyncRetrySucceeded(options, function (error, result) {
          should.not.exist(error);
          testClient.lROsCustomHeader.put201CreatingSucceeded200(options, function (error, result) {
            should.not.exist(error);
            testClient.lROsCustomHeader.post202Retry200(options, function (error, result) {
              should.not.exist(error);
              done();
            });
          });
        });
      });
    });
  });

  describe('Swagger LRO Sad BAT', function () {
    var testClient = new AutoRestLongRunningOperationTestService(credentials, baseUri, clientOptions);
    testClient.longRunningOperationRetryTimeout = 0;
    var product = { location: 'West US' };

    //TODO: Port more C# test case over after 4103936 Fix exception type

    it('should throw on PutNonRetry400', function (done) {
      testClient.lROSADs.putNonRetry400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Expected bad request message');
        done();
      });
    });

    it('should throw on PutNonRetry201Creating400', function (done) {
      testClient.lROSADs.putNonRetry201Creating400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('"Error from the server"');
        done();
      });
    });

    it('should throw on PutAsyncRelativeRetry400', function (done) {
      testClient.lROSADs.putAsyncRelativeRetry400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.match(/.*Invalid status code with response body "" occurred when polling for operation status.*/ig);
        done();
      });
    });

    it('should throw on DeleteNonRetry400', function (done) {
      testClient.lROSADs.deleteNonRetry400(function (error, result) {
        should.exist(error);
        error.message.should.containEql('Expected');
        done();
      });
    });
    it('should throw on Delete202NonRetry400', function (done) {
      testClient.lROSADs.delete202NonRetry400(function (error, result) {
        should.exist(error);
        error.message.should.containEql('{"message":"Expected bad request message","status":400}');
        done();
      });
    });

    it('should throw on DeleteAsyncRelativeRetry400', function (done) {
      testClient.lROSADs.deleteAsyncRelativeRetry400(function (error, result) {
        should.exist(error);
        error.message.should.containEql('{"message":"Expected bad request message","status":400}');
        done();
      });
    });

    it('should throw on PostNonRetry400', function (done) {
      testClient.lROSADs.postNonRetry400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Expected bad request message');
        done();
      });
    });

    it('should throw on Post202NonRetry400', function (done) {
      testClient.lROSADs.post202NonRetry400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('{"message":"Expected bad request message","status":400}');
        done();
      });
    });

    it('should throw on PostAsyncRelativeRetry400', function (done) {
      testClient.lROSADs.postAsyncRelativeRetry400({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('{"message":"Expected bad request message","status":400}');
        done();
      });
    });

    it('should throw on PutError201NoProvisioningStatePayload', function (done) {
      testClient.lROSADs.putError201NoProvisioningStatePayload({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('The response from long running operation does not contain a body.');
        done();
      });
    });

    it('should throw on PutAsyncRelativeRetryNoStatusPayload', function (done) {
      testClient.lROSADs.putAsyncRelativeRetryNoStatusPayload({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('The response from long running operation does not contain a body.');
        done();
      });
    });

    it('should throw on PutAsyncRelativeRetryNoStatus', function (done) {
      testClient.lROSADs.putAsyncRelativeRetryNoStatus({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('The response "{ }" from long running operation does not contain the status property.');
        done();
      });
    });

    it('should throw on Delete204Succeeded', function (done) {
      testClient.lROSADs.delete204Succeeded(function (error, result) {
        should.not.exist(error);
        done();
      });
    });

    it('should throw on DeleteAsyncRelativeRetryNoStatus', function (done) {
      testClient.lROSADs.deleteAsyncRelativeRetryNoStatus(function (error, result) {
        should.exist(error);
        error.message.should.containEql('The response "{ }" from long running operation does not contain the status property.');
        done();
      });
    });

    it('should throw on Post202NoLocation', function (done) {
      testClient.lROSADs.post202NoLocation({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('Location header is missing from long running operation.');
        done();
      });
    });

    it('should throw on PostAsyncRelativeRetryNoPayload', function (done) {
      testClient.lROSADs.postAsyncRelativeRetryNoPayload({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.containEql('The response from long running operation does not contain a body.');
        done();
      });
    });

    it('should throw on Put200InvalidJson', function (done) {
      testClient.lROSADs.put200InvalidJson({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.match(/SyntaxError/ig);
        error.message.should.match(/JSON/ig);
        done();
      });
    });

    it('should throw on PutAsyncRelativeRetryInvalidHeader', function (done) {
      testClient.lROSADs.putAsyncRelativeRetryInvalidHeader({ product: product }, function (error, result) {
        should.exist(error);
        error.should.be.instanceof(Error);
        done();
      });
    });

    it('should throw on PutAsyncRelativeRetryInvalidJsonPolling', function (done) {
      testClient.lROSADs.putAsyncRelativeRetryInvalidJsonPolling({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.match(/SyntaxError/ig);
        error.message.should.match(/JSON/ig);
        done();
      });
    });

    it('should throw on Delete202RetryInvalidHeader', function (done) {
      testClient.lROSADs.delete202RetryInvalidHeader(function (error, result) {
        should.exist(error);
        error.should.be.instanceof(Error);
        done();
      });
    });

    it('should throw on DeleteAsyncRelativeRetryInvalidHeader', function (done) {
      testClient.lROSADs.deleteAsyncRelativeRetryInvalidHeader(function (error, result) {
        should.exist(error);
        error.should.be.instanceof(Error);
        done();
      });
    });

    it('should throw on DeleteAsyncRelativeRetryInvalidJsonPolling', function (done) {
      testClient.lROSADs.deleteAsyncRelativeRetryInvalidJsonPolling(function (error, result) {
        should.exist(error);
        error.message.should.match(/SyntaxError/ig);
        error.message.should.match(/JSON/ig);
        done();
      });
    });

    it('should throw on Post202RetryInvalidHeader', function (done) {
      testClient.lROSADs.post202RetryInvalidHeader({ product: product }, function (error, result) {
        should.exist(error);
        error.should.be.instanceof(Error);
        done();
      });
    });

    it('should throw on PostAsyncRelativeRetryInvalidHeader', function (done) {
      testClient.lROSADs.postAsyncRelativeRetryInvalidHeader({ product: product }, function (error, result) {
        should.exist(error);
        error.should.be.instanceof(Error);
        done();
      });
    });

    it('should throw on PostAsyncRelativeRetryInvalidJsonPolling', function (done) {
      testClient.lROSADs.postAsyncRelativeRetryInvalidJsonPolling({ product: product }, function (error, result) {
        should.exist(error);
        error.message.should.match(/SyntaxError/ig);
        error.message.should.match(/JSON/ig);
        done();
      });
    });
  });
});
