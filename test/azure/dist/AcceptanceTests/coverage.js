// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const msRest = require("ms-rest-ts");
const autoRestReportServiceForAzure_1 = require("../Expected/AcceptanceTests/AzureReport/autoRestReportServiceForAzure");
var dummySubscriptionId = 'a878ae02-6106-429z-9397-58091ee45g98';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);
var clientOptions = {};
var baseUri = 'http://localhost:3000';
describe('typescript', function () {
    describe('Swagger BAT coverage report', function () {
        var testClient = new autoRestReportServiceForAzure_1.AutoRestReportServiceForAzure(credentials, baseUri, clientOptions);
        it('should have 100% coverage for Azure', function (done) {
            testClient.getReport(function (error, result) {
                should.not.exist(error);
                //console.log(`The test coverage for azure is ${JSON.stringify(result)).`);
                var total = Object.keys(result).length;
                var passed = 0;
                Object.keys(result).forEach(function (item) {
                    if (result[item] > 0) {
                        passed++;
                    }
                    else {
                        console.log('No coverage for scenario: ' + item + '\n');
                    }
                });
                var percentage = Math.floor((passed / total) * 100);
                console.log('Passed: ' + passed + ', Total: ' + total + ', coverage: ' + percentage + '% .');
                percentage.should.equal(100);
                done();
            });
        });
    });
});
//# sourceMappingURL=coverage.js.map