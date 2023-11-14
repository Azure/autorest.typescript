import { CustomClient } from "./generated/authentication/http-custom/src/index.js";
import { assert } from "chai";

describe("CustomClient Classical Client", () => {
  let client: CustomClient;

  beforeEach(() => {
    client = new CustomClient(
      {
        key: "valid-key"
      },
      {
        allowInsecureConnection: true
      }
    );
  });

  it("should not throw exception if apiKey is valid", async () => {
    try {
      const result = await client.valid();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should throw exception if the apiKey is invalid", async () => {
    try {
      await client.invalid();
      assert.fail("Expected an exception to be thrown.");
    } catch (err: any) {
      assert.strictEqual(err.error, "invalid-api-key");
    }
  });
});
