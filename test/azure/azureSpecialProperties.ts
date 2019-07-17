// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

"use strict";

import { should } from "chai";
import "chai/register-should";
import * as coreHttp from "@azure/core-http";

import { AutoRestAzureSpecialParametersTestClient } from "./generated/AzureSpecials/autoRestAzureSpecialParametersTestClient";
import { AutoRestAzureSpecialParametersTestClientOptions } from "./generated/AzureSpecials/models";
var dummySubscriptionId = "1234-5678-9012-3456";
var dummyToken = "dummy12321343423";
var credentials = new coreHttp.TokenCredentials(dummyToken);

var clientOptions: AutoRestAzureSpecialParametersTestClientOptions = {
  baseUri: "http://localhost:3000",
  generateClientRequestIdHeader: true
};
var baseUri = "http://localhost:3000";

describe("typescript", function() {
  describe("Azure Special Properties", function() {
    var testClient = new AutoRestAzureSpecialParametersTestClient(
      credentials,
      dummySubscriptionId,
      clientOptions
    );
    it("should use the default api-version when no api-version parameter is present", async function() {
      let result = await testClient.apiVersionDefault.getMethodGlobalValid();
      result._response.status.should.equal(200);

      result = await testClient.apiVersionDefault.getMethodGlobalNotProvidedValid();
      result._response.status.should.equal(200);

      result = await testClient.apiVersionDefault.getPathGlobalValid();
      result._response.status.should.equal(200);

      result = await testClient.apiVersionDefault.getSwaggerGlobalValid();
      result._response.status.should.equal(200);
    });

    it("should use the api-version parameter instead of the default api-version when it is present", async function() {
      let result = await testClient.apiVersionLocal.getMethodLocalNull(null);
      result._response.status.should.equal(200);

      result = await testClient.apiVersionLocal.getMethodLocalValid();
      result._response.status.should.equal(200);

      result = await testClient.apiVersionLocal.getPathLocalValid();
      result._response.status.should.equal(200);

      result = await testClient.apiVersionLocal.getSwaggerLocalValid();
      result._response.status.should.equal(200);
    });

    it("should use the subscriptionId from credentials by default", async function() {
      let result = await testClient.subscriptionInCredentials.postMethodGlobalNotProvidedValid();
      result._response.status.should.equal(200);

      result = await testClient.subscriptionInCredentials.postMethodGlobalValid();
      result._response.status.should.equal(200);

      result = await testClient.subscriptionInCredentials.postPathGlobalValid();
      result._response.status.should.equal(200);

      result = await testClient.subscriptionInCredentials.postSwaggerGlobalValid();
      result._response.status.should.equal(200);
    });

    it("should use the subscriptionId parameter when it is present", async function() {
      try {
        await testClient.subscriptionInMethod.postMethodLocalNull(null);
        should().fail;
      } catch (error) {
        error.message.should.equal(
          "subscriptionId cannot be null or undefined."
        );
      }

      let result = await testClient.subscriptionInMethod.postMethodLocalValid(
        dummySubscriptionId
      );
      result._response.status.should.equal(200);

      result = await testClient.subscriptionInMethod.postPathLocalValid(
        dummySubscriptionId
      );
      result._response.status.should.equal(200);

      result = await testClient.subscriptionInMethod.postSwaggerLocalValid(
        dummySubscriptionId
      );
      result._response.status.should.equal(200);
    });

    it("should skip url encoding when specified for path parameters", async function() {
      const unencodedPath = "path1/path2/path3";

      let result = await testClient.skipUrlEncoding.getMethodPathValid(
        unencodedPath
      );
      result._response.status.should.equal(200);

      result = await testClient.skipUrlEncoding.getPathPathValid(unencodedPath);
      result._response.status.should.equal(200);

      result = await testClient.skipUrlEncoding.getSwaggerPathValid();
      result._response.status.should.equal(200);
    });

    it("should skip url encoding when specified for query parameters", async function() {
      const unencodedQuery = "value1&q2=value2&q3=value3";

      let result = await testClient.skipUrlEncoding.getMethodQueryValid(
        unencodedQuery
      );
      result._response.status.should.equal(200);

      result = await testClient.skipUrlEncoding.getPathQueryValid(
        unencodedQuery
      );
      result._response.status.should.equal(200);

      result = await testClient.skipUrlEncoding.getSwaggerQueryValid();
      result._response.status.should.equal(200);

      result = await testClient.skipUrlEncoding.getMethodQueryNull({
        q1: null
      });
      result._response.status.should.equal(200);
    });

    it("should overwrite x-ms-client-request-id", async function() {
      const validClientId = "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0";
      let result = await testClient.xMsClientRequestId.paramGet(validClientId);
      result._response.status.should.equal(200);
      result._response.headers.get("x-ms-request-id").should.equal("123");

      const options = {
        customHeaders: {
          "x-ms-client-request-id": validClientId
        }
      };
      result = await testClient.xMsClientRequestId.get(options);
      result._response.status.should.equal(200);
      result._response.headers.get("x-ms-request-id").should.equal("123");
    });

    it("should not overwrite x-ms-client-request-id", async () => {
      var testClient2 = new AutoRestAzureSpecialParametersTestClient(
        credentials,
        dummySubscriptionId,
        {
          ...clientOptions,
          generateClientRequestIdHeader: false
        }
      );
      const result = await testClient2.xMsClientRequestId.get();
      result._response.status.should.equal(200);
      result._response.headers.get("x-ms-request-id").should.equal("123");
    });

    it("should have x-ms-request-id in the err object", async () => {
      var invalidClientId = "123";
      var options = {
        customHeaders: {
          "x-ms-client-request-id": invalidClientId
        }
      };

      try {
        await testClient.xMsClientRequestId.get(options);
      } catch (error) {
        (error as coreHttp.RestError).response.headers
          .get("x-ms-request-id")
          .should.equal("123");
      }
    });

    it("should allow custom-named request-id headers to be used", async () => {
      const testClient = new AutoRestAzureSpecialParametersTestClient(
        credentials,
        dummySubscriptionId,
        { ...clientOptions, generateClientRequestIdHeader: false }
      );
      const result = await testClient.header.customNamedRequestId(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      );
      result._response.status.should.equal(200);
      should().not.exist(
        result._response.request.headers["x-ms-client-request-id"]
      );
      result._response.headers.get("foo-request-id").should.equal("123");
    });

    it("should allow custom-named request-id headers to be used with parameter grouping", async () => {
      const testClient = new AutoRestAzureSpecialParametersTestClient(
        credentials,
        dummySubscriptionId,
        { ...clientOptions, generateClientRequestIdHeader: false }
      );
      const result = await testClient.header.customNamedRequestIdParamGrouping({
        fooClientRequestId: "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      });
      result._response.status.should.equal(200);
      should().not.exist(
        result._response.request.headers["x-ms-client-request-id"]
      );
      result._response.headers.get("foo-request-id").should.equal("123");
    });

    it("should allow custom-named request-id headers to be used in head operations", async () => {
      const result = await testClient.header.customNamedRequestIdHead(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      );
      result._response.status.should.equal(200);
      result._response.headers.get("foo-request-id").should.equal("123");
      result.body.should.equal(true);
    });

    it("should support OData filter", async () => {
      var options = {
        filter: "id gt 5 and name eq 'foo'",
        top: 10,
        orderby: "id"
      };
      const result = await testClient.odata.getWithFilter(options);
      result._response.status.should.equal(200);
    });

    describe("credentials.environment property", function() {
      const creds = {
        environment: {
          resourceManagerEndpointUrl: "http://microsoft.com"
        },
        signRequest: req => Promise.resolve(req)
      };

      it("should override the service base URL", async function() {
        const client = new AutoRestAzureSpecialParametersTestClient(
          creds,
          dummySubscriptionId,
          {
            httpClient: {
              sendRequest: req =>
                Promise.resolve({
                  status: 200,
                  headers: new coreHttp.HttpHeaders(),
                  request: req
                })
            }
          }
        );
        const response = await client.apiVersionDefault.getMethodGlobalValid();
        response._response.request.url.startsWith("http://microsoft.com").should
          .be.true;
      });

      it("should be overridden by a user-specified base URL", async function() {
        const client = new AutoRestAzureSpecialParametersTestClient(
          creds,
          dummySubscriptionId,
          {
            httpClient: {
              sendRequest: req =>
                Promise.resolve({
                  status: 200,
                  headers: new coreHttp.HttpHeaders(),
                  request: req
                })
            },
            baseUri: "http://usethisone.com"
          }
        );
        const response = await client.apiVersionDefault.getMethodGlobalValid();
        response._response.request.url.startsWith("http://usethisone.com")
          .should.be.true;
      });
    });
  });
});
