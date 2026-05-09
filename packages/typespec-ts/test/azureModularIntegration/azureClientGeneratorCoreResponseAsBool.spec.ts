import { describe, it, beforeEach, assert } from "vitest";

import { ResponseAsBoolClient } from "./generated/azure/client-generator-core/response-as-bool/src/index.js";

describe("Azure ClientGeneratorCore ResponseAsBool Client", () => {
  let client: ResponseAsBoolClient;

  beforeEach(() => {
    client = new ResponseAsBoolClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should call exists (HEAD 204)", async () => {
    const result = await client.headAsBoolean.exists();
    assert.strictEqual(result.body, true);
  });

  it("should call notExists (HEAD 404)", async () => {
    const result = await client.headAsBoolean.notExists();
    assert.strictEqual(result.body, false);
  });
});
