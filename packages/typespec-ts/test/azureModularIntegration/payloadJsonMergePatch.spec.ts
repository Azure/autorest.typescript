import { assert, describe, it, beforeEach } from "vitest";
import { JsonMergePatchClient, ResourcePatch, InnerModel } from "./generated/payload/json-merge-patch/src/index.js";

/** ResourcePatch with nullable fields for JSON merge patch semantics */
type NullableResourcePatch = {
  description?: string | null;
  map?: Record<string, (InnerModel & { description?: string | null }) | null> | null;
  array?: InnerModel[] | null;
  intValue?: number | null;
  floatValue?: number | null;
  innerModel?: InnerModel | null;
  intArray?: number[] | null;
};

describe("Payload JsonMergePatch", () => {
  let client: JsonMergePatchClient;

  const expectedCreateBody = {
    name: "Madge",
    description: "desc",
    map: {
      key: {
        name: "InnerMadge",
        description: "innerDesc",
      },
    },
    array: [
      {
        name: "InnerMadge",
        description: "innerDesc",
      },
    ],
    intValue: 1,
    floatValue: 1.25,
    innerModel: {
      name: "InnerMadge",
      description: "innerDesc",
    },
    intArray: [1, 2, 3],
  };

  const expectedUpdateBody: NullableResourcePatch = {
    description: null,
    map: {
      key: {
        description: null,
      },
      key2: null,
    },
    array: null,
    intValue: null,
    floatValue: null,
    innerModel: null,
    intArray: null,
  };

  beforeEach(() => {
    client = new JsonMergePatchClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  it("should create resource", async () => {
    const result = await client.createResource(expectedCreateBody);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.description, "desc");
    assert.strictEqual(result.intValue, 1);
    assert.strictEqual(result.floatValue, 1.25);
  });

  it("should update resource", async () => {
    const result = await client.updateResource(expectedUpdateBody as ResourcePatch);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.key?.name, "InnerMadge");
  });

  it("should update optional resource", async () => {
    const result = await client.updateOptionalResource({
      body: expectedUpdateBody as ResourcePatch,
    });
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.key?.name, "InnerMadge");
  });
});
