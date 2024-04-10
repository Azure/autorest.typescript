import { assert } from "chai";
import { UnionClient } from "./generated/unions/src/index.js";
describe("Type Union Client", () => {
  let client: UnionClient;

  beforeEach(() => {
    client = new UnionClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get strings only union", async () => {
    try {
      const result = await client.stringsOnly.get();
      assert.strictEqual(result.prop, "b");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send strings only union", async () => {
    try {
      const result = await client.stringsOnly.send("b");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get strings extensible union", async () => {
    try {
      const result = await client.stringExtensible.get();
      assert.strictEqual(result.prop, "custom");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send strings extensible union", async () => {
    try {
      const result = await client.stringExtensible.send("custom")
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get strings extensible named union", async () => {
    try {
      const result = await client.stringExtensibleNamed.get();
      assert.strictEqual(result.prop, "custom");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send strings extensible union", async () => {
    try {
      const result = await client.stringExtensibleNamed.send("custom")
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get ints only union", async () => {
    try {
      const result = await client.intsOnly.get();
      assert.strictEqual(result.prop, 2);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send ints only union", async () => {
    try {
      const result = await client.intsOnly.send(2);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get floats only union", async () => {
    try {
      const result = await client.floatsOnly.get();
      assert.strictEqual(result.prop, 2.2);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send floats only union", async () => {
    try {
      const result = await client.floatsOnly.send(2.2)
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get models only union", async () => {
    try {
      const result = await client.modelsOnly.get();
      assert.strictEqual(JSON.stringify(result.prop), JSON.stringify({ name: 'test' }));
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send models only union", async () => {
    try {
      const result = await client.modelsOnly.send({ name: "test" });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get enums only union", async () => {
    try {
      const result = await client.enumsOnly.get();
      assert.strictEqual(result.prop.lr, "right");
      assert.strictEqual(result.prop.ud, "up");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send enums only union", async () => {
    try {
      const result = await client.enumsOnly.send({ lr: 'right', ud: 'up' });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get string and array union", async () => {
    try {
      const result = await client.stringAndArray.get();
      assert.strictEqual(result.prop.string, "test");
      assert.strictEqual(result.prop.array[0], 'test1');
      assert.strictEqual(result.prop.array[1], 'test2');
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send string and array union", async () => {
    try {
      const result = await client.stringAndArray.send({ string: 'test', array: [ "test1", "test2" ] });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get mixed literals union", async () => {
    try {
      const result = await client.mixedLiterals.get();
      assert.strictEqual(result.prop.stringLiteral, "a");
      assert.strictEqual(result.prop.intLiteral, 2);
      assert.strictEqual(result.prop.floatLiteral, 3.3);
      assert.strictEqual(result.prop.booleanLiteral,true);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send mixed literals union", async () => {
    try {
      const result = await client.mixedLiterals.send({
        stringLiteral: 'a',
        intLiteral: 2,
        floatLiteral: 3.3,
        booleanLiteral: true
      })
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get mixed types union", async () => {
    try {
      const result = await client.mixedTypes.get();
      assert.strictEqual(JSON.stringify(result.prop.model), JSON.stringify({ name: 'test' }));
      assert.strictEqual(result.prop.literal, 'a');
      assert.strictEqual(result.prop.int, 2);
      assert.strictEqual(result.prop.boolean,true);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should send mixed types union", async () => {
    try {
      const result = await client.mixedTypes.send({ model: { name: 'test' }, literal: 'a', int: 2, boolean: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

