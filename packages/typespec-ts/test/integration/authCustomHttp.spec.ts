import AuthHttpCustomClientFactory, {
  AuthHttpCustomClient
} from "./generated/authentication/http-custom/src/index.js";
import { assert } from "chai";
describe("AuthHttpCustomClient Rest Client", () => {
  let client: AuthHttpCustomClient;

  beforeEach(() => {
    client = AuthHttpCustomClientFactory(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true }
    );
  });

  it("should return 204 when the apiKey is valid", async () => {
    try {
      const result = await client
        .path("/authentication/http/custom/valid")
        .get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should return 403 when the apiKey is invalid", async () => {
    try {
      const result = await client
        .path("/authentication/http/custom/invalid")
        .get();
      assert.strictEqual(result.status, "403");
      if (result.status === "403") {
        assert.strictEqual(result.body.error, "invalid-api-key");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
