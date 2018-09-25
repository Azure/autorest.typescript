// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as _ from 'underscore';
import { AutoRestReportService } from './generated/Report/autoRestReportService';

var clientOptions = {
  baseUri: 'http://localhost:3000'
};
var testClient = new AutoRestReportService(clientOptions);

describe('typescript', function () {
  it('should have full test coverage', async function () {
    console.log();
    console.log('----- Vanilla coverage report -----');
    const result = await testClient.getReport();

    const total = _.keys(result).length - 2;
    let passed = 0;
    _.keys(result).forEach(function (item: string) {
      if (result[item] > 0) {
        passed++;
      } else {
        console.log('No coverage for scenario: ' + item);
      }
    });
    const coverage = Math.floor((passed / total) * 100);
    console.log('Passed: ' + passed + ', Total: ' + total + ', coverage: ' + coverage + '% .');
    console.log();

    console.log('The following scenarios are intentionally not supported:');
    console.log('HeaderResponseStringNull');
    console.log('HttpRedirect301Put');
    console.log('HttpRedirect302Patch');
    console.log();
  });
});
