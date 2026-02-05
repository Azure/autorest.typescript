import { assert } from "chai";
import { FlattenPropertyClient } from "./generated/azure/client-generator-core/flatten-property/src/index.js";
describe("Property Flatten Client", () => {
  let client: FlattenPropertyClient;

  beforeEach(() => {
    client = new FlattenPropertyClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("Update and receive model with 1 levels of flattening", async () => {
    const result = await client.putFlattenModel({
      name: "foo",
      description: "bar",
      age: 10
    });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.description, "test");
    assert.strictEqual(result.age, 1);
  });

  it("Update and receive model with 2 levels of flattening", async () => {
    const result = await client.putNestedFlattenModel({
      name: "foo",
      summary: "bar",
      properties: {
        description: "test",
        age: 10
      }
    });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.summary, "test");
    assert.strictEqual(result.properties.description, "foo");
    assert.strictEqual(result.properties.age, 1);
  });

  it("Update and receive model with unknown properties flattening", async () => {
    const result = await client.putFlattenUnknownModel({
      name: "foo"
    });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.properties?.key1, "value1");
    assert.strictEqual(result.properties?.key2, "value2");
  });

  it("Update and receive model with read-only properties flattening", async () => {
    const result = await client.putFlattenReadOnlyModel({
      name: "foo"
    });
    assert.strictEqual(result.name, "foo");
    assert.strictEqual(result.solutionId, "solution1");
    assert.strictEqual(result.title, "Solution Title");
    assert.strictEqual(result.content, "Solution Content");
  });
});
