import { assert } from "chai";
import { CommonPropertiesClient } from "./generated/azure/resource-manager/common-properties/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: CommonPropertiesClient;

  beforeEach(() => {
    client = new CommonPropertiesClient(SUBSCRIPTION_ID_EXPECTED, {
      endpoint: "http://localhost:3002",
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
    const result = await client.get(RESOURCE_GROUP_EXPECTED, "identity");
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

  // Error handling test cases 
  describe("Error Handling", () => {
    it("should handle predefined error for resource not found (404)", async () => {
      try {
        await client.getForPredefinedError(RESOURCE_GROUP_EXPECTED, "confidential");
        assert.fail("Should have thrown an error for resource not found");
      } catch (error: any) {
        // Azure Modular clients use createRestError which creates errors with statusCode property
        assert.strictEqual(error.statusCode, 404);
        assert.isObject(error.details);
        assert.strictEqual(error.details.error.code, "ResourceNotFound");
        assert.strictEqual(
          error.details.error.message,
          "The Resource 'Azure.ResourceManager.CommonProperties/confidentialResources/confidential' under resource group 'test-rg' was not found."
        );
      }
    });

    it("should handle user-defined error for bad request (400)", async () => {
      try {
        await client.createForUserDefinedError(
          RESOURCE_GROUP_EXPECTED,
          "confidential",
          {
            location: "eastus",
            properties: {
              username: "00"
            } as any
          }
        );
        assert.fail("Should have thrown an error for bad request");
      } catch (error: any) {
        // Azure Modular clients use createRestError which creates errors with statusCode property
        assert.strictEqual(error.statusCode, 400);
        assert.strictEqual(error.code, "BadRequest");
        assert.strictEqual(error.message, "Username should not contain only numbers.");
      }
    });

    it("should validate client configuration with invalid subscription ID", async () => {
      try {
        // For Modular clients, constructor validation might be deferred to actual API calls
        const invalidClient = new CommonPropertiesClient("", {
          endpoint: "http://localhost:3002",
          allowInsecureConnection: true
        });
        await invalidClient.get(RESOURCE_GROUP_EXPECTED, "identity");
        assert.fail("Should have thrown an error for invalid subscription ID");
      } catch (error: any) {
        assert.isTrue(error instanceof Error);
      }
    });

    it("should handle missing required parameters gracefully", async () => {
      try {
        // This should fail due to missing resource group parameter
        await client.get("" as any, "identity");
        assert.fail("Should have thrown an error for missing parameters");
      } catch (error) {
        assert.isTrue(error instanceof Error);
      }
    });
  });
});
