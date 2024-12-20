import { assert } from "chai";
import { MadeOptionalClient } from "./generated/versioning/madeOptional/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningMadeOptionalClient Rest Client", () => {
  let client: MadeOptionalClient;

  beforeEach(() => {
    client = new MadeOptionalClient(`http://localhost:${port}`, "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning madeOptional test", async () => {
    const result = await client.test({ prop: "foo" });
    assert.strictEqual(result.prop, "foo");
  });
});
