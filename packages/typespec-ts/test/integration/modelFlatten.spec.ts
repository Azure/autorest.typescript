import FlattenClientFactory, {
  FlattenClient
} from "./generated/type/model/flatten/src/index.js";
import { assert } from "chai";
describe("Flatten Rest Client", () => {
  let client: FlattenClient;

  beforeEach(() => {
    client = FlattenClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should update and receive model with 1 level of flattening", async () => {
    const result = await client.path("/type/model/flatten/flattenModel").put({
      body: {
        name: "foo",
        properties: {
          description: "bar",
          age: 10
        }
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "test");
    assert.strictEqual(result.body.properties.description, "test");
    assert.strictEqual(result.body.properties.age, 1);
  });

  it("should update and receive model with 2 level of flattening", async () => {
    const result = await client
      .path("/type/model/flatten/nestedFlattenModel")
      .put({
        body: {
          name: "foo",
          properties: {
            summary: "bar",
            properties: {
              description: "test",
              age: 10
            }
          }
        }
      });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "test");
    assert.strictEqual(result.body.properties.summary, "test");
    assert.strictEqual(result.body.properties.properties.description, "foo");
    assert.strictEqual(result.body.properties.properties.age, 1);
  });
});
