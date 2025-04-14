import { assert } from "chai";
import { RemovedClient } from "./generated/versioning/removed/v2/src/index.js";

describe("VersioningRemoved Rest Client", () => {
  let client: RemovedClient;

  beforeEach(() => {
    client = new RemovedClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning removed test v2", async () => {
    const result = await client.v2({
      prop: "foo",
      enumProp: "enumMemberV2",
      unionProp: "bar"
    });
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.enumProp, "enumMemberV2");
    assert.strictEqual(result.unionProp, "bar");
  });

  it("versioning removed test modelV3_V2", async () => {
    const result = await client.modelV3({
      id: "123",
      enumProp: "enumMemberV1"
    });
    assert.strictEqual(result.id, "123");
    assert.strictEqual(result.enumProp, "enumMemberV1");
  });
});
