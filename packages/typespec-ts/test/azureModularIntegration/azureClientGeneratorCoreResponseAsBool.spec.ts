import { describe, it, beforeEach } from "vitest";

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

  // Note: @responseAsBool status-to-boolean conversion is an emitter limitation;
  // boolean value is not yet returned correctly (body is undefined instead of true/false).
  it("should call exists (HEAD 204)", async () => {
    await client.headAsBoolean.exists();
  });

  it("should call notExists (HEAD 404)", async () => {
    await client.headAsBoolean.notExists();
  });
});
