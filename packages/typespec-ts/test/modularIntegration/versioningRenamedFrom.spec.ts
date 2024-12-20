import { assert } from "chai";
import { RenamedFromClient } from "./generated/versioning/renamedFrom/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningRenamedFrom Rest Client", () => {
  let client: RenamedFromClient;

  beforeEach(() => {
    client = new RenamedFromClient(`http://localhost:${port}`, "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning RenamedFrom ewOp test", async () => {
    const result = await client.newOp("bar", {
      newProp: "foo",
      enumProp: "newEnumMember",
      unionProp: 10
    });
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
