import { assert } from "chai";
import { FixedClient } from "./generated/type/enum/fixed/src/index.js";
describe("FixedEnums Rest Client", () => {
  let client: FixedClient;

  beforeEach(() => {
    client = new FixedClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get known value", async () => {
    const result = await client.string.getKnownValue();
    assert.strictEqual(result, "Monday");
  });

  it("should put known value", async () => {
    const result = await client.string.putKnownValue("Monday", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });

  it("should put unknown value and receives 500", async () => {
    try {
      await client.string.putUnknownValue("Weekend" as any, {
        requestOptions: { headers: { "content-type": "application/json" } }
      });
      assert.fail("Expected an exception to be thrown.");
    } catch (err) {
      assert.isOk(err);
    }
  });
});
