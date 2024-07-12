import VisibilityClientFactory, {
  VisibilityClient
} from "./generated/type/model/visibility/src/index.js";
import { assert } from "chai";
describe("Visibility Rest Client", () => {
  let client: VisibilityClient;

  beforeEach(() => {
    client = VisibilityClientFactory({
      allowInsecureConnection: true
    });
  });
  function genData(keys: string[]): Record<string, any> {
    const ret: Record<string, any> = {};
    const fullData: Record<string, any> = {
      readProp: "abc",
      queryProp: 123,
      createProp: ["foo", "bar"],
      updateProp: [1, 2],
      deleteProp: true
    };
    for (const k of keys) {
      if (k in fullData) {
        ret[k] = fullData[k];
      }
    }
    return ret;
  }

  it("should query with head model", async () => {
    const result = await client
      .path("/type/model/visibility")
      .head({ body: genData(["queryProp"]) as any });
    assert.strictEqual(result.status, "200");
  });

  it("should get model visibility", async () => {
    const result = await client
      .path("/type/model/visibility")
      .get({ body: genData(["queryProp"]) as any });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.readProp, "abc");
  });

  it("should put model visibility", async () => {
    const result = await client
      .path("/type/model/visibility")
      .put({ body: genData(["createProp", "updateProp"]) as any });
    assert.strictEqual(result.status, "204");
  });

  it("should patch model visibility", async () => {
    const result = await client
      .path("/type/model/visibility")
      .patch({ body: genData(["updateProp"]) as any });
    assert.strictEqual(result.status, "204");
  });

  it("should post model visibility", async () => {
    const result = await client
      .path("/type/model/visibility")
      .post({ body: genData(["createProp"]) as any });
    assert.strictEqual(result.status, "204");
  });

  it("should delete model visibility", async () => {
    const result = await client
      .path("/type/model/visibility")
      .delete({ body: genData(["deleteProp"]) as any });
    assert.strictEqual(result.status, "204");
  });
});
