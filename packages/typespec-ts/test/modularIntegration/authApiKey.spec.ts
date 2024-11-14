import { ApiKeyClient } from "./generated/authentication/api-key/src/index.js";
import { assert } from "chai";

describe("ApiKeyClient Classical Client", () => {
  let validKeyClient: ApiKeyClient;
  let invalidKeyClient: ApiKeyClient;

  beforeEach(() => {
    validKeyClient = new ApiKeyClient(
      {
        key: "valid-key"
      },
      {
        allowInsecureConnection: true,
        endpoint: "http://localhost:3002"
      }
    );
    invalidKeyClient = new ApiKeyClient(
      {
        key: "invalid-key"
      },
      {
        allowInsecureConnection: true,
        endpoint: "http://localhost:3002"
      }
    );
  });

  it("should not throw exception if apiKey is valid", async () => {
    try {
      const result = await validKeyClient.valid();
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
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
