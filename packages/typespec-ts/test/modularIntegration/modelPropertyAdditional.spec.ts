import { assert } from "chai";
import { AdditionalPropertiesClient } from "./generated/models/propertyAdditional/src/index.js";
describe.only("ModelPropertyAdditional Client", () => {
  let client: AdditionalPropertiesClient;

  beforeEach(() => {
    client = new AdditionalPropertiesClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get extends Different Spread Float value", async () => {
    try {
      const result = await client.extendsDifferentSpreadFloat.get();
      assert.deepEqual(result, {
        name: "abc",
        prop: 43.125,
        derivedProp: 43.125,
      });
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put extends Different Spread Float value", async () => {
    try {
      const result = await client.extendsDifferentSpreadFloat.put(
      {
        name: "abc",
        prop: 43.125,
        derivedProp: 43.125,
      });
      console.log(result)
    } catch (err) {
      assert.fail(err as string);
    }
  });

});
