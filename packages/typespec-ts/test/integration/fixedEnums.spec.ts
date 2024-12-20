import { assert } from "chai";
import TypeEnumFixedClientFactory, {
  FixedClient
} from "./generated/type/enum/fixed/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("FixedEnums Rest Client", () => {
  let client: FixedClient;

  beforeEach(() => {
    client = TypeEnumFixedClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should get known value", async () => {
    const result = await client
      .path("/type/enum/fixed/string/known-value")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "Monday");
  });

  it("should put known value", async () => {
    const result = await client
      .path("/type/enum/fixed/string/known-value")
      .put({
        body: "Monday",
        contentType: "application/json"
      });
    assert.strictEqual(result.status, "204");
  });

  it("should put unknown value and receives 500", async () => {
    const result = await client
      .path("/type/enum/fixed/string/unknown-value")
      .put({
        body: "Weekend" as any,
        contentType: "application/json"
      });
    assert.strictEqual(result.status, "500");
  });
});
