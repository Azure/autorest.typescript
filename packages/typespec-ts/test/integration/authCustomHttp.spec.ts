import AuthHttpCustomClientFactory, {
  AuthHttpCustomClient
} from "./generated/authentication/http/custom/src/index.js";
import { assert } from "chai";
describe("AuthHttpCustomClient Rest Client", () => {
  let validKeyClient: AuthHttpCustomClient;
  let invalidKeyClient: AuthHttpCustomClient;

  beforeEach(() => {
    validKeyClient = AuthHttpCustomClientFactory(
      {
        key: "valid-key"
      },
      { allowInsecureConnection: true }
    );
    invalidKeyClient = AuthHttpCustomClientFactory(
      {
        key: "invalid-key"
      },
      { allowInsecureConnection: true }
    );
  });

  it("should return 204 when the apiKey is valid", async () => {
    try {
      const result = await validKeyClient
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
      const result = await invalidKeyClient
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
