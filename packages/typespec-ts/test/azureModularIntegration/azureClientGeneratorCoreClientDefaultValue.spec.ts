import { assert, describe, it, beforeEach } from "vitest";
import { ClientDefaultValueClient } from "./generated/azure/client-generator-core/client-default-value/src/index.js";

describe("Azure ClientGeneratorCore ClientDefaultValue", () => {
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

  it("should put model property", async () => {
    const result = await client.putModelProperty({ name: "test" });
    assert.deepEqual(result, {
      name: "test",
      timeout: 30,
      tier: "standard",
      retry: true
    });
  });

  it("should get operation parameter", async () => {
    const result = await client.getOperationParameter("test");
    assert.isUndefined(result);
  });

  it("should get path parameter", async () => {
    const result = await client.getPathParameter(
      "default-segment1",
      "segment2"
    );
    assert.isUndefined(result);
  });

  it("should get header parameter", async () => {
    const result = await client.getHeaderParameter({
      accept: "application/json;odata.metadata=none",
      customHeader: "default-value"
    });
    assert.isUndefined(result);
  });
});
