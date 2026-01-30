import { assert } from "chai";
import AlternateTypeClientFactory, {
  AlternateTypeClient
} from "./generated/azure/client-generator-core/alternate-type/src/index.js";

describe("AlternateType Client", () => {
  let client: AlternateTypeClient;

  beforeEach(() => {
    client = AlternateTypeClientFactory({
      allowInsecureConnection: true
    });
  });

  const feature = {
    type: "Feature" as const,
    geometry: {
      type: "Point",
      coordinates: [-122.25, 37.87]
    },
    properties: {
      name: "A single point of interest",
      category: "landmark",
      elevation: 100
    },
    id: "feature-1"
  };

  const modelWithFeatureProperty = {
    feature,
    additionalProperty: "extra"
  };

  it("should get model in external type operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/alternate-type/external/model")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, feature);
  });

  it("should put model in external type operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/alternate-type/external/model")
      .put({ body: feature });
    assert.strictEqual(result.status, "204");
  });

  it("should get property in external type operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/alternate-type/external/property")
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, modelWithFeatureProperty);
  });

  it("should put property in external type operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/alternate-type/external/property")
      .put({ body: modelWithFeatureProperty });
    assert.strictEqual(result.status, "204");
  });
});
