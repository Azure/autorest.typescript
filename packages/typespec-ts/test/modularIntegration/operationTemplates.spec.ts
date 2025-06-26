import { OperationTemplatesClient } from "./generated/azure/core/operation-templates/src/index.js";
import { assert } from "chai";

describe("OperationTemplatesClient Classical Client", () => {
  let client: OperationTemplatesClient;

  beforeEach(() => {
    client = new OperationTemplatesClient(
      "00000000-0000-0000-0000-000000000000",
      {
        allowInsecureConnection: true,
        endpoint: "http://localhost:3002"
      }
    );
  });

  describe("ResourceCollectionAction operation template", () => {
    it("should perform collection action on dataConnections", async () => {
      const result = await client.dataConnections.validateDataConnection("test-rg", {
        kind: "logAnalytics",
        name: "testConnection",
        logAnalyticsProperty1: 123,
        logAnalyticsProperty2: "testValue"
      });
      assert.isDefined(result);
    });
  });

  describe("ResourceCreateWithServiceProvidedName operation template", () => {
    it("should create resource with service provided name", async () => {
      const result = await client.widgets.create("test-rg", {
        properties: {
          color: "blue",
          weight: 10
        },
        location: "eastus"
      });
      assert.isDefined(result.id);
      assert.isDefined(result.name);
      assert.strictEqual(result.properties?.color, "blue");
      assert.strictEqual(result.properties?.weight, 10);
    });
  });

  describe("ResourceOperation foundation template", () => {
    it("should create or replace resource using foundation template", async () => {
      const result = await client.gadgets.createOrReplaceGadget("test-rg", "testGadget", {
        kind: "premium",
        name: "testGadget",
        description: "A test gadget",
        value: 42
      });
      assert.strictEqual(result.name, "testGadget");
      assert.strictEqual(result.kind, "premium");
      assert.strictEqual(result.description, "A test gadget");
      assert.strictEqual(result.value, 42);
    });
  });
});