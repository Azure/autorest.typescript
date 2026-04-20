import { assert, describe, it, beforeEach } from "vitest";
import { VisibilityClient } from "./generated/type/model/visibility/src/index.js";

describe("TypeModelVisibility", () => {
  let client: VisibilityClient;

  beforeEach(() => {
    client = new VisibilityClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  it("Type_Model_Visibility_getModel", async () => {
    const result = await client.getModel({
      readProp: "",
      queryProp: 123,
      createProp: [],
      updateProp: [],
      deleteProp: false
    });
    assert.strictEqual(result.readProp, "abc");
  });

  it("Type_Model_Visibility_headModel", async () => {
    const result = await client.headModel({
      readProp: "",
      queryProp: 123,
      createProp: [],
      updateProp: [],
      deleteProp: false
    });
    assert.isUndefined(result);
  });

  it("Type_Model_Visibility_putModel", async () => {
    const result = await client.putModel({
      readProp: "",
      queryProp: 0,
      createProp: ["foo", "bar"],
      updateProp: [1, 2],
      deleteProp: false
    });
    assert.isUndefined(result);
  });

  it("Type_Model_Visibility_patchModel", async () => {
    const result = await client.patchModel({
      readProp: "",
      queryProp: 0,
      createProp: [],
      updateProp: [1, 2],
      deleteProp: false
    });
    assert.isUndefined(result);
  });

  it("Type_Model_Visibility_postModel", async () => {
    const result = await client.postModel({
      readProp: "",
      queryProp: 0,
      createProp: ["foo", "bar"],
      updateProp: [],
      deleteProp: false
    });
    assert.isUndefined(result);
  });

  it("Type_Model_Visibility_deleteModel", async () => {
    const result = await client.deleteModel({
      readProp: "",
      queryProp: 0,
      createProp: [],
      updateProp: [],
      deleteProp: true
    });
    assert.isUndefined(result);
  });

  it("Type_Model_Visibility_putReadOnlyModel", async () => {
    const result = await client.putReadOnlyModel({});
    assert.deepEqual(result.optionalNullableIntList, [1, 2, 3]);
    assert.deepEqual(result.optionalStringRecord, {
      k1: "value1",
      k2: "value2"
    });
  });
});
