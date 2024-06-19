import { assert } from "chai";
import { FlattenClient } from "./generated/type/model/flatten/generated/src/index.js";
describe("Model Flatten Client", () => {
  let client: FlattenClient;

  beforeEach(() => {
    client = new FlattenClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("Update and receive model with 1 levels of flattening", async () => {
    const result = await client.putFlattenModel({
      name: "foo",
      properties: {
        description: "bar",
        age: 10
      }
    });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.properties.description, "test");
    assert.strictEqual(result.properties.age, 1);
  });

  it("Update and receive model with 2 levels of flattening", async () => {
    const result = await client.putNestedFlattenModel({
      name: "foo",
      properties: {
        summary: "bar",
        properties: {
          description: "test",
          age: 10
        }
      }
    });
    assert.strictEqual(result.name, "test");
    assert.strictEqual(result.properties.summary, "test");
    assert.strictEqual(result.properties.properties.description, "foo");
    assert.strictEqual(result.properties.properties.age, 1);
  });
});
