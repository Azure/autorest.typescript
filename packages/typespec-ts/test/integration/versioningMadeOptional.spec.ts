import VersioningMadeOptionalClientFactory, {
  VersioningMadeOptionalClient
} from "./generated/versioning/madeOptional/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("VersioningMadeOptional Rest Client", () => {
  let client: VersioningMadeOptionalClient;

  beforeEach(() => {
    client = VersioningMadeOptionalClientFactory(
      `http://localhost:${port}`,
      "v2",
      {
        allowInsecureConnection: true
      }
    );
  });

  it("versioning madeOptional test", async () => {
    const result = await client.path("/test").post({
      body: {
        prop: "foo"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
  });
});
