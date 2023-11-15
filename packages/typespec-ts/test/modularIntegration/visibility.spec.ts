import {
  VisibilityClient,
  VisibilityModel
} from "./generated/models/visibility/generated/src/index.js";
import { assert } from "chai";

describe("Visibility Client", () => {
  let client: VisibilityClient;

  beforeEach(() => {
    client = new VisibilityClient({
      allowInsecureConnection: true
    });
  });

  it("should head model", async () => {
    try {
      const result = await client.headModel({
        queryProp: 123
      } as VisibilityModel);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get model", async () => {
    try {
      const result = await client.getModel({
        queryProp: 123
      } as VisibilityModel);
      assert.isNotNull(result);
      assert.strictEqual(
        JSON.stringify(result),
        JSON.stringify({ readProp: "abc" })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put model", async () => {
    try {
      const result = await client.putModel({
        createProp: ["foo", "bar"],
        updateProp: [1, 2]
      } as VisibilityModel);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should patch model", async () => {
    try {
      const result = await client.patchModel({
        updateProp: [1, 2]
      } as VisibilityModel);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post model", async () => {
    try {
      const result = await client.postModel({
        createProp: ["foo", "bar"]
      } as VisibilityModel);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete model", async () => {
    try {
      const result = await client.deleteModel({
        deleteProp: true
      } as VisibilityModel);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
