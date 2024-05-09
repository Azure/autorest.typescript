import { assert } from "chai";
import { OptionalClient } from "./generated/type/property/optionality/generated/src/index.js";
describe.only("Single Server Path Client", () => {
  let client: OptionalClient;

  beforeEach(() => {
    client = new OptionalClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
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
