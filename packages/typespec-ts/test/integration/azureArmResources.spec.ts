import { assert } from "chai";
import AzureArmResourceClientFactory, {
  AzureArmResourceClient
} from "./generated/azure/resource-manager/models/resources/src/index.js";
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
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/top`,
    name: "top",
    type: "Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
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
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/top/nestedProxyResources/nested`,
    name: "nested",
    type: "Azure.ResourceManager.Models.Resources/topLevelTrackedResources/top/nestedProxyResources",
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
  it("should get top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .get();
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validTopLevelResource.id);
    assert.strictEqual(body.name, validTopLevelResource.name);
    assert.strictEqual(body.type, validTopLevelResource.type);
  });
  it("should create or replace top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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

    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validTopLevelResource.id);
    assert.strictEqual(body.name, validTopLevelResource.name);
    assert.strictEqual(body.type, validTopLevelResource.type);
    assert.strictEqual(body.location, validTopLevelResource.location);
    assert.strictEqual(
      body.properties?.description,
      validTopLevelResource.properties?.description
    );
  });
  it.skip("should update top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validTopLevelResource.id);
    assert.strictEqual(body.name, validTopLevelResource.name);
    assert.strictEqual(body.type, validTopLevelResource.type);
    assert.strictEqual(body.location, validTopLevelResource.location);
    assert.strictEqual(body.properties?.description, "valid2");
  });
  it("should delete top level tracked resources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}",
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
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
        "00000000-0000-0000-0000-000000000000",
        "test-rg"
      )
      .get();
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.value[0].id, validTopLevelResource.id);
    assert.strictEqual(body.value[0].name, validTopLevelResource.name);
    assert.strictEqual(body.value[0].type, validTopLevelResource.type);
    assert.strictEqual(body.value[0].location, validTopLevelResource.location);
  });
  it("should list top level tracked resources by subscription ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources",
        "00000000-0000-0000-0000-000000000000"
      )
      .get();
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.value[0].id, validTopLevelResource.id);
    assert.strictEqual(body.value[0].name, validTopLevelResource.name);
    assert.strictEqual(body.value[0].type, validTopLevelResource.type);
    assert.strictEqual(body.value[0].location, validTopLevelResource.location);
  });

  // nested proxy resource
  it("should get nested proxy resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .get();
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validNestedResource.id);
    assert.strictEqual(body.name, validNestedResource.name);
    assert.strictEqual(body.type, validNestedResource.type);
  });

  it("should create or replace nested proxy resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
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
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validNestedResource.id);
    assert.strictEqual(body.name, validNestedResource.name);
    assert.strictEqual(body.type, validNestedResource.type);
    assert.strictEqual(
      body.properties?.description,
      validNestedResource.properties?.description
    );
  });

  it("should update nested proxy resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
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
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.id, validNestedResource.id);
    assert.strictEqual(body.name, validNestedResource.name);
    assert.strictEqual(body.type, validNestedResource.type);
    assert.strictEqual(body.properties?.description, "valid2");
  });

  it("should delete nested proxy resource", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top",
        "nested"
      )
      .delete();
    assert.strictEqual(result.status, "204");
  });

  it("should list nested proxy resource by TopLevelTrackedResource ", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources",
        "00000000-0000-0000-0000-000000000000",
        "test-rg",
        "top"
      )
      .get();
    const body = JSON.parse(JSON.stringify(result.body));
    assert.strictEqual(result.status, "200");
    assert.strictEqual(body.value[0].id, validNestedResource.id);
    assert.strictEqual(body.value[0].name, validNestedResource.name);
    assert.strictEqual(body.value[0].type, validNestedResource.type);
  });
});
