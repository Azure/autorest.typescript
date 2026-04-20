import { assert, describe, it, beforeEach } from "vitest";

import { ClientDefaultValueClient } from "./generated/azure/client-generator-core/client-default-value/src/index.js";

describe("Azure ClientGeneratorCore ClientDefaultValue Client", () => {
  let client: ClientDefaultValueClient;

  beforeEach(() => {
    client = new ClientDefaultValueClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get operation parameter with default values", async () => {
    await client.getOperationParameter("test");
  });

  it("should get path parameter with default segment", async () => {
    await client.getPathParameter("default-segment1", "segment2");
  });

  it("should put model property with default values", async () => {
    const result = await client.putModelProperty({ name: "test" });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.timeout, 30);
    assert.strictEqual(result.tier, "standard");
    assert.strictEqual(result.retry, true);
  });

  it("should get header parameter with default values", async () => {
    await client.getHeaderParameter();
  });
});
