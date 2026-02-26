import { assert } from "chai";
import {
  IndividuallyParentNestedWithPathClient,
  IndividuallyParentNestedWithQueryClient,
  IndividuallyParentNestedWithHeaderClient,
  IndividuallyParentNestedWithMultipleClient,
  IndividuallyParentNestedWithMixedClient,
  IndividuallyParentNestedWithParamAliasClient
} from "./generated/azure/client-generator-core/client-initialization/individuallyParent/src/index.js";

describe("Azure ClientGeneratorCore IndividuallyParent Client Initialization", () => {
  const endpointOptions = {
    endpoint: "http://localhost:3002",
    allowInsecureConnection: true
  };

  describe("IndividuallyParentNestedWithPathClient", () => {
    let client: IndividuallyParentNestedWithPathClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithPathClient(
        "test-blob",
        endpointOptions
      );
    });
    it("should call withQuery", async () => {
      await client.withQuery({ format: "text" });
    });
    it("should call getStandalone", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "test-blob");
      assert.strictEqual(result.size, 1024);
      assert.strictEqual(result.contentType, "application/octet-stream");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2023-01-01T12:00:00.000Z"
      );
    });
    it("should call deleteStandalone", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyParentNestedWithQueryClient", () => {
    let client: IndividuallyParentNestedWithQueryClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithQueryClient(
        "test-blob",
        endpointOptions
      );
    });
    it("should call withQuery", async () => {
      await client.withQuery({ format: "text" });
    });
    it("should call getStandalone", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "test-blob");
      assert.strictEqual(result.size, 1024);
      assert.strictEqual(result.contentType, "application/octet-stream");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2023-01-01T12:00:00.000Z"
      );
    });
    it("should call deleteStandalone", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyParentNestedWithHeaderClient", () => {
    let client: IndividuallyParentNestedWithHeaderClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithHeaderClient(
        "test-name-value",
        endpointOptions
      );
    });
    it("should call withQuery", async () => {
      await client.withQuery({ format: "text" });
    });
    it("should call getStandalone", async () => {
      await client.getStandalone();
    });
    it("should call deleteStandalone", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyParentNestedWithMultipleClient", () => {
    let client: IndividuallyParentNestedWithMultipleClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithMultipleClient(
        "test-name-value",
        "us-west",
        endpointOptions
      );
    });
    it("should call withQuery", async () => {
      await client.withQuery({ format: "text" });
    });
    it("should call getStandalone", async () => {
      await client.getStandalone();
    });
    it("should call deleteStandalone", async () => {
      await client.deleteStandalone();
    });
  });

  describe("IndividuallyParentNestedWithMixedClient", () => {
    let client: IndividuallyParentNestedWithMixedClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithMixedClient(
        "test-name-value",
        endpointOptions
      );
    });
    it("should call withQuery", async () => {
      await client.withQuery("us-west", { format: "text" });
    });
    it("should call getStandalone", async () => {
      await client.getStandalone("us-west");
    });
    it("should call deleteStandalone", async () => {
      await client.deleteStandalone("us-west");
    });
  });

  describe("IndividuallyParentNestedWithParamAliasClient", () => {
    let client: IndividuallyParentNestedWithParamAliasClient;
    beforeEach(() => {
      client = new IndividuallyParentNestedWithParamAliasClient(
        "sample-blob",
        endpointOptions
      );
    });
    it("should call withAliasedName", async () => {
      await client.withAliasedName();
    });
    it("should call withOriginalName", async () => {
      await client.withOriginalName();
    });
  });
});
