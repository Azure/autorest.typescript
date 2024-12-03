import { assert } from "chai";
import { RemovedClient } from "./generated/versioning/removed/src/index.js";

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
});
