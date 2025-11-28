import { assert } from "chai";
import { ConditionalRequestClient } from "./generated/special-headers/conditional-request/src/index.js";

describe("Conditional Request Client", () => {
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

  it("should send the If-Modified-Since header", async () => {
    await client.headIfModifiedSince({
      ifModifiedSince: new Date("Fri, 26 Aug 2022 14:38:00 GMT")
    });
    assert.ok(true);
  });

  it("should send the If-Unmodified-Since header", async () => {
    await client.postIfUnmodifiedSince({
      ifUnmodifiedSince: new Date("Fri, 26 Aug 2022 14:38:00 GMT")
    });
    assert.ok(true);
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
});
