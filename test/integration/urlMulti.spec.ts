import { assert } from "chai";
import { UrlMultiClient } from "./generated/urlMulti/src";

describe("URLMultiCollectionFormat", () => {
  let client: UrlMultiClient;

  beforeEach(() => {
    client = new UrlMultiClient();
  });

  it("should handle arrayStringMultiEmpty", async () => {
    const result = await client.queries.arrayStringMultiEmpty({
      arrayQuery: []
    });

    assert.strictEqual(result._response.status, 200);
  });

  it("should handle arrayStringMultiNull", async () => {
    const result = await client.queries.arrayStringMultiNull();

    assert.strictEqual(result._response.status, 200);
  });

  it("should handle arrayStringMultiValid", async () => {
    const result = await client.queries.arrayStringMultiValid({
      arrayQuery: [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ]
    });

    assert.strictEqual(result._response.status, 200);
  });
});
