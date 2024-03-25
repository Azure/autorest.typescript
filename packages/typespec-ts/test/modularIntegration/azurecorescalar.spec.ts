import { assert } from "chai";
import { ScalarClient } from "./generated/azure/core-scalar/src/index.js";
describe("Scalar Azure core Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get an Azure Location value", async () => {
    try {
      const result = await client.get();
      assert.strictEqual(result, "eastus");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put an Azure Location value", async () => {
    try {
      const result = await client.put("eastus", {
        requestOptions: { headers: { "content-type": "text/plain" } }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post an Azure Location value", async () => {
    try {
      const result = await client.post({ location: "eastus" });
      assert.deepEqual(result, { location: "eastus" });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post an Azure Location value with header", async () => {
    try {
      const result = await client.header("eastus");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post an Azure Location with query", async () => {
    try {
      const result = await client.query("eastus");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
