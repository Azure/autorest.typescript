import { CustomClient } from "./generated/authentication/http/custom/src/index.js";
import { assert } from "chai";

describe("CustomClient Classical Client", () => {
  let validKeyClient: CustomClient;
  let invalidKeyClient: CustomClient;

  beforeEach(() => {
    validKeyClient = new CustomClient(
      {
        key: "valid-key"
      },
      {
        allowInsecureConnection: true,
        endpoint: "http://localhost:3006"
      }
    );
    invalidKeyClient = new CustomClient(
      {
        key: "invalid-key"
      },
      {
        allowInsecureConnection: true,
        endpoint: "http://localhost:3006"
      }
    );
  });

  it("should not throw exception if apiKey is valid", async () => {
    const result = await validKeyClient.valid();
    assert.strictEqual(result, undefined);
  });

  it("should throw exception if the apiKey is invalid", async () => {
    try {
      await invalidKeyClient.invalid();
      assert.fail("Expected an exception to be thrown.");
    } catch (err: any) {
      assert.strictEqual(err.message, "Unexpected status code: 403");
    }
  });
});
