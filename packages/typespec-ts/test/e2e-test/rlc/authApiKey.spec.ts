import ApiKeyClientFactory, {
  AuthApiKeyClient
} from "./generated/authentication/apiKey/src/index.js";
import { assert } from "chai";
describe("AuthApiKeyClient Rest Client", () => {
  let client: AuthApiKeyClient;

  beforeEach(() => {
    client = ApiKeyClientFactory(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true }
    );
  });

  it("should return 204 when the apiKey is valid", async () => {
    try {
      const result = await client.path("/authentication/api-key/valid").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should return 403 when the apiKey is invalid", async () => {
    try {
      const result = await client.path("/authentication/api-key/invalid").get();
      assert.strictEqual(result.status, "403");
      if (result.status === "403") {
        assert.strictEqual(result.body.error, "invalid-api-key");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
