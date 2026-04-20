import { assert, describe, it, beforeEach } from "vitest";
import { StatusCodeRangeClient } from "./generated/response/status-code-range/src/index.js";

describe("ResponseStatusCodeRange", () => {
  let client: StatusCodeRangeClient;

  beforeEach(() => {
    client = new StatusCodeRangeClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("Response_StatusCodeRange_errorResponseStatusCode404", async () => {
    try {
      await client.errorResponseStatusCode404();
      assert.fail("Expected an error to be thrown");
    } catch (err) {
      assert.ok(err);
    }
  });

  it("Response_StatusCodeRange_errorResponseStatusCodeInRange", async () => {
    try {
      await client.errorResponseStatusCodeInRange();
      assert.fail("Expected an error to be thrown");
    } catch (err) {
      assert.ok(err);
    }
  });
});
