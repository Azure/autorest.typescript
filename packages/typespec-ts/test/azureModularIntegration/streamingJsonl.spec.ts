import { assert, describe, it, beforeEach } from "vitest";
import { JsonlClient } from "./generated/streaming/jsonl/src/index.js";

describe("StreamingJsonl", () => {
  let client: JsonlClient;

  beforeEach(() => {
    client = new JsonlClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  // Emitter limitation: stream type not supported
  it.skip("Streaming_Jsonl_Basic_send", async () => {
    // The send operation uses a __PLACEHOLDER__ type for the stream parameter
    // which is an emitter limitation - cannot test until resolved
  });

  it("Streaming_Jsonl_Basic_receive", async () => {
    const result = await client.basic.receive();
    assert.ok(result);
    assert.ok(result.body);
  });
});
