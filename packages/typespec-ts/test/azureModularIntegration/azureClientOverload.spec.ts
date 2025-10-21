import { assert } from "chai";
import { OverloadClient } from "./generated/client/overload/src/index.js";
describe("Client Overload Modular Client", () => {
  let client: OverloadClient;

  beforeEach(() => {
    client = new OverloadClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should list all resources", async () => {
    const result = await client.list();
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0].id, "1");
    assert.strictEqual(result[0].name, "foo");
    assert.strictEqual(result[0].scope, "car");
    assert.strictEqual(result[1].id, "2");
    assert.strictEqual(result[1].name, "bar");
    assert.strictEqual(result[1].scope, "bike");
  });

  it("should list resources by scope", async () => {
    const result = await client.listByScope("car");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].id, "1");
    assert.strictEqual(result[0].name, "foo");
    assert.strictEqual(result[0].scope, "car");
  });
});
