import { assert } from "chai";
import TypePropertyNullableClientFactory, {
  NullableClient
} from "./generated/type/property/nullable/src/index.js";
import { matrix } from "../util/matrix.js";

interface TypeDetail {
  type: string;
  defaultValue: any;
  convertedToFn?: (_: any) => any;
}

const testedTypes: TypeDetail[] = [
  {
    type: "string",
    defaultValue: "hello"
  },
  {
    type: "bytes",
    defaultValue: "aGVsbG8sIHdvcmxkIQ=="
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
    type: "collections/bytes",
    defaultValue: ["aGVsbG8sIHdvcmxkIQ==", "aGVsbG8sIHdvcmxkIQ=="]
  },
  {
    type: "collections/model",
    defaultValue: [{ property: "hello" }, { property: "world" }]
  },
  {
    type: "collections/string",
    defaultValue: ["hello", "world"]
  }
];
describe("ModelsPropertyNullableClient Rest Client", () => {
  let client: NullableClient;

  beforeEach(() => {
    client = TypePropertyNullableClientFactory({
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  matrix([testedTypes], async (params: TypeDetail) => {
    it(`should get a null value for nullable ${params.type}`, async () => {
      const result = await client
        .path(`/type/property/nullable/${params.type}/null` as any)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.nullableProperty, null);
      assert.deepEqual(result.body.requiredProperty, "foo");
    });

    it(`should get a non-null value for nullable ${params.type}`, async () => {
      const result = await client
        .path(`/type/property/nullable/${params.type}/non-null` as any)
        .get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body.nullableProperty, params.defaultValue);
      assert.deepEqual(result.body.requiredProperty, "foo");
    });

    it(`should patch a null value for nullable ${params.type}`, async () => {
      const result = await client
        .path(`/type/property/nullable/${params.type}/null` as any)
        .patch({
          contentType: "application/merge-patch+json",
          body: {
            requiredProperty: "foo",
            nullableProperty: null
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should patch a non-null value for nullable ${params.type}`, async () => {
      let property;
      if (params.convertedToFn) {
        property = params.convertedToFn(params.defaultValue);
      } else {
        property = params.defaultValue;
      }
      const result = await client
        .path(`/type/property/nullable/${params.type}/non-null` as any)
        .patch({
          contentType: "application/merge-patch+json",
          body: {
            requiredProperty: "foo",
            nullableProperty: property || null
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });
});
