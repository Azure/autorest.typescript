import ArrayItemTypesClientFactory, {
  ArrayItemTypesClient
} from "./generated/type/array/src/index.js";
import { assert } from "chai";
import { matrix } from "../util/matrix.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
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
    defaultValue: ["2022-08-26T18:38:00Z"]
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
    defaultValue: [{ property: "hello" }, { property: "world" }]
  },
  {
    type: "nullable-float",
    defaultValue: [1.25, null, 3.0]
  },
  {
    type: "nullable-boolean",
    defaultValue: [true, null, false]
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
    type: "nullable-model",
    defaultValue: [{ property: "hello" }, null, { property: "world" }]
  }
];
describe("Array Item-Types Client", () => {
  let client: ArrayItemTypesClient;

  beforeEach(() => {
    client = ArrayItemTypesClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  matrix([testedTypes], async (params: TypeDetail) => {
    it(`should get a ${params.type} value`, async () => {
      const result = await client
        .path(`/type/array/${params.type}` as any)
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, params.defaultValue);
    });

    it(`should put a ${params.type} value`, async () => {
      let property;
      if (params.convertedToFn) {
        property = params.convertedToFn(params.defaultValue);
      } else {
        property = params.defaultValue;
      }
      const result = await client
        .path(`/type/array/${params.type}` as any)
        .put({
          body: property
        });
      assert.strictEqual(result.status, "204");
    });
  });
});
