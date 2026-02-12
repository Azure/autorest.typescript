import { assert } from "chai";
import {
  HeaderParamClient,
  MultipleParamsClient,
  MixedParamsClient,
  PathParamClient,
  ParamAliasClient,
  QueryParamClient
} from "./generated/azure/client-generator-core/client-initialization/default/src/index.js";

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
      await client.withQuery("test-id");
    });

    it("should send header parameter in withBody operation", async () => {
      await client.withBody({ name: "test-name" });
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
      await client.withQuery("test-id");
    });

    it("should send multiple parameters in withBody operation", async () => {
      await client.withBody({ name: "test-name" });
    });
  });

  describe("MixedParams Client", () => {
    let client: MixedParamsClient;

    beforeEach(() => {
      client = new MixedParamsClient("test-name-value", endpointOptions);
    });

    it("should send mixed parameters in withQuery operation", async () => {
      await client.withQuery("us-west", "test-id");
    });

    it("should send mixed parameters in withBody operation", async () => {
      await client.withBody("us-west", { name: "test-name" });
    });
  });

  describe("PathParam Client", () => {
    let client: PathParamClient;

    beforeEach(() => {
      client = new PathParamClient("sample-blob", endpointOptions);
    });

    it("should send path parameter in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
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
      await client.deleteStandalone();
    });
  });

  describe("ParamAlias Client", () => {
    let client: ParamAliasClient;

    beforeEach(() => {
      client = new ParamAliasClient("sample-blob", endpointOptions);
    });

    it("should call withOriginalName operation", async () => {
      await client.withOriginalName();
    });

    it("should call withAliasedName operation", async () => {
      await client.withAliasedName();
    });
  });

  describe("QueryParam Client", () => {
    let client: QueryParamClient;

    beforeEach(() => {
      client = new QueryParamClient("test-blob", endpointOptions);
    });

    it("should send query parameter in withQuery operation", async () => {
      await client.withQuery({ format: "text" });
    });

    it("should get standalone with query parameter", async () => {
      const result = await client.getStandalone();
      assert.strictEqual(result.name, "test-blob");
      assert.strictEqual(result.size, 42);
      assert.strictEqual(result.contentType, "text/plain");
      assert.strictEqual(
        result.createdOn.toISOString(),
        "2025-04-01T12:00:00.000Z"
      );
    });

    it("should delete resource with query parameter", async () => {
      await client.deleteStandalone();
    });
  });
});
