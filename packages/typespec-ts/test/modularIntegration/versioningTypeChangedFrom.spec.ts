import { assert } from "chai";
import { TypeChangedFromClient } from "./generated/versioning/typeChangedFrom/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningTypeChangedFrom Rest Client", () => {
  let client: TypeChangedFromClient;

  beforeEach(() => {
    client = new TypeChangedFromClient(`http://localhost:${port}`, "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning typeChangedFrom test", async () => {
    const result = await client.test({
      prop: "foo",
      changedProp: "bar"
    }, "baz");
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.changedProp, "bar");
  });
});
