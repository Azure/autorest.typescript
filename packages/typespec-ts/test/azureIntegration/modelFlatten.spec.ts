import FlattenPropertyClientFactory, {
  FlattenPropertyClient
} from "./generated/azure/client-generator-core/flatten-property/src/index.js";
import { assert } from "chai";
describe("Flatten Property Rest Client", () => {
  let client: FlattenPropertyClient;

  beforeEach(() => {
    client = FlattenPropertyClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should update and receive model with 1 level of flattening", async () => {
    const result = await client
      .path("/azure/client-generator-core/flatten-property/flattenModel")
      .put({
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
      .path("/azure/client-generator-core/flatten-property/nestedFlattenModel")
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
