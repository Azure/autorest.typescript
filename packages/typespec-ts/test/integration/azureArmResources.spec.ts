import { assert } from "chai";
import AzureArmResourceClientFactory, {
  AzureArmResourceClient,
  getLongRunningPoller,
  isUnexpected,
  paginate
} from "./generated/azure/resource-manager/resources/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: AzureArmResourceClient;

  beforeEach(() => {
    client = AzureArmResourceClientFactory({
      endpoint: "http://localhost:3000",
      allowInsecureConnection: true
    });
  });
  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const validTopLevelResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
    name: "top",
    type: "Azure.ResourceManager.Resources/topLevelTrackedResources",
    location: "eastus",
    properties: {
      provisioningState: "Succeeded",
      description: "valid"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date(),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date(),
      lastModifiedByType: "User"
    }
  };

  const validNestedResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top/nestedProxyResources/nested`,
    name: "nested",
    type: "Azure.ResourceManager.Resources/topLevelTrackedResources/top/nestedProxyResources",
    properties: {
      provisioningState: "Succeeded",
      description: "valid"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date(),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date(),
      lastModifiedByType: "User"
    }
  };

  const validSingletonResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/singletonTrackedResources/default`,
    name: "default",
    type: "Azure.ResourceManager.Resources/singletonTrackedResources",
    location: "eastus",
    properties: {
      provisioningState: "Succeeded",
      description: "valid"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date(),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date(),
      lastModifiedByType: "User"
    }
  };
  // singleton tracked resource
  it("should get singleton tracked resources by resourceGroup", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources/default",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .get();

    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, validSingletonResource.id);
    assert.strictEqual(result.body.name, validSingletonResource.name);
    assert.strictEqual(result.body.type, validSingletonResource.type);
  });

  it("should createOrUpdate singleton tracked resources", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources/default",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .put({
        body: {
          location: "eastus",
          properties: {
            description: "valid"
          }
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validSingletonResource.id);
    assert.strictEqual(result.body.name, validSingletonResource.name);
    assert.strictEqual(result.body.type, validSingletonResource.type);
  });

  it("should update singleton tracked resources", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources/default",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .patch({
        body: {
          location: "eastus2",
          properties: {
            description: "valid2"
          }
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validSingletonResource.id);
    assert.strictEqual(result.body.name, validSingletonResource.name);
    assert.strictEqual(result.body.type, validSingletonResource.type);
    assert.strictEqual(result.body.location, "eastus2");
    assert.strictEqual(result.body.properties?.description, "valid2");
  });

  it("should list singleton tracked resources by resourceGroup", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }
    const iter = paginate(client, initialResponse);
    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(initialResponse.status, "200");
    assert.strictEqual(result[0]?.id, validSingletonResource.id);
    assert.strictEqual(result[0]?.name, validSingletonResource.name);
    assert.strictEqual(result[0]?.type, validSingletonResource.type);
  });

  // top level tracked resource
  it("should actionSync top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .post({
        body: {
          message: "Resource action at top level.",
          urgent: true
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should get top level tracked resources", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .get();
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validTopLevelResource.id);
    assert.strictEqual(result.body.name, validTopLevelResource.name);
    assert.strictEqual(result.body.type, validTopLevelResource.type);
  });
  it("should create or replace top level tracked resources", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .put({
        body: {
          location: "eastus",
          properties: {
            description: "valid"
          }
        }
      });

    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validTopLevelResource.id);
    assert.strictEqual(result.body.name, validTopLevelResource.name);
    assert.strictEqual(result.body.type, validTopLevelResource.type);
    assert.strictEqual(result.body.location, validTopLevelResource.location);
    assert.strictEqual(
      result.body.properties?.description,
      validTopLevelResource.properties?.description
    );
  });
  it.skip("should update top level tracked resources", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .patch({
        body: {
          location: "eastus",
          properties: {
            description: "valid2"
          }
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validTopLevelResource.id);
    assert.strictEqual(result.body.name, validTopLevelResource.name);
    assert.strictEqual(result.body.type, validTopLevelResource.type);
    assert.strictEqual(result.body.location, validTopLevelResource.location);
    assert.strictEqual(result.body.properties?.description, "valid2");
  });
  it("should delete top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .delete({
        body: {
          properties: {
            description: "valid2"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });
  it("should list top level tracked resources by resourceGroup ", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }
    const iter = paginate(client, initialResponse);
    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(initialResponse.status, "200");
    assert.strictEqual(result[0]?.id, validTopLevelResource.id);
    assert.strictEqual(result[0]?.name, validTopLevelResource.name);
    assert.strictEqual(result[0]?.type, validTopLevelResource.type);
    assert.strictEqual(result[0]?.location, validTopLevelResource.location);
  });
  it("should list top level tracked resources by subscription ", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources",
        "00000000-0000-0000-0000-000000000000"
      )
      .get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }
    const iter = paginate(client, initialResponse);
    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(initialResponse.status, "200");
    assert.strictEqual(result[0]?.id, validTopLevelResource.id);
    assert.strictEqual(result[0]?.name, validTopLevelResource.name);
    assert.strictEqual(result[0]?.type, validTopLevelResource.type);
    assert.strictEqual(result[0]?.location, validTopLevelResource.location);
  });

  // nested proxy resource
  it("should get nested proxy resource", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .get();
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validNestedResource.id);
    assert.strictEqual(result.body.name, validNestedResource.name);
    assert.strictEqual(result.body.type, validNestedResource.type);
  });

  it("should create or replace nested proxy resource", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .put({
        body: {
          properties: {
            description: "valid"
          }
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validNestedResource.id);
    assert.strictEqual(result.body.name, validNestedResource.name);
    assert.strictEqual(result.body.type, validNestedResource.type);
    assert.strictEqual(
      result.body.properties?.description,
      validNestedResource.properties?.description
    );
  });

  it("should update nested proxy resource", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .patch({
        body: {
          properties: {
            description: "valid2"
          }
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "200");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.body.id, validNestedResource.id);
    assert.strictEqual(result.body.name, validNestedResource.name);
    assert.strictEqual(result.body.type, validNestedResource.type);
    assert.strictEqual(result.body.properties?.description, "valid2");
  });

  it("should delete nested proxy resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .delete();
    assert.strictEqual(result.status, "204");
  });

  it("should list nested proxy resource by TopLevelTrackedResource ", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }
    const iter = paginate(client, initialResponse);
    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(initialResponse.status, "200");
    assert.strictEqual(result[0]?.id, validNestedResource.id);
    assert.strictEqual(result[0]?.name, validNestedResource.name);
    assert.strictEqual(result[0]?.type, validNestedResource.type);
  });
});
