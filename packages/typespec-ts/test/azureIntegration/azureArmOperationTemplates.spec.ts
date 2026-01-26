import { assert } from "chai";
import OperationTemplatesClientFactory, {
  OperationTemplatesClient,
  getLongRunningPoller,
  paginate,
  isUnexpected
} from "./generated/azure/resource-manager/operation-templates/src/index.js";

describe("Azure ARM Operation Templates Rest Client", () => {
  let client: OperationTemplatesClient;

  beforeEach(() => {
    client = OperationTemplatesClientFactory({
      endpoint: "http://localhost:3000",
      allowInsecureConnection: true
    });
  });

  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
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
  const validOrder = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.OperationTemplates/orders/order1`,
    name: "order1",
    type: "Azure.ResourceManager.Resources/orders",
    location: "eastus",
    properties: {
      provisioningState: "Succeeded",
      productId: "product1",
      amount: 1
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User"
    }
  };
  const validWidget = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.ResourceManager.OperationTemplates/widgets/widget1`,
    name: "widget1",
    type: "Azure.ResourceManager.OperationTemplates/widgets",
    location: "eastus",
    properties: {
      name: "widget1",
      description: "A test widget",
      provisioningState: "Succeeded"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: "2024-10-04T00:56:07.442Z",
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: "2024-10-04T00:56:07.442Z",
      lastModifiedByType: "User"
    }
  };

  describe("Operations", () => {
    it("should list available operations", async () => {
      const response = await client
        .path("/providers/Azure.ResourceManager.OperationTemplates/operations")
        .get();

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.strictEqual(response.body.value.length, 1);
      assert.deepStrictEqual(response.body.value[0], validOperation);
    });
  });

  describe("Name Availability", () => {
    it("should check global name availability", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/checkNameAvailability",
          SUBSCRIPTION_ID_EXPECTED
        )
        .post({
          body: {
            name: "checkName",
            type: "Microsoft.Web/site"
          }
        });

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.deepStrictEqual(response.body, checkNameAvailabilityResponse);
    });

    it("should check local name availability", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/locations/{location}/checkNameAvailability",
          SUBSCRIPTION_ID_EXPECTED,
          "westus"
        )
        .post({
          body: {
            name: "checkName",
            type: "Microsoft.Web/site"
          }
        });

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.deepStrictEqual(response.body, checkNameAvailabilityResponse);
    });
  });

  describe("LRO Operations", () => {
    it("should create or replace order with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      const initialResponse = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/orders/{orderName}",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          orderName
        )
        .put({
          body: {
            location: "eastus",
            properties: {
              productId: "product1",
              amount: 1
            }
          }
        });

      if (isUnexpected(initialResponse)) {
        throw new Error(`Unexpected response: ${initialResponse.status}`);
      }

      const poller = await getLongRunningPoller(client, initialResponse);
      const result = await poller.pollUntilDone();

      assert.deepStrictEqual(result.body, validOrder);
    });

    it("should export order data with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      const initialResponse = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/orders/{orderName}/export",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          orderName
        )
        .post({
          body: {
            format: "csv"
          }
        });

      if (isUnexpected(initialResponse)) {
        throw new Error(`Unexpected response: ${initialResponse.status}`);
      }

      const poller = await getLongRunningPoller(client, initialResponse);
      const result = await poller.pollUntilDone();

      assert.deepStrictEqual(result.body, { content: "order1,product1,1" });
    });

    it("should delete order with LRO", async () => {
      const orderName = "order1";
      const resourceGroupName = "test-rg";

      const initialResponse = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/orders/{orderName}",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          orderName
        )
        .delete();

      if (isUnexpected(initialResponse)) {
        throw new Error(`Unexpected response: ${initialResponse.status}`);
      }

      const poller = await getLongRunningPoller(client, initialResponse);
      await poller.pollUntilDone();
    });
  });

  describe("LRO + Paging Operations", () => {
    it("should handle long-running operation with paging", async () => {
      const resourceGroupName = "test-rg";
      const productName = "default";

      // Start LRO+Paging operation
      const initialResponse = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/products/{productName}/postPagingLro",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          productName
        )
        .post({});

      if (isUnexpected(initialResponse)) {
        throw new Error(`Unexpected response: ${initialResponse.status}`);
      }

      // Get the poller and wait for LRO to complete
      const poller = await getLongRunningPoller(client, initialResponse);
      const result = await poller.pollUntilDone();

      if (isUnexpected(result)) {
        throw new Error(`Unexpected response: ${result.status}`);
      }

      // Now paginate through the results
      const items = [];
      for await (const item of paginate(client, result)) {
        items.push(item);
      }

      // Should get 2 products from 2 pages
      assert.strictEqual(items.length, 2);

      // Verify first product from first page
      assert.equal(items[0]?.name, "product1");
      assert.equal(items[0]?.location, "eastus");
      assert.equal(items[0]?.properties?.productId, "product1");
      assert.equal(items[0]?.properties?.provisioningState, "Succeeded");

      // Verify second product from second page
      assert.equal(items[1]?.name, "product2");
      assert.equal(items[1]?.location, "eastus");
      assert.equal(items[1]?.properties?.productId, "product2");
      assert.equal(items[1]?.properties?.provisioningState, "Succeeded");
    });
  });

  describe("Optional Body Operations", () => {
    const widgetName = "widget1";
    const resourceGroupName = "test-rg";

    it("should get widget", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          widgetName
        )
        .get();

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.deepStrictEqual(response.body, validWidget);
    });

    it("should patch widget with empty body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          widgetName
        )
        .patch();

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
    });

    it("should patch widget with request body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          widgetName
        )
        .patch({
          body: {
            location: "eastus",
            properties: {
              name: "updated-widget",
              description: "Updated description"
            }
          }
        });

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.strictEqual(response.body.name, widgetName);
      assert.strictEqual(response.body.properties?.name, "updated-widget");
      assert.strictEqual(
        response.body.properties?.description,
        "Updated description"
      );
    });

    it("should post widget action with empty body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}/post",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          widgetName
        )
        .post();

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
    });

    it("should post widget action with request body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}/post",
          SUBSCRIPTION_ID_EXPECTED,
          resourceGroupName,
          widgetName
        )
        .post({
          body: {
            actionType: "perform",
            parameters: "test-parameters"
          }
        });

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.strictEqual(
        response.body.result,
        "Action completed successfully with parameters"
      );
    });

    it("should perform provider post action with empty body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/providerPost",
          SUBSCRIPTION_ID_EXPECTED
        )
        .post();

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
    });

    it("should perform provider post action with request body", async () => {
      const response = await client
        .path(
          "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/providerPost",
          SUBSCRIPTION_ID_EXPECTED
        )
        .post({
          body: {
            totalAllowed: 100,
            reason: "Increased demand"
          }
        });

      if (isUnexpected(response)) {
        throw new Error(`Unexpected response: ${response.status}`);
      }

      assert.strictEqual(response.status, "200");
      assert.strictEqual(response.body.totalAllowed, 100);
    });
  });
});
