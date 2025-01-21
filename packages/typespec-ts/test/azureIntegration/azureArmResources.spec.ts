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
          location: "eastus",
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
    assert.strictEqual(result.body.location, "eastus");
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

  // location resource
  it("should get LocationResources ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/locations/{location}/locationResources/{locationResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        LOCATION_EXPECTED,
        "resource"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, validLocationResource);
  });

  it("should createOrUpdate LocationResources ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/locations/{location}/locationResources/{locationResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        LOCATION_EXPECTED,
        "resource"
      )
      .put({
        body: {
          properties: {
            description: "valid",
          }
        }
      });
    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, validLocationResource);
  });

  it("should update LocationResources ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/locations/{location}/locationResources/{locationResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        LOCATION_EXPECTED,
        "resource"
      )
      .patch({
        body: {
          properties: {
            description: "valid2",
          }
        }
      });
    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, {
      ...validLocationResource,
      properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      },
    });
  });

  it("should delete LocationResources ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/locations/{location}/locationResources/{locationResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        LOCATION_EXPECTED,
        "resource"
      )
      .delete();
    assert.strictEqual(result.status, "204");
    assert.isUndefined(result.body);
  });

  it("should list LocationResources by subscription ", async () => {
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/locations/{location}/locationResources",
        SUBSCRIPTION_ID_EXPECTED,
        LOCATION_EXPECTED
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
    assert.deepStrictEqual(result, [validLocationResource]);
  });

  // extension tracked resource
  it("should get ExtensionsResources ", async () => {
    const resourceGroupResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`,
        allowReserved: true
      },
      "extension"
    )
      .get();
    assert.strictEqual(resourceGroupResult.status, "200");
    assert.deepStrictEqual(resourceGroupResult.body, validResourceGroupExtensionsResource);

    const subscriptionResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}`,
        allowReserved: true
      },
      "extension"
    )
      .get();
    assert.strictEqual(subscriptionResult.status, "200");
    assert.deepStrictEqual(subscriptionResult.body, validSubscriptionExtensionsResource);

    const tenantResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: "",
        allowReserved: true
      },
      "extension"
    )
      .get();
    assert.strictEqual(tenantResult.status, "200");
    assert.deepStrictEqual(tenantResult.body, validTenantExtensionsResource);

    const resourceResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
        allowReserved: true
      },
      "extension"
    )
      .get();
    assert.strictEqual(resourceResult.status, "200");
    assert.deepStrictEqual(resourceResult.body, validResourceExtensionsResource);
  });

  it("should createOrUpdate ExtensionsResources ", async () => {
    const resourceGroupResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`,
          allowReserved: true
        },
        "extension"
      )
      .put({
        body: {
          properties: {
            description: "valid",
          }
        }
      });
    assert.strictEqual(resourceGroupResult.status, "200");
    assert.deepStrictEqual(resourceGroupResult.body, validResourceGroupExtensionsResource);

    const subscriptionResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}`,
          allowReserved: true
        },
        "extension"
      )
      .put({
        body: {
          properties: {
            description: "valid",
          }
        }
      });
    assert.strictEqual(subscriptionResult.status, "200");
    assert.deepStrictEqual(subscriptionResult.body, validSubscriptionExtensionsResource);

    const tenantResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: "",
          allowReserved: true
        },
        "extension"
      )
      .put({
        body: {
          properties: {
            description: "valid",
          }
        }
      });
    assert.strictEqual(tenantResult.status, "200");
    assert.deepStrictEqual(tenantResult.body, validTenantExtensionsResource);

    const resourceResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
          allowReserved: true
        },
        "extension"
      )
      .put({
        body: {
          properties: {
            description: "valid",
          }
        }
      });
    assert.strictEqual(resourceResult.status, "200");
    assert.deepStrictEqual(resourceResult.body, validResourceExtensionsResource);
  });

  it("should update ExtensionsResources ", async () => {
    const resourceGroupResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`,
          allowReserved: true
        },
        "extension"
      )
      .patch({
        body: {
          properties: {
            description: "valid2",
          }
        }
      });
    assert.strictEqual(resourceGroupResult.status, "200");
    assert.deepStrictEqual(resourceGroupResult.body, {
      ...validResourceGroupExtensionsResource,
      properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const subscriptionResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}`,
          allowReserved: true
        },
        "extension"
      )
      .patch({
        body: {
          properties: {
            description: "valid2",
          }
        }
      });
    assert.strictEqual(subscriptionResult.status, "200");
    assert.deepStrictEqual(subscriptionResult.body, {
      ...validSubscriptionExtensionsResource,
      properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const tenantResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: "",
          allowReserved: true
        },
        "extension"
      )
      .patch({
        body: {
          properties: {
            description: "valid2",
          }
        }
      });
    assert.strictEqual(tenantResult.status, "200");
    assert.deepStrictEqual(tenantResult.body, {
      ...validTenantExtensionsResource,
      properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });

    const resourceResult = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
          allowReserved: true
        },
        "extension"
      )
      .patch({
        body: {
          properties: {
            description: "valid2",
          }
        }
      });
    assert.strictEqual(resourceResult.status, "200");
    assert.deepStrictEqual(resourceResult.body, {
      ...validResourceExtensionsResource,
      properties: {
        provisioningState: "Succeeded",
        description: "valid2",
      }
    });
  });

  it("should delete ExtensionsResources ", async () => {
    const resourceGroupResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`,
        allowReserved: true
      },
      "extension"
    )
      .delete();
    assert.strictEqual(resourceGroupResult.status, "204");
    assert.isUndefined(resourceGroupResult.body);

    const subscriptionResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}`,
        allowReserved: true
      },
      "extension"
    )
      .delete();
    assert.strictEqual(subscriptionResult.status, "204");
    assert.isUndefined(subscriptionResult.body);

    const tenantResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: "",
        allowReserved: true
      },
      "extension"
    )
      .delete();
    assert.strictEqual(tenantResult.status, "204");
    assert.isUndefined(tenantResult.body);

    const resourceResult = await client.path(
      "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources/{extensionsResourceName}",
      {
        value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
        allowReserved: true
      },
      "extension"
    )
      .delete();
    assert.strictEqual(resourceResult.status, "204");
    assert.isUndefined(resourceResult.body);
  });

  it("should list ExtensionsResources ", async () => {
    const resourceGroupResponse = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}`,
          allowReserved: true
        }
      )
      .get();
    if (isUnexpected(resourceGroupResponse)) {
      const error = `Unexpected status code ${resourceGroupResponse.status}`;
      assert.fail(error);
    }
    const resourceGroupIter = paginate(client, resourceGroupResponse);
    let resourceGroupResult = [];
    for await (const item of resourceGroupIter) {
      resourceGroupResult.push(item);
    }
    assert.strictEqual(resourceGroupResponse.status, "200");
    assert.deepStrictEqual(resourceGroupResult, [validResourceGroupExtensionsResource]);

    const subscriptionResponse = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}`,
          allowReserved: true
        }
      )
      .get();
    if (isUnexpected(subscriptionResponse)) {
      const error = `Unexpected status code ${subscriptionResponse.status}`;
      assert.fail(error);
    }
    const subscriptionIter = paginate(client, subscriptionResponse);
    let subscriptionIterResult = [];
    for await (const item of subscriptionIter) {
      subscriptionIterResult.push(item);
    }
    assert.strictEqual(subscriptionResponse.status, "200");
    assert.deepStrictEqual(subscriptionIterResult, [validSubscriptionExtensionsResource]);

    const tenantResponse = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources",
        {
          value: "",
          allowReserved: true
        }
      )
      .get();
    if (isUnexpected(tenantResponse)) {
      const error = `Unexpected status code ${tenantResponse.status}`;
      assert.fail(error);
    }
    const tenantIter = paginate(client, tenantResponse);
    let tenantResult = [];
    for await (const item of tenantIter) {
      tenantResult.push(item);
    }
    assert.strictEqual(tenantResponse.status, "200");
    assert.deepStrictEqual(tenantResult, [validTenantExtensionsResource]);

    const resourceResponse = await client
      .path(
        "/{resourceUri}/providers/Azure.ResourceManager.Resources/extensionsResources",
        {
          value: `subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/top`,
          allowReserved: true
        }
      )
      .get();
    if (isUnexpected(resourceResponse)) {
      const error = `Unexpected status code ${resourceResponse.status}`;
      assert.fail(error);
    }
    const resourceIter = paginate(client, resourceResponse);
    let resourceResult = [];
    for await (const item of resourceIter) {
      resourceResult.push(item);
    }
    assert.strictEqual(resourceResponse.status, "200");
    assert.deepStrictEqual(resourceResult, [validResourceExtensionsResource]);
  });
});
