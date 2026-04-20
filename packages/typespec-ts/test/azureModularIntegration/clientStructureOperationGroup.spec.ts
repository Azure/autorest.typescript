import { assert, describe, it, beforeEach } from "vitest";
import {
  FirstClient,
  SecondClient
} from "./generated/client/structure/client-operation-group/src/index.js";

describe("Client Structure ClientOperationGroup - FirstClient", () => {
  let client: FirstClient;

  beforeEach(() => {
    client = new FirstClient(
      "http://localhost:3002",
      "client-operation-group",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should call operation one correctly", async () => {
    const result = await client.one();
    assert.strictEqual(result, undefined);
  });

  it("should call operation two correctly", async () => {
    const result = await client.two();
    assert.strictEqual(result, undefined);
  });

  it("should call operation three correctly", async () => {
    const result = await client.three();
    assert.strictEqual(result, undefined);
  });

  it("should call operation four correctly", async () => {
    const result = await client.four();
    assert.strictEqual(result, undefined);
  });
});

describe("Client Structure AnotherClientOperationGroup - SecondClient", () => {
  let client: SecondClient;

  beforeEach(() => {
    client = new SecondClient(
      "http://localhost:3002",
      "client-operation-group",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should call operation five correctly", async () => {
    const result = await client.five();
    assert.strictEqual(result, undefined);
  });

  it("should call operation six correctly", async () => {
    const result = await client.six();
    assert.strictEqual(result, undefined);
  });
});
