import { assert, describe, it, beforeEach } from "vitest";
import { Combined } from "./generated/azure/resource-manager/multi-service/src/index.js";

describe("Azure ResourceManager MultiService", () => {
  const SUBSCRIPTION_ID = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP = "test-rg";
  const LOCATION = "eastus";

  let client: Combined;

  beforeEach(() => {
    client = new Combined(SUBSCRIPTION_ID, {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  describe("Compute VirtualMachines", () => {
    it("should get a virtual machine", async () => {
      const result = await client.virtualMachines.get(RESOURCE_GROUP, "vm1");
      assert.strictEqual(result.name, "vm1");
      assert.strictEqual(result.type, "Microsoft.Compute/virtualMachines");
      assert.strictEqual(result.location, LOCATION);
      assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    });

    it("should create or update a virtual machine", async () => {
      const result = await client.virtualMachines.createOrUpdate(
        RESOURCE_GROUP,
        "vm1",
        {
          location: LOCATION,
          properties: {},
        }
      );
      assert.strictEqual(result.name, "vm1");
      assert.strictEqual(result.type, "Microsoft.Compute/virtualMachines");
      assert.strictEqual(result.location, LOCATION);
      assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    });
  });

  describe("ComputeDisk Disks", () => {
    it("should get a disk", async () => {
      const result = await client.disks.get(RESOURCE_GROUP, "disk1");
      assert.strictEqual(result.name, "disk1");
      assert.strictEqual(result.type, "Microsoft.Compute/disks");
      assert.strictEqual(result.location, LOCATION);
      assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    });

    it("should create or update a disk", async () => {
      const result = await client.disks.createOrUpdate(
        RESOURCE_GROUP,
        "disk1",
        {
          location: LOCATION,
          properties: {},
        }
      );
      assert.strictEqual(result.name, "disk1");
      assert.strictEqual(result.type, "Microsoft.Compute/disks");
      assert.strictEqual(result.location, LOCATION);
      assert.strictEqual(result.properties?.provisioningState, "Succeeded");
    });
  });
});
