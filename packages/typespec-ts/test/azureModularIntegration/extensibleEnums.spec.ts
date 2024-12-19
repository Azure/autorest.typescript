import { assert } from "chai";
import { ExtensibleClient } from "./generated/type/enum/extensible/src/index.js";
describe("ExtensibleEnums Rest Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = new ExtensibleClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should get known value", async () => {
    const result = await client.string.getKnownValue();
    assert.strictEqual(result, "Monday");
  });

  it("should get unknown value", async () => {
    const result = await client.string.getUnknownValue();
    assert.strictEqual(result, "Weekend");
  });

  it("should put known value", async () => {
    const result = await client.string.putKnownValue("Monday", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });

  it("should put unknown value and receives 500", async () => {
    const result = await client.string.putUnknownValue("Weekend" as any, {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });
});
