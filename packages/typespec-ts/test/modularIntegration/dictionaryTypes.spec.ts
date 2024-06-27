import { assert } from "chai";
import { DictionaryClient } from "./generated/type/dictionary/src/index.js";

describe("DictionaryClient Modular Client", () => {
  let client: DictionaryClient;

  beforeEach(() => {
    client = new DictionaryClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get a dictionary of boolean", async () => {
    try {
      const result = await client.booleanValue.get();
      assert.deepEqual(result, { k1: true, k2: false });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send a dictionary of boolean", async () => {
    try {
      await client.booleanValue.put({ k1: true, k2: false });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  // Fix deserialization
  it.skip("should get a dictionary of datetime", async () => {
    try {
      const result = await client.datetimeValue.get();
      assert.deepEqual(result, {
        k1: new Date("2022-08-26T18:38:00Z")
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send a dictionary of datetime", async () => {
    try {
      await client.datetimeValue.put({
        k1: new Date("2022-08-26T18:38:00Z")
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get a dictionary of durations", async () => {
    try {
      const result = await client.durationValue.get();
      assert.deepEqual(result, {
        k1: "P123DT22H14M12.011S"
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send a dictionary of durations", async () => {
    try {
      await client.durationValue.put({
        k1: "P123DT22H14M12.011S"
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get a dictionary of float", async () => {
    const result = await client.float32Value.get();
    assert.deepEqual(result, { k1: 43.125 });
  });

  it("should send a dictionary of float", async () => {
    await client.float32Value.put({ k1: 43.125 });
  });

  it("should get a dictionary of integer", async () => {
    const result = await client.int32Value.get();
    assert.deepEqual(result, { k1: 1, k2: 2 });
  });

  it("should send a dictionary of integer", async () => {
    await client.int32Value.put({ k1: 1, k2: 2 });
  });

  it("should get a dictionary of int64", async () => {
    const maxSafeInteger = Math.pow(2, 53) - 1;
    const minSafeInteger = -Math.pow(2, 53) + 1;
    const result = await client.int64Value.get();
    assert.deepEqual(result, { k1: maxSafeInteger, k2: minSafeInteger });
  });

  it("should send a dictionary of int64", async () => {
    const maxSafeInteger = Math.pow(2, 53) - 1;
    const minSafeInteger = -Math.pow(2, 53) + 1;
    await client.int64Value.put({ k1: maxSafeInteger, k2: minSafeInteger });
  });

  it("should get a dictionary of model", async () => {
    const result = await client.modelValue.get();
    assert.deepEqual(result, {
      k1: {
        property: "hello"
      },
      k2: {
        property: "world"
      }
    });
  });

  it("should send a dictionary of model", async () => {
    await client.modelValue.put({
      k1: {
        property: "hello"
      },
      k2: {
        property: "world"
      }
    });
  });

  it("should get a dictionary of nullable numbers", async () => {
    const result = await client.nullableFloatValue.get();
    assert.deepEqual(result, { k1: 1.25, k2: 0.5, k3: null });
  });

  it("should send a dictionary of nullable numbers", async () => {
    await client.nullableFloatValue.put({ k1: 1.25, k2: 0.5, k3: null });
  });

  it("should get a dictionary of recursive model", async () => {
    const result = await client.recursiveModelValue.get();
    assert.deepEqual(result, {
      k1: { property: "hello", children: {} },
      k2: {
        property: "world",
        children: { "k2.1": { property: "inner world" } }
      }
    });
  });

  it("should get a dictionary of string value", async () => {
    const result = await client.stringValue.get();
    assert.deepEqual(result, { k1: "hello", k2: "" });
  });

  it("should send a dictionary of string value", async () => {
    await client.stringValue.put({ k1: "hello", k2: "" });
  });

  it("should get a dictionary of an unknown value", async () => {
    const result = await client.unknownValue.get();
    assert.deepEqual(result, { k1: 1, k2: "hello", k3: null });
  });
});
