import VersioningTypeChangedFromClientFactory, {
  VersioningTypeChangedFromClient
} from "./generated/versioning/typeChangedFrom/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningTypeChangedFrom Rest Client", () => {
  let client: VersioningTypeChangedFromClient;

  beforeEach(() => {
    client = VersioningTypeChangedFromClientFactory(
      `http://localhost:${port}`,
      "v2",
      {
        allowInsecureConnection: true
      }
    );
  });

  it("versioning typeChangedFrom test", async () => {
    const result = await client.path("/test").post({
      body: { prop: "foo", changedProp: "bar" },
      queryParameters: { param: "baz" }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
    assert.strictEqual(result.body.changedProp, "bar");
  });
});
