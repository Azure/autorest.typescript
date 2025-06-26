import OperationTemplatesClientFactory, {
  OperationTemplatesClient
} from "./generated/azure/core/operation-templates/src/index.js";
import { assert } from "chai";

describe("OperationTemplatesClient Rest Client", () => {
  let client: OperationTemplatesClient;

  beforeEach(() => {
    client = OperationTemplatesClientFactory(
      {
        subscriptionId: "00000000-0000-0000-0000-000000000000",
        resourceGroupName: "test-rg"
      },
      { allowInsecureConnection: true }
    );
  });

  describe("ResourceCollectionAction operation template", () => {
    it("should perform collection action on dataConnections", async () => {
      const result = await client
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContosoProviderHub/dataConnections/validateDataConnection", "00000000-0000-0000-0000-000000000000", "test-rg")
        .post({
          body: {
            kind: "logAnalytics",
            name: "testConnection",
            logAnalyticsProperty1: 123,
            logAnalyticsProperty2: "testValue"
          }
        });
      assert.strictEqual(result.status, "200");
      if (result.status === "200") {
        assert.isDefined(result.body);
      }
    });
  });

  describe("ResourceCreateWithServiceProvidedName operation template", () => {
    it("should create resource with service provided name", async () => {
      const result = await client
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContosoProviderHub/widgets", "00000000-0000-0000-0000-000000000000", "test-rg")
        .post({
          body: {
            properties: {
              color: "blue",
              weight: 10
            },
            location: "eastus"
          }
        });
      assert.strictEqual(result.status, "201");
      if (result.status === "201") {
        assert.isDefined(result.body.id);
        assert.isDefined(result.body.name);
        assert.strictEqual(result.body.properties?.color, "blue");
        assert.strictEqual(result.body.properties?.weight, 10);
      }
    });
  });

  describe("ResourceOperation foundation template", () => {
    it("should create or replace resource using foundation template", async () => {
      const result = await client
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContosoProviderHub/gadgets/{gadgetName}", "00000000-0000-0000-0000-000000000000", "test-rg", "testGadget")
        .put({
          body: {
            kind: "premium",
            name: "testGadget",
            description: "A test gadget",
            value: 42
          }
        });
      assert.strictEqual(result.status, "200");
      if (result.status === "200") {
        assert.strictEqual(result.body.name, "testGadget");
        assert.strictEqual(result.body.kind, "premium");
        assert.strictEqual(result.body.description, "A test gadget");
        assert.strictEqual(result.body.value, 42);
      }
    });
  });
});