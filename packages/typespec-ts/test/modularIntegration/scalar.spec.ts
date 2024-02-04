import { assert } from "chai";
import { ScalarClient } from "./generated/scalar/src/index.js";
describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it.skip("should get string value", async () => {
    try {
      const result = await client.string.get();
      console.log(result)
      // assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should put string value", async () => {
    try {
      const result = await client.string.put("test");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should get boolean value", async () => {
    try {
      const result = await client.boolean.get();
      console.log(result)
      // assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

