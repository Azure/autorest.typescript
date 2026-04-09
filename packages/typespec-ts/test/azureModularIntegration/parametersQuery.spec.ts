import { assert, describe, it, beforeEach } from "vitest";

import { QueryClient } from "./generated/parameters/query/src/index.js";

describe("Parameters Query Client", () => {
  let client: QueryClient;

  beforeEach(() => {
    client = new QueryClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("should post with constant query parameter", async () => {
    await client.constant.post();
  });
});
