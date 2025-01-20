import { assert } from "chai";
import { ResourcesClient } from "./generated/azure/resource-manager/resources/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: ResourcesClient;

  beforeEach(() => {
    client = new ResourcesClient("00000000-0000-0000-0000-000000000000", {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const LOCATION_EXPECTED = "eastus";
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

  const validLocationResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/providers/Azure.ResourceManager.Resources/locations/${LOCATION_EXPECTED}/locationResources/resource`,
    name: "resource",
    type: "Azure.ResourceManager.Resources/locationResources",
    properties: {
      description: "valid",
      provisioningState: "Succeeded",
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User",
    },
  };
  const validResourceGroupExtensionsResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/extensionsResources/extension`,
    name: "extension",
    type: "Azure.ResourceManager.Resources/extensionsResources",
    properties: {
      description: "valid",
      provisioningState: "Succeeded",
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User",
    },
  };

  const validSubscriptionExtensionsResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/providers/Azure.ResourceManager.Resources/extensionsResources/extension`,
    name: "extension",
    type: "Azure.ResourceManager.Resources/extensionsResources",
    properties: {
      description: "valid",
      provisioningState: "Succeeded",
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User",
    },
  };

  const validTenantExtensionsResource = {
    id: `/providers/Azure.ResourceManager.Resources/extensionsResources/extension`,
    name: "extension",
    type: "Azure.ResourceManager.Resources/extensionsResources",
    properties: {
      description: "valid",
      provisioningState: "Succeeded",
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User",
    },
  };

  const validResourceExtensionsResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top/providers/Azure.ResourceManager.Resources/extensionsResources/extension`,
    name: "extension",
    type: "Azure.ResourceManager.Resources/extensionsResources",
    properties: {
      description: "valid",
      provisioningState: "Succeeded",
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User",
    },
  };

  // singleton tracked resource
  it("should get singleton tracked resources by resourceGroup", async () => {
    const result =
      await client.singleton.getByResourceGroup("test-rg");
    assert.strictEqual(result.id, validSingletonResource.id);
    assert.strictEqual(result.name, validSingletonResource.name);
    assert.strictEqual(result.type, validSingletonResource.type);
  });

  it("should update singleton tracked resources", async () => {
    const result = await client.singleton.update("test-rg", {
      location: "eastus",
      properties: {
        description: "valid2"
      }
    });

    assert.strictEqual(result.id, validSingletonResource.id);
    assert.strictEqual(result.name, validSingletonResource.name);
    assert.strictEqual(result.type, validSingletonResource.type);
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(result.properties?.description, "valid2");
  });

  it("should createOrUpdate singleton tracked resources by resourceGroup", async () => {
    const result = await client.singleton.createOrUpdate(
      "test-rg",
      {
        location: "eastus",
        properties: {
          description: "valid"
        }
      }
    );
    assert.strictEqual(result.id, validSingletonResource.id);
    assert.strictEqual(result.name, validSingletonResource.name);
    assert.strictEqual(result.type, validSingletonResource.type);
  });

  it("should list singleton tracked resources by resourceGroup", async () => {
    const result =
      client.singleton.listByResourceGroup("test-rg");
    const items = [];
    for await (const user of result) {
      items.push(user);
    }
    assert.strictEqual(items[0]?.id, validSingletonResource.id);
    assert.strictEqual(items[0]?.name, validSingletonResource.name);
    assert.strictEqual(items[0]?.type, validSingletonResource.type);
  });

  // top level tracked resource
  it("should actionSync top level tracked resources", async () => {
    const result = await client.topLevel.actionSync(
      "test-rg",
      "top",
      {
        message: "Resource action at top level.",
        urgent: true
      }
    );
    assert.isUndefined(result);
  });

  it("should get top level tracked resources", async () => {
    const result = await client.topLevel.get("test-rg", "top");
    assert.strictEqual(result.id, validTopLevelResource.id);
    assert.strictEqual(result.name, validTopLevelResource.name);
    assert.strictEqual(result.type, validTopLevelResource.type);
  });

  it("should create or replace top level tracked resources", async () => {
    const result = await client.topLevel.createOrReplace(
      "test-rg",
      "top",
      {
        location: "eastus",
        properties: {
          description: "valid"
        }
      }
    );
    assert.strictEqual(result.id, validTopLevelResource.id);
    assert.strictEqual(result.name, validTopLevelResource.name);
    assert.strictEqual(result.type, validTopLevelResource.type);
    assert.strictEqual(result.location, validTopLevelResource.location);
    assert.strictEqual(
      result.properties?.description,
      validTopLevelResource.properties?.description
    );
  });

  it.skip("should update top level tracked resources", async () => {
    const result = await client.topLevel.update(
      "test-rg",
      "top",
      {
        location: "eastus",
        properties: {
          description: "valid2"
        }
      }
    );
    assert.strictEqual(result.id, validTopLevelResource.id);
    assert.strictEqual(result.name, validTopLevelResource.name);
    assert.strictEqual(result.type, validTopLevelResource.type);
    assert.strictEqual(result.location, validTopLevelResource.location);
    assert.strictEqual(result.properties?.description, "valid2");
  });

  it("should delete top level tracked resources", async () => {
    const result = await client.topLevel.delete(
      "test-rg",
      "top"
    );
    assert.isUndefined(result);
  });

  it("should list top level tracked resources by resourceGroup ", async () => {
    const result = await client.topLevel
      .listByResourceGroup("test-rg")
      .next();
    assert.strictEqual(result.value.id, validTopLevelResource.id);
    assert.strictEqual(result.value.name, validTopLevelResource.name);
    assert.strictEqual(result.value.type, validTopLevelResource.type);
    assert.strictEqual(result.value.location, validTopLevelResource.location);
  });

  it("should list top level tracked resources by subscription ", async () => {
    const result = await client.topLevel
      .listBySubscription()
      .next();
    assert.strictEqual(result.value.id, validTopLevelResource.id);
    assert.strictEqual(result.value.name, validTopLevelResource.name);
    assert.strictEqual(result.value.type, validTopLevelResource.type);
    assert.strictEqual(result.value.location, validTopLevelResource.location);
  });

  // // nested proxy resource
  it("should get nested proxy resource", async () => {
    const result = await client.nested.get(
      "test-rg",
      "top",
      "nested"
    );

    assert.strictEqual(result.id, validNestedResource.id);
    assert.strictEqual(result.name, validNestedResource.name);
    assert.strictEqual(result.type, validNestedResource.type);
  });

  it("should create or replace nested proxy resource", async () => {
    const result = await client.nested.createOrReplace(
      "test-rg",
      "top",
      "nested",
      {
        properties: {
          description: "valid"
        }
      }
    );
    assert.strictEqual(result.id, validNestedResource.id);
    assert.strictEqual(result.name, validNestedResource.name);
    assert.strictEqual(result.type, validNestedResource.type);
    assert.strictEqual(
      result.properties?.description,
      validNestedResource.properties?.description
    );
  });

  it("should update nested proxy resource", async () => {
    const result = await client.nested.update(
      "test-rg",
      "top",
      "nested",
      {
        properties: {
          description: "valid2"
        }
      }
    );
    assert.strictEqual(result.id, validNestedResource.id);
    assert.strictEqual(result.name, validNestedResource.name);
    assert.strictEqual(result.type, validNestedResource.type);
    assert.strictEqual(result.properties?.description, "valid2");
  });

  it("should delete nested proxy resource", async () => {
    const result = await client.nested.delete(
      "test-rg",
      "top",
      "nested"
    );
    assert.isUndefined(result);
  });

  it("should list nested proxy resource by TopLevelTrackedResource ", async () => {
    const result = await client.nested
      .listByTopLevelTrackedResource("test-rg", "top")
      .next();

    assert.strictEqual(result.value.id, validNestedResource.id);
    assert.strictEqual(result.value.name, validNestedResource.name);
    assert.strictEqual(result.value.type, validNestedResource.type);
  });

  // location resource
  it("should get LocationResources ", async () => {

    const result = await client.locationResources.get(LOCATION_EXPECTED, "resource");

    assert.strictEqual(result.id, validLocationResource.id);
    assert.strictEqual(result.name, validLocationResource.name);
    assert.strictEqual(result.type, validLocationResource.type);
    assert.strictEqual(result.properties?.description, validLocationResource.properties.description);
    assert.strictEqual(result.properties?.provisioningState, validLocationResource.properties.provisioningState);
  });

  it("should createOrUpdate LocationResources ", async () => {
    const result = await client.locationResources.createOrUpdate(LOCATION_EXPECTED, "resource", {
      properties: {
        description: "valid",
      }
    });
    assert.strictEqual(result.id, validLocationResource.id);
    assert.strictEqual(result.name, validLocationResource.name);
    assert.strictEqual(result.type, validLocationResource.type);
    assert.strictEqual(result.properties?.description, validLocationResource.properties.description);
    assert.strictEqual(result.properties?.provisioningState, validLocationResource.properties.provisioningState);
  });

  it("should update LocationResources ", async () => {
    const result = await client.locationResources.update(LOCATION_EXPECTED, "resource", {
      properties: {
        description: "valid2",
      }
    });

    assert.strictEqual(result.id, validLocationResource.id);
    assert.strictEqual(result.name, validLocationResource.name);
    assert.strictEqual(result.type, validLocationResource.type);
    assert.strictEqual(result.properties?.description, "valid2");
    assert.strictEqual(result.properties?.provisioningState, validLocationResource.properties.provisioningState);
  });

  it("should delete LocationResources ", async () => {
    const result = await client.locationResources.delete(LOCATION_EXPECTED, "resource");
    assert.isUndefined(result);
  });

  it("should list LocationResources by subscription ", async () => {
    const result = await client.locationResources.listByLocation(LOCATION_EXPECTED);

    const items = [];
    for await (const item of result) {
      items.push(item);
    }
    assert.strictEqual(items[0]?.id, validLocationResource.id);
    assert.strictEqual(items[0]?.name, validLocationResource.name);
    assert.strictEqual(items[0]?.type, validLocationResource.type);
    assert.strictEqual(items[0]?.properties?.description, validLocationResource.properties.description);
    assert.strictEqual(items[0]?.properties?.provisioningState, validLocationResource.properties.provisioningState);
  });

  // extension tracked resource
  it("should get ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension");
    assert.strictEqual(resourceGroupResult.id, validResourceGroupExtensionsResource.id);
    assert.strictEqual(resourceGroupResult.name, validResourceGroupExtensionsResource.name);
    assert.strictEqual(resourceGroupResult.type, validResourceGroupExtensionsResource.type);
    assert.strictEqual(resourceGroupResult.properties?.description, validResourceGroupExtensionsResource.properties.description);
    assert.strictEqual(resourceGroupResult.properties?.provisioningState, validResourceGroupExtensionsResource.properties.provisioningState);

    const subscriptionResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension");
    assert.strictEqual(subscriptionResult.id, validSubscriptionExtensionsResource.id);
    assert.strictEqual(subscriptionResult.name, validSubscriptionExtensionsResource.name);
    assert.strictEqual(subscriptionResult.type, validSubscriptionExtensionsResource.type);
    assert.strictEqual(subscriptionResult.properties?.description, validSubscriptionExtensionsResource.properties.description);
    assert.strictEqual(subscriptionResult.properties?.provisioningState, validSubscriptionExtensionsResource.properties.provisioningState);

    const tenantResult = await client.extensionsResources.get("", "extension");
    assert.strictEqual(tenantResult.id, validTenantExtensionsResource.id);
    assert.strictEqual(tenantResult.name, validTenantExtensionsResource.name);
    assert.strictEqual(tenantResult.type, validTenantExtensionsResource.type);
    assert.strictEqual(tenantResult.properties?.description, validTenantExtensionsResource.properties.description);
    assert.strictEqual(tenantResult.properties?.provisioningState, validTenantExtensionsResource.properties.provisioningState);

    const resourceResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension");
    assert.strictEqual(resourceResult.id, validResourceExtensionsResource.id);
    assert.strictEqual(resourceResult.id, validResourceExtensionsResource.id);
    assert.strictEqual(resourceResult.name, validResourceExtensionsResource.name);
    assert.strictEqual(resourceResult.type, validResourceExtensionsResource.type);
    assert.strictEqual(resourceResult.properties?.description, validResourceExtensionsResource.properties.description);
    assert.strictEqual(resourceResult.properties?.provisioningState, validResourceExtensionsResource.properties.provisioningState);
  });

  it("should createOrUpdate ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.strictEqual(resourceGroupResult.id, validResourceGroupExtensionsResource.id);
    assert.strictEqual(resourceGroupResult.name, validResourceGroupExtensionsResource.name);
    assert.strictEqual(resourceGroupResult.type, validResourceGroupExtensionsResource.type);
    assert.strictEqual(resourceGroupResult.properties?.description, validResourceGroupExtensionsResource.properties.description);
    assert.strictEqual(resourceGroupResult.properties?.provisioningState, validResourceGroupExtensionsResource.properties.provisioningState);

    const subscriptionResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.strictEqual(subscriptionResult.id, validSubscriptionExtensionsResource.id);
    assert.strictEqual(subscriptionResult.name, validSubscriptionExtensionsResource.name);
    assert.strictEqual(subscriptionResult.type, validSubscriptionExtensionsResource.type);
    assert.strictEqual(subscriptionResult.properties?.description, validSubscriptionExtensionsResource.properties.description);
    assert.strictEqual(subscriptionResult.properties?.provisioningState, validSubscriptionExtensionsResource.properties.provisioningState);

    const tenantResult = await client.extensionsResources.createOrUpdate("", "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.strictEqual(tenantResult.id, validTenantExtensionsResource.id);
    assert.strictEqual(tenantResult.name, validTenantExtensionsResource.name);
    assert.strictEqual(tenantResult.type, validTenantExtensionsResource.type);
    assert.strictEqual(tenantResult.properties?.description, validTenantExtensionsResource.properties.description);
    assert.strictEqual(tenantResult.properties?.provisioningState, validTenantExtensionsResource.properties.provisioningState);

    const resourceResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.strictEqual(resourceResult.id, validResourceExtensionsResource.id);
    assert.strictEqual(resourceResult.name, validResourceExtensionsResource.name);
    assert.strictEqual(resourceResult.type, validResourceExtensionsResource.type);
    assert.strictEqual(resourceResult.properties?.description, validResourceExtensionsResource.properties.description);
    assert.strictEqual(resourceResult.properties?.provisioningState, validResourceExtensionsResource.properties.provisioningState);
  });

  it("should update ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.strictEqual(resourceGroupResult.id, validResourceGroupExtensionsResource.id);
    assert.strictEqual(resourceGroupResult.name, validResourceGroupExtensionsResource.name);
    assert.strictEqual(resourceGroupResult.type, validResourceGroupExtensionsResource.type);
    assert.strictEqual(resourceGroupResult.properties?.description, "valid2");
    assert.strictEqual(resourceGroupResult.properties?.provisioningState, validResourceGroupExtensionsResource.properties.provisioningState);

    const subscriptionResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.strictEqual(subscriptionResult.id, validSubscriptionExtensionsResource.id);
    assert.strictEqual(subscriptionResult.name, validSubscriptionExtensionsResource.name);
    assert.strictEqual(subscriptionResult.type, validSubscriptionExtensionsResource.type);
    assert.strictEqual(subscriptionResult.properties?.description, "valid2");
    assert.strictEqual(subscriptionResult.properties?.provisioningState, validSubscriptionExtensionsResource.properties.provisioningState);

    const tenantResult = await client.extensionsResources.update("", "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.strictEqual(tenantResult.id, validTenantExtensionsResource.id);
    assert.strictEqual(tenantResult.name, validTenantExtensionsResource.name);
    assert.strictEqual(tenantResult.type, validTenantExtensionsResource.type);
    assert.strictEqual(tenantResult.properties?.description, "valid2");
    assert.strictEqual(tenantResult.properties?.provisioningState, validTenantExtensionsResource.properties.provisioningState);

    const resourceResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.strictEqual(resourceResult.id, validResourceExtensionsResource.id);
    assert.strictEqual(resourceResult.name, validResourceExtensionsResource.name);
    assert.strictEqual(resourceResult.type, validResourceExtensionsResource.type);
    assert.strictEqual(resourceResult.properties?.description, "valid2");
    assert.strictEqual(resourceResult.properties?.provisioningState, validResourceExtensionsResource.properties.provisioningState);
  });

  it("should delete ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.delete(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension");
    assert.isUndefined(resourceGroupResult);

    const subscriptionResult = await client.extensionsResources.delete(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension");
    assert.isUndefined(subscriptionResult);

    const tenantResult = await client.extensionsResources.delete("", "extension");
    assert.isUndefined(tenantResult);

    const resourceResult = await client.extensionsResources.delete(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension");
    assert.isUndefined(resourceResult);
  });

  it("should list ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.listByScope(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`);
    const resourceGroupItems = [];
    for await (const item of resourceGroupResult) {
      resourceGroupItems.push(item);
    }
    assert.strictEqual(resourceGroupItems[0]?.id, validResourceGroupExtensionsResource.id);
    assert.strictEqual(resourceGroupItems[0]?.name, validResourceGroupExtensionsResource.name);
    assert.strictEqual(resourceGroupItems[0]?.type, validResourceGroupExtensionsResource.type);
    assert.strictEqual(resourceGroupItems[0]?.properties?.description, validResourceGroupExtensionsResource.properties.description);
    assert.strictEqual(resourceGroupItems[0]?.properties?.provisioningState, validResourceGroupExtensionsResource.properties.provisioningState);

    const subscriptionResult = await client.extensionsResources.listByScope(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`);
    const subscriptionItems = [];
    for await (const item of subscriptionResult) {
      subscriptionItems.push(item);
    }
    assert.strictEqual(subscriptionItems[0]?.id, validSubscriptionExtensionsResource.id);
    assert.strictEqual(subscriptionItems[0]?.name, validSubscriptionExtensionsResource.name);
    assert.strictEqual(subscriptionItems[0]?.type, validSubscriptionExtensionsResource.type);
    assert.strictEqual(subscriptionItems[0]?.properties?.description, validSubscriptionExtensionsResource.properties.description);
    assert.strictEqual(subscriptionItems[0]?.properties?.provisioningState, validSubscriptionExtensionsResource.properties.provisioningState);

    const tenantResult = await client.extensionsResources.listByScope("");
    const tenantItems = [];
    for await (const item of tenantResult) {
      tenantItems.push(item);
    }
    assert.strictEqual(tenantItems[0]?.id, validTenantExtensionsResource.id);
    assert.strictEqual(tenantItems[0]?.name, validTenantExtensionsResource.name);
    assert.strictEqual(tenantItems[0]?.type, validTenantExtensionsResource.type);
    assert.strictEqual(tenantItems[0]?.properties?.description, validTenantExtensionsResource.properties.description);
    assert.strictEqual(tenantItems[0]?.properties?.provisioningState, validTenantExtensionsResource.properties.provisioningState);

    const resourceResult = await client.extensionsResources.listByScope(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`);
    const resourceItems = [];
    for await (const item of resourceResult) {
      resourceItems.push(item);
    }
    assert.strictEqual(resourceItems[0]?.id, validResourceExtensionsResource.id);
    assert.strictEqual(resourceItems[0]?.name, validResourceExtensionsResource.name);
    assert.strictEqual(resourceItems[0]?.type, validResourceExtensionsResource.type);
    assert.strictEqual(resourceItems[0]?.properties?.description, validResourceExtensionsResource.properties.description);
    assert.strictEqual(resourceItems[0]?.properties?.provisioningState, validResourceExtensionsResource.properties.provisioningState);
  });
});
