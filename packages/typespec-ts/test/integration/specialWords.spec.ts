import SpecialWordsClientFactory, {
  DerivedModel,
  SpecialWordsClient
} from "./generated/specialWords/src/index.js";
import { assert } from "chai";
describe("HelloClient Rest Client", () => {
  let client: SpecialWordsClient;
  const modelValue: DerivedModel = {
    "model.kind": "derived",
    "derived.name": "my.name",
    for: "value"
  };

  beforeEach(() => {
    client = SpecialWordsClientFactory({ allowInsecureConnection: true });
  });

  it("should get special words for operation `for`", async () => {
    try {
      const result = await client.path("/special-words/operation/for").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get special words for parameter `if`", async () => {
    try {
      const result = await client.path("/special-words/parameter/if").get({
        headers: {
          if: "weekend"
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get special words for parameter `filter`", async () => {
    try {
      const result = await client.path("/special-words/parameter/filter").get({
        queryParameters: {
          filter: "abc*."
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get special words for model", async () => {
    try {
      const result = await client.path("/special-words/model/get").get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, modelValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put special words for model", async () => {
    try {
      const result = await client.path("/special-words/model/put").put({
        body: modelValue
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
