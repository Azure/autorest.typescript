import VersioningReturnTypeChangedFromClientFactory, {
  VersioningReturnTypeChangedFromClient
} from "./generated/versioning/returnTypeChangedFrom/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningReturnTypeChangedFrom Rest Client", () => {
  let client: VersioningReturnTypeChangedFromClient;

  beforeEach(() => {
    client = VersioningReturnTypeChangedFromClientFactory(
      `http://localhost:${port}`,
      "v2",
      {
        allowInsecureConnection: true
      }
    );
  });

  it("versioning returnTypeChangedFrom test", async () => {
    const result = await client.path("/test").post({
      body: "test",
      contentType: "text/plain"
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "test");
  });
});
