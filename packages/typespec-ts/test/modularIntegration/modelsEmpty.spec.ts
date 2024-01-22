import { EmptyClient } from "./generated/models/empty/generated/src/index.js";
import { assert } from "chai";

const body = {};
describe("Empty Client", () => {
  let client: EmptyClient;

  beforeEach(() => {
    client = new EmptyClient({
      allowInsecureConnection: true
    });
  });

  it("should put empty value", async () => {
    try {
      const result = await client.putEmpty(body);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get empty value", async () => {
    try {
      const result = await client.getEmpty();
      assert.isNotNull(result);
      assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post round trip empty value", async () => {
    try {
      const result = await client.postRoundTripEmpty(body);
      assert.isNotNull(result);
      assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
