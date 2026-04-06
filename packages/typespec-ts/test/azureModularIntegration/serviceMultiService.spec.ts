import { assert, describe, it, beforeEach } from "vitest";
import { Combined } from "./generated/service/multi-service/src/index.js";

describe("Service MultiService", () => {
  let client: Combined;

  beforeEach(() => {
    client = new Combined({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  it("should test ServiceA Foo", async () => {
    const result = await client.foo.test();
    assert.isUndefined(result);
  });

  it("should test ServiceB Bar", async () => {
    const result = await client.bar.test();
    assert.isUndefined(result);
  });
});
