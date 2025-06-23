import { assert } from "chai";
import PageableClientFactory, {
  PageableClient
} from "./generated/payload/pageable/src/index.js";
import { paginate } from "./generated/payload/pageable/types/src/paginateHelper.js";

describe.only("Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      allowInsecureConnection: true
    });
  });

  // Not support, pending on https://github.com/Azure/autorest.typescript/issues/3022
  it("should get pagable Server Driven Pagination link", async () => {
    const initialResponse = await client
      .path("/payload/pageable/server-driven-pagination/link")
      .get();

    const iter = paginate(client, initialResponse);

    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.body.pets[0]?.id, "1");
    assert.strictEqual(result.body.pets[0]?.name, "dog");
    assert.strictEqual(result.body.pets[1]?.id, "2");
    assert.strictEqual(result.body.pets[1]?.name, "cat");
    assert.strictEqual(result.body.pets[2]?.id, "3");
    assert.strictEqual(result.body.pets[2]?.name, "bird");
    assert.strictEqual(result.body.pets[3]?.id, "4");
    assert.strictEqual(result.body.pets[3]?.name, "fish");
    assert.strictEqual(
      result.body.next,
      "http://localhost:3000/payload/pageable/server-driven-pagination/link/nextPage"
    );
  });

  describe("Server Driven Pagination with Continuation Token", () => {
    describe("Request Query Response Body", () => {
      it("should handle continuation token in query parameter and response body - first page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-body")
          .get({
            headers: { foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "1");
        assert.strictEqual(result.body.pets[0]?.name, "dog");
        assert.strictEqual(result.body.pets[1]?.id, "2");
        assert.strictEqual(result.body.pets[1]?.name, "cat");
        assert.strictEqual(result.body.nextToken, "page2");
      });

      it("should handle continuation token in query parameter and response body - second page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-body")
          .get({
            headers: { foo: "foo" },
            queryParameters: { token: "page2", bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "3");
        assert.strictEqual(result.body.pets[0]?.name, "bird");
        assert.strictEqual(result.body.pets[1]?.id, "4");
        assert.strictEqual(result.body.pets[1]?.name, "fish");
        assert.isUndefined(result.body.nextToken);
      });
    });

    describe("Request Header Response Body", () => {
      it("should handle continuation token in header and response body - first page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-body")
          .get({
            headers: { foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "1");
        assert.strictEqual(result.body.pets[0]?.name, "dog");
        assert.strictEqual(result.body.pets[1]?.id, "2");
        assert.strictEqual(result.body.pets[1]?.name, "cat");
        assert.strictEqual(result.body.nextToken, "page2");
      });

      it("should handle continuation token in header and response body - second page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-body")
          .get({
            headers: { token: "page2", foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "3");
        assert.strictEqual(result.body.pets[0]?.name, "bird");
        assert.strictEqual(result.body.pets[1]?.id, "4");
        assert.strictEqual(result.body.pets[1]?.name, "fish");
        assert.isUndefined(result.body.nextToken);
      });
    });

    describe("Request Query Response Header", () => {
      it("should handle continuation token in query parameter and response header - first page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-header")
          .get({
            headers: { foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "1");
        assert.strictEqual(result.body.pets[0]?.name, "dog");
        assert.strictEqual(result.body.pets[1]?.id, "2");
        assert.strictEqual(result.body.pets[1]?.name, "cat");
        assert.strictEqual(result.headers["next-token"], "page2");
        assert.strictEqual(result.headers["foo"], "foo");
      });

      it("should handle continuation token in query parameter and response header - second page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-query-response-header")
          .get({
            headers: { foo: "foo" },
            queryParameters: { token: "page2", bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "3");
        assert.strictEqual(result.body.pets[0]?.name, "bird");
        assert.strictEqual(result.body.pets[1]?.id, "4");
        assert.strictEqual(result.body.pets[1]?.name, "fish");
        assert.isUndefined(result.headers["next-token"]);
      });
    });

    describe("Request Header Response Header", () => {
      it("should handle continuation token in header and response header - first page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-header")
          .get({
            headers: { foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "1");
        assert.strictEqual(result.body.pets[0]?.name, "dog");
        assert.strictEqual(result.body.pets[1]?.id, "2");
        assert.strictEqual(result.body.pets[1]?.name, "cat");
        assert.strictEqual(result.headers["next-token"], "page2");
        assert.strictEqual(result.headers["foo"], "foo");
      });

      it("should handle continuation token in header and response header - second page", async () => {
        const result = await client
          .path("/payload/pageable/server-driven-pagination/continuationtoken/request-header-response-header")
          .get({
            headers: { token: "page2", foo: "foo" },
            queryParameters: { bar: "bar" }
          });

        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.pets.length, 2);
        assert.strictEqual(result.body.pets[0]?.id, "3");
        assert.strictEqual(result.body.pets[0]?.name, "bird");
        assert.strictEqual(result.body.pets[1]?.id, "4");
        assert.strictEqual(result.body.pets[1]?.name, "fish");
        assert.isUndefined(result.headers["next-token"]);
      });
    });
  });
});
