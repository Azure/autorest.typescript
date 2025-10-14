import { assert } from "chai";
import { OverrideClient } from "./generated/azure/client-generator-core/override/src/index.js";

describe("Azure ClientGeneratorCore Override Client", () => {
  let client: OverrideClient;

  beforeEach(() => {
    client = new OverrideClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should reorder parameters correctly", async () => {
    // Test parameter reordering with @override decorator
    // Verifies that parameters are reordered correctly in client method signature
    // Expected path: /azure/client-generator-core/override/reorder/{param2}/{param1}
    // Where param1="param1" and param2="param2"
    const result = await client.reorderParameters.reorder("param1", "param2");
    assert.isUndefined(result);
  });

  it("should group parameters correctly", async () => {
    // Test parameter grouping with @override decorator
    // Verifies that parameters are grouped correctly into GroupParametersOptions
    // Expected query parameters: param1="param1", param2="param2"
    const options = {
      param1: "param1",
      param2: "param2"
    };
    const result = await client.groupParameters.group(options.param1,options.param2);
    assert.isUndefined(result);
  });

  it("should require optional parameter correctly", async () => {
    // Test parameter requirement with @override decorator
    // Verifies that optional parameters can be made required via @override
    const result = await client.requireOptionalParameter.requireOptional(
      "param1",
      "param2"
    );
    assert.isUndefined(result);
  });

  it("should remove optional parameter correctly", async () => {
    // Test parameter removal with @override decorator
    // Verifies that optional parameters can be removed via @override
    const result = await client.removeOptionalParameter.removeOptional(
      "param1",
      {
        param2: "param2"
      }
    );
    assert.isUndefined(result);
  });
});
