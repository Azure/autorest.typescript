import { assert, describe, it, beforeEach } from "vitest";
import { Combined } from "./generated/azure/resource-manager/multi-service-shared-models/src/index.js";

describe("Azure ARM Multi Service Shared Models", () => {
  let client: Combined;

  const SUBSCRIPTION_ID = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP = "test-rg";

  beforeEach(() => {
    client = new Combined(SUBSCRIPTION_ID, {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
      credential: {
        getToken: async () => ({ token: "fake-token", expiresOnTimestamp: 99999999999 }),
      },
    });
  });

  it("should get virtual machine", async () => {
    const result = await client.virtualMachines.get(RESOURCE_GROUP, "vm-shared1");
    assert.strictEqual(result.name, "vm-shared1");
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(result.type, "Microsoft.Compute/virtualMachinesShared");
    assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    assert.strictEqual(result.properties?.metadata?.createdBy, "user@example.com");
  });

  it("should create or update virtual machine", async () => {
    const result = await client.virtualMachines.createOrUpdate(RESOURCE_GROUP, "vm-shared1", {
      location: "eastus",
      properties: {
        metadata: {
          createdBy: "user@example.com",
          tags: {
            environment: "production",
          },
        },
      },
    });
    assert.strictEqual(result.name, "vm-shared1");
    assert.strictEqual(result.properties?.provisioningState, "Succeeded");
  });

  it("should get storage account", async () => {
    const result = await client.storageAccounts.get(RESOURCE_GROUP, "account1");
    assert.strictEqual(result.name, "account1");
    assert.strictEqual(result.location, "westus");
    assert.strictEqual(result.type, "Microsoft.Storage/storageAccounts");
    assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    assert.strictEqual(result.properties?.metadata?.createdBy, "admin@example.com");
  });

  it("should create or update storage account", async () => {
    const result = await client.storageAccounts.createOrUpdate(RESOURCE_GROUP, "account1", {
      location: "westus",
      properties: {
        metadata: {
          createdBy: "admin@example.com",
          tags: {
            department: "engineering",
          },
        },
      },
    });
    assert.strictEqual(result.name, "account1");
    assert.strictEqual(result.properties?.provisioningState, "Succeeded");
  });
});
