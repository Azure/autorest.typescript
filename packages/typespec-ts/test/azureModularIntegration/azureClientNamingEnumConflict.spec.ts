import { assert } from "chai";
import { EnumConflictClient } from "./generated/client/naming-enum-conflict/src/index.js";

describe("ClientNamingEnumConflict Modular Client", () => {
  let client: EnumConflictClient;

  beforeEach(() => {
    client = new EnumConflictClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with first operation", async () => {
    const result = await client.firstOperations.first({
      status: "active",
      name: "test"
    });
    assert.strictEqual(result.status, "active");
    assert.strictEqual(result.name, "test");
  });

  it("should work with second operation", async () => {
    const result = await client.secondOperations.second({
      status: "running",
      description: "test description"
    });
    assert.strictEqual(result.status, "running");
    assert.strictEqual(result.description, "test description");
  });
});
