import { assert } from "chai";
import { VisibilityClient } from "./generated/type/model/visibility/generated/src/index.js";
describe("Model Visibility Client", () => {
  let client: VisibilityClient;

  beforeEach(() => {
    client = new VisibilityClient({
      endpoint: "http://localhost:3002",
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
    const result = await client.headModel(genData(["queryProp"]) as any);

    assert.isUndefined(result);
  });

  it("should get model visibility", async () => {
    const result = await client.getModel(genData(["queryProp"]) as any);
    assert.strictEqual(result.readProp, "abc");
  });

  it("should put model visibility", async () => {
    const result = await client.putModel(
      genData(["createProp", "updateProp"]) as any
    );
    assert.isUndefined(result);
  });

  it("should patch model visibility", async () => {
    const result = await client.patchModel(genData(["updateProp"]) as any);
    assert.isUndefined(result);
  });

  it("should post model visibility", async () => {
    const result = await client.postModel(genData(["createProp"]) as any);
    assert.isUndefined(result);
  });

  it("should delete model visibility", async () => {
    const result = await client.deleteModel(genData(["deleteProp"]) as any);
    assert.isUndefined(result);
  });
});
