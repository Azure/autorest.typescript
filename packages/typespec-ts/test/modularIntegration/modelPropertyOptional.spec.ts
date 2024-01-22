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
      console.log("1111111111");
      await client.bytes.getDefault();
      //   assert.deepEqual(result, {});
      //   assert.deepEqual(result.property, "hello");
    } catch (err) {
      console.log("11111111111", err);
      assert.fail(err as string);
    }
  });
});
