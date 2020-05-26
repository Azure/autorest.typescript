import { AzureSpecialPropertiesClient } from "./generated/azureSpecialProperties/src/azureSpecialPropertiesClient";
import { assert } from "chai";
import {
  OperationOptions,
  RestError,
  ServiceClientCredentials,
  BasicAuthenticationCredentials,
  TokenCredential,
  HttpHeaders
} from "@azure/core-http";
import { AzureSpecialPropertiesClientOptionalParams } from "./generated/azureSpecialProperties/src/models";
describe("AzureSpecialProperties", () => {
  let client: AzureSpecialPropertiesClient;
  let dummySubscriptionId: string;
  let clientOptions: AzureSpecialPropertiesClientOptionalParams;
  let dummyCredentials: ServiceClientCredentials | TokenCredential;

  beforeEach(() => {
    dummySubscriptionId = "1234-5678-9012-3456";

    clientOptions = {
      generateClientRequestIdHeader: true
    };

    dummyCredentials = new BasicAuthenticationCredentials("", "");

    client = new AzureSpecialPropertiesClient(
      dummyCredentials,
      dummySubscriptionId,
      clientOptions
    );
  });

  describe("apiVersionDefault", () => {
    it("should use the default api-version when no api-version parameter is present with getMethodGlobalValid", async () => {
      let result = await client.apiVersionDefault.getMethodGlobalValid();
      assert.equal(result._response.status, 200);
    });

    it("should use the default api-version when no api-version parameter is present with getMethodGlobalNotProvidedValid", async () => {
      let result = await client.apiVersionDefault.getMethodGlobalNotProvidedValid();
      assert.equal(result._response.status, 200);
    });

    it("should use the default api-version when no api-version parameter is present with getPathGlobalValid", async () => {
      let result = await client.apiVersionDefault.getPathGlobalValid();
      assert.equal(result._response.status, 200);
    });

    it("should use the default api-version when no api-version parameter is present with getSwaggerGlobalValid", async () => {
      let result = await client.apiVersionDefault.getSwaggerGlobalValid();
      assert.equal(result._response.status, 200);
    });
  });

  describe("apiVersionLocal", () => {
    it("should use the api-version parameter instead of the default api-version when it is present, getMethodLocalNull", async () => {
      let result = await client.apiVersionLocal.getMethodLocalNull(undefined);
      assert.equal(result._response.status, 200);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getMethodLocalValid", async () => {
      let result = await client.apiVersionLocal.getMethodLocalValid();
      assert.equal(result._response.status, 200);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getPathLocalValid", async () => {
      let result = await client.apiVersionLocal.getPathLocalValid();
      assert.equal(result._response.status, 200);
    });

    it("should use the api-version parameter instead of the default api-version when it is present, getSwaggerLocalValid", async () => {
      let result = await client.apiVersionLocal.getSwaggerLocalValid();
      assert.equal(result._response.status, 200);
    });
  });

  describe("subscriptionInCredentials", () => {
    it("should use the subscriptionId from credentials by default, postMethodGlobalNotProvidedValid", async () => {
      let result = await client.subscriptionInCredentials.postMethodGlobalNotProvidedValid();
      assert.equal(result._response.status, 200);
    });
    it("should use the subscriptionId from credentials by default, postMethodGlobalValid", async () => {
      let result = await client.subscriptionInCredentials.postMethodGlobalValid();
      assert.equal(result._response.status, 200);
    });
    it("should use the subscriptionId from credentials by default, postPathGlobalValid", async () => {
      let result = await client.subscriptionInCredentials.postPathGlobalValid();
      assert.equal(result._response.status, 200);
    });
    it("should use the subscriptionId from credentials by default, postSwaggerGlobalValid", async () => {
      let result = await client.subscriptionInCredentials.postSwaggerGlobalValid();
      assert.equal(result._response.status, 200);
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
      let result = await client.subscriptionInMethod.postMethodLocalValid(
        dummySubscriptionId
      );
      assert.equal(result._response.status, 200);
    });

    it("should use the subscriptionId parameter when it is present, postPathLocalValid", async () => {
      let result = await client.subscriptionInMethod.postPathLocalValid(
        dummySubscriptionId
      );
      assert.equal(result._response.status, 200);
    });

    it("should use the subscriptionId parameter when it is present, postSwaggerLocalValid", async () => {
      let result = await client.subscriptionInMethod.postSwaggerLocalValid(
        dummySubscriptionId
      );
      assert.equal(result._response.status, 200);
    });
  });

  describe("skipUrlEncoding", () => {
    const unencodedPath = "path1/path2/path3";
    it("should skip url encoding when specified for path parameters, getMethodPathValid", async () => {
      let result = await client.skipUrlEncoding.getMethodPathValid(
        unencodedPath
      );
      assert.equal(result._response.status, 200);
    });

    it("should skip url encoding when specified for path parameters, getPathValid", async () => {
      let result = await client.skipUrlEncoding.getPathValid(unencodedPath);
      assert.equal(result._response.status, 200);
    });

    it("should skip url encoding when specified for path parameters, getSwaggerPathValid", async () => {
      let result = await client.skipUrlEncoding.getSwaggerPathValid();
      assert.equal(result._response.status, 200);
    });
  });

  describe("skipUrlEncoding", () => {
    const unencodedQuery = "value1&q2=value2&q3=value3";
    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      let result = await client.skipUrlEncoding.getMethodQueryValid(
        unencodedQuery
      );
      assert.equal(result._response.status, 200);
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      let result = await client.skipUrlEncoding.getPathQueryValid(
        unencodedQuery
      );
      assert.equal(result._response.status, 200);
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      let result = await client.skipUrlEncoding.getSwaggerQueryValid();
      assert.equal(result._response.status, 200);
    });

    it("should skip url encoding when specified for query parameters, getMethodQueryValid", async () => {
      let result = await client.skipUrlEncoding.getMethodQueryNull({
        q1: undefined
      });
      assert.equal(result._response.status, 200);
    });
  });

  describe("xMsClientRequestId", () => {
    const validClientId = "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0";

    it("should overwrite x-ms-client-request-id, paramGet", async function() {
      let result = await client.xMsClientRequestId.paramGet(validClientId);
      assert.equal(result._response.status, 200);
      assert.equal(result._response.headers.get("x-ms-request-id"), "123");
    });

    it("should overwrite x-ms-client-request-id, get", async function() {
      const options: OperationOptions = {
        requestOptions: {
          customHeaders: {
            "x-ms-client-request-id": validClientId
          }
        }
      };
      let result = await client.xMsClientRequestId.get(options);
      assert.equal(result._response.status, 200);
      assert.equal(result._response.headers.get("x-ms-request-id"), "123");
    });

    it("should not overwrite x-ms-client-request-id", async () => {
      client = new AzureSpecialPropertiesClient(
        dummyCredentials,
        dummySubscriptionId,
        {
          ...clientOptions,
          generateClientRequestIdHeader: false
        }
      );

      const result = await client.xMsClientRequestId.get();
      assert.equal(result._response.status, 200);
      assert.equal(result._response.headers.get("x-ms-request-id"), "123");
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
        dummyCredentials,
        dummySubscriptionId,
        {
          ...clientOptions,
          generateClientRequestIdHeader: false
        }
      );
      const result = await client.header.customNamedRequestId(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      );

      assert.equal(result._response.status, 200);

      assert.isUndefined(
        result._response.request.headers.get("x-ms-client-request-id")
      );

      assert.equal(result.fooRequestId, "123");
    });

    it("should allow custom-named request-id headers to be used with parameter grouping", async () => {
      const testClient = new AzureSpecialPropertiesClient(
        dummyCredentials,
        dummySubscriptionId,
        {
          ...clientOptions,
          generateClientRequestIdHeader: false
        }
      );
      const result = await testClient.header.customNamedRequestIdParamGrouping({
        fooClientRequestId: "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      });
      assert.equal(result._response.status, 200);
      assert.isUndefined(
        result._response.request.headers.get("x-ms-client-request-id")
      );
      assert.equal(result.fooRequestId, "123");
    });

    it("should allow custom-named request-id headers to be used in head operations", async () => {
      const result = await client.header.customNamedRequestIdHead(
        "9C4D50EE-2D56-4CD3-8152-34347DC9F2B0"
      );
      assert.equal(result._response.status, 200);
      assert.equal(result.fooRequestId, "123");
    });
  });

  describe("odata", () => {
    it("should support OData filter", async () => {
      var options = {
        filter: "id gt 5 and name eq 'foo'",
        top: 10,
        orderby: "id"
      };
      const result = await client.odata.getWithFilter(options);
      assert.equal(result._response.status, 200);
    });
  });

  describe("credentials.environment property", function() {
    it("should be overridden by a user-specified base URL", async () => {
      const client = new AzureSpecialPropertiesClient(
        dummyCredentials,
        dummySubscriptionId,
        {
          httpClient: {
            sendRequest: req =>
              Promise.resolve({
                status: 200,
                headers: new HttpHeaders(),
                request: req
              })
          },
          endpoint: "http://usethisone.com"
        }
      );
      const response = await client.apiVersionDefault.getMethodGlobalValid();
      assert.isTrue(
        response._response.request.url.startsWith("http://usethisone.com")
      );
    });
  });
});
