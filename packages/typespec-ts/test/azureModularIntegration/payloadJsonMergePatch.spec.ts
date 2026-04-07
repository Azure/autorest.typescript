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
      retryOptions: { maxRetries: 0 }
    });
  });

  const createBody: Resource = {
    name: "Madge",
    description: "desc",
    map: { key: { name: "InnerMadge", description: "innerDesc" } },
    array: [{ name: "InnerMadge", description: "innerDesc" }],
    intValue: 1,
    floatValue: 1.25,
    innerModel: { name: "InnerMadge", description: "innerDesc" },
    intArray: [1, 2, 3]
  };

  const updateBody: ResourcePatch = {
    description: null,
    map: { key: { description: null }, key2: null },
    array: null,
    intValue: null,
    floatValue: null,
    innerModel: null,
    intArray: null
  };

  it("should create resource", async () => {
    const result = await client.createResource(createBody);
    assert.strictEqual(result.name, "Madge");
    assert.strictEqual(result.description, "desc");
    assert.strictEqual(result.intValue, 1);
  });

  it("should update resource", async () => {
    const result = await client.updateResource(updateBody);
    assert.strictEqual(result.name, "Madge");
  });

  it("should update optional resource", async () => {
    const result = await client.updateOptionalResource({ body: updateBody });
    assert.strictEqual(result.name, "Madge");
  });
});
