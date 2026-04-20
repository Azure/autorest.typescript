import { assert, describe, it, beforeEach } from "vitest";
import {
  JsonMergePatchClient,
  Resource,
  ResourcePatch
} from "./generated/payload/json-merge-patch/src/index.js";

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

  const expectedResource: Resource = {
    name: "Madge",
    description: "desc",
    map: {
      key: {
        name: "InnerMadge",
        description: "innerDesc"
      }
    },
    array: [
      {
        name: "InnerMadge",
        description: "innerDesc"
      }
    ],
    intValue: 1,
    floatValue: 1.25,
    innerModel: {
      name: "InnerMadge",
      description: "innerDesc"
    },
    intArray: [1, 2, 3]
  };

  const expectedPatch: ResourcePatch = {
    description: null,
    map: {
      key: {
        description: null
      },
      key2: null
    },
    array: null,
    intValue: null,
    floatValue: null,
    innerModel: null,
    intArray: null
  };

  it("should create resource", async () => {
    const result = await client.createResource(expectedResource);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.description, "desc");
    assert.strictEqual(result.intValue, 1);
    assert.strictEqual(result.floatValue, 1.25);
  });

  it("should update resource", async () => {
    const result = await client.updateResource(expectedPatch);
    assert.strictEqual(result.name, "Madge");
    assert.deepEqual(result.map?.key, { name: "InnerMadge" });
  });

  it("should update optional resource", async () => {
    const result = await client.updateOptionalResource({ body: expectedPatch });
    assert.strictEqual(result.name, "Madge");
    assert.deepEqual(result.map?.key, { name: "InnerMadge" });
  });
});
