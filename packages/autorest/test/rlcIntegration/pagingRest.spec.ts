import { assert } from "chai";
import Paging, {
  ProductOutput,
  PagingClient,
  paginate,
  getLongRunningPoller,
  isUnexpected
} from "./generated/pagingRest/src";

describe("Integration tests for Paging Rest Client", () => {
  let client: PagingClient;

  beforeEach(() => {
    client = Paging({
      allowInsecureConnection: true,
      retryOptions: { retryDelayInMs: 0 }
    });
  });

  describe("getMultiplePagesRetrySecond", () => {
    it("should retry and succeed the second time calling the next operation", async () => {
      const initialResponse = await client
        .path("/paging/itemNameWithXMSClientName")
        .get();

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
        throw error;
      }

      const iter = paginate(client, initialResponse);

      let result: ProductOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.deepEqual(result, [{ properties: { id: 1, name: "Product" } }]);
    });
  });

  describe("#getNoItemNamePages", () => {
    it("should return result of the default 'value' node", async () => {
      const initialResponse = await client.path("/paging/noitemname").get();
      const iter = paginate(client, initialResponse);

      const items: ProductOutput[] = [];
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
      const expected: ProductOutput[] = [
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
    it("should return a ProductResult", async () => {
      // NextOperation
      const expected: ProductOutput[] = [
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
      const response = await client
        .path("/paging/multiple/getWithQueryParams")
        .get({
          queryParameters: { requiredQueryParameter: 100, queryConstant: true }
        });

      if (isUnexpected(response)) {
        const error = `Unexpected status code ${response.status}`;
        assert.fail(error);
        throw error;
      }

      const items: ProductOutput[] = response.body.values || [];

      const nextResponse = await client
        .path("/paging/multiple/nextOperationWithQueryParams")
        .get({ queryParameters: { queryConstant: true } });

      const iter = paginate(client, nextResponse);

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
      let items: ProductOutput[] = [];

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
        for await (const item of iter) {
          assert.isDefined(item);
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        assert.notEqual(err, "Expected an exeption");
      }
    });
  });

  describe("#getMultiplePages", () => {
    it("succeeds", async () => {
      let response = await client.path("/paging/multiple").get();

      const iter = paginate(client, response);

      let index = 1;
      let items: ProductOutput[] = [];

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

    it("should get multiple pages with fragmented nextLink", async () => {
      const tenant = "test_user";
      const initialResponse = await client
        .path("/paging/multiple/fragment/{tenant}", tenant)
        .get({ queryParameters: { api_version: "1.6" } });

      let firstRun = true;
      const iter = paginate(client, initialResponse, {
        customGetPage: async pageLink => {
          const result = firstRun
            ? initialResponse
            : await client
              .path(
                "/paging/multiple/fragment/{tenant}/{nextLink}",
                tenant,
                pageLink
              )
              .get({
                queryParameters: { api_version: "1.6" },
                skipUrlEncoding: true
              });
          firstRun = false;
          if (isUnexpected(result)) {
            throw new Error("Unexpected status code");
          }
          const nextLink = result.body["odata.nextLink"];
          const values = result.body["values"] ?? [];
          return {
            page: values,
            nextPageLink: nextLink
          };
        }
      });

      let index = 0;
      let items: ProductOutput[] = [];
      for await (const item of iter) {
        index++;
        assert.equal(item.properties?.id, index);
        items.push(item);
      }
      assert.equal(items.length, 10);
    });
  }).timeout(10000);

  describe("#getWithQueryParams", () => {
    it("should return a ProductResult", async () => {
      const expected: ProductOutput[] = [
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
      const items: ProductOutput[] = [];
      // const result = client.paging.listWithQueryParams(100);
      const initialResponse = await client
        .path("/paging/multiple/getWithQueryParams")
        .get({
          queryParameters: { requiredQueryParameter: 100, queryConstant: true }
        });

      let firstRun = true;
      const iter = paginate(client, initialResponse, {
        customGetPage: async pageLink => {
          const result = firstRun
            ? initialResponse
            : await client
              .path("/paging/multiple/nextOperationWithQueryParams")
              .get({ queryParameters: { queryConstant: true } });
          firstRun = false;
          if (isUnexpected(result)) {
            throw new Error("Unexpected status code");
          }
          const nextLink = result.body["nextLink"];
          const values = result.body["values"] ?? [];
          return {
            page: values,
            nextPageLink: nextLink
          };
        }
      });

      for await (const item of iter) {
        items.push(item);
      }

      assert.deepEqual(items, expected);
    });
  });

  describe("#getMultiplePagesWithOffset", () => {
    it("succeeds", async () => {
      let response = await client
        .path("/paging/multiple/withpath/{offset}", 100)
        .get();

      const iter = paginate(client, response);

      let items: ProductOutput[] = [];

      for await (const item of iter) {
        items.push(item);
      }

      const lastItemId = items[items.length - 1].properties?.id;
      assert.equal(items.length, 10);
      assert.equal(lastItemId, 110);
    });
  });

  describe("#getMultiplePagesLRO", () => {
    it("succeeds and gets 10 pages", async () => {
      const initialResponse = await client.path("/paging/multiple/lro").post();

      const poller = getLongRunningPoller(client, initialResponse, {
        intervalInMs: 0
      });

      const pagingResult = await poller.pollUntilDone();
      const iter = paginate(client, pagingResult);

      let index = 0;
      let items: ProductOutput[] = [];
      for await (const item of iter) {
        index++;
        assert.equal(item.properties?.id, index);
        items.push(item);
      }
      assert.equal(items.length, 10);
    });
  });
});
