import { assert } from "chai";
import AzureArmLargeHeaderClientFactory, {
  AzureArmLargeHeaderClient,
  getLongRunningPoller,
  isUnexpected
} from "./generated/azure/resource-manager/large-header/src/index.js";

describe("Azure ARM Large Header Rest Client", () => {
  let client: AzureArmLargeHeaderClient;

  beforeEach(() => {
    client = AzureArmLargeHeaderClientFactory({
      endpoint: "http://localhost:3000",
      allowInsecureConnection: true
    });
  });

  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const LARGE_HEADER_NAME = "header1";

  // skipping the test as it requires a optional parameter to be set
  it.skip("should handle large headers in LRO operations", async () => {
    // Test LRO POST operation with large headers (> 6KB each, > 12KB total)
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.LargeHeader/largeHeaders/{largeHeaderName}/two6k",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        LARGE_HEADER_NAME
      )
      .post({});

    // Verify initial response
    assert.strictEqual(initialResponse.status, "202");

    // Verify headers contain large userContext parameter (6KB string)
    const locationHeader = initialResponse.headers.location as string;
    const azureAsyncOperationHeader = initialResponse.headers[
      "azure-asyncoperation"
    ] as string;

    assert.include(locationHeader, "userContext=");
    assert.include(locationHeader, "operations/post_location");
    assert.include(azureAsyncOperationHeader, "userContext=");
    assert.include(azureAsyncOperationHeader, "operations/post_aao");

    // Each header should be > 6KB due to the userContext parameter
    assert.isAbove(locationHeader.length, 6000);
    assert.isAbove(azureAsyncOperationHeader.length, 6000);

    // Total header size should be > 12KB
    const totalHeaderSize =
      locationHeader.length + azureAsyncOperationHeader.length;
    assert.isAbove(totalHeaderSize, 12000);

    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }

    // Test LRO polling with large headers
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();

    // Verify final result
    assert.strictEqual(result.status, "200");
    if (isUnexpected(result)) {
      const error = `Unexpected status code ${result.status}`;
      assert.fail(error);
    }

    // Verify final response body
    assert.strictEqual(result.body.succeeded, true);
  });
});
