import { ModelClient } from "./generated/azure/core/model/src/index.js";
import { assert } from "chai";

describe("Traits Client", () => {
  let client: ModelClient;

  beforeEach(() => {
    client = new ModelClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should get core model embeddingVector", async () => {
    const result = await client.get();
    assert.deepStrictEqual(result, [0, 1, 2, 3, 4]);
  });

  it("should put core model embeddingVector", async () => {
    const result = await client.put([0, 1, 2, 3, 4]);
    assert.isUndefined(result);
  });

  it("should post core model embeddingVector", async () => {
    const responseBody = { embedding: [5, 6, 7, 8, 9] };
    const result = await client.post({ embedding: [0, 1, 2, 3, 4] });
    assert.deepStrictEqual(result, responseBody);
  });
});
