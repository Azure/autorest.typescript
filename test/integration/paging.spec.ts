import { ServiceClientOptions } from "@azure/core-client";
import { assert } from "chai";
import { addCookiePolicies } from "../utils/cookies";
import { PagingClient, Product } from "./generated/paging/src";

describe("Integration tests for Paging", () => {
  let client: PagingClient;

  beforeEach(() => {
    const pipelineOptions: ServiceClientOptions = {
      allowInsecureConnection: true,
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new PagingClient(pipelineOptions);
    addCookiePolicies(client.pipeline);
  });

  describe("getMultiplePagesRetrySecond", () => {
    it("should retry and succeed the second time calling the next operation", async () => {
      const iter = client.paging.listPagingModelWithItemNameWithXMSClientName();

      let result: Product[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.deepEqual(result, [{ properties: { id: 1, name: "Product" } }]);
    });

    it("should retry and succeed the second time calling the next operation", async () => {
      let pages = client.paging.listMultiplePagesRetrySecond();
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
      const iter = client.paging.listNoItemNamePages();
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
      const response = client.paging.listNullNextLinkNamePages();
      const items: Product[] = [];
      for await (const item of response) {
        items.push(item);
      }
      assert.deepEqual(items, expected);
    });
  });

  describe("#getWithQueryParams", () => {
    it("should return a ProductResult", async () => {
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
      const result = client.paging.listWithQueryParams(100);

      for await (const item of result) {
        items.push(item);
      }

      assert.deepEqual(items, expected);
    });
  });

  describe("#getOdataMultiplePages", () => {
    it("should return a ProductResult", async () => {
      let response = client.paging.listOdataMultiplePages();
      let index = 1;
      let items: Product[] = [];

      for await (const item of response) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });
  });

  describe("#getMultiplePagesRetryFirst", () => {
    it("should retry first failed request and then get the next 10 pages", async () => {
      let response = client.paging.listMultiplePagesRetryFirst();
      let index = 1;
      let items: Product[] = [];

      for await (const item of response) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });
  });

  describe("#getSinglePages", () => {
    it("succeeds", async () => {
      const response = client.paging.listSinglePages();
      let pages = 0;
      for await (const page of response.byPage()) {
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
        const iter = client.paging.listSinglePagesFailure();
        let index = 0;
        for await (const item of iter) {
          assert.isDefined(item);
          index++;
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        assert.equal(err.statusCode, 400);
        assert.include(err.message, "Expected single failure test");
      }
    });
  });

  describe("#getMultiplePages", () => {
    it("succeeds", async () => {
      const response = client.paging.listMultiplePages();
      let index = 1;
      let items: Product[] = [];

      for await (const item of response) {
        assert.equal(item.properties?.id, index);
        index++;
        items.push(item);
      }

      assert.equal(items.length, 10);
    });

    it("should fail on 400 multiple pages", async () => {
      let index = 0;
      try {
        const iter = client.paging.listMultiplePagesFailure();
        for await (const page of iter.byPage()) {
          assert.isDefined(page);
          index++;
        }
        assert.fail("Expected an exeption");
      } catch (err) {
        assert.equal(index, 1);
        assert.equal(err.statusCode, 400);
        assert.include(err.message, "Expected single failure test");
      }
    });

    it("should fail on invalid next link URL in multiple pages", async () => {
      let index = 0;
      try {
        const iter = client.paging.listMultiplePagesFailureUri();
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
      const iter = client.paging.listMultiplePagesFragmentNextLink(
        "1.6",
        "test_user"
      );
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
      const iter = client.paging.listMultiplePagesWithOffset({ offset: 100 });
      let items: Product[] = [];
      for await (const item of iter) {
        items.push(item);
      }
      assert.equal(items.length, 10);
      assert.equal(items[items.length - 1].properties?.id, 110);
    });
  });

  describe("#getMultiplePagesLRO", () => {
    it("succeeds and gets 10 pages", async () => {
      const iter = client.paging.beginListMultiplePagesLROAndWait({
        updateIntervalInMs: 0
      });
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

  describe("#getMultiplePagesFragmentNextLink", () => {
    it("succeeds", async () => {
      const iter = client.paging.listMultiplePagesFragmentNextLink(
        "1.6",
        "test_user"
      );
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
});
