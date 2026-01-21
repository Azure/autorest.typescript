import { assert } from "chai";
import {
  IndividuallyParentNestedWithHeaderClient,
  IndividuallyParentNestedWithMixedClient,
  IndividuallyParentNestedWithMultipleClient,
  IndividuallyParentNestedWithPathClient,
  IndividuallyParentNestedWithQueryClient
} from "./generated/azure/client-generator-core/client-initialization/individuallyParent/src/index.js";

describe("Azure ClientGeneratorCore Client Initialization", () => {
  const endpointOptions = {
    endpoint: "http://localhost:3002",
    allowInsecureConnection: true
  };

  describe("IndividuallyParent Client Tests", () => {
    describe("Specialized Nested Clients", () => {
      describe("IndividuallyParentNestedWithHeaderClient", () => {
        let client: IndividuallyParentNestedWithHeaderClient;

        beforeEach(() => {
          client = new IndividuallyParentNestedWithHeaderClient("test-name-value", endpointOptions);
        });

        it("should send nested header parameter in withQuery operation", async () => {
          const result = await client.withQuery({ format: "text" });
          assert.isUndefined(result);
        });

        it("should get standalone with nested header parameter", async () => {
          const result = await client.getStandalone();
          assert.isUndefined(result);
        });

        it("should delete standalone with nested header parameter", async () => {
          const result = await client.deleteStandalone();
          assert.isUndefined(result);
        });
      });

      describe("IndividuallyParentNestedWithMultipleClient", () => {
        let client: IndividuallyParentNestedWithMultipleClient;

        beforeEach(() => {
          client = new IndividuallyParentNestedWithMultipleClient("test-name-value", "us-west", endpointOptions);
        });

        it("should send nested multiple parameters in withQuery operation", async () => {
          const result = await client.withQuery({ format: "text" });
          assert.isUndefined(result);
        });

        it("should get standalone with nested multiple parameters", async () => {
          const result = await client.getStandalone();
          assert.isUndefined(result);
        });

        it("should delete standalone with nested multiple parameters", async () => {
          const result = await client.deleteStandalone();
          assert.isUndefined(result);
        });
      });

      describe("IndividuallyParentNestedWithMixedClient", () => {
        let client: IndividuallyParentNestedWithMixedClient;

        beforeEach(() => {
          client = new IndividuallyParentNestedWithMixedClient("test-name-value", endpointOptions);
        });

        it("should send nested mixed parameters in withQuery operation", async () => {
          const result = await client.withQuery("us-west", { format: "text" });
          assert.isUndefined(result);
        });

        it("should get standalone with nested mixed parameters", async () => {
          const result = await client.getStandalone("us-west");
          assert.isUndefined(result);
        });

        it("should delete standalone with nested mixed parameters", async () => {
          const result = await client.deleteStandalone("us-west");
          assert.isUndefined(result);
        });
      });

      describe("IndividuallyParentNestedWithPathClient", () => {
        let client: IndividuallyParentNestedWithPathClient;

        beforeEach(() => {
          client = new IndividuallyParentNestedWithPathClient("test-resource", endpointOptions);
        });

        it("should send nested path parameter in withQuery operation", async () => {
          const result = await client.withQuery({ format: "text" });
          assert.isUndefined(result);
        });

        it("should get standalone with nested path parameter", async () => {
          const result = await client.getStandalone();
          assert.strictEqual(result.name, "test-resource");
          assert.strictEqual(result.size, 1024);
          assert.strictEqual(result.contentType, "application/octet-stream");
          assert.strictEqual(
            result.createdOn.toISOString(),
            "2023-01-01T12:00:00.000Z"
          );
        });

        it("should delete standalone with nested path parameter", async () => {
          const result = await client.deleteStandalone();
          assert.isUndefined(result);
        });
      });

      describe("IndividuallyParentNestedWithQueryClient", () => {
        let client: IndividuallyParentNestedWithQueryClient;

        beforeEach(() => {
          client = new IndividuallyParentNestedWithQueryClient("test-blob", endpointOptions);
        });

        it("should send nested query parameter in withQuery operation", async () => {
          const result = await client.withQuery();
          assert.isUndefined(result);
        });

        it("should get standalone with nested query parameter", async () => {
          const result = await client.getStandalone();
          assert.strictEqual(result.name, "test-blob");
          assert.strictEqual(result.size, 1024);
          assert.strictEqual(result.contentType, "application/octet-stream");
          assert.strictEqual(
            result.createdOn.toISOString(),
            "2023-01-01T12:00:00.000Z"
          );
        });

        it("should delete standalone with nested query parameter", async () => {
          const result = await client.deleteStandalone();
          assert.isUndefined(result);
        });
      });
    });
  });
});
