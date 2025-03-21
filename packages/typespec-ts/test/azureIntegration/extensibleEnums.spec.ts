import TypeEnumExtensibleClientFactory, {
  ExtensibleClient
} from "./generated/type/enum/extensible/src/index.js";
import { assert } from "chai";
describe("ExtensibleEnums Rest Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = TypeEnumExtensibleClientFactory({ allowInsecureConnection: true });
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
        contentType: "application/json",
        body: "Monday"
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
        contentType: "application/json",
        body: "Weekend"
      });
    assert.strictEqual(result.status, "204");
  });
});
