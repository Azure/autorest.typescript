import { assert } from "chai";
import ScalarClientFactory, {
  ScalarClient
} from "./generated/scalar/src/index.js";

describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = ScalarClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get string value", async () => {
    try {
      const result = await client.path("/type/scalar/string").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put string value", async () => {
    try {
      const result = await client
        .path("/type/scalar/string")
        .put({ body: JSON.stringify("test") });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get boolean value", async () => {
    try {
      const result = await client.path("/type/scalar/boolean").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put boolean value", async () => {
    try {
      const result = await client
        .path("/type/scalar/boolean")
        .put({ body: true });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client.path("/type/scalar/unknown").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      const result = await client
        .path("/type/scalar/unknown")
        .put({ body: JSON.stringify("test") });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
