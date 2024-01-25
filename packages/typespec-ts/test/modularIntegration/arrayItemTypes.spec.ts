import { assert } from "chai";
import { ArrayClient } from "./generated/arrays/items/src/index.js";

interface TypeDetail {
  type: string;
  defaultValue: any;
  convertedToFn?: (_: any) => any;
}

const testedTypes: TypeDetail[] = [
  {
    type: "int32",
    defaultValue: [1, 2]
  },
  {
    type: "int64",
    defaultValue: [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  },
  {
    type: "boolean",
    defaultValue: [true, false]
  },
  {
    type: "string",
    defaultValue: ["hello", ""]
  },
  {
    type: "float32",
    defaultValue: [42.42]
  },
  {
    type: "datetime",
    defaultValue: [new Date("2022-08-26T18:38:00Z")]
  },
  {
    type: "duration",
    defaultValue: ["P123DT22H14M12.011S"]
  },
  {
    type: "unknown",
    defaultValue: [1, "hello", null]
  },
  {
    type: "model",
    defaultValue: [
      { property: "hello", children: undefined },
      { property: "world", children: undefined }
    ]
  },
  {
    type: "nullable-float",
    defaultValue: [1.2, null, 3.0]
  }
];
describe("Array Item-Types Client", () => {
  let client: ArrayClient;

  beforeEach(() => {
    client = new ArrayClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  for (let item of testedTypes) {
    it(`should get ${item.type} value`, async () => {
      try {
        let result: any;
        switch (item.type) {
          case "int32":
            result = await client.int32Value.get();
            break;
          case "int64":
            result = await client.int64Value.get();
            break;
          case "boolean":
            result = await client.booleanValue.get();
            break;
          case "string":
            result = await client.stringValue.get();
            break;
          case "float32":
            result = await client.float32Value.get();
            break;
          case "datetime":
            result = await client.datetimeValue.get();
            break;
          case "duration":
            result = await client.durationValue.get();
            break;
          case "unknown":
            result = await client.unknownValue.get();
            break;
          case "model":
            result = await client.modelValue.get();
            break;
          case "nullable-float":
            result = await client.nullableFloatValue.get();
            break;
          default:
            break;
        }
        assert.deepEqual(result, item.defaultValue);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  }
  for (let item of testedTypes) {
    it(`should put ${item.type} vaule`, async () => {
      try {
        let result: any;
        switch (item.type) {
          case "int32":
            result = await client.int32Value.put(item.defaultValue);
            break;
          case "int64":
            result = await client.int64Value.put(item.defaultValue);
            break;
          case "boolean":
            result = await client.booleanValue.put(item.defaultValue);
            break;
          case "string":
            result = await client.stringValue.put(item.defaultValue);
            break;
          case "float32":
            result = await client.float32Value.put(item.defaultValue);
            break;
          case "datetime":
            result = await client.datetimeValue.put(item.defaultValue);
            break;
          case "duration":
            result = await client.durationValue.put(item.defaultValue);
            break;
          case "unknown":
            result = await client.unknownValue.put(item.defaultValue);
            break;
          case "model":
            result = await client.modelValue.put(item.defaultValue);
            break;
          case "nullable-float":
            result = await client.nullableFloatValue.put(item.defaultValue);
            break;
          default:
            break;
        }
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  }
});
