import { assert, describe, it, beforeEach } from "vitest";

import { Combined } from "./generated/service/multi-service/src/index.js";

describe("Service MultiService Client", () => {
  let client: Combined;

  beforeEach(() => {
    client = new Combined({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("should call ServiceA Foo test", async () => {
    await client.foo.test();
  });

  it("should call ServiceB Bar test", async () => {
    await client.bar.test();
  });
});
