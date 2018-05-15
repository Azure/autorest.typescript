﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as assert from 'assert';
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AzureCompositeModel, AzureCompositeModelModels } from './generated/AzureCompositeModelClient/azureCompositeModel';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: any = {};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Azure Composite Client', function () {
    var testClient = new AzureCompositeModel(credentials, baseUri, clientOptions);
    it('should get and put valid basic type properties', function (done) {
      testClient.basic.getValid(function (error, result) {
        should.not.exist(error);
        result.id.should.equal(2);
        result.name.should.equal('abc');
        result.color.should.equal('YELLOW');
        testClient.basic.putValid({ 'id': 2, 'name': 'abc', color: AzureCompositeModelModels.CMYKColors.Magenta }, function (error, result) {
          should.not.exist(error);
          done();
        });
      });
    });
  });
});
