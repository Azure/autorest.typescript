import { assert } from "chai";
import SerializationEncodedNameJsonClientFactory, {
  SerializationEncodedNameJsonClient
} from "./generated/serialization/encoded-name/json/src/index.js";
describe("ClientEncodedNameClient Rest Client", () => {
  let client: SerializationEncodedNameJsonClient;

  beforeEach(() => {
    client = SerializationEncodedNameJsonClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should post json property", async () => {
    try {
      const result = await client
        .path("/serialization/encoded-name/json/property")
        .post({
          body: { wireName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get json property", async () => {
    try {
      const result = await client
        .path("/serialization/encoded-name/json/property")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.wireName, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
