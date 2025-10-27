import { assert } from "chai";
import AzureArmMethodSubscriptionIdClientFactory, {
  AzureArmMethodSubscriptionIdClient,
  isUnexpected
} from "./generated/azure/resource-manager/method-subscription-id/src/index.js";

describe("Azure Arm Method Subscription Id Rest Client", () => {
  let client: AzureArmMethodSubscriptionIdClient;

  beforeEach(() => {
    client = AzureArmMethodSubscriptionIdClientFactory({
      endpoint: "http://localhost:3000",
      allowInsecureConnection: true
    });
  });

  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
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
      createdAt: "2023-01-01T00:00:00.000Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2023-01-01T00:00:00.000Z",
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
      createdAt: "2023-01-01T00:00:00.000Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2023-01-01T00:00:00.000Z",
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
      createdAt: "2023-01-01T00:00:00.000Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2023-01-01T00:00:00.000Z",
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
      createdAt: "2023-01-01T00:00:00.000Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2023-01-01T00:00:00.000Z",
      lastModifiedByType: "User"
    }
  };

  // Test operations list
  it("should list operations", async () => {
    const result = await client
      .path("/providers/Azure.ResourceManager.MethodSubscriptionId/operations")
      .get();
    
    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.isDefined(result.body.value);
    assert.isArray(result.body.value);
  });

  // Test SubscriptionResource1 operations
  it("should get subscription resource 1", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s/{subscriptionResource1Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-1"
      )
      .get();

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validSubscriptionResource1.name);
    assert.strictEqual(result.body.type, validSubscriptionResource1.type);
  });

  it("should create or update subscription resource 1", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s/{subscriptionResource1Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-1"
      )
      .put({
        body: {
          properties: {
            description: "Valid subscription resource 1"
          }
        }
      });

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validSubscriptionResource1.name);
  });

  it("should delete subscription resource 1", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s/{subscriptionResource1Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-1"
      )
      .delete();

    assert.strictEqual(result.status, "204");
  });

  // Test SubscriptionResource2 operations
  it("should get subscription resource 2", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s/{subscriptionResource2Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-2"
      )
      .get();

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validSubscriptionResource2.name);
    assert.strictEqual(result.body.type, validSubscriptionResource2.type);
  });

  it("should create or update subscription resource 2", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s/{subscriptionResource2Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-2"
      )
      .put({
        body: {
          properties: {
            configValue: "test-config"
          }
        }
      });

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validSubscriptionResource2.name);
  });

  it("should delete subscription resource 2", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s/{subscriptionResource2Name}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource-2"
      )
      .delete();

    assert.strictEqual(result.status, "204");
  });

  // Test Mixed subscription resource operations
  it("should get mixed subscription resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResources/{subscriptionResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource"
      )
      .get();

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validMixedSubscriptionResource.name);
    assert.strictEqual(result.body.type, validMixedSubscriptionResource.type);
  });

  it("should create or update mixed subscription resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResources/{subscriptionResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource"
      )
      .put({
        body: {
          properties: {
            subscriptionSetting: "test-sub-setting"
          }
        }
      });

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validMixedSubscriptionResource.name);
  });

  it("should delete mixed subscription resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResources/{subscriptionResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        "sub-resource"
      )
      .delete();

    assert.strictEqual(result.status, "204");
  });

  // Test Resource Group resource operations
  it("should get resource group resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources/{resourceGroupResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "rg-resource"
      )
      .get();

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validResourceGroupResource.name);
    assert.strictEqual(result.body.type, validResourceGroupResource.type);
  });

  it("should create or update resource group resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources/{resourceGroupResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "rg-resource"
      )
      .put({
        body: {
          location: LOCATION_EXPECTED,
          properties: {
            resourceGroupSetting: "test-setting"
          }
        }
      });

    if (isUnexpected(result)) {
      throw new Error(`Unexpected status code ${result.status}`);
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, validResourceGroupResource.name);
  });

  it("should delete resource group resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources/{resourceGroupResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "rg-resource"
      )
      .delete();

    assert.strictEqual(result.status, "204");
  });
});
