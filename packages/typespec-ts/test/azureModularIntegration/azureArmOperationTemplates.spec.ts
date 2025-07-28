import { OperationTemplatesClient } from "./generated/azure/resource-manager/operation-templates/src/index.js";
import { assert } from "chai";

describe("Azure ARM Operation Templates", () => {
  let client: OperationTemplatesClient;

  beforeEach(() => {
    client = new OperationTemplatesClient(
      "00000000-0000-0000-0000-000000000000",
      {
        endpoint: "http://localhost:3002",
        allowInsecureConnection: true
      }
    );
  });

  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const validOperation = {
    name: "Microsoft.Compute/virtualMachines/write",
    isDataAction: false,
    display: {
      provider: "Microsoft Compute",
      resource: "Virtual Machines",
      operation: "Create or Update Virtual Machine.",
      description: "Add or modify virtual machines."
    },
    origin: "user,system",
    actionType: "Internal"
  };

  const checkNameAvailabilityResponse = {
    nameAvailable: false,
    reason: "AlreadyExists",
    message:
      "Hostname 'checkName' already exists. Please select a different name."
  };

  describe("Operations", () => {
    it("should list available operations", async () => {
      const result = await client.operations.list();
      const items = [];
      for await (const user of result) {
        items.push(user);
      }
      assert.strictEqual(items.length, 1);
      assert.deepStrictEqual(items[0], validOperation);
    });
  });

  describe("Name Availability", () => {
    it("should check global name availability", async () => {
      const result = await client.checkNameAvailability.checkGlobal({
        name: "checkName",
        type: "Microsoft.Web/site"
      });

      assert.deepStrictEqual(result, checkNameAvailabilityResponse);
    });

    it("should check local name availability", async () => {
      const result = await client.checkNameAvailability.checkLocal("westus", {
        name: "checkName",
        type: "Microsoft.Web/site"
      });

      assert.deepStrictEqual(result, checkNameAvailabilityResponse);
    });
  });

  describe("LRO Operations", () => {
    it("should create or replace order with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      const result = await client.lro.createOrReplace(
        resourceGroupName,
        orderName,
        {
          location: "eastus",
          properties: {
            productId: "product1",
            amount: 1
          }
        }
      );
      // assert.equal(result.name, orderName);
      assert.equal(result.location, "eastus");
      assert.equal(result.properties?.productId, "product1");
      assert.equal(result.properties?.amount, 1);
      assert.equal(result.properties?.provisioningState, "Succeeded");
    });

    it("should export order data with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      const result = await client.lro.export(resourceGroupName, orderName, {
        format: "csv"
      });

      assert.equal(result.content, "order1,product1,1");
    });

    it("should delete order with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      // LRO delete operation should complete successfully
      await client.lro.delete(resourceGroupName, orderName);

      // No assertion needed as successful completion without error indicates success
    });
  });

  describe("Optional Body Operations", () => {
    const widgetName = "widget1";

    it("should get widget", async () => {
      const result = await client.optionalBody.get(
        RESOURCE_GROUP_EXPECTED,
        widgetName
      );
      assert.equal(result.properties?.name, widgetName);
      assert.equal(result.properties?.description, "A test widget");
      assert.equal(result.properties?.provisioningState, "Succeeded");
    });

    it("should patch widget with empty body", async () => {
      const result = await client.optionalBody.patch(
        RESOURCE_GROUP_EXPECTED,
        widgetName
      );

      // Should return original widget when no body is provided
      // assert.equal(result.name, widgetName);
      assert.equal(result.properties?.name, widgetName);
      assert.equal(result.properties?.description, "A test widget");
    });

    it("should patch widget with request body", async () => {
      const result = await client.optionalBody.patch(
        RESOURCE_GROUP_EXPECTED,
        widgetName,
        {
          properties: {
            location: "eastus",
            properties: {
              name: "updated-widget",
              description: "Updated description"
            }
          }
        }
      );

      // Should return updated widget when body is provided
      // assert.equal(result.name, widgetName);
      assert.equal(result.properties?.name, "updated-widget");
      assert.equal(result.properties?.description, "Updated description");
    });

    it("should post widget action with empty body", async () => {
      const result = await client.optionalBody.post(
        RESOURCE_GROUP_EXPECTED,
        widgetName
      );

      assert.equal(result.result, "Action completed successfully");
    });

    it("should post widget action with request body", async () => {
      const result = await client.optionalBody.post(
        RESOURCE_GROUP_EXPECTED,
        widgetName,
        {
          body: {
            actionType: "perform",
            parameters: "test-parameters"
          }
        }
      );

      assert.equal(
        result.result,
        "Action completed successfully with parameters"
      );
    });

    it("should perform provider post action with empty body", async () => {
      const result = await client.optionalBody.providerPost();

      assert.equal(result.totalAllowed, 50);
      assert.equal(result.status, "Changed to default allowance");
    });

    it("should perform provider post action with request body", async () => {
      const result = await client.optionalBody.providerPost({
        body: {
          totalAllowed: 100,
          reason: "Increased demand"
        }
      });

      assert.equal(result.totalAllowed, 100);
      assert.equal(result.status, "Changed to requested allowance");
    });
  });
});
