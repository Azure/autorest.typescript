import { assert } from "chai";
import { ReturnTypeChangedFromClient } from "./generated/versioning/returnTypeChangedFrom/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningReturnTypeChangedFrom Rest Client", () => {
  let client: ReturnTypeChangedFromClient;

  beforeEach(() => {
    client = new ReturnTypeChangedFromClient(`http://localhost:${port}`, "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning returnTypeChangedFrom test", async () => {
    const result = await client.test("test", {
      requestOptions: {
        headers: { "content-type": "text/plain" }
      }
    });
    assert.strictEqual(result, "test");
  });
});
