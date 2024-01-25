import { assert } from "chai";
import { ValueTypesClient } from "./generated/models/propertyTypes/generated/src/index.js";
import { stringToUint8Array } from "@azure/core-util";

interface TypeDetail {
  type: string;
  defaultValue: any;
  convertedToFn?: (_: any) => any;
}

const testedTypes: TypeDetail[] = [
  {
    type: "boolean",
    defaultValue: true
  },
  {
    type: "string",
    defaultValue: "hello"
  },
  {
    type: "bytes",
    defaultValue: stringToUint8Array("aGVsbG8sIHdvcmxkIQ==", "base64")
  },
  {
    type: "int",
    defaultValue: 42
  },
  {
    type: "float",
    defaultValue: 42.42
  },
  {
    type: "decimal",
    defaultValue: 0.33333
  },
  {
    type: "decimal128",
    defaultValue: 0.33333
  },
  {
    type: "datetime",
    defaultValue: new Date("2022-08-26T18:38:00Z"),
  },
  {
    type: "duration",
    defaultValue: "P123DT22H14M12.011S"
  },
  {
    type: "enum",
    defaultValue: "ValueOne"
  },
  {
    type: "extensible-enum",
    defaultValue: "UnknownValue"
  },
  {
    type: "model",
    defaultValue: {property: "hello"}
  },
  {
    type: "collections/string",
    defaultValue: ["hello", "world"]
  },
  {
    type: "collections/int",
    defaultValue: [1, 2]
  },
  {
    type: "collections/model",
    defaultValue: [{ property: "hello" }, { property: "world" }]
  },
  {
    type: "dictionary/string",
    defaultValue: { k1: "hello", k2: "world" }
  },
  {
    type: "never",
    defaultValue: undefined
  },
  {
    type: "unknown/string",
    defaultValue: "hello"
  },
  {
    type: "unknown/int",
    defaultValue: 42
  },
  {
    type: "unknown/dict",
    defaultValue: { k1: "hello", k2: 42 }
  },
  {
    type: "unknown/array",
    defaultValue: ["hello", "world"]
  },
  {
    type: "string/literal",
    defaultValue: "hello"
  },
  {
    type: "int/literal",
    defaultValue: 42
  },
  {
    type: "float/literal",
    defaultValue: 42.42
  },
  {
    type: "boolean/literal",
    defaultValue: true
  },
  {
    type: "union/string/literal",
    defaultValue: "world"
  },
  {
    type: "union/int/literal",
    defaultValue: 42
  },
  {
    type: "union/float/literal",
    defaultValue: 43.43
  }
];

