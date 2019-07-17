// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as coreHttp from '@azure/core-http';
import { AzureCompositeModel } from './generated/AzureCompositeModelClient/azureCompositeModel';
import { AzureCompositeModelOptions } from './generated/AzureCompositeModelClient/models';

const dummyToken = 'dummy12321343423';
const credentials = new coreHttp.TokenCredentials(dummyToken);

const clientOptions: AzureCompositeModelOptions = {
  baseUri: 'http://localhost:3000'
};

describe('typescript', function () {
  describe('Azure Composite Client', function () {
    const testClient = new AzureCompositeModel(credentials, clientOptions);

    it('should get and put valid basic type properties', async () => {
      const result = await testClient.basic.getValid();
      result.id.should.equal(2);
      result.name.should.equal('abc');
      result.color.should.equal('YELLOW');

      await testClient.basic.putValid({ 'id': 2, 'name': 'abc', color: 'Magenta' });
    });
  });
});
