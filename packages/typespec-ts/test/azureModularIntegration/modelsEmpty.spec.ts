import { EmptyClient } from "./generated/type/model/empty/src/index.js";
import { assert } from "chai";

const body = {};
describe("Empty Client", () => {
  let client: EmptyClient;

  beforeEach(() => {
    client = new EmptyClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should put empty value", async () => {
    const result = await client.putEmpty(body);
    assert.isUndefined(result);
  });

  it("should get empty value", async () => {
    const result = await client.getEmpty();
    assert.isNotNull(result);
    assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
  });

  it("should post round trip empty value", async () => {
    const result = await client.postRoundTripEmpty(body);
    assert.isNotNull(result);
    assert.strictEqual(JSON.stringify(result), JSON.stringify(body));
  });
});
