// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const msRest = require("ms-rest-js");
const azureCompositeModel_1 = require("../Expected/AcceptanceTests/AzureCompositeModelClient/azureCompositeModel");
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);
var clientOptions = {};
var baseUri = 'http://localhost:3000';
describe('typescript', function () {
    describe('Azure Composite Client', function () {
        var testClient = new azureCompositeModel_1.AzureCompositeModel(credentials, baseUri, clientOptions);
        it('should get and put valid basic type properties', function (done) {
            testClient.basic.getValid(function (error, result) {
                should.not.exist(error);
                result.id.should.equal(2);
                result.name.should.equal('abc');
                result.color.should.equal('YELLOW');
                testClient.basic.putValid({ 'id': 2, 'name': 'abc', color: azureCompositeModel_1.AzureCompositeModelModels.CMYKColors.Magenta }, function (error, result) {
                    should.not.exist(error);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=azureCompositeClient.js.map