describe("ModelsPropertyTypesClient Rest Client", () => {
  let client: ValueTypesClient;

  beforeEach(() => {
    client = new ValueTypesClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  for (let item of testedTypes) {
    it(`should get a ${item.type} value`, async () => {
      try {
        let result: any;
        if (item.convertedToFn) {
          item.defaultValue = item.convertedToFn(item.defaultValue);
        } else {
          item.defaultValue = item.defaultValue;
        }
        switch (item.type) {
          case "boolean":
            result = await client.boolean.get();
            break;
          case "string":
            result = await client.string.get();
            break;
          case "bytes":
            result = await client.bytes.get();
            break;
          case "int":
            result = await client.int.get();
            break;
          case "float":
            result = await client.float.get();
            break;
          case "decimal":
            result = await client.decimal.get();
            break;
          case "decimal128":
            result = await client.decimal128.get();
            break;
          case "datetime":
            result = await client.datetime.get();
            break;
          case "duration":
            result = await client.duration.get();
            break;
          case "enum":
            result = await client.enum.get();
            break;
          case "extensible-enum":
            result = await client.extensibleEnum.get();
            break;
          case "model":
            result = await client.model.get();
            break;
          case "collections/string":
            result = await client.collectionsString.get();
            break;
          case "collections/int":
            result = await client.collectionsInt.get();
            break;
          case "collections/model":
            result = await client.collectionsModel.get();
            break;
          case "dictionary/string":
            result = await client.dictionaryString.get();
            break;
          case "never":
            result = await client.never.get();
            break;
          case "unknown/string":
            result = await client.unknownString.get();
            break;
          case "unknown/int":
            result = await client.unknownInt.get();
            break;
          case "unknown/dict":
            result = await client.unknownDict.get();
            break;
          case "unknown/array":
            result = await client.unknownArray.get();
            break;
          case "string/literal":
            result = await client.stringLiteral.get();
            break;
          case "int/literal":
            result = await client.intLiteral.get();
            break;
          case "float/literal":
            result = await client.floatLiteral.get();
            break;
          case "boolean/literal":
            result = await client.booleanLiteral.get();
            break;
          case "union/string/literal":
            result = await client.unionStringLiteral.get();
            break;
          case "union/int/literal":
            result = await client.unionIntLiteral.get();
            break;
          case "union/float/literal":
            result = await client.unionFloatLiteral.get();
            break;
          default:
            throw new Error(`Unknown type ${item.type}`);
        }
        console.log(result);
        assert.deepEqual(result.property, item.defaultValue);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  }
  for (let item of testedTypes) {
    it(`should put a ${item.type} value`, async () => {
      try {
        let result: any;
        if (item.convertedToFn) {
          item.defaultValue = item.convertedToFn(item.defaultValue);
        } else {
          item.defaultValue = item.defaultValue;
        }
        switch (item.type) {
          case "boolean":
            result = await client.boolean.put({ property: item.defaultValue });
            break;
          case "string":
            result = await client.string.put({ property: item.defaultValue });
            break;
          case "bytes":
            result = await client.bytes.put({
              property: item.defaultValue
            });
            break;
          case "int":
            result = await client.int.put({ property: item.defaultValue });
            break;
          case "float":
            result = await client.float.put({ property: item.defaultValue });
            break;
          case "decimal":
            result = await client.decimal.put({ property: item.defaultValue });
            break;
          case "decimal128":
            result = await client.decimal128.put({
              property: item.defaultValue
            });
            break;
          case "datetime":
            result = await client.datetime.put({
              property: item.defaultValue
            });
            break;
          case "duration":
            result = await client.duration.put({
              property: item.defaultValue
            });
            break;
          case "enum":
            result = await client.enum.put({ property: item.defaultValue });
            break;
          case "extensible-enum":
            result = await client.extensibleEnum.put({
              property: item.defaultValue
            });
            break;
          case "model":
            result = await client.model.put({
              property: item.defaultValue
            });
            break;
          case "collections/string":
            result = await client.collectionsString.put({
              property: item.defaultValue
            });
            break;
          case "collections/int":
            result = await client.collectionsInt.put({
              property: item.defaultValue
            });
            break;
          case "collections/model":
            result = await client.collectionsModel.put({
              property: item.defaultValue
            });
            break;
          case "dictionary/string":
            result = await client.dictionaryString.put({
              property: item.defaultValue
            });
            break;
          case "never":
            result = await client.never.put({
              property: item.defaultValue as never
            });
            break;
          case "unknown/string":
            result = await client.unknownString.put({
              property: item.defaultValue
            });
            break;
          case "unknown/int":
            result = await client.unknownInt.put({
              property: item.defaultValue
            });
            break;
          case "unknown/dict":
            result = await client.unknownDict.put({
              property: item.defaultValue
            });
            break;
          case "unknown/array":
            result = await client.unknownArray.put({
              property: item.defaultValue
            });
            break;
          case "string/literal":
            result = await client.stringLiteral.put({
              property: item.defaultValue
            });
            break;
          case "int/literal":
            result = await client.intLiteral.put({
              property: item.defaultValue
            });
            break;
          case "float/literal":
            result = await client.floatLiteral.put({
              property: item.defaultValue
            });
            break;
          case "boolean/literal":
            result = await client.booleanLiteral.put({
              property: item.defaultValue
            });
            break;
          case "union/string/literal":
            result = await client.unionStringLiteral.put({
              property: item.defaultValue
            });
            break;
          case "union/int/literal":
            result = await client.unionIntLiteral.put({
              property: item.defaultValue
            });
            break;
          case "union/float/literal":
            result = await client.unionFloatLiteral.put({
              property: item.defaultValue
            });
            break;
          default:
            throw new Error(`Unknown type ${item.type}`);
        }
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  }
});
