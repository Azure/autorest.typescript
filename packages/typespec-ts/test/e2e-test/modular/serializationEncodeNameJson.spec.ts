import { assert } from "chai";
import { JsonClient } from "./generated/serialization/encoded-name/json/src/index.js";
describe("NameAndEncodedName Client", () => {
  let client: JsonClient;

  beforeEach(() => {
    client = new JsonClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get encoded-name json property", async () => {
    try {
      const result = await client.get();
      assert.strictEqual(result.defaultName, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post encoded-name json property", async () => {
    try {
      const result = await client.send({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
