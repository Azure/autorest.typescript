import { assert } from "chai";
import {
  HeaderParamClient,
  MultipleParamsClient,
  MixedParamsClient,
  PathParamClient,
  ParamAliasClient,
  ParentClient
} from "./generated/azure/client-generator-core/client-initialization/src/index.js";

describe("Azure ClientGeneratorCore Client Initialization", () => {
  const endpointOptions = {
    endpoint: "http://localhost:3002",
    allowInsecureConnection: true
  };

  describe("HeaderParam Client", () => {
    let client: HeaderParamClient;

    beforeEach(() => {
      client = new HeaderParamClient("test-name-value", endpointOptions);
    });

    it("should send header parameter in withQuery operation", async () => {
      const result = await client.withQuery("test-id");
      assert.isUndefined(result);
    });

    it("should send header parameter in withBody operation", async () => {
      const result = await client.withBody({ name: "test-name" });
      assert.isUndefined(result);
    });
  });

  describe("MultipleParams Client", () => {
    let client: MultipleParamsClient;

    beforeEach(() => {
      client = new MultipleParamsClient(
        "test-name-value",
        "us-west",
        endpointOptions
      );
    });

    it("should send multiple parameters in withQuery operation", async () => {
      const result = await client.withQuery("test-id");
      assert.isUndefined(result);
    });

    it("should send multiple parameters in withBody operation", async () => {
      const result = await client.withBody({ name: "test-name" });
      assert.isUndefined(result);
    });
  });

  describe("MixedParams Client", () => {
    let client: MixedParamsClient;

    beforeEach(() => {
      client = new MixedParamsClient("test-name-value", endpointOptions);
    });

    it("should send mixed parameters in withQuery operation", async () => {
      const result = await client.withQuery("us-west", "test-id");
      assert.isUndefined(result);
    });

    it("should send mixed parameters in withBody operation", async () => {
      const result = await client.withBody("us-west", { name: "test-name" });
      assert.isUndefined(result);
    });
  });

  describe("PathParam Client", () => {
    let client: PathParamClient;

    beforeEach(() => {
      client = new PathParamClient("sample-blob", endpointOptions);
    });

    it("should send path parameter in withQuery operation", async () => {
      const result = await client.withQuery({ format: "text" });
      assert.isUndefined(result);
    });

    it("should get standalone with path parameter", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "sample-blob");
      assert.strictEqual(result.size, 42);
      assert.strictEqual(result.contentType, "text/plain");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2025-04-01T12:00:00.000Z"
      );
    });

    it("should delete standalone with path parameter", async () => {
      const result = await client.deleteStandalone();
      assert.isUndefined(result);
    });
  });

  describe("ParamAlias Client", () => {
    let client: ParamAliasClient;

    beforeEach(() => {
      client = new ParamAliasClient("sample-blob", endpointOptions);
    });

    it("should call withOriginalName operation", async () => {
      const result = await client.withOriginalName();
      assert.isUndefined(result);
    });

    it("should call withAliasedName operation", async () => {
      const result = await client.withAliasedName();
      assert.isUndefined(result);
    });
  });

  describe("Parent-Child Client", () => {
    let parentClient: ParentClient;

    beforeEach(() => {
      parentClient = new ParentClient(endpointOptions);
    });

    it("should create child client and perform operations", async () => {
      const childClient = parentClient.getChildClient("sample-blob");

      // Test withQuery operation
      const queryResult = await childClient.withQuery({ format: "text" });
      assert.isUndefined(queryResult);

      // Test getStandalone operation
      const getResult = await childClient.getStandalone();
      assert.strictEqual(getResult.name, "sample-blob");
      assert.strictEqual(getResult.size, 42);
      assert.strictEqual(getResult.contentType, "text/plain");
      assert.strictEqual(
        getResult.createdOn.toISOString(),
        "2025-04-01T12:00:00.000Z"
      );

      // Test deleteStandalone operation
      const deleteResult = await childClient.deleteStandalone();
      assert.isUndefined(deleteResult);
    });
  });
});
