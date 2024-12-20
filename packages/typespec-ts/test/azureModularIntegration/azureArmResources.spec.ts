import { assert } from "chai";
import { ResourcesClient } from "./generated/azure/resource-manager/resources/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: ResourcesClient;

  beforeEach(() => {
    client = new ResourcesClient("00000000-0000-0000-0000-000000000000", {
      endpoint: "http://localhost:3004",
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
});
