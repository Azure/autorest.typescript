// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as assert from 'assert';
import * as msRest from 'ms-rest-ts';
import * as msRestAzure from 'ms-rest-azure-ts';

import { MicrosoftAzureTestUrl } from '../Expected/AcceptanceTests/SubscriptionIdApiVersion/microsoftAzureTestUrl';
var dummySubscriptionId = 'a878ae02-6106-429z-9397-58091ee45g98';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: any = {};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Azure Swagger Url', function () {
    var testClient = new MicrosoftAzureTestUrl(credentials, dummySubscriptionId, baseUri, clientOptions);

    it('should correctly send the subscriptionId as path parameter and api-version ' +
      'as a query parameter in the request url', function (done) {
        testClient.group.getSampleResourceGroup('testgroup101', function (error, result, request, response) {
          should.not.exist(error);
          response.status.should.equal(200);
          done();
        });
      });
  });
});
