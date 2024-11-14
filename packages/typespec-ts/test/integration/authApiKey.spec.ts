import ApiKeyClientFactory, {
  AuthApiKeyClient
} from "./generated/authentication/api-key/src/index.js";
import { assert } from "chai";
describe("AuthApiKeyClient Rest Client", () => {
  let validKeyClient: AuthApiKeyClient;
  let invalidKeyClient: AuthApiKeyClient;

  beforeEach(() => {
    validKeyClient = ApiKeyClientFactory(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true }
    );
    invalidKeyClient = ApiKeyClientFactory(
      {
        key: "invalid-key"
      },
      { allowInsecureConnection: true }
    );
  });

  it("should return 204 when the apiKey is valid", async () => {
    try {
      const result = await validKeyClient.path("/authentication/api-key/valid").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should return 403 when the apiKey is invalid", async () => {
    try {
      const result = await invalidKeyClient.path("/authentication/api-key/invalid").get();
      assert.strictEqual(result.status, "403");
      if (result.status === "403") {
        assert.strictEqual(result.body.error, "invalid-api-key");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
