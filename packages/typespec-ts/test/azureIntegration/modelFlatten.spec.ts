import FlattenPropertyClientFactory, {
  FlattenPropertyClient
} from "./generated/azure/client-generator-core/flatten-property/src/index.js";
import { assert } from "chai";
describe("Flatten Property Rest Client", () => {
  let client: FlattenPropertyClient;

  beforeEach(() => {
    client = FlattenPropertyClientFactory({
      allowInsecureConnection: true
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

  it("should update and receive model with unknown flatten property", async () => {
    const result = await client
      .path("/azure/client-generator-core/flatten-property/flattenUnknownModel")
      .put({
        body: {
          name: "foo"
        }
      });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "test");
    assert.deepEqual(result.body.properties, {
      key1: "value1",
      key2: "value2"
    });
  });

  it("should update and receive model with all readonly flatten properties", async () => {
    const result = await client
      .path(
        "/azure/client-generator-core/flatten-property/flattenReadOnlyModel"
      )
      .put({
        body: {
          name: "foo"
        } as any
      });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "foo");
    assert.strictEqual((result.body as any).solutionId, "solution1");
    assert.strictEqual((result.body as any).title, "Solution Title");
    assert.strictEqual((result.body as any).content, "Solution Content");
  });
});
