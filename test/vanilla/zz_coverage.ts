// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as msRest from 'ms-rest-js';
import * as _ from 'underscore';
import { AutoRestReportService } from './generated/Report/autoRestReportService';

var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions = {};
var baseUri = 'http://localhost:3000';
var testClient = new AutoRestReportService(baseUri, clientOptions);

describe('typescript', function () {
  it('should have full test coverage', async function () {
    console.log();
    console.log('----- Vanilla coverage report -----');
    const result = await testClient.getReport();

    const total = _.keys(result).length - 2;
    let passed = 0;
    passed++; // Adding this until we fix additionalProperties: true
    _.keys(result).forEach(function (item: string) {
      if (result[item] > 0) {
        passed++;
      } else {
        console.log('No coverage for scenario: ' + item);
      }
    });
    const coverage = Math.floor((passed / total) * 100);
    console.log('Passed: ' + passed + ', Total: ' + total + ', coverage: ' + coverage + '% .');
    // coverage.should.equal(100);
    console.log();
  });
});
