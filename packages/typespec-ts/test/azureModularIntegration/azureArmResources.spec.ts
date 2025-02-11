import { assert } from "chai";
import { ResourceManagerResourcesExtensionsResource, ResourceManagerResourcesLocationResource, ResourceManagerResourcesNestedProxyResource, ResourcesClient, ResourceManagerResourcesTopLevelTrackedResource } from "./generated/azure/resource-manager/resources/src/index.js";
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedByType: "User",
    },
  };
  const validResourceGroupExtensionsResource: ResourceManagerResourcesExtensionsResource = {
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedByType: "User",
    },
  };

  const validSubscriptionExtensionsResource: ResourceManagerResourcesExtensionsResource = {
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedByType: "User",
    },
  };

  const validTenantExtensionsResource: ResourceManagerResourcesExtensionsResource = {
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedByType: "User",
    },
  };

  const validResourceExtensionsResource: ResourceManagerResourcesExtensionsResource = {
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
      createdAt: new Date("2024-10-04T00:56:07.442Z"),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date("2024-10-04T00:56:07.442Z"),
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
      .listByResourceGroup("test-rg");
    const items: Array<ResourceManagerResourcesTopLevelTrackedResource> = [];
    for await (const item of result) {
      items.push(item);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.id, validTopLevelResource.id);
    assert.strictEqual(items[0]?.name, validTopLevelResource.name);
    assert.strictEqual(items[0]?.type, validTopLevelResource.type);
  });

  it("should list top level tracked resources by subscription ", async () => {
    const result = await client.topLevel
      .listBySubscription();
    const items: Array<ResourceManagerResourcesTopLevelTrackedResource> = [];
    for await (const item of result) {
      items.push(item);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.id, validTopLevelResource.id);
    assert.strictEqual(items[0]?.name, validTopLevelResource.name);
    assert.strictEqual(items[0]?.type, validTopLevelResource.type);
  });

  // // nested proxy resource
  it("should get nested proxy resource", async () => {
    const result = await client.nested.get(
      "test-rg",
      "top",
      "nested"
    );

    assert.deepStrictEqual<ResourceManagerResourcesNestedProxyResource>(result, validNestedResource);
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
    assert.deepStrictEqual<ResourceManagerResourcesNestedProxyResource>(result, validNestedResource);
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
    assert.deepStrictEqual<ResourceManagerResourcesNestedProxyResource>(result, {
      ...validNestedResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      },
    });
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
      .listByTopLevelTrackedResource("test-rg", "top");

    const items: Array<ResourceManagerResourcesNestedProxyResource> = [];
    for await (const item of result) {
      items.push(item);
    }
    assert.strictEqual(items.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesNestedProxyResource[]>(items, [validNestedResource]);
  });

  // location resource
  it("should get LocationResources ", async () => {
    const result = await client.locationResources.get(LOCATION_EXPECTED, "resource");
    assert.deepStrictEqual<ResourceManagerResourcesLocationResource>(result, validLocationResource);
  });

  it("should createOrUpdate LocationResources ", async () => {
    const result = await client.locationResources.createOrUpdate(LOCATION_EXPECTED, "resource", {
      properties: {
        description: "valid",
      }
    });
    assert.deepStrictEqual<ResourceManagerResourcesLocationResource>(result, validLocationResource);
  });

  it("should update LocationResources ", async () => {
    const result = await client.locationResources.update(LOCATION_EXPECTED, "resource", {
      properties: {
        description: "valid2",
      }
    });

    assert.deepStrictEqual<ResourceManagerResourcesLocationResource>(result, {
      ...validLocationResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      },
    });
  });

  it("should delete LocationResources ", async () => {
    const result = await client.locationResources.delete(LOCATION_EXPECTED, "resource");
    assert.isUndefined(result);
  });

  it("should list LocationResources by subscription ", async () => {
    const result = await client.locationResources.listByLocation(LOCATION_EXPECTED);

    const items: Array<ResourceManagerResourcesLocationResource> = [];
    for await (const item of result) {
      items.push(item);
    }
    assert.strictEqual(items.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesLocationResource[]>(items, [validLocationResource]);
  });

  // extension tracked resource
  it("should get ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension");
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceGroupResult, validResourceGroupExtensionsResource);

    const subscriptionResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension");
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(subscriptionResult, validSubscriptionExtensionsResource);

    const tenantResult = await client.extensionsResources.get("", "extension");
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(tenantResult, validTenantExtensionsResource);

    const resourceResult = await client.extensionsResources.get(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension");
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceResult, validResourceExtensionsResource);
  });

  it("should createOrUpdate ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceGroupResult, validResourceGroupExtensionsResource);

    const subscriptionResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(subscriptionResult, validSubscriptionExtensionsResource);

    const tenantResult = await client.extensionsResources.createOrUpdate("", "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(tenantResult, validTenantExtensionsResource);

    const resourceResult = await client.extensionsResources.createOrUpdate(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension", {
      properties: {
        description: "valid",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceResult, validResourceExtensionsResource);
  });

  it("should update ExtensionsResources ", async () => {

    const resourceGroupResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceGroupResult, {
      ...validResourceGroupExtensionsResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const subscriptionResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(subscriptionResult, {
      ...validSubscriptionExtensionsResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const tenantResult = await client.extensionsResources.update("", "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(tenantResult, {
      ...validTenantExtensionsResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const resourceResult = await client.extensionsResources.update(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`, "extension", {
      properties: {
        description: "valid2",
      },
    });
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource>(resourceResult, {
      ...validResourceExtensionsResource, properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });
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
    const resourceGroupItems: Array<ResourceManagerResourcesExtensionsResource> = [];
    for await (const item of resourceGroupResult) {
      resourceGroupItems.push(item);
    }
    assert.strictEqual(resourceGroupItems.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource[]>(resourceGroupItems, [validResourceGroupExtensionsResource])

    const subscriptionResult = await client.extensionsResources.listByScope(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}`);
    const subscriptionItems: Array<ResourceManagerResourcesExtensionsResource> = [];
    for await (const item of subscriptionResult) {
      subscriptionItems.push(item);
    }
    assert.strictEqual(subscriptionItems.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource[]>(subscriptionItems, [validSubscriptionExtensionsResource]);

    const tenantResult = await client.extensionsResources.listByScope("");
    const tenantItems: Array<ResourceManagerResourcesExtensionsResource> = [];
    for await (const item of tenantResult) {
      tenantItems.push(item);
    }
    assert.strictEqual(tenantItems.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource[]>(tenantItems, [validTenantExtensionsResource]);

    const resourceResult = await client.extensionsResources.listByScope(`subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`);
    const resourceItems: Array<ResourceManagerResourcesExtensionsResource> = [];
    for await (const item of resourceResult) {
      resourceItems.push(item);
    }
    assert.strictEqual(resourceItems.length, 1);
    assert.deepStrictEqual<ResourceManagerResourcesExtensionsResource[]>(resourceItems, [validResourceExtensionsResource]);
  });
});
