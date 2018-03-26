// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as assert from 'assert';
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AutoRestReportServiceForAzure } from './generated/AzureReport/autoRestReportServiceForAzure';

var dummySubscriptionId = 'a878ae02-6106-429z-9397-58091ee45g98';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: any = {};
var baseUri = 'http://localhost:3000';
var testClient = new AutoRestReportServiceForAzure(credentials, baseUri, clientOptions);

describe('typescript', function () {
  it('should have full Azure test coverage', async function () {
    console.log();
    console.log('----- Azure coverage report -----');
    const result = await testClient.getReport();
    var total = Object.keys(result).length;
    var passed = 0;

    Object.keys(result).forEach(function (item) {
      if (result[item] > 0) {
        passed++;
      } else {
        console.log('No coverage for scenario: ' + item);
      }
    });
    var percentage = Math.floor((passed / total) * 100);
    console.log('Passed: ' + passed + ', Total: ' + total + ', coverage: ' + percentage + '% .');
    console.log();
  });
});
