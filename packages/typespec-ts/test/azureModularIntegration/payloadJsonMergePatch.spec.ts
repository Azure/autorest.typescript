import { assert, describe, it, beforeEach } from "vitest";
import { JsonMergePatchClient } from "./generated/payload/json-merge-patch/src/index.js";

describe("Payload JsonMergePatch Client", () => {
  let client: JsonMergePatchClient;

  beforeEach(() => {
    client = new JsonMergePatchClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should createResource", async () => {
    const body = {
      name: "Madge",
      description: "desc",
      map: {
        key: {
          name: "InnerMadge",
          description: "innerDesc"
        }
      },
      array: [{ name: "InnerMadge", description: "innerDesc" }],
      intValue: 1,
      floatValue: 1.25,
      innerModel: { name: "InnerMadge", description: "innerDesc" },
      intArray: [1, 2, 3]
    };
    const result = await client.createResource(body);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.description, "desc");
    assert.strictEqual(result.map?.["key"]?.name, "InnerMadge");
    assert.strictEqual(result.map?.["key"]?.description, "innerDesc");
    assert.deepEqual(result.array, [
      { name: "InnerMadge", description: "innerDesc" }
    ]);
    assert.strictEqual(result.intValue, 1);
    assert.strictEqual(result.floatValue, 1.25);
    assert.strictEqual(result.innerModel?.name, "InnerMadge");
    assert.strictEqual(result.innerModel?.description, "innerDesc");
    assert.deepEqual(result.intArray, [1, 2, 3]);
  });

  it("should updateResource", async () => {
    const body = {
      description: null,
      map: {
        key: { description: null },
        key2: null
      },
      array: null,
      intValue: null,
      floatValue: null,
      innerModel: null,
      intArray: null
    };
    const result = await client.updateResource(body as any);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.["key"]?.name, "InnerMadge");
  });

  it("should updateOptionalResource", async () => {
    const body = {
      description: null,
      map: {
        key: { description: null },
        key2: null
      },
      array: null,
      intValue: null,
      floatValue: null,
      innerModel: null,
      intArray: null
    };
    const result = await client.updateOptionalResource({ body: body as any });
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.map?.["key"]?.name, "InnerMadge");
  });
});
