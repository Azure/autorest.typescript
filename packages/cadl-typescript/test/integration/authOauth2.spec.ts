import Outh2ClientFactory, {
  AuthOauth2Client
} from "./generated/authentication/oauth2/src/index.js";
import { assert } from "chai";
describe.skip("AuthOauth2Client Rest Client", () => {
  let client: AuthOauth2Client;

  beforeEach(() => {
    client = Outh2ClientFactory(
      {
        getToken: async () => {
          return {
            token: "FakedOne",
            expiresOnTimestamp: Date.now()
          };
        }
      },
      { allowInsecureConnection: true }
    );
  });

  it("should return 204 when the token is valid", async () => {
    try {
      const result = await client.path("/authentication/oauth2/valid").get();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should return 403 when the token is invalid", async () => {
    try {
      const result = await client.path("/authentication/oauth2/invalid").get();
      assert.strictEqual(result.status, "403");
      if (result.status === "403") {
        assert.strictEqual(result.body.error, "invalid-api-key");
      }
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });
});
