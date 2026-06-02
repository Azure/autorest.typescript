import { assert, describe, it, beforeEach } from "vitest";
import { ExactNameClient } from "./generated/azure/client-generator-core/exact-name/src/index.js";

describe("Azure ClientGeneratorCore ExactName Client", () => {
  let client: ExactNameClient;

  beforeEach(() => {
    client = new ExactNameClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should send and receive exact model name", async () => {
    const result = await client.model.send({ name: "test" });
    assert.strictEqual(result.name, "test");
  });

  it("should send and receive exact property name", async () => {
    const result = await client.property.send({ myName: "test" });
    assert.strictEqual(result.myName, "test");
  });
});
