import { assert } from "chai";
import { AlternateTypeClient } from "./generated/azure/client-generator-core/alternate-type/src/index.js";

describe("AlternateType Client Modular", () => {
  let client: AlternateTypeClient;

  beforeEach(() => {
    client = new AlternateTypeClient({
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
    const result = await client.externalType.getModel();
    assert.deepEqual(result, feature);
  });

  it("should put model in external type operation", async () => {
    await client.externalType.putModel(feature);
  });

  it("should get property in external type operation", async () => {
    const result = await client.externalType.getProperty();
    assert.deepEqual(result, modelWithFeatureProperty);
  });

  it("should put property in external type operation", async () => {
    await client.externalType.putProperty(modelWithFeatureProperty);
  });
});
