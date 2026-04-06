import { assert, describe, it, beforeEach } from "vitest";
import { JsonMergePatchClient } from "./generated/payload/json-merge-patch/src/index.js";

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

  const expectedUpdateBody = {
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
    // The generated ResourcePatch type doesn't allow null values, but JSON merge patch
    // requires sending explicit null values to remove fields. Cast is required here.
    const result = await client.updateResource(expectedUpdateBody as any);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.key?.name, "InnerMadge");
  });

  it("should update optional resource", async () => {
    // The generated ResourcePatch type doesn't allow null values, but JSON merge patch
    // requires sending explicit null values to remove fields. Cast is required here.
    const result = await client.updateOptionalResource({
      body: expectedUpdateBody as any,
    });
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.key?.name, "InnerMadge");
  });
});
