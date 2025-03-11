import { assert } from "chai";
import { TypeChangedFromClient } from "./generated/versioning/typeChangedFrom/src/index.js";

describe("VersioningTypeChangedFrom Rest Client", () => {
  let client: TypeChangedFromClient;

  beforeEach(() => {
    client = new TypeChangedFromClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning typeChangedFrom test", async () => {
    const result = await client.test(
      {
        prop: "foo",
        changedProp: "bar"
      },
      "baz"
    );
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.changedProp, "bar");
  });
});
