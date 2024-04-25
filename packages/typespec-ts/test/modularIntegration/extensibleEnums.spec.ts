import { assert } from "chai";
import { ExtensibleClient } from "./generated/enums/extensible/src/index.js";
describe("ExtensibleEnums Rest Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = new ExtensibleClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get known value", async () => {
    try {
      const result = await client.string.getKnownValue();
      assert.strictEqual(result, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client.string.getUnknownValue();
      assert.strictEqual(result, "Weekend");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put known value", async () => {
    try {
      const result = await client.string.putKnownValue("Monday", {
        requestOptions: { headers: { "content-type": "text/plain" } }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value and receives 500", async () => {
    try {
      const result = await client.string.putUnknownValue("Weekend", {
        requestOptions: { headers: { "content-type": "text/plain" } }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
