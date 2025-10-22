import { assert } from "chai";
import NamingEnumConflictClientFactory, {
  NamingEnumConflictClient
} from "./generated/client/naming/enum-conflict/src/index.js";

describe("ClientNamingEnumConflict Rest Client", () => {
  let client: NamingEnumConflictClient;

  beforeEach(() => {
    client = NamingEnumConflictClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with first operation", async () => {
    const result = await client
      .path("/client/naming/enum-conflict/first")
      .post({
        body: { status: "active", name: "test" }
      });
    assert.strictEqual(result.status, "200");
    if (result.status === "200") {
      assert.strictEqual(result.body.status, "active");
      assert.strictEqual(result.body.name, "test");
    }
  });

  it("should work with second operation", async () => {
    const result = await client
      .path("/client/naming/enum-conflict/second")
      .post({
        body: { status: "running", description: "test description" }
      });
    assert.strictEqual(result.status, "200");
    if (result.status === "200") {
      assert.strictEqual(result.body.status, "running");
      assert.strictEqual(result.body.description, "test description");
    }
  });
});
