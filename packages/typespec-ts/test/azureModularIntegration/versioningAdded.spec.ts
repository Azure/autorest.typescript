import { assert } from "chai";
import { AddedClient } from "./generated/versioning/added/src/index.js";

describe("VersioningAdded Rest Client", () => {
  let client: AddedClient;

  beforeEach(() => {
    client = new AddedClient("http://localhost:3002", {
      version: "v2",
      allowInsecureConnection: true
    });
  });

  it("versioning added v1", async () => {
    const result = await client.v1(
      {
        prop: "foo",
        enumProp: "enumMemberV2",
        unionProp: 10
      },
      "bar"
    );
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.enumProp, "enumMemberV2");
    assert.strictEqual(result.unionProp, 10);
  });

  it("versioning added v2", async () => {
    const result = await client.v2({
      prop: "foo",
      enumProp: "enumMember",
      unionProp: "bar"
    });
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.enumProp, "enumMember");
    assert.strictEqual(result.unionProp, "bar");
  });

  it("versioning added interface v2", async () => {
    const result = await client.v2InInterface({
      prop: "foo",
      enumProp: "enumMember",
      unionProp: "bar"
    });
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.enumProp, "enumMember");
    assert.strictEqual(result.unionProp, "bar");
  });
});
