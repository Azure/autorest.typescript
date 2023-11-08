import { ExtensibleClient } from "./generated/enums/extensible/src/index.js";
import { assert } from "chai";

const KNOWN_VALUE = "Monday";
const UNKNOWN_VALUE = "Weekend";
describe("Extensible Client", () => {
  let client: ExtensibleClient;

  beforeEach(() => {
    client = new ExtensibleClient({
      allowInsecureConnection: true
    });
  });

  it("should get with known value", async () => {
    try {
      const result = await client.getKnownValue();
      assert.isNotNull(result);
      assert.strictEqual(result, KNOWN_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put with known value", async () => {
    try {
      const result = await client.putKnownValue(JSON.stringify(KNOWN_VALUE));
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get with unknown value", async () => {
    try {
      const result = await client.getUnknownValue();
      assert.isNotNull(result);
      assert.strictEqual(result, UNKNOWN_VALUE);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put with unknown value", async () => {
    try {
      const result = await client.putUnknownValue(
        JSON.stringify(UNKNOWN_VALUE)
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
