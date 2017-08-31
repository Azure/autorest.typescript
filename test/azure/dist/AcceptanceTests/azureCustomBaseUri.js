// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const msRest = require("ms-rest-ts");
const autoRestParameterizedHostTestClient_1 = require("../Expected/AcceptanceTests/CustomBaseUri/autoRestParameterizedHostTestClient");
var dummySubscriptionId = '1234-5678-9012-3456';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);
var clientOptions = {};
describe('typescript', function () {
    describe('Custom BaseUri Client', function () {
        clientOptions.host = 'host:3000';
        var testClient = new autoRestParameterizedHostTestClient_1.AutoRestParameterizedHostTestClient(credentials, clientOptions);
        it('should return 200', function (done) {
            testClient.paths.getEmpty('local', function (error, result, request, response) {
                should.not.exist(error);
                response.status.should.equal(200);
                done();
            });
        });
        it('should throw due to bad "host", bad "account" and missing account', function (done) {
            testClient.host = 'nonexistent';
            testClient.paths.getEmpty('local', function (error, result, request, response) {
                should.exist(error);
                should.not.exist(result);
                testClient.host = 'host:3000';
                testClient.paths.getEmpty('bad', function (error, result, request, response) {
                    should.exist(error);
                    should.not.exist(result);
                    testClient.paths.getEmpty(null, function (error, result, request, response) {
                        should.exist(error);
                        should.not.exist(result);
                        done();
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=azureCustomBaseUri.js.map