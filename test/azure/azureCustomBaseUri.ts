// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import { should } from "chai";
import "chai/register-should";
import * as assert from "assert";
import * as coreHttp from "@azure/core-http";

import { AutoRestParameterizedHostTestClient } from "./generated/CustomBaseUri/autoRestParameterizedHostTestClient";
import { timeoutPromise } from "../util/util";
var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: any = {};

describe("typescript", function() {
  describe("Custom BaseUri Client", function() {
    clientOptions.host = "host:3000";
    var testClient = new AutoRestParameterizedHostTestClient(
      credentials,
      clientOptions
    );

    it("should return 200", async function() {
      const response = await testClient.paths.getEmpty("local");
      response._response.status.should.equal(200);
      should().equal(response._response.status, 200);
    });

    it('should throw due to bad "host", bad "account" and missing account', async function() {
      testClient.host = "nonexistent";
      try {
        await Promise.race([
          testClient.paths.getEmpty("local"),
          timeoutPromise(1000)
        ]);
        assert.fail("");
      } catch (error) {
        error.should.not.be.instanceof(assert.AssertionError);
      }
      testClient.host = "host:3000";
      try {
        await Promise.race([
          testClient.paths.getEmpty("bad"),
          timeoutPromise(1000)
        ]);
        assert.fail("");
      } catch (error) {
        error.should.not.be.instanceof(assert.AssertionError);
      }

      try {
        await Promise.race([
          testClient.paths.getEmpty(null),
          timeoutPromise(1000)
        ]);
      } catch (error) {
        error.should.not.be.instanceof(assert.AssertionError);
      }
    });

    describe("credentials.environment", function() {
      it("should be ignored for services that use x-ms-parameterized host", async function() {
        const creds = {
          signRequest: (req: coreHttp.WebResource) => Promise.resolve(req),
          environment: {
            resourceManagerEndpointUrl: "http://microsoft.com"
          }
        };
        const client = new AutoRestParameterizedHostTestClient(creds, {
          httpClient: {
            sendRequest: request =>
              Promise.resolve({
                status: 200,
                headers: new coreHttp.HttpHeaders(),
                request
              })
          }
        });

        const res = await client.paths.getEmpty("local");
        const request = res._response.request;
        request.url.startsWith("http://microsoft.com").should.be.false;
      });
    });
  });
});
