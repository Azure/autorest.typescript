import { assert } from "chai";
import { UnionClient } from "./generated/type/union/src/index.js";
describe("Type Union Client", () => {
  let client: UnionClient;

  beforeEach(() => {
    client = new UnionClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get strings only union", async () => {
    const result = await client.stringsOnly.get();
    assert.strictEqual(result.prop, "b");
  });
  it("should send strings only union", async () => {
    const result = await client.stringsOnly.send("b");
    assert.isUndefined(result);
  });

  it("should get strings extensible union", async () => {
    const result = await client.stringExtensible.get();
    assert.strictEqual(result.prop, "custom");
  });
  it("should send strings extensible union", async () => {
    const result = await client.stringExtensible.send("custom");
    assert.isUndefined(result);
  });

  it("should get strings extensible named union", async () => {
    const result = await client.stringExtensibleNamed.get();
    assert.strictEqual(result.prop, "custom");
  });
  it("should send strings extensible union", async () => {
    const result = await client.stringExtensibleNamed.send("custom");
    assert.isUndefined(result);
  });

  it("should get ints only union", async () => {
    const result = await client.intsOnly.get();
    assert.strictEqual(result.prop, 2);
  });
  it("should send ints only union", async () => {
    const result = await client.intsOnly.send(2);
    assert.isUndefined(result);
  });

  it("should get floats only union", async () => {
    const result = await client.floatsOnly.get();
    assert.strictEqual(result.prop, 2.2);
  });
  it("should send floats only union", async () => {
    const result = await client.floatsOnly.send(2.2);
    assert.isUndefined(result);
  });

  it("should get models only union", async () => {
    const result = await client.modelsOnly.get();
    assert.strictEqual(
      JSON.stringify(result.prop),
      JSON.stringify({ name: "test" })
    );
  });
  it("should send models only union", async () => {
    const result = await client.modelsOnly.send({ name: "test" });
    assert.isUndefined(result);
  });

  it("should get enums only union", async () => {
    const result = await client.enumsOnly.get();
    assert.strictEqual(result.prop.lr, "right");
    assert.strictEqual(result.prop.ud, "up");
  });
  it("should send enums only union", async () => {
    const result = await client.enumsOnly.send({ lr: "right", ud: "up" });
    assert.isUndefined(result);
  });

  it("should get string and array union", async () => {
    const result = await client.stringAndArray.get();
    assert.strictEqual(result.prop.string, "test");
    assert.strictEqual(result.prop.array[0], "test1");
    assert.strictEqual(result.prop.array[1], "test2");
  });
  it("should send string and array union", async () => {
    const result = await client.stringAndArray.send({
      string: "test",
      array: ["test1", "test2"]
    });
    assert.isUndefined(result);
  });

  it("should get mixed literals union", async () => {
    const result = await client.mixedLiterals.get();
    assert.strictEqual(result.prop.stringLiteral, "a");
    assert.strictEqual(result.prop.intLiteral, 2);
    assert.strictEqual(result.prop.floatLiteral, 3.3);
    assert.strictEqual(result.prop.booleanLiteral, true);
  });
  it("should send mixed literals union", async () => {
    const result = await client.mixedLiterals.send({
      stringLiteral: "a",
      intLiteral: 2,
      floatLiteral: 3.3,
      booleanLiteral: true
    });
    assert.isUndefined(result);
  });

  it("should get mixed types union", async () => {
    const result = await client.mixedTypes.get();
    assert.strictEqual(
      JSON.stringify(result.prop.model),
      JSON.stringify({ name: "test" })
    );
    assert.strictEqual(result.prop.literal, "a");
    assert.strictEqual(result.prop.int, 2);
    assert.strictEqual(result.prop.boolean, true);

  });
  it("should send mixed types union", async () => {
    const result = await client.mixedTypes.send({
      model: { name: "test" },
      literal: "a",
      int: 2,
      boolean: true,
      array: [
        {
          name: "test"
        },
        "a",
        2,
        true
      ]
    });
    assert.isUndefined(result);
  });
});
