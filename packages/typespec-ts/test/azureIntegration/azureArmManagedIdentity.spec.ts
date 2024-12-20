import { assert } from "chai";
import AzureArmModelsCommonTypesManagedIdentityClientFactory, {
  AzureArmModelsCommonTypesManagedIdentityClient
} from "./generated/azure/resource-manager/common-properties/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: AzureArmModelsCommonTypesManagedIdentityClient;

  beforeEach(() => {
    client = AzureArmModelsCommonTypesManagedIdentityClientFactory({
      endpoint: "http://localhost:3003",
      allowInsecureConnection: true
    });
  });
  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const PRINCIPAL_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const TENANT_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const CLIENT_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const LOCATION_REGION_EXPECTED = "eastus";
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const IDENTITY_TYPE_SYSTEM_ASSIGNED_EXPECTED = "SystemAssigned";
  const IDENTITY_TYPE_SYSTEM_USER_ASSIGNED_EXPECTED =
    "SystemAssigned,UserAssigned";
  const validSystemAssignedManagedIdentityResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/identity`,
    location: `${LOCATION_REGION_EXPECTED}`,
    tags: {
      tagKey1: "tagValue1"
    },
    identity: {
      type: `${IDENTITY_TYPE_SYSTEM_ASSIGNED_EXPECTED}`,
      principalId: `${PRINCIPAL_ID_EXPECTED}`,
      tenantId: `${TENANT_ID_EXPECTED}`
    },
    properties: {
      provisioningState: "Succeeded"
    }
  };

  const validUserAssignedAndSystemAssignedManagedIdentityResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/identity`,
    location: `${LOCATION_REGION_EXPECTED}`,
    tags: {
      tagKey1: "tagValue1"
    },
    identity: {
      type: `${IDENTITY_TYPE_SYSTEM_USER_ASSIGNED_EXPECTED}`,
      userAssignedIdentities: {
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
        {
          principalId: `${PRINCIPAL_ID_EXPECTED}`,
          clientId: `${CLIENT_ID_EXPECTED}`
        }
      },
      principalId: `${PRINCIPAL_ID_EXPECTED}`,
      tenantId: `${TENANT_ID_EXPECTED}`
    },
    properties: {
      provisioningState: "Succeeded"
    }
  };

  const createExpectedIdentity = {
    type: `${IDENTITY_TYPE_SYSTEM_ASSIGNED_EXPECTED}`
  };

  const updateExpectedIdentity = {
    type: `${IDENTITY_TYPE_SYSTEM_USER_ASSIGNED_EXPECTED}`,
    userAssignedIdentities: {
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
        {}
    }
  };

  // managed identity tracked resource
  it("should get models commonTypes managedIdentityTrackedResources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "identity"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validSystemAssignedManagedIdentityResource);
  });

  it("should put models commonTypes managedIdentityTrackedResources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "identity"
      )
      .put({
        body: {
          identity: createExpectedIdentity,
          location: LOCATION_REGION_EXPECTED,
          tags: { tagKey1: "tagValue1" }
        }
      });
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validSystemAssignedManagedIdentityResource);
  });

  it("should patch models commonTypes managedIdentityTrackedResources", async () => {
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}",
        SUBSCRIPTION_ID_EXPECTED,
        RESOURCE_GROUP_EXPECTED,
        "identity"
      )
      .patch({
        body: {
          identity: updateExpectedIdentity,
          location: LOCATION_REGION_EXPECTED,
          tags: { tagKey1: "tagValue1" }
        }
      });
    assert.strictEqual(result.status, "200");
    assert.deepEqual(
      result.body,
      validUserAssignedAndSystemAssignedManagedIdentityResource
    );
  });
});
