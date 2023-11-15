import { UnionClient } from "./generated/unions/generated/src/index.js";
import { assert } from "chai";

describe("Union Client", () => {
  let client: UnionClient;

  beforeEach(() => {
    client = new UnionClient({
      allowInsecureConnection: true
    });
  });

  it("should send int value", async () => {
    try {
      const result = await client.sendInt({ simpleUnion: 1 });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send int array", async () => {
    try {
      const result = await client.sendIntArray({ simpleUnion: [1, 2] });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send first named union value", async () => {
    try {
      const result = await client.sendFirstNamedUnionValue({
        namedUnion: { name: "model1", prop1: 1 }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send second named union value", async () => {
    try {
      const result = await client.sendSecondNamedUnionValue({
        namedUnion: { name: "model2", prop2: 2 }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should receive string value", async () => {
    try {
      const result = await client.receiveString();
      assert.isNotNull(result);
      assert.strictEqual(
        JSON.stringify(result),
        JSON.stringify({ simpleUnion: "string" })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should receive int array", async () => {
    try {
      const result = await client.receiveIntArray();
      assert.isNotNull(result);
      assert.strictEqual(
        JSON.stringify(result),
        JSON.stringify({
          simpleUnion: [1, 2]
        })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should receive first named union value", async () => {
    try {
      const result = await client.receiveFirstNamedUnionValue();
      assert.isNotNull(result);
      assert.strictEqual(
        JSON.stringify(result),
        JSON.stringify({
          namedUnion: { name: "model1", prop1: 1 }
        })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should receive second named union value", async () => {
    try {
      const result = await client.receiveSecondNamedUnionValue();
      assert.isNotNull(result);
      assert.strictEqual(
        JSON.stringify(result),
        JSON.stringify({
          namedUnion: { name: "model2", prop2: 2 }
        })
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
