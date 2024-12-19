import { assert } from "chai";
import { ArrayClient } from "./generated/type/array/src/index.js";

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
    defaultValue: [43.125]
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
  // {
  //   type: "model",
  //   defaultValue: [{ property: "hello" }, { property: "world" }]
  // },
  {
    type: "nullable-float",
    defaultValue: [1.25, null, 3.0]
  },
  {
    type: "nullable-int32",
    defaultValue: [1, null, 3]
  },
  {
    type: "nullable-string",
    defaultValue: ["hello", null, "world"]
  },
  {
    type: "nullable-boolean",
    defaultValue: [true, null, false]
  }
  // {
  //   type: "nullable-model",
  //   defaultValue: [{ property: "hello" }, null, { property: "world" }]
  // }
];
describe("Array Item-Types Client", () => {
  let client: ArrayClient;

  beforeEach(() => {
    client = new ArrayClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  for (let item of testedTypes) {
    it(`should get ${item.type} value`, async () => {
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
        // case "model":
        //   result = await client.modelValue.get();
        //   break;
        case "nullable-float":
          result = await client.nullableFloatValue.get();
          break;
        case "nullable-int32":
          result = await client.nullableInt32Value.get();
          break;
        case "nullable-string":
          result = await client.nullableStringValue.get();
          break;
        case "nullable-boolean":
          result = await client.nullableBooleanValue.get();
          break;
        // case "nullable-model":
        //   result = await client.nullableModelValue.get();
        //   break;
        default:
          break;
      }
      assert.deepEqual(result, item.defaultValue);
    });
  }
  for (let item of testedTypes) {
    it(`should put ${item.type} vaule`, async () => {
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
        case "nullable-boolean":
          result = await client.nullableBooleanValue.put(item.defaultValue);
          break;
        case "nullable-int32":
          result = await client.nullableInt32Value.put(item.defaultValue);
          break;
        case "nullable-string":
          result = await client.nullableStringValue.put(item.defaultValue);
          break;
        case "nullable-model":
          result = await client.nullableModelValue.put(item.defaultValue);
          break;
        default:
          break;
      }
      assert.isUndefined(result);
    });
  }
});
