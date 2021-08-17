import { assert } from "chai";
import PagingClient, {
  Product,
  PagingRestClient,
  paginate
} from "./generated/pagingRest/src";

describe.only("Integration tests for Paging Rest Client", () => {
  let client: PagingRestClient;

  beforeEach(() => {
    client = PagingClient({
      allowInsecureConnection: true,
      retryOptions: { retryDelayInMs: 0 }
    });
  });

  describe("getMultiplePagesRetrySecond", () => {
    it("should retry and succeed the second time calling the next operation", async () => {
      const initialResponse = await client
        .path("/paging/itemNameWithXMSClientName")
        .get();

      if (initialResponse.status !== "200") {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
        throw error;
      }

      const iter = paginate(client, initialResponse);

      let result: Product[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.deepEqual(result, [{ properties: { id: 1, name: "Product" } }]);
    });

    it.skip("should retry and succeed the second time calling the next operation", async () => {
      let initialResponse = await client
        .path("/paging/multiple/retrysecond")
        .get();

      if (initialResponse.status !== "200") {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
        throw error;
      }

      const pages = paginate(client, initialResponse);
      let values: Product[] = [];

      for await (const page of pages) {
        values.push(page);
      }

      assert.deepEqual(values, [
        {
          properties: {
            id: 1,
            name: "Product"
          }
        },
        {
          properties: {
            id: 1,
            name: "Product"
          }
        },
        {
          properties: {
            id: 3,
            name: "product"
          }
        },
        {
          properties: {
            id: 4,
            name: "product"
          }
        },
        {
          properties: {
            id: 5,
            name: "product"
          }
        },
        {
          properties: {
            id: 6,
            name: "product"
          }
        },
        {
          properties: {
            id: 7,
            name: "product"
          }
        },
        {
          properties: {
            id: 8,
            name: "product"
          }
        },
        {
          properties: {
            id: 9,
            name: "product"
          }
        },
        {
          properties: {
            id: 10,
            name: "product"
          }
        }
      ]);
    });
  });

  describe("#getNoItemNamePages", () => {
    it("should return result of the default 'value' node", async () => {
      const initialResponse = await client.path("/paging/noitemname").get();
      const iter = paginate(client, initialResponse);

      const items: Product[] = [];
      for await (const item of iter) {
        items.push(item);
      }
      assert.lengthOf(items, 1);
      assert.deepEqual(items, [
        {
          properties: { id: 1, name: "Product" }
        }
      ]);
    });
  });

  describe("#getNullNextLinkNamePages", () => {
    it("should ignore any kind of nextLink, and stop after page 1", async () => {
      const expected: Product[] = [
        {
          properties: {
            id: 1,
            name: "Product"
          }
        }
      ];
      const response = await client.path("/paging/nullnextlink").get();
      assert.deepEqual(response.body.values, expected);
    });
  });

  describe("#getWithQueryParams", () => {
    it.skip("should return a ProductResult", async () => {
      // NextOperation
      const expected: Product[] = [
        {
          properties: {
            id: 1,
            name: "Product"
          }
        },
        {
          properties: {
            id: 2,
            name: "Product"
          }
        }
      ];
      const items: Product[] = [];
      const response = await client
        .path("/paging/multiple/getWithQueryParams")
        .get({
          queryParameters: { requiredQueryParameter: 100, queryConstant: true }
        });

      const iter = paginate(client, response);

      for await (const item of iter) {
        items.push(item);
      }

      assert.deepEqual(items, expected);
    });
  });

  describe("#getOdataMultiplePages", () => {
    it("should return a ProductResult", async () => {
      let response = await client.path("/paging/multiple/odata").get();
      let index = 1;
      let items: Product[] = [];

      const iter = paginate(client, response);

      for await (const item of iter) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });
  });

  describe("#getMultiplePagesRetryFirst", () => {
    it.skip("should retry first failed request and then get the next 10 pages", async () => {
      let response = await client.path("/paging/multiple/retryfirst").get();
      let index = 1;
      let items: Product[] = [];

      const iter = paginate(client, response);

      for await (const item of iter) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });
  });

  describe("#getSinglePages", () => {
    it("succeeds", async () => {
      let response = await client.path("/paging/single").get();
      let pages = 0;

      const iter = paginate(client, response);

      for await (const page of iter.byPage()) {
        assert.deepEqual(page, [
          {
            properties: {
              id: 1,
              name: "Product"
            }
          }
        ]);
        pages++;
      }
      assert.equal(pages, 1);
    });
  });

  describe("#getSinglePagesFailure", () => {
    it("throws an error", async () => {
      try {
        let response = await client.path("/paging/single/failure").get();

        const iter = paginate(client, response);
        let index = 0;
        for await (const item of iter) {
          assert.isDefined(item);
          index++;
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        assert.equal(err.statusCode, 400);
      }
    });
  });

  describe("#getMultiplePages", () => {
    it("succeeds", async () => {
      let response = await client.path("/paging/multiple").get();

      const iter = paginate(client, response);

      let index = 1;
      let items: Product[] = [];

      for await (const item of iter) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });

    it("should fail on 400 multiple pages", async () => {
      let index = 0;
      try {
        let response = await client.path("/paging/multiple/failure").get();
        const iter = paginate(client, response);

        for await (const page of iter.byPage()) {
          assert.isDefined(page);
          index++;
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        assert.equal(index, 1);
        assert.equal(err.statusCode, 400);
      }
    });

    it("should fail on invalid next link URL in multiple pages", async () => {
      let index = 0;
      try {
        let response = await client.path("/paging/multiple/failureuri").get();
        const iter = paginate(client, response);
        for await (const page of iter.byPage()) {
          assert.isDefined(page);
          index++;
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        // Make sure the failure happened while getting the second page
        assert.equal(index, 1);
        assert.equal(err.statusCode, 404);
      }
    });

    it.skip("should get multiple pages with fragmented nextLink", async () => {
      // Fragmented nextlink + nextOperation
      let response = await client
        .path("/paging/multiple/fragment/{tenant}", "test_user")
        .get({ queryParameters: { api_version: "1.6" } });
      const iter = paginate(client, response);
      let index = 0;
      let items: Product[] = [];
      for await (const item of iter) {
        index++;
        assert.equal(item.properties?.id, index);
        items.push(item);
      }
      assert.equal(items.length, 10);
    });
  });

  describe("#getMultiplePagesWithOffset", () => {
    it("succeeds", async () => {
      let response = await client
        .path("/paging/multiple/withpath/{offset}", "100")
        .get();

      const iter = paginate(client, response);

      let items: Product[] = [];

      for await (const item of iter) {
        items.push(item);
      }

      const lastItemId = items[items.length - 1].properties?.id;
      assert.equal(items.length, 10);
      assert.equal(lastItemId, 110);
    });
  });
});
