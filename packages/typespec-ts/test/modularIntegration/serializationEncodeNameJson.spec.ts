import { assert } from "chai";
import { JsonClient } from "./generated/serialization/encoded-name/json/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("NameAndEncodedName Client", () => {
  let client: JsonClient;

  beforeEach(() => {
    client = new JsonClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get encoded-name json property", async () => {
    const result = await client.get();
    assert.strictEqual(result.defaultName, true);
  });

  it("should post encoded-name json property", async () => {
    const result = await client.send({ defaultName: true });
    assert.isUndefined(result);
  });
});
