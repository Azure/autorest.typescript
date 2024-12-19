import { assert } from "chai";
import { NumericClient } from "./generated/encode/numeric/src/index.js";
describe("EncodeNumericClient Rest Client", () => {
  let client: NumericClient;

  beforeEach(() => {
    client = new NumericClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get safeint numeric`, async () => {
      const result = await client.property.safeintAsString({
        value: "10000000000"
      });
      assert.strictEqual(result.value, "10000000000");
    });

    it(`should get uint32 numeric`, async () => {
      const result = await client.property.uint32AsStringOptional({
        value: "1"
      });
      assert.strictEqual(result.value, "1");
    });

    it(`should get uint8 numeric`, async () => {
      const result = await client.property.uint8AsString({ value: "255" });
      assert.strictEqual(result.value, "255");
    });
  });
});
