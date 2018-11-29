// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import { should } from 'chai';
import * as assert from 'assert';
import * as msAssert from "../util/msAssert";
import * as msRest from '@azure/ms-rest-js';

import { AutoRestPagingTestService } from './generated/Paging/autoRestPagingTestService';
import { AutoRestPagingTestServiceOptions } from './generated/Paging/models';

var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: AutoRestPagingTestServiceOptions = {
  baseUri: 'http://localhost:3000'
};

describe('typescript', function () {

  describe('Swagger Pageable BAT', function () {

    describe('Pageable Operations', function () {
      clientOptions.requestPolicyFactories = [
        msRest.exponentialRetryPolicy(3, 0, 0, 0),
        msRest.deserializationPolicy()
      ];
      var testClient = new AutoRestPagingTestService(credentials, clientOptions);

      it('should get single pages', async function () {
        const result = await testClient.paging.getSinglePages();
        result.nextLink.should.not.exist
        assert.deepEqual(result.slice(), [{ properties: { id: 1, name: "Product" } }]);
      });

      it('should get multiple pages using promises', async function () {
        let result = await testClient.paging.getMultiplePages({ clientRequestId: 'client-id' });
        for (let i = 1; i < 10; i++) {
          result.nextLink.should.exist
          result = await testClient.paging.getMultiplePagesNext(result.nextLink, { clientRequestId: 'client-id' });
        }
        result.nextLink.should.not.exist
      });

      it('should get multiple pages', function (done) {
        testClient.paging.getMultiplePages({ clientRequestId: 'client-id' }, function (error, result) {
          const loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                err.should.not.exist
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          error.should.not.exist
          result.nextLink.should.exist
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with odata kind nextLink', function (done) {
        testClient.paging.getOdataMultiplePages({ clientRequestId: 'client-id' }, function (error, result) {
          var loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getOdataMultiplePagesNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                err.should.not.exist
                loop(res.odatanextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          error.should.not.exist
          result.odatanextLink.should.exist
          loop(result.odatanextLink, 1);
        });
      });

      it('should get multiple pages with offset', function (done) {
        testClient.paging.getMultiplePagesWithOffset({ 'offset': 100 }, { clientRequestId: 'client-id' }, function (error, result) {
          var loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesWithOffsetNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                err.should.not.exist
                result = res;
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              result[0].properties.id.should.be.exactly(110);
              done();
            }
          };

          error.should.not.exist
          result.nextLink.should.exist
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with retry on first call', function (done) {
        testClient.paging.getMultiplePagesRetryFirst(function (error, result) {
          var loop = function (nextLink, count) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesRetryFirstNext(nextLink, function (err, res) {
                err.should.not.exist
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          error.should.not.exist
          result.nextLink.should.exist
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with retry on second call', function (done) {
        testClient.paging.getMultiplePagesRetrySecond(function (error, result) {
          var loop = function (nextLink, count) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesRetrySecondNext(nextLink, function (err, res) {
                err.should.not.exist
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          error.should.not.exist
          result.nextLink.should.exist
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with fragmented nextLink', function (done) {
        testClient.paging.getMultiplePagesFragmentNextLink('1.6', 'test_user', function (error, result) {
          var loop = function (odatanextLink, count) {
            if (odatanextLink !== null && odatanextLink !== undefined) {
              testClient.paging.nextFragment('1.6', 'test_user', odatanextLink, function (err, res) {
                err.should.not.exist
                loop(res.odatanextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          error.should.not.exist
          result.odatanextLink.should.exist
          loop(result.odatanextLink, 1);
        });
      });

      it('should fail on 400 single page', async () => {
        const error: Error = await msAssert.throwsAsync(testClient.paging.getSinglePagesFailure());
        error.message.should.contains("Expected");
      });

      it('should fail on 400 multiple pages', async () => {
        const result = await testClient.paging.getMultiplePagesFailure();
        const error: Error = await msAssert.throwsAsync(testClient.paging.getMultiplePagesFailureNext(result.nextLink));
        error.message.should.contains("Expected");
      });

      it('should fail on invalid next link URL in multiple pages', async () => {
        const result = await testClient.paging.getMultiplePagesFailureUri();
        const error: Error = await msAssert.throwsAsync(testClient.paging.getMultiplePagesFailureUriNext(result.nextLink));
        error.should.be.instanceof(Error);
      });

      // TODO coverage
      it.skip('should handle PagingMultipleLRO', async () => {
        const result = await testClient.paging.getMultiplePagesLRO();
        await testClient.paging.getMultiplePagesLRONext(result.nextLink);
      });
    });
  });
});
