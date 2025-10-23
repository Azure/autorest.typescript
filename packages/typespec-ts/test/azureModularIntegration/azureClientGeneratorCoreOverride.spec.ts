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
    await client.reorderParameters.reorder("param1", "param2");
  });

  // skip this test case due to issue https://github.com/Azure/autorest.typescript/issues/3540
  it.skip("should group parameters correctly", async () => {
    // Test parameter grouping with @override decorator
    // Verifies that parameters are grouped correctly into GroupParametersOptions
    // Expected query parameters: param1="param1", param2="param2"
    const options = {
      param1: "param1",
      param2: "param2"
    };
    await client.groupParameters.group(options.param1, options.param2);
  });

  it("should require optional parameter correctly", async () => {
    // Test parameter requirement with @override decorator
    // Verifies that optional parameters can be made required via @override
    await client.requireOptionalParameter.requireOptional("param1", "param2");
  });

  it("should remove optional parameter correctly", async () => {
    // Test parameter removal with @override decorator
    // Verifies that optional parameters can be removed via @override
    await client.removeOptionalParameter.removeOptional("param1", {
      param2: "param2"
    });
  });
});
