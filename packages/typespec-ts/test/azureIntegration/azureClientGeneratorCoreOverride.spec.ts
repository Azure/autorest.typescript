import { assert } from "chai";
import OverrideClientFactory, {
  OverrideClient
} from "./generated/azure/client-generator-core/override/src/index.js";

describe("Azure Client Generator Core Override", () => {
  let client: OverrideClient;

  beforeEach(() => {
    client = OverrideClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should reorder parameters correctly", async () => {
    // Test parameter reordering with @override decorator
    // Expected path: /azure/client-generator-core/override/reorder/{param2}/{param1}
    // Where param1="param1" and param2="param2"
    const result = await client
      .path(
        "/azure/client-generator-core/override/reorder/{param2}/{param1}",
        "param2", // param2 value
        "param1" // param1 value
      )
      .get();
    assert.strictEqual(result.status, "204");
  });

  // skip this test case due to issue https://github.com/Azure/autorest.typescript/issues/3540
  it.skip("should group parameters correctly", async () => {
    // Test parameter grouping with @override decorator
    // Verifies that parameters are grouped correctly into GroupParametersOptions
    // Expected query parameters: param1="param1", param2="param2"
    const result = await client
      .path("/azure/client-generator-core/override/group")
      .get({
        queryParameters: {
          param1: "param1",
          param2: "param2"
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should require optional parameter", async () => {
    // Test parameter requirement with @override decorator
    // Verifies that optional parameters can be made required via @override
    const result = await client
      .path(
        "/azure/client-generator-core/override/require-optional/{param1}/{param2}",
        "param1", // param1 value
        "param2" // param2 value
      )
      .get();
    assert.strictEqual(result.status, "204");
  });

  it("should remove optional parameter", async () => {
    // Test parameter requirement with @override decorator
    // Verifies that optional parameters can be removed via @override
    const result = await client
      .path(
        "/azure/client-generator-core/override/remove-optional/{param1}",
        "param1" // param1 value
      )
      .get({
        queryParameters: {
          param2: "param2"
        }
      });
    assert.strictEqual(result.status, "204");
  });
});
