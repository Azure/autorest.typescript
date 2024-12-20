import { ApiKeyClient } from "./generated/authentication/api-key/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
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
        endpoint: `http://localhost:${port}`
      }
    );
    invalidKeyClient = new ApiKeyClient(
      {
        key: "invalid-key"
      },
      {
        allowInsecureConnection: true,
        endpoint: `http://localhost:${port}`
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
