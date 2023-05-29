import { assert } from "chai";
import { matrix } from "../util/matrix.js";
import DictClientFactory, {
  DictClient
} from "./generated/dictionary/src/index.js";

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
  let client: DictClient;

  beforeEach(() => {
    client = DictClientFactory({
      allowInsecureConnection: true
    });
  });

  matrix([testedTypes], async (params: TypeDetail) => {
    it(`should get a ${params.type} value`, async () => {
      try {
        const result = await client
          .path(`/type/dictionary/${params.type}` as any)
          .get();
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body, params.defaultValue);
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
          .path(`/type/dictionary/${params.type}` as any)
          .put({
            body: property
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
