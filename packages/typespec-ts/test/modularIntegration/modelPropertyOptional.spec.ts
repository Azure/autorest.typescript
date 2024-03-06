import { assert } from "chai";
import { OptionalClient } from "./generated/models/propertyOptional/generated/src/index.js";
describe.only("Single Server Path Client", () => {
  let client: OptionalClient;

  beforeEach(() => {
    client = new OptionalClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  it("should work with no param", async () => {
    try {
      const res = await client.string.getAll();
      //   assert.deepEqual(result, {});
      //   assert.deepEqual(result.property, "hello");
      console.log(res);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
