// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

'use strict';

import * as should from 'should';
import * as assert from 'assert';
import * as msAssert from "../util/msAssert";
import * as msRest from 'ms-rest-js';
import * as msRestAzure from 'ms-rest-azure-js';

import { AutoRestPagingTestService } from './generated/Paging/autoRestPagingTestService';
import { PagingGetMultiplePagesResponse } from './generated/Paging/models';

var dummySubscriptionId = 'a878ae02-6106-429z-9397-58091ee45g98';
var dummyToken = 'dummy12321343423';
var credentials = new msRest.TokenCredentials(dummyToken);

var clientOptions: msRestAzure.AzureServiceClientOptions = {};
var baseUri = 'http://localhost:3000';

describe('typescript', function () {

  describe('Swagger Pageable BAT', function () {

    describe('Pageable Operations', function () {
      clientOptions.requestPolicyFactories = [
        msRest.exponentialRetryPolicy(3, 0, 0, 0),
        msRest.deserializationPolicy()
      ];
      clientOptions.noRetryPolicy = true;
      var testClient = new AutoRestPagingTestService(credentials, baseUri, clientOptions);

      it('should get single pages', async function () {
        const result = await testClient.paging.getSinglePages();
        should.not.exist(result.nextLink);
        assert.deepEqual(result.slice(), [{ properties: { id: 1, name: "Product" } }]);
      });

      it('should get multiple pages using promises', async function () {
        let result = await testClient.paging.getMultiplePages({ clientRequestId: 'client-id' });
        for (let i = 1; i < 10; i++) {
          should.exist(result.nextLink);
          result = await testClient.paging.getMultiplePagesNext(result.nextLink, { clientRequestId: 'client-id' });
        }
        should.not.exist(result.nextLink);
      });

      it('should get multiple pages', function (done) {
        testClient.paging.getMultiplePages({ clientRequestId: 'client-id' }, function (error, result) {
          const loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                should.not.exist(err);
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.nextLink);
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with odata kind nextLink', function (done) {
        testClient.paging.getOdataMultiplePages({ clientRequestId: 'client-id' }, function (error, result) {
          var loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getOdataMultiplePagesNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                should.not.exist(err);
                loop(res.odatanextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.odatanextLink);
          loop(result.odatanextLink, 1);
        });
      });

      it('should get multiple pages with offset', function (done) {
        testClient.paging.getMultiplePagesWithOffset({ 'offset': 100 }, { clientRequestId: 'client-id' }, function (error, result) {
          var loop = function (nextLink: string, count: number) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesWithOffsetNext(nextLink, { clientRequestId: 'client-id' }, function (err, res) {
                should.not.exist(err);
                result = res;
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              result[0].properties.id.should.be.exactly(110);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.nextLink);
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with retry on first call', function (done) {
        testClient.paging.getMultiplePagesRetryFirst(function (error, result) {
          var loop = function (nextLink, count) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesRetryFirstNext(nextLink, function (err, res) {
                should.not.exist(err);
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.nextLink);
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with retry on second call', function (done) {
        testClient.paging.getMultiplePagesRetrySecond(function (error, result) {
          var loop = function (nextLink, count) {
            if (nextLink !== null && nextLink !== undefined) {
              testClient.paging.getMultiplePagesRetrySecondNext(nextLink, function (err, res) {
                should.not.exist(err);
                loop(res.nextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.nextLink);
          loop(result.nextLink, 1);
        });
      });

      it('should get multiple pages with fragmented nextLink', function (done) {
        testClient.paging.getMultiplePagesFragmentNextLink('1.6', 'test_user', function (error, result) {
          var loop = function (odatanextLink, count) {
            if (odatanextLink !== null && odatanextLink !== undefined) {
              testClient.paging.nextFragment('1.6', 'test_user', odatanextLink, function (err, res) {
                should.not.exist(err);
                loop(res.odatanextLink, count + 1);
              });
            } else {
              count.should.be.exactly(10);
              done();
            }
          };

          should.not.exist(error);
          should.exist(result.odatanextLink);
          loop(result.odatanextLink, 1);
        });
      });

      it('should fail on 400 single page', async () => {
        const error: Error = await msAssert.throwsAsync(testClient.paging.getSinglePagesFailure());
        error.message.should.containEql("Expected");
      });

      it('should fail on 400 multiple pages', async () => {
        const result = await testClient.paging.getMultiplePagesFailure();
        const error: Error = await msAssert.throwsAsync(testClient.paging.getMultiplePagesFailureNext(result.nextLink));
        error.message.should.containEql("Expected");
      });

      it('should fail on invalid next link URL in multiple pages', async () => {
        const result = await testClient.paging.getMultiplePagesFailureUri();
        const error: Error = await msAssert.throwsAsync(testClient.paging.getMultiplePagesFailureUriNext(result.nextLink));
        error.should.be.instanceof(Error);
      });
    });
  });
});
