import {
  AzureSpecialPropertiesClient,
  AzureSpecialPropertiesClientOptionalParams
} from "./generated/azureSpecialProperties/src";
import { assert } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

import { RestError } from "@azure/core-http";
import { TokenCredential } from "@azure/core-auth";
import { FullOperationResponse, OperationOptions } from "@azure/core-client";
import {
  createHttpHeaders,
  setClientRequestIdPolicyName,
  bearerTokenAuthenticationPolicy,
  bearerTokenAuthenticationPolicyName
} from "@azure/core-rest-pipeline";

describe.skip("auth validation", () => {
  it("should add authorization header", async () => {
    const expectedScopes = [
      "https://microsoft.com/.default",
      "http://microsoft.com/.default"
    ];

    const mockCredential: TokenCredential = {
      getToken: async scopes => {
        assert.deepEqual(scopes, expectedScopes);
        return {
          token: "test-token",
          expiresOnTimestamp: 111111
        };
      }
    };

    const client = new AzureSpecialPropertiesClient(
      mockCredential,
      "1234-5678-9012-3456",
      {
        allowInsecureConnection: true
      }
    );

    let _response: FullOperationResponse;
    await client.apiVersionDefault.getMethodGlobalValid({
      ...responseStatusChecker,
      onResponse: r => {
        _response = r;
      }
    });

    // Validate auth header
    assert.equal(
      _response!.request.headers.get("authorization"),
      "Bearer test-token"
    );
  });
});

