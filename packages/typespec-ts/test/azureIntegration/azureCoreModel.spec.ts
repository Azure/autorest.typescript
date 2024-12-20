import { assert } from "chai";
import AzureCoreModelClientFactory, {
  AzureCoreModelClient
} from "./generated/azure/core/model/src/index.js";
describe("Azure Core Traits Rest Client", () => {
  let client: AzureCoreModelClient;

  beforeEach(() => {
    client = AzureCoreModelClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should get core model embeddingVector", async () => {
    const result = await client.path("/azure/core/model/embeddingVector").get();

    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, [0, 1, 2, 3, 4]);
  });

  it("should put core model embeddingVector", async () => {
    const result = await client
      .path("/azure/core/model/embeddingVector")
      .put({ body: [0, 1, 2, 3, 4] });

    assert.strictEqual(result.status, "204");
  });

  it("should post core model embeddingVector", async () => {
    const responseBody = { embedding: [5, 6, 7, 8, 9] };
    const result = await client
      .path("/azure/core/model/embeddingVector")
      .post({ body: { embedding: [0, 1, 2, 3, 4] } });

    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body.embedding, responseBody.embedding);
  });
});
