import TypeEnumExtensibleClientFactory, {
  ExtensibleClient
} from "./generated/type/enum/extensible/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("ExtensibleEnums Rest Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = TypeEnumExtensibleClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should get known value", async () => {
    const result = await client
      .path("/type/enum/extensible/string/known-value")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "Monday");
  });

  it("should put known value", async () => {
    const result = await client
      .path("/type/enum/extensible/string/known-value")
      .put({
        body: "Monday",
        headers: {
          "content-type": "text/plain"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get unknown value", async () => {
    const result = await client
      .path("/type/enum/extensible/string/unknown-value")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "Weekend");
  });

  it("should put unknown value", async () => {
    const result = await client
      .path("/type/enum/extensible/string/unknown-value")
      .put({
        body: "Weekend",
        headers: {
          "content-type": "text/plain"
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
