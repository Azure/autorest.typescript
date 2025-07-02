import { assert } from "chai";
import { StatusCodeRangeClient } from "./generated/response/status-code-range/src/index.js";

describe("Response Status Code Range Azure Modular Client", () => {
  let client: StatusCodeRangeClient;

  beforeEach(() => {
    client = new StatusCodeRangeClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should handle error response with status code in range (494)", async () => {
    try {
      await client.errorResponseStatusCodeInRange();
      assert.fail("Should have thrown an error");
    } catch (error: any) {
      assert.strictEqual(error.statusCode, 494);
      assert.strictEqual(error.details.code, "request-header-too-large");
      assert.strictEqual(error.details.message, "Request header too large");
    }
  });

  it("should handle error response with status code 404", async () => {
    try {
      await client.errorResponseStatusCode404();
      assert.fail("Should have thrown an error");
    } catch (error: any) {
      assert.strictEqual(error.statusCode, 404);
      assert.strictEqual(error.details.code, "not-found");
      assert.strictEqual(error.details.resourceId, "resource1");
    }
  });
});
