import { assert } from "chai";
import { MadeOptionalClient } from "./generated/versioning/madeOptional/src/index.js";

describe("VersioningMadeOptionalClient Rest Client", () => {
  let client: MadeOptionalClient;

  beforeEach(() => {
    client = new MadeOptionalClient("http://localhost:3002", {
      version: "v2",
      allowInsecureConnection: true
    });
  });

  it("versioning madeOptional test", async () => {
    const result = await client.test({ prop: "foo" });
    assert.strictEqual(result.prop, "foo");
  });
});
