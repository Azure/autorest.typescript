// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import { should } from "chai";
import "chai/register-should";
import * as assert from "assert";
import * as msAssert from "../util/msAssert";
import * as coreHttp from "@azure/core-http";

import { AutoRestPagingTestService } from "./generated/Paging/autoRestPagingTestService";
import { AutoRestPagingTestServiceOptions } from "./generated/Paging/models";

var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: AutoRestPagingTestServiceOptions = {
  baseUri: "http://localhost:3000"
};

describe("typescript", function() {
  describe("Swagger Pageable BAT", function() {
    describe("Pageable Operations", function() {
      clientOptions.requestPolicyFactories = [
        coreHttp.exponentialRetryPolicy(3, 0, 0, 0),
        coreHttp.deserializationPolicy()
      ];
      var testClient = new AutoRestPagingTestService(
        credentials,
        clientOptions
      );

      it("should get single pages", async function() {
        const result = await testClient.paging.getSinglePages();
        should().not.exist(result.nextLink);
        assert.deepEqual(result.slice(), [
          { properties: { id: 1, name: "Product" } }
        ]);
      });

      it("should get multiple pages using promises", async function() {
        let result = await testClient.paging.getMultiplePages({
          clientRequestId: "client-id"
        });
        for (let i = 1; i < 10; i++) {
          result.nextLink.should.exist;
          result = await testClient.paging.getMultiplePagesNext(
            result.nextLink,
            { clientRequestId: "client-id" }
          );
        }
        should().not.exist(result.nextLink);
      });

      it("should get multiple pages", async () => {
        const result = await testClient.paging.getMultiplePages({
          clientRequestId: "client-id"
        });
        const loop = async function(nextLink: string, count: number) {
          if (nextLink !== null && nextLink !== undefined) {
            const res = await testClient.paging.getMultiplePagesNext(nextLink, {
              clientRequestId: "client-id"
            });
            await loop(res.nextLink, count + 1);
          } else {
            count.should.be.equal(10);
          }
        };

        result.nextLink.should.exist;
        await loop(result.nextLink, 1);
      });

      it("should get multiple pages with odata kind nextLink", async () => {
        const result = await testClient.paging.getOdataMultiplePages({
          clientRequestId: "client-id"
        });
        const loop = async function(nextLink: string, count: number) {
          if (nextLink !== null && nextLink !== undefined) {
            const res = await testClient.paging.getOdataMultiplePagesNext(
              nextLink,
              { clientRequestId: "client-id" }
            );
            await loop(res.odatanextLink, count + 1);
          } else {
            count.should.equal(10);
          }
        };

        result.odatanextLink.should.exist;
        await loop(result.odatanextLink, 1);
      });

      it("should get multiple pages with offset", async () => {
        let result = await testClient.paging.getMultiplePagesWithOffset(
          { offset: 100 },
          { clientRequestId: "client-id" }
        );
        const loop = async function(nextLink: string, count: number) {
          if (nextLink !== null && nextLink !== undefined) {
            result = await testClient.paging.getMultiplePagesWithOffsetNext(
              nextLink,
              { clientRequestId: "client-id" }
            );
            await loop(result.nextLink, count + 1);
          } else {
            count.should.equal(10);
            result[0].properties.id.should.equal(110);
          }
        };

        result.nextLink.should.exist;
        await loop(result.nextLink, 1);
      });

      it("should get multiple pages with retry on first call", async () => {
        const result = await testClient.paging.getMultiplePagesRetryFirst();
        const loop = async function(nextLink, count) {
          if (nextLink !== null && nextLink !== undefined) {
            const res = await testClient.paging.getMultiplePagesRetryFirstNext(
              nextLink
            );
            await loop(res.nextLink, count + 1);
          } else {
            count.should.be.deep.equal(10);
          }
        };

        result.nextLink.should.exist;
        await loop(result.nextLink, 1);
      });

      it("should get multiple pages with retry on second call", async () => {
        const result = await testClient.paging.getMultiplePagesRetrySecond();
        const loop = async function(nextLink, count) {
          if (nextLink !== null && nextLink !== undefined) {
            const res = await testClient.paging.getMultiplePagesRetrySecondNext(
              nextLink
            );
            await loop(res.nextLink, count + 1);
          } else {
            count.should.be.deep.equal(10);
          }
        };

        result.nextLink.should.exist;
        await loop(result.nextLink, 1);
      });

      it("should get multiple pages with fragmented nextLink", async () => {
        const result = await testClient.paging.getMultiplePagesFragmentNextLink(
          "1.6",
          "test_user"
        );
        const loop = async function(odatanextLink, count) {
          if (odatanextLink !== null && odatanextLink !== undefined) {
            const res = await testClient.paging.nextFragment(
              "1.6",
              "test_user",
              odatanextLink
            );
            await loop(res.odatanextLink, count + 1);
          } else {
            count.should.be.deep.equal(10);
          }
        };

        result.odatanextLink.should.exist;
        await loop(result.odatanextLink, 1);
      });

      it("should fail on 400 single page", async () => {
        const error: Error = await msAssert.throwsAsync(
          testClient.paging.getSinglePagesFailure()
        );
        error.message.should.contains("Expected");
      });

      it("should fail on 400 multiple pages", async () => {
        const result = await testClient.paging.getMultiplePagesFailure();
        const error: Error = await msAssert.throwsAsync(
          testClient.paging.getMultiplePagesFailureNext(result.nextLink)
        );
        error.message.should.contains("Expected");
      });

      it("should fail on invalid next link URL in multiple pages", async () => {
        const result = await testClient.paging.getMultiplePagesFailureUri();
        const error: Error = await msAssert.throwsAsync(
          testClient.paging.getMultiplePagesFailureUriNext(result.nextLink)
        );
        error.should.be.instanceof(Error);
      });

      // TODO coverage
      it.skip("should handle PagingMultipleLRO", async () => {
        const result = await testClient.paging.getMultiplePagesLRO();
        await testClient.paging.getMultiplePagesLRONext(result.nextLink);
      });
    });
  });
});
