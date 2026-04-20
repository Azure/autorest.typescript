import { assert, describe, it, beforeEach } from "vitest";
import { RenamedOperationClient } from "./generated/client/structure/renamed-operation/src/index.js";

describe("Client Structure Renamed-Operation Rest Client", () => {
  let client: RenamedOperationClient;

  beforeEach(() => {
    client = new RenamedOperationClient(
      "http://localhost:3002",
      "renamed-operation",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should call operation one correctly", async () => {
    const result = await client.renamedOne();
    assert.strictEqual(result, undefined);
  });

  it("should call operation two correctly", async () => {
    const result = await client.renamedTwo();
    assert.strictEqual(result, undefined);
  });

  it("should call operation three correctly", async () => {
    const result = await client.renamedThree();
    assert.strictEqual(result, undefined);
  });

  it("should call operation four correctly", async () => {
    const result = await client.renamedFour();
    assert.strictEqual(result, undefined);
  });

  it("should call operation five correctly", async () => {
    const result = await client.renamedFive();
    assert.strictEqual(result, undefined);
  });

  it("should call operation six correctly", async () => {
    const result = await client.renamedSix();
    assert.strictEqual(result, undefined);
  });
});
