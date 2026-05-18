import { assert, describe, it, beforeEach } from "vitest";
import { ConditionalRequestClient } from "./generated/azure/special-headers/conditional-request/src/index.js";

describe("Azure_SpecialHeaders_ConditionalRequest", () => {
  let client: ConditionalRequestClient;

  beforeEach(() => {
    client = new ConditionalRequestClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should send the If-Match header", async () => {
    await client.postIfMatch({
      ifMatch: `"valid"`
    });
    assert.ok(true);
  });

  it("should send the If-None-Match header", async () => {
    await client.postIfNoneMatch({
      ifNoneMatch: `"invalid"`
    });
    assert.ok(true);
  });

  it("should send the custom x-ms-blob-if-match header", async () => {
    await client.postCustomIfMatch({
      ifMatch: `"valid"`
    });
    assert.ok(true);
  });

  it("should send the custom x-ms-blob-if-none-match header", async () => {
    await client.postCustomIfNoneMatch({
      ifNoneMatch: `"invalid"`
    });
    assert.ok(true);
  });
});
