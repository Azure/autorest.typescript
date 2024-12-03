import { assert } from "chai";
import { CommonPropertiesClient } from "./generated/azure/resource-manager/common-properties/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: CommonPropertiesClient;

  beforeEach(() => {
    client = new CommonPropertiesClient({
      endpoint: "http://localhost:3006",
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
    const result = await client.get(
      SUBSCRIPTION_ID_EXPECTED,
      RESOURCE_GROUP_EXPECTED,
      "identity"
    );
    assert.strictEqual(
      result.id,
      validSystemAssignedManagedIdentityResource.id
    );
    assert.strictEqual(
      result.location,
      validSystemAssignedManagedIdentityResource.location
    );
    assert.strictEqual(
      result.identity?.type,
      validSystemAssignedManagedIdentityResource.identity?.type
    );
    assert.strictEqual(
      result.identity?.principalId,
      validSystemAssignedManagedIdentityResource.identity.principalId
    );
    assert.strictEqual(
      result.identity?.tenantId,
      validSystemAssignedManagedIdentityResource.identity.tenantId
    );
    assert.deepEqual(
      result.tags,
      validSystemAssignedManagedIdentityResource.tags
    );
    assert.deepEqual(
      result.properties,
      validSystemAssignedManagedIdentityResource.properties
    );
  });

  it("should put models commonTypes managedIdentityTrackedResources", async () => {
    const result = await client.createWithSystemAssigned(
      SUBSCRIPTION_ID_EXPECTED,
      RESOURCE_GROUP_EXPECTED,
      "identity",
      {
        location: LOCATION_REGION_EXPECTED,
        identity: createExpectedIdentity
      }
    );
    assert.strictEqual(
      result.id,
      validSystemAssignedManagedIdentityResource.id
    );
    assert.strictEqual(
      result.location,
      validSystemAssignedManagedIdentityResource.location
    );
    assert.strictEqual(
      result.identity?.type,
      validSystemAssignedManagedIdentityResource.identity?.type
    );
    assert.strictEqual(
      result.identity?.principalId,
      validSystemAssignedManagedIdentityResource.identity.principalId
    );
    assert.strictEqual(
      result.identity?.tenantId,
      validSystemAssignedManagedIdentityResource.identity.tenantId
    );
    assert.deepEqual(
      result.tags,
      validSystemAssignedManagedIdentityResource.tags
    );
    assert.deepEqual(
      result.properties,
      validSystemAssignedManagedIdentityResource.properties
    );
  });

  it("should patch models commonTypes managedIdentityTrackedResources", async () => {
    const result = await client.updateWithUserAssignedAndSystemAssigned(
      SUBSCRIPTION_ID_EXPECTED,
      RESOURCE_GROUP_EXPECTED,
      "identity",
      {
        location: LOCATION_REGION_EXPECTED,
        identity: updateExpectedIdentity
      }
    );
    assert.strictEqual(
      result.id,
      validUserAssignedAndSystemAssignedManagedIdentityResource.id
    );
    assert.strictEqual(
      result.location,
      validUserAssignedAndSystemAssignedManagedIdentityResource.location
    );
    assert.deepEqual(
      result.identity,
      validUserAssignedAndSystemAssignedManagedIdentityResource.identity
    );
    assert.deepEqual(
      result.tags,
      validUserAssignedAndSystemAssignedManagedIdentityResource.tags
    );
    assert.deepEqual(
      result.properties,
      validUserAssignedAndSystemAssignedManagedIdentityResource.properties
    );
  });
});
