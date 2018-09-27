// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as msAssert from "../util/msAssert";
import * as msRestAzure from 'ms-rest-azure-js';
import * as msRest from 'ms-rest-js';
import * as should from 'should';
import { AutoRestHeadTestService } from './generated/Head/autoRestHeadTestService';
import { AutoRestHeadExceptionTestService } from './generated/HeadExceptions/autoRestHeadExceptionTestService';
import { AutoRestHeadTestServiceOptions } from './generated/Head/models';


var dummySubscriptionId = 'a878ae02-6106-429z-9397-58091ee45g98';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: AutoRestHeadTestServiceOptions = {
  baseUri: 'http://localhost:3000',
  requestPolicyFactories: [msRest.exponentialRetryPolicy(3, 0, 0, 0), msRest.deserializationPolicy()]
};

describe('typescript', function () {

  describe('Swagger Head BAT', function () {

    describe('Head Operations', function () {
      var testOptions: msRestAzure.AzureServiceClientOptions = clientOptions;
      testOptions.noRetryPolicy = true;
      var testClient = new AutoRestHeadTestService(credentials, clientOptions);

      it('should return true for 200 status code', async () => {
        const result = await testClient.httpSuccess.head200();
        should.exist(result.body);
        result.body.should.be.exactly(true);
      });

      it('should return true for 204 status code', async () => {
        const result = await testClient.httpSuccess.head204();
        should.exist(result.body);
        result.body.should.be.exactly(true);
      });

      it('should return false for 404 status code', async () => {
        const result = await testClient.httpSuccess.head404();
        should.exist(result.body);
        result.body.should.be.exactly(false);
      });
    });

    describe('Head Exception Operations', function () {
      var testOptions: msRestAzure.AzureServiceClientOptions = clientOptions;
      testOptions.noRetryPolicy = true;
      var testClient = new AutoRestHeadExceptionTestService(credentials, clientOptions);

      it('should not throw for 200 status code', async () => {
        await testClient.headException.head200();
      });

      it('should not throw for 204 status code', async () => {
        await testClient.headException.head204();
      });

      it('should throw for 404 status code', async () => {
        const error: msRest.RestError = await msAssert.throwsAsync(testClient.headException.head404());
        error.statusCode.should.equal(404);
      });
    });
  });
});
