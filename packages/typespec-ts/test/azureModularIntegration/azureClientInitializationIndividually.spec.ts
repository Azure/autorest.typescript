import { assert } from "chai";
import {
  IndividuallyNestedWithPathClient,
  IndividuallyNestedWithQueryClient,
  IndividuallyNestedWithHeaderClient,
  IndividuallyNestedWithMultipleClient,
  IndividuallyNestedWithMixedClient,
  IndividuallyNestedWithParamAliasClient
} from "./generated/azure/client-generator-core/client-initialization/individually/src/index.js";

describe("Azure ClientGeneratorCore Client Initialization - Individually", () => {
  const endpointOptions = {
    endpoint: "http://localhost:3002",
    allowInsecureConnection: true
  };

  describe("IndividuallyNestedWithPath Client", () => {
    let client: IndividuallyNestedWithPathClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithPathClient(
        "test-blob",
        endpointOptions
      );
    });

    it("should send path parameter in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
    });

    it("should get standalone with path parameter", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "test-blob");
      assert.strictEqual(result.size, 1024);
      assert.strictEqual(result.contentType, "application/octet-stream");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2023-01-01T12:00:00.000Z"
      );
    });

    it("should delete standalone with path parameter", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyNestedWithQuery Client", () => {
    let client: IndividuallyNestedWithQueryClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithQueryClient(
        "test-blob",
        endpointOptions
      );
    });

    it("should send query parameter in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
    });

    it("should get standalone with query parameter", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "test-blob");
      assert.strictEqual(result.size, 1024);
      assert.strictEqual(result.contentType, "application/octet-stream");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2023-01-01T12:00:00.000Z"
      );
    });

    it("should delete standalone with query parameter", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyNestedWithHeader Client", () => {
    let client: IndividuallyNestedWithHeaderClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithHeaderClient(
        "test-name-value",
        endpointOptions
      );
    });

    it("should send header parameter in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
    });

    it("should get standalone with header parameter", async () => {
      await client.getStandalone();
    });

    it("should delete standalone with header parameter", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyNestedWithMultiple Client", () => {
    let client: IndividuallyNestedWithMultipleClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithMultipleClient(
        "test-name-value",
        "us-west",
        endpointOptions
      );
    });

    it("should send multiple parameters in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
    });

    it("should get standalone with multiple parameters", async () => {
      await client.getStandalone();
    });

    it("should delete standalone with multiple parameters", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyNestedWithMixed Client", () => {
    let client: IndividuallyNestedWithMixedClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithMixedClient(
        "test-name-value",
        endpointOptions
      );
    });

    it("should send mixed parameters in withQuery operation", async () => {
      await client.withQuery("us-west", { format: "text" });
    });

    it("should get standalone with mixed parameters", async () => {
      await client.getStandalone("us-west");
    });

    it("should delete standalone with mixed parameters", async () => {
      await client.deleteStandalone("us-west");
    });
  });

  describe("IndividuallyNestedWithParamAlias Client", () => {
    let client: IndividuallyNestedWithParamAliasClient;

    beforeEach(() => {
      client = new IndividuallyNestedWithParamAliasClient(
        "sample-blob",
        endpointOptions
      );
    });

    it("should call withOriginalName operation", async () => {
      await client.withOriginalName();
    });

    it("should call withAliasedName operation", async () => {
      await client.withAliasedName();
    });
  });
});
