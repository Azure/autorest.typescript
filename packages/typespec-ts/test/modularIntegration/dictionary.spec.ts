import { assert } from "chai";
import { DictionaryClient } from "./generated/dictionary/generated/src/index.js";

interface TypeDetail {
  type: string;
  defaultValue: any;
  convertedToFn?: (_: any) => any;
}

const testedTypes: TypeDetail[] = [
  {
    type: "int32",
    defaultValue: { k1: 1, k2: 2 }
  },
  {
    type: "int64",
    defaultValue: { k1: Number.MAX_SAFE_INTEGER, k2: Number.MIN_SAFE_INTEGER }
  },
  {
    type: "boolean",
    defaultValue: { k1: true, k2: false }
  },
  {
    type: "string",
    defaultValue: { k1: "hello", k2: "" }
  },
  {
    type: "float32",
    defaultValue: { k1: 42.42 }
  },
  {
    type: "datetime",
    defaultValue: { k1: "2022-08-26T18:38:00Z" }
  },
  {
    type: "duration",
    defaultValue: { k1: "P123DT22H14M12.011S" }
  },
  {
    type: "unknown",
    defaultValue: { k1: 1, k2: "hello", k3: null }
  },
  {
    type: "model",
    defaultValue: { k1: { property: "hello" }, k2: { property: "world" } }
  },
  {
    type: "model/recursive",
    defaultValue: {
      k1: { property: "hello", children: {} },
      k2: {
        property: "world",
        children: { "k2.1": { property: "inner world" } }
      }
    }
  },
  {
    type: "nullable-float",
    defaultValue: { k1: 1.2, k2: 0.5, k3: null }
  }
];

describe("Dictionary Client", () => {
  let client: DictionaryClient;

  beforeEach(() => {
    client = new DictionaryClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it(`should get a ${testedTypes[0]?.type} value`, async () => {
    try {
      const result = await client.int32Value.get();
      assert.deepEqual(result, testedTypes[0]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[0]?.type} value`, async () => {
    try {
      const result = await client.int32Value.put(testedTypes[0]?.defaultValue);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[1]?.type} value`, async () => {
    try {
      const result = await client.int64Value.get();
      assert.deepEqual(result, testedTypes[1]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[1]?.type} value`, async () => {
    try {
      const result = await client.int64Value.put(testedTypes[1]?.defaultValue);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[2]?.type} value`, async () => {
    try {
      const result = await client.booleanValue.get();
      assert.deepEqual(result, testedTypes[2]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[2]?.type} value`, async () => {
    try {
      const result = await client.booleanValue.put(
        testedTypes[2]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[3]?.type} value`, async () => {
    try {
      const result = await client.stringValue.get();
      assert.deepEqual(result, testedTypes[3]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[3]?.type} value`, async () => {
    try {
      const result = await client.stringValue.put(testedTypes[3]?.defaultValue);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[4]?.type} value`, async () => {
    try {
      const result = await client.float32Value.get();
      assert.deepEqual(result, testedTypes[4]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[4]?.type} value`, async () => {
    try {
      const result = await client.float32Value.put(
        testedTypes[4]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[5]?.type} value`, async () => {
    try {
      const result = await client.datetimeValue.get();
      assert.deepEqual(result, testedTypes[5]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[5]?.type} value`, async () => {
    try {
      const result = await client.datetimeValue.put(
        testedTypes[5]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[6]?.type} value`, async () => {
    try {
      const result = await client.durationValue.get();
      assert.deepEqual(result, testedTypes[6]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[6]?.type} value`, async () => {
    try {
      const result = await client.durationValue.put(
        testedTypes[6]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[7]?.type} value`, async () => {
    try {
      const result = await client.unknownValue.get();
      assert.deepEqual(result, testedTypes[7]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[7]?.type} value`, async () => {
    try {
      const result = await client.unknownValue.put(
        testedTypes[7]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[8]?.type} value`, async () => {
    try {
      const result = await client.modelValue.get();
      assert.deepEqual(result, testedTypes[8]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[8]?.type} value`, async () => {
    try {
      const result = await client.modelValue.put(testedTypes[8]?.defaultValue);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[9]?.type} value`, async () => {
    try {
      const result = await client.recursiveModelValue.get();
      assert.deepEqual(result, testedTypes[9]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should put a ${testedTypes[9]?.type} value`, async () => {
    try {
      const result = await client.recursiveModelValue.put(
        testedTypes[9]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should get a ${testedTypes[10]?.type} value`, async () => {
    try {
      const result = await client.nullableFloatValue.get();
      assert.deepEqual(result, testedTypes[10]?.defaultValue);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it(`should put a ${testedTypes[10]?.type} value`, async () => {
    try {
      const result = await client.nullableFloatValue.put(
        testedTypes[10]?.defaultValue
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
