import TypePropertyValueTypesClientFactory, {
  TypePropertyValueTypesClient
} from "./generated/models/propertyTypes/src/index.js";
import { assert } from "chai";
import { matrix } from "../util/matrix.js";

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
    defaultValue: "aGVsbG8sIHdvcmxkIQ=="
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
    type: "datetime",
    defaultValue: "2022-08-26T18:38:00Z",
    convertedToFn: (value: string) => new Date(value).toISOString()
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
    defaultValue: { property: "hello" }
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
  }
];
describe("ModelsPropertyTypesClient Rest Client", () => {
  let client: TypePropertyValueTypesClient;

  beforeEach(() => {
    client = TypePropertyValueTypesClientFactory({
      allowInsecureConnection: true
    });
  });

  matrix([testedTypes], async (params: TypeDetail) => {
    it(`should get a ${params.type} value`, async () => {
      try {
        const result = await client
          .path(`/type/property/value-types/${params.type}` as any)
          .get();
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body.property, params.defaultValue);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should put a ${params.type} value`, async () => {
      try {
        let property;
        if (params.convertedToFn) {
          property = params.convertedToFn(params.defaultValue);
        } else {
          property = params.defaultValue;
        }
        const result = await client
          .path(`/type/property/value-types/${params.type}` as any)
          .put({
            body: {
              property
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
