import { assert } from "chai";
import { MethodSubscriptionIdClient } from "./generated/azure/resource-manager/method-subscription-id/src/index.js";

describe("Azure Arm Method Subscription Id Modular Client", () => {
  let client: MethodSubscriptionIdClient;

  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";

  beforeEach(() => {
    client = new MethodSubscriptionIdClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const LOCATION_EXPECTED = "eastus";

  const validSubscriptionResource1 = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s/sub-resource-1`,
    name: "sub-resource-1",
    type: "Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s",
    properties: {
      provisioningState: "Succeeded",
      description: "Valid subscription resource 1"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedByType: "User"
    }
  };

  const validSubscriptionResource2 = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s/sub-resource-2`,
    name: "sub-resource-2",
    type: "Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s",
    properties: {
      provisioningState: "Succeeded",
      configValue: "test-config"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedByType: "User"
    }
  };

  const validMixedSubscriptionResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResources/sub-resource`,
    name: "sub-resource",
    type: "Azure.ResourceManager.MethodSubscriptionId/subscriptionResources",
    properties: {
      provisioningState: "Succeeded",
      subscriptionSetting: "test-sub-setting"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedByType: "User"
    }
  };

  const validResourceGroupResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources/rg-resource`,
    name: "rg-resource",
    type: "Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources",
    location: LOCATION_EXPECTED,
    properties: {
      provisioningState: "Succeeded",
      resourceGroupSetting: "test-setting"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2023-01-01T00:00:00.000Z"),
      lastModifiedByType: "User"
    }
  };

  // Test operations list
  it("should list operations", async () => {
    const result = await client.operations.list();
    const operations = [];
    for await (const operation of result) {
      operations.push(operation);
    }
    assert.isArray(operations);
    assert.isTrue(operations.length > 0);
  });

  // Test SubscriptionResource1 operations
  it("should get subscription resource 1", async () => {
    const result = await client.subscriptionResource1Operations.get(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-1"
    );
    assert.strictEqual(result.name, validSubscriptionResource1.name);
    assert.strictEqual(result.type, validSubscriptionResource1.type);
  });

  it("should create or update subscription resource 1", async () => {
    const result = await client.subscriptionResource1Operations.put(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-1",
      {
        properties: {
          description: "Valid subscription resource 1"
        }
      }
    );
    assert.strictEqual(result.name, validSubscriptionResource1.name);
    assert.strictEqual(result.type, validSubscriptionResource1.type);
  });

  it("should delete subscription resource 1", async () => {
    const result = await client.subscriptionResource1Operations.delete(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-1"
    );
    assert.isUndefined(result);
  });

  // Test SubscriptionResource2 operations
  it("should get subscription resource 2", async () => {
    const result = await client.subscriptionResource2Operations.get(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-2"
    );
    assert.strictEqual(result.name, validSubscriptionResource2.name);
    assert.strictEqual(result.type, validSubscriptionResource2.type);
  });

  it("should create or update subscription resource 2", async () => {
    const result = await client.subscriptionResource2Operations.put(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-2",
      {
        properties: {
          configValue: "test-config"
        }
      }
    );
    assert.strictEqual(result.name, validSubscriptionResource2.name);
    assert.strictEqual(result.type, validSubscriptionResource2.type);
  });

  it("should delete subscription resource 2", async () => {
    const result = await client.subscriptionResource2Operations.delete(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource-2"
    );
    assert.isUndefined(result);
  });

  // Test Mixed subscription resource operations
  it("should get mixed subscription resource", async () => {
    const result = await client.subscriptionResourceOperations.get(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource"
    );
    assert.strictEqual(result.name, validMixedSubscriptionResource.name);
    assert.strictEqual(result.type, validMixedSubscriptionResource.type);
  });

  it("should get mixed subscription resource with method-level subscription ID", async () => {
    client = new MethodSubscriptionIdClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
    const result = await client.subscriptionResourceOperations.get(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource"
    );
    assert.strictEqual(result.name, validMixedSubscriptionResource.name);
    assert.strictEqual(result.type, validMixedSubscriptionResource.type);
  });

  it("should create or update mixed subscription resource", async () => {
    const result = await client.subscriptionResourceOperations.put(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource",
      {
        properties: {
          subscriptionSetting: "test-sub-setting"
        }
      }
    );
    assert.strictEqual(result.name, validMixedSubscriptionResource.name);
    assert.strictEqual(result.type, validMixedSubscriptionResource.type);
  });

  it("should delete mixed subscription resource", async () => {
    const result = await client.subscriptionResourceOperations.delete(
      SUBSCRIPTION_ID_EXPECTED,
      "sub-resource"
    );
    assert.isUndefined(result);
  });

  // Test Resource Group resource operations
  it("should get resource group resource", async () => {
    const result = await client.resourceGroupResourceOperations.get(
      RESOURCE_GROUP_EXPECTED,
      "rg-resource"
    );
    assert.strictEqual(result.name, validResourceGroupResource.name);
    assert.strictEqual(result.type, validResourceGroupResource.type);
  });

  it("should create or update resource group resource", async () => {
    const result = await client.resourceGroupResourceOperations.put(
      RESOURCE_GROUP_EXPECTED,
      "rg-resource",
      {
        location: LOCATION_EXPECTED,
        properties: {
          resourceGroupSetting: "test-setting"
        }
      }
    );
    assert.strictEqual(result.name, validResourceGroupResource.name);
    assert.strictEqual(result.type, validResourceGroupResource.type);
  });

  it("should delete resource group resource", async () => {
    const result = await client.resourceGroupResourceOperations.delete(
      RESOURCE_GROUP_EXPECTED,
      "rg-resource"
    );
    assert.isUndefined(result);
  });
});
