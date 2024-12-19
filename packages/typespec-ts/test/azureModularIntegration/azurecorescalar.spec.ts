import { assert } from "chai";
import { ScalarClient } from "./generated/azure/core/scalar/src/index.js";
describe("Scalar Azure core Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should get an Azure Location value", async () => {
    const result = await client.get();
    assert.strictEqual(result, "eastus");
  });

  it("should put an Azure Location value", async () => {
    const result = await client.put("eastus", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });

  it("should post an Azure Location value", async () => {
    const result = await client.post({ location: "eastus" });
    assert.deepEqual(result, { location: "eastus" });
  });

  it("should post an Azure Location value with header", async () => {
    const result = await client.header("eastus");
    assert.isUndefined(result);
  });

  it("should post an Azure Location with query", async () => {
    const result = await client.query("eastus");
    assert.isUndefined(result);
  });
});
