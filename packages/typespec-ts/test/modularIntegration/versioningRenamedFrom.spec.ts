import { assert } from "chai";
import { RenamedFromClient } from "./generated/versioning/renamedFrom/src/index.js";

describe("VersioningRenamedFrom Rest Client", () => {
  let client: RenamedFromClient;

  beforeEach(() => {
    client = new RenamedFromClient("http://localhost:3002", {
      allowInsecureConnection: true
    });
  });

  it("versioning RenamedFrom ewOp test", async () => {
    const result = await client.newOp(
      {
        newProp: "foo",
        enumProp: "newEnumMember",
        unionProp: 10
      },
      "bar"
    );
    assert.strictEqual(result.newProp, "foo");
    assert.strictEqual(result.enumProp, "newEnumMember");
    assert.strictEqual(result.unionProp, 10);
  });

  it("versioning renamedFrom newInterface test", async () => {
    const result = await client.newOpInNewInterface({
      newProp: "foo",
      enumProp: "newEnumMember",
      unionProp: 10
    });
    assert.strictEqual(result.newProp, "foo");
    assert.strictEqual(result.enumProp, "newEnumMember");
    assert.strictEqual(result.unionProp, 10);
  });
});
