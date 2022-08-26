import ExtensibleEnumsClientFactory, {
    ExtensibleEnumsClient
} from "./generated/extensibleEnums/src/index.js";
import { assert } from "chai";
describe("HelloClient Rest Client", () => {
  let client: ExtensibleEnumsClient;

  beforeEach(() => {
    client = ExtensibleEnumsClientFactory({ allowInsecureConnection: true });
  });

  it("should get known value", async () => {
    try {
      const result = await client.path("/extensible-enums/string/known-value").get({});
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put known value", async () => {
    try {
      const result = await client.path("/extensible-enums/string/known-value").put({
        body: JSON.stringify("Monday")
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client.path("/extensible-enums/string/unknown-value").get({});
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Weekend");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      const result = await client.path("/extensible-enums/string/unknown-value").put({
        body: JSON.stringify("Weekend")
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
