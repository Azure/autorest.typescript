import { NullableClient } from "./generated/property/nullable/generated/src/index.js";
import { assert } from "chai";

describe("Nullable Client", () => {
  let client: NullableClient;

  beforeEach(() => {
    client = new NullableClient({
      allowInsecureConnection: true
    });
  });

  it("should get NonNull value", async () => {
    try {
      const result = await client.datetime.getNonNull();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
