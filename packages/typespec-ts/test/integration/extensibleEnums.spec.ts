import TypeEnumExtensibleClientFactory, {
  ExtensibleClient
} from "./generated/enums/extensible/src/index.js";
import { assert } from "chai";
describe("ExtensibleEnums Rest Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = TypeEnumExtensibleClientFactory({ allowInsecureConnection: true });
  });

  it("should get known value", async () => {
    try {
      const result = await client
        .path("/type/enum/extensible/string/known-value")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put known value", async () => {
    try {
      const result = await client
        .path("/type/enum/extensible/string/known-value")
        .put({
          body: "Monday",
          headers: {
            "content-type": "text/plain"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client
        .path("/type/enum/extensible/string/unknown-value")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Weekend");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      const result = await client
        .path("/type/enum/extensible/string/unknown-value")
        .put({
          body: "Weekend",
          headers: {
            "content-type": "text/plain"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