describe("AzureSpecialProperties", () => {
  let client: AzureSpecialPropertiesClient;
  let dummySubscriptionId: string;
  let clientOptions: AzureSpecialPropertiesClientOptionalParams;
  let mockCredential: TokenCredential;

  beforeEach(() => {
    mockCredential = {
      getToken: async () => {
        return {
          token: "test-token",
          expiresOnTimestamp: 111111
        };
      }
    };

    dummySubscriptionId = "1234-5678-9012-3456";

    clientOptions = {
      // generateClientRequestIdHeader: true
      allowInsecureConnection: true
    };

    client = new AzureSpecialPropertiesClient(
      mockCredential,
      dummySubscriptionId,
      clientOptions
    );
    client.pipeline.removePolicy({ name: bearerTokenAuthenticationPolicyName });
  });

  describe("apiVersionDefault", () => {
    it("should use the default api-version when no api-version parameter is present with getMethodGlobalValid", async () => {
      await client.apiVersionDefault.getMethodGlobalValid(
        responseStatusChecker
      );
    });

    it("should use the default api-version when no api-version parameter is present with getMethodGlobalNotProvidedValid", async () => {
      await client.apiVersionDefault.getMethodGlobalNotProvidedValid(
        responseStatusChecker
      );
    });

    it("should use the default api-version when no api-version parameter is present with getPathGlobalValid", async () => {
      await client.apiVersionDefault.getPathGlobalValid(responseStatusChecker);
    });

    it("should use the default api-version when no api-version parameter is present with getSwaggerGlobalValid", async () => {
      await client.apiVersionDefault.getSwaggerGlobalValid(
        responseStatusChecker
      );
    });
  });

  describe("apiVersionLocal", () => {
    it("should use the api-version parameter instead of the default api-version when it is present, getMethodLocalNull", async () => {
      await client.apiVersionLocal.getMethodLocalNull(responseStatusChecker);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getMethodLocalValid", async () => {
      await client.apiVersionLocal.getMethodLocalValid(responseStatusChecker);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getPathLocalValid", async () => {
      await client.apiVersionLocal.getPathLocalValid(responseStatusChecker);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getSwaggerLocalValid", async () => {
      await client.apiVersionLocal.getSwaggerLocalValid(responseStatusChecker);
    });
  });

  describe("subscriptionInCredentials", () => {
    it("should use the subscriptionId from credentials by default, postMethodGlobalNotProvidedValid", async () => {
      await client.subscriptionInCredentials.postMethodGlobalNotProvidedValid(
        responseStatusChecker
      );
    });
    it("should use the subscriptionId from credentials by default, postMethodGlobalValid", async () => {
      await client.subscriptionInCredentials.postMethodGlobalValid(
        responseStatusChecker
      );
    });
    it("should use the subscriptionId from credentials by default, postPathGlobalValid", async () => {
      await client.subscriptionInCredentials.postPathGlobalValid(
        responseStatusChecker
      );
    });
    it("should use the subscriptionId from credentials by default, postSwaggerGlobalValid", async () => {
      await client.subscriptionInCredentials.postSwaggerGlobalValid(
        responseStatusChecker
      );
    });
  });

  describe("subscriptionInMethod", () => {
    it("should use the subscriptionId parameter when it is present, postMethodLocalNull", async () => {
      try {
        await client.subscriptionInMethod.postMethodLocalNull(undefined as any);
        assert.fail("Expected error to be thrown");
      } catch (error) {
        assert.equal(
          error.message,
          "subscriptionId cannot be null or undefined."
        );
      }
    });

    it("should use the subscriptionId parameter when it is present, postMethodLocalValid", async () => {
      await client.subscriptionInMethod.postMethodLocalValid(
        dummySubscriptionId,
        responseStatusChecker
      );
    });

    it("should use the subscriptionId parameter when it is present, postPathLocalValid", async () => {
      await client.subscriptionInMethod.postPathLocalValid(
        dummySubscriptionId,
        responseStatusChecker
      );
    });

    it("should use the subscriptionId parameter when it is present, postSwaggerLocalValid", async () => {
      await client.subscriptionInMethod.postSwaggerLocalValid(
        dummySubscriptionId,
        responseStatusChecker
      );
    });
  });

  describe("skipUrlEncoding", () => {
    const unencodedPath = "path1/path2/path3";
    it("should skip url encoding when specified for path parameters, getMethodPathValid", async () => {
      await client.skipUrlEncoding.getMethodPathValid(
        unencodedPath,
        responseStatusChecker
      );
    });

    it("should skip url encoding when specified for path parameters, getPathValid", async () => {
      await client.skipUrlEncoding.getPathValid(
        unencodedPath,
        responseStatusChecker
      );
    });

    it("should skip url encoding when specified for path parameters, getSwaggerPathValid", async () => {
      await client.skipUrlEncoding.getSwaggerPathValid(responseStatusChecker);
    });
  });

  describe("skipUrlEncoding", () => {
    const unencodedQuery = "value1&q2=value2&q3=value3";
    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      await client.skipUrlEncoding.getMethodQueryValid(
        unencodedQuery,
        responseStatusChecker
      );
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      await client.skipUrlEncoding.getPathQueryValid(
        unencodedQuery,
        responseStatusChecker
      );
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      await client.skipUrlEncoding.getSwaggerQueryValid(responseStatusChecker);
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      await client.skipUrlEncoding.getMethodQueryNull({
        ...responseStatusChecker,
        q1: undefined
      });
    });
  });

  describe("xMsClientRequestId", () => {
    const validClientId = "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0";

    it("should overwrite x-ms-client-request-id, paramGet", async function() {
      let _response: FullOperationResponse;
      await client.xMsClientRequestId.paramGet(validClientId, {
        ...responseStatusChecker,
        onResponse: r => {
          _response = r;
        }
      });
      assert.equal(_response!.headers.get("x-ms-request-id"), "123");
    });

    it("should overwrite x-ms-client-request-id, get", async function() {
      let _response: FullOperationResponse;
      const options: OperationOptions = {
        requestOptions: {
          customHeaders: {
            "x-ms-client-request-id": validClientId
          }
        },
        ...responseStatusChecker,
        onResponse: r => {
          _response = r;
        }
      };
      await client.xMsClientRequestId.get(options);
      assert.equal(_response!.headers.get("x-ms-request-id"), "123");
    });

    it("should not overwrite x-ms-client-request-id", async () => {
      client = new AzureSpecialPropertiesClient(
        mockCredential,
        dummySubscriptionId,
        {
          ...clientOptions
        }
      );
      client.pipeline.removePolicy({ name: setClientRequestIdPolicyName });
      client.pipeline.removePolicy({
        name: bearerTokenAuthenticationPolicyName
      });

      let _response: FullOperationResponse;
      await client.xMsClientRequestId.get({
        ...responseStatusChecker,
        onResponse: r => {
          _response = r;
        }
      });
      assert.equal(_response!.headers.get("x-ms-request-id"), "123");
    });

    it("should have x-ms-request-id in the err object", async () => {
      const invalidClientId = "123";
      const options: OperationOptions = {
        requestOptions: {
          customHeaders: {
            "x-ms-client-request-id": invalidClientId
          }
        }
      };

      try {
        await client.xMsClientRequestId.get(options);
        assert.fail("Expected error to be thrown");
      } catch (error) {
        const errorHeader = (error as RestError).response?.headers.get(
          "x-ms-request-id"
        );
        assert.equal(errorHeader, "123");
      }
    });
  });

  describe("headers", () => {
    it("should allow custom-named request-id headers to be used", async () => {
      client = new AzureSpecialPropertiesClient(
        mockCredential,
        dummySubscriptionId,
        {
          ...clientOptions
        }
      );
      client.pipeline.removePolicy({
        name: bearerTokenAuthenticationPolicyName
      });

      client.pipeline.removePolicy({ name: setClientRequestIdPolicyName });
      let _response: FullOperationResponse;

      const result = await client.header.customNamedRequestId(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0",
        {
          ...responseStatusChecker,
          onResponse: r => {
            _response = r;
          }
        }
      );

      assert.isUndefined(
        _response!.request.headers.get("x-ms-client-request-id")
      );

      assert.equal(result.fooRequestId, "123");
    });

    it("should allow custom-named request-id headers to be used with parameter grouping", async () => {
      const testClient = new AzureSpecialPropertiesClient(
        mockCredential,
        dummySubscriptionId,
        {
          ...clientOptions
        }
      );
      testClient.pipeline.removePolicy({
        name: bearerTokenAuthenticationPolicyName
      });

      testClient.pipeline.removePolicy({ name: setClientRequestIdPolicyName });
      let _response: FullOperationResponse;
      const result = await testClient.header.customNamedRequestIdParamGrouping(
        {
          fooClientRequestId: "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
        },
        {
          ...responseStatusChecker,
          onResponse: r => {
            _response = r;
          }
        }
      );
      assert.isUndefined(
        _response!.request.headers.get("x-ms-client-request-id")
      );
      assert.equal(result.fooRequestId, "123");
    });

    it("should allow custom-named request-id headers to be used in head operations", async () => {
      const result = await client.header.customNamedRequestIdHead(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0",
        responseStatusChecker
      );
      assert.equal(result.fooRequestId, "123");
    });
  });

  describe("odata", () => {
    it("should support OData filter", async () => {
      var options = {
        ...responseStatusChecker,
        filter: "id gt 5 and name eq 'foo'",
        top: 10,
        orderby: "id"
      };
      await client.odata.getWithFilter(options);
    });
  });

  describe("credentials.environment property", function() {
    it("should be overridden by a user-specified base URL", async () => {
      let _response: FullOperationResponse;
      const client = new AzureSpecialPropertiesClient(
        mockCredential,
        dummySubscriptionId,
        {
          httpClient: {
            sendRequest: req =>
              Promise.resolve({
                status: 200,
                headers: createHttpHeaders(),
                request: req
              })
          },
          endpoint: "http://usethisone.com"
        }
      );
      client.pipeline.removePolicy({
        name: bearerTokenAuthenticationPolicyName
      });
      await client.apiVersionDefault.getMethodGlobalValid({
        onResponse: r => {
          _response = r;
        }
      });
      assert.isTrue(_response!.request.url.startsWith("http://usethisone.com"));
    });
  });

  describe("customize api version", async () => {
    it("should be able to customize api version from client", async () => {
      let _response: FullOperationResponse;
      const client = new AzureSpecialPropertiesClient(
        mockCredential,
        dummySubscriptionId,
        {
          httpClient: {
            sendRequest: req =>
              Promise.resolve({
                status: 200,
                headers: createHttpHeaders(),
                request: req
              })
          },
          endpoint: "http://usethisone.com",
          apiVersion: "2011-05-18"
        }
      );
      client.pipeline.removePolicy({
        name: bearerTokenAuthenticationPolicyName
      });
      await client.apiVersionDefault.getMethodGlobalValid({
        onResponse: r => {
          assert.isTrue(r!.request.url.indexOf("2011-05-18") > -1);
        }
      });
      
    });
  })
});
