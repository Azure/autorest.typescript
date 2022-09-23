import ModelsPropertyTypesClientFactory, {
  ModelsPropertyTypesClient
} from "./generated/models/propertyTypes/src/index.js";
import { assert } from "chai";
import { matrix } from "../util/matrix.js";

interface TypeDetail {
  type: string;
  defaultValue: any;
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
    defaultValue: "2022-08-26T18:38:00Z"
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
    defaultValue: { property: ["hello", "world"] }
  },
  {
    type: "collections/int",
    defaultValue: { property: [1, 2] }
  },
  {
    type: "collections/model",
    defaultValue: [{ property: "hello" }, { property: "world" }]
  },
  {
    type: "dictionary/string",
    defaultValue: { k1: "hello", k2: "world" }
  }
];
describe.only("ModelsPropertyTypesClient Rest Client", () => {
  matrix([testedTypes], async (params: TypeDetail) => {
    let client: ModelsPropertyTypesClient;

    beforeEach(() => {
      client = ModelsPropertyTypesClientFactory({
        allowInsecureConnection: true
      });
    });

    it(`should get a ${params.type} value`, async () => {
      try {
        const result = await client
          .path(`/models/properties/types/${params.type}` as any)
          .get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.property, params.defaultValue);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should put a ${params.type} value`, async () => {
      try {
        const result = await client
          .path(`/models/properties/types/${params.type}` as any)
          .put({
            body: {
              property: params.defaultValue
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
