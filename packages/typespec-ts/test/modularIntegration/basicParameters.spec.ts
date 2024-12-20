import { BasicClient } from "./generated/parameters/basic/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("BasicClient Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      allowInsecureConnection: true,
      endpoint: `http://localhost:${port}`
    });
  });

  it("basic parameters explicit-body simple", async () => {
    const result = await client.explicitBody.simple({ name: "foo" });
    assert.isUndefined(result);
  });

  it("basic parameters implicit-body simple", async () => {
    const result = await client.implicitBody.simple("foo");
    assert.isUndefined(result);
  });
});
