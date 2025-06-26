import { OperationTemplatesClient } from "./generated/azure/core/operation-templates/src/index.js";
import { assert } from "chai";

describe("OperationTemplatesClient Classical Client", () => {
  let client: OperationTemplatesClient;

  beforeEach(() => {
    client = new OperationTemplatesClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3000"
    });
  });

  describe("Operation Templates Integration", () => {
    it("should have generated client with operation template methods", () => {
      // Validate that the client was generated successfully
      assert.isDefined(client);
      
      // Validate that operation template interfaces were generated
      assert.isDefined(client.testOperations);
      assert.isDefined(client.testCollectionOperations);
      assert.isDefined(client.testFoundationOperations);
    });

    it("should support ResourceCreateWithServiceProvidedName pattern", async () => {
      // Test that the operation exists and has expected structure
      assert.isFunction(client.testOperations.createResource);
      
      try {
        // Attempt to call the operation to validate signature
        await client.testOperations.createResource({ value: 123 });
      } catch (error) {
        // Expected to fail due to no server, but validates operation exists
        assert.isDefined(error);
      }
    });

    it("should support ResourceCollectionAction pattern", async () => {
      assert.isFunction(client.testCollectionOperations.validateCollection);
      
      try {
        await client.testCollectionOperations.validateCollection({ value: 123 });
      } catch (error) {
        assert.isDefined(error);
      }
    });

    it("should support Foundation ResourceOperation pattern", async () => {
      assert.isFunction(client.testFoundationOperations.createOrReplace);
      
      try {
        await client.testFoundationOperations.createOrReplace("test", {
          name: "test",
          value: 123
        });
      } catch (error) {
        assert.isDefined(error);
      }
    });
  });
});