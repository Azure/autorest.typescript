import { LargeHeaderClient } from "./generated/azure/resource-manager/large-header/src/index.js";
import { assert } from "chai";

describe("Azure ARM Large Header Client", () => {
  let client: LargeHeaderClient;

  beforeEach(() => {
    client = new LargeHeaderClient("00000000-0000-0000-0000-000000000000", {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should handle large headers in LRO with location and azure-asyncoperation polling", async () => {
    const resourceGroupName = "test-rg";
    const largeHeaderName = "header1";

    // Call the LRO operation
    const poller = client.largeHeaders.two6K(
      resourceGroupName,
      largeHeaderName
    );

    // Wait for completion
    const result = await poller.pollUntilDone();

    // Verify final result
    assert.strictEqual(result.succeeded, true);
  });
});
