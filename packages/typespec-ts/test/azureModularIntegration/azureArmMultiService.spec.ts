import { assert, describe, it, beforeEach } from "vitest";

import { Combined } from "./generated/azure/resource-manager/multi-service/src/index.js";

describe("Azure ResourceManager MultiService Client", () => {
  const SUBSCRIPTION_ID = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP = "test-rg";
  const LOCATION = "eastus";

  let client: Combined;

  beforeEach(() => {
    client = new Combined(SUBSCRIPTION_ID, {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  const expectedVm = {
    id: `/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Compute/virtualMachines/vm1`,
    name: "vm1",
    type: "Microsoft.Compute/virtualMachines",
    location: LOCATION,
    properties: {
      provisioningState: "Succeeded"
    }
  };

  const expectedDisk = {
    id: `/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Compute/disks/disk1`,
    name: "disk1",
    type: "Microsoft.Compute/disks",
    location: LOCATION,
    properties: {
      provisioningState: "Succeeded"
    }
  };

  describe("VirtualMachines", () => {
    it("should get virtual machine", async () => {
      const result = await client.virtualMachines.get(RESOURCE_GROUP, "vm1");
      assert.strictEqual(result.id, expectedVm.id);
      assert.strictEqual(result.name, expectedVm.name);
      assert.strictEqual(result.type, expectedVm.type);
      assert.strictEqual(result.location, expectedVm.location);
      assert.strictEqual(
        result.properties?.provisioningState,
        expectedVm.properties.provisioningState
      );
    });

    it("should create or update virtual machine", async () => {
      const result = await client.virtualMachines.createOrUpdate(
        RESOURCE_GROUP,
        "vm1",
        {
          location: LOCATION,
          properties: {}
        }
      );
      assert.strictEqual(result.id, expectedVm.id);
      assert.strictEqual(result.name, expectedVm.name);
      assert.strictEqual(result.location, expectedVm.location);
    });
  });

  describe("Disks", () => {
    it("should get disk", async () => {
      const result = await client.disks.get(RESOURCE_GROUP, "disk1");
      assert.strictEqual(result.id, expectedDisk.id);
      assert.strictEqual(result.name, expectedDisk.name);
      assert.strictEqual(result.type, expectedDisk.type);
      assert.strictEqual(result.location, expectedDisk.location);
      assert.strictEqual(
        result.properties?.provisioningState,
        expectedDisk.properties.provisioningState
      );
    });

    it("should create or update disk", async () => {
      const result = await client.disks.createOrUpdate(
        RESOURCE_GROUP,
        "disk1",
        {
          location: LOCATION,
          properties: {}
        }
      );
      assert.strictEqual(result.id, expectedDisk.id);
      assert.strictEqual(result.name, expectedDisk.name);
      assert.strictEqual(result.location, expectedDisk.location);
    });
  });
});
