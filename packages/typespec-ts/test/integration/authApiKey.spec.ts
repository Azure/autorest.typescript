import ApiKeyClientFactory, {
  AuthApiKeyClient
} from "./generated/authentication/api-key/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";

describe("AuthApiKeyClient Rest Client", () => {
  let validKeyClient: AuthApiKeyClient;
  let invalidKeyClient: AuthApiKeyClient;

  beforeEach(() => {
    validKeyClient = ApiKeyClientFactory(
      {
        key: "valid-key"
      },
      {
        endpoint: `http://localhost:${port}`,
        allowInsecureConnection: true
      }
    );
    invalidKeyClient = ApiKeyClientFactory(
      {
        key: "invalid-key"
      },
      {
        endpoint: `http://localhost:${port}`,
        allowInsecureConnection: true
      }
    );
  });

  it("should return 204 when the apiKey is valid", async () => {
    const result = await validKeyClient.path("/authentication/api-key/valid").get();
    assert.strictEqual(result.status, "204");
  });

  it("should return 403 when the apiKey is invalid", async () => {
    const result = await invalidKeyClient.path("/authentication/api-key/invalid").get();
    assert.strictEqual(result.status, "403");
    if (result.status === "403") {
      assert.strictEqual(result.body.error, "invalid-api-key");
    }
  });
});
