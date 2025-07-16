import StatusCodeRangeClientFactory, {
  StatusCodeRangeClient
} from "./generated/response/status-code-range/src/index.js";
import { assert } from "chai";

describe("Response Status Code Range Azure RLC Client", () => {
  let client: StatusCodeRangeClient;

  beforeEach(() => {
    client = StatusCodeRangeClientFactory("http://localhost:3000", {
      allowInsecureConnection: true
    });
  });

  it("should handle error response with status code in range (494)", async () => {
    try {
      await client
        .path("/response/status-code-range/error-response-status-code-in-range")
        .get();
      assert.fail("Should have thrown an error");
    } catch (error: any) {
      assert.strictEqual(error.statusCode, 494);
      assert.strictEqual(error.details.code, "request-header-too-large");
      assert.strictEqual(error.details.message, "Request header too large");
    }
  });

  it("should handle error response with status code 404", async () => {
    try {
      await client
        .path("/response/status-code-range/error-response-status-code-404")
        .get();
      assert.fail("Should have thrown an error");
    } catch (error: any) {
      assert.strictEqual(error.statusCode, 404);
      assert.strictEqual(error.details.code, "not-found");
      assert.strictEqual(error.details.resourceId, "resource1");
    }
  });
});
