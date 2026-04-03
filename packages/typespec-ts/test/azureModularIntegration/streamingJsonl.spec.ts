import { assert, describe, it, beforeEach } from "vitest";
import { JsonlClient } from "./generated/streaming/jsonl/src/index.js";

describe("Streaming Jsonl Client", () => {
  let client: JsonlClient;

  beforeEach(() => {
    client = new JsonlClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  it("should receive jsonl stream", async () => {
    const result = await client.basic.receive();
    assert.ok(result.body);
    const text = new TextDecoder().decode(result.body);
    assert.strictEqual(text, '{"desc": "one"}\n{"desc": "two"}\n{"desc": "three"}');
  });

  it("should send jsonl stream", async () => {
    const data = new TextEncoder().encode('{"desc": "one"}\n{"desc": "two"}\n{"desc": "three"}');
    // Using `as any` as a workaround for emitter bug: stream type is unresolved (__PLACEHOLDER_o53__)
    const result = await client.basic.send(data as any);
    assert.isUndefined(result);
  });
});
