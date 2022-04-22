import { ServiceClientOptions } from "@azure/core-client";
import { expect, assert } from "chai";
import { addCookiePolicies } from "../utils/cookies";
import {
  PagingNoIteratorsClient,
  PagingGetMultiplePagesResponse,
  PagingGetMultiplePagesWithOffsetResponse,
  PagingGetMultiplePagesFragmentNextLinkResponse,
  Product,
  PagingGetMultiplePagesLROResponse,
  PagingGetMultiplePagesLRONextResponse
} from "./generated/pagingNoIterators/src";

describe("Integration tests for Paging", () => {
  let client: PagingNoIteratorsClient;

  beforeEach(() => {
    const pipelineOptions: ServiceClientOptions = {
      allowInsecureConnection: true,
      retryOptions: {
        retryDelayInMs: 0
      }
    };
    client = new PagingNoIteratorsClient(pipelineOptions);
    addCookiePolicies(client.pipeline);
  });

  describe("getMultiplePagesRetrySecond", () => {
    it("should retry and succeed the second time calling the next operation", async () => {
      const result = await client.paging.getPagingModelWithItemNameWithXMSClientName();

      assert.deepEqual(result.indexes, [
        { properties: { id: 1, name: "Product" } }
      ]);
    });

    it("should retry and succeed the second time calling the next operation", async () => {
      let response = await client.paging.getMultiplePagesRetrySecond();
      let values: any[] = [];

      if (response.values) {
        values.push(...response.values);
      }

      while (response.nextLink) {
        response = await client.paging.getMultiplePagesRetrySecondNext(
          response.nextLink
        );

        if (response.values) {
          values.push(...response.values);
        }
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
      const response = await client.paging.getNoItemNamePages();
      assert.lengthOf(response.value!, 1);
      assert.deepEqual(response.value && response.value[0], {
        properties: { id: 1, name: "Product" }
      });
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
      const response = await client.paging.getNullNextLinkNamePages();

      assert.deepEqual(response.values, expected);

      // Azure/autorest.typescript/issues/648
      // assert.deepEqual(response, expected);
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
        }
      ];
      const response = await client.paging.getWithQueryParams(100);
      assert.deepEqual(response.values, expected);
    });
  });

  describe("#nextOperationWithQueryParams", () => {
    it("should return a ProductResult", async () => {
      const expected: Product[] = [
        {
          properties: {
            id: 2,
            name: "Product"
          }
        }
      ];
      const response = await client.paging.nextOperationWithQueryParams();
      assert.deepEqual(response.values, expected);
    });
  });

  describe("#getOdataMultiplePages", () => {
    it("should return a ProductResult", async () => {
      const expected: Product[] = [
        {
          properties: {
            id: 10,
            name: "product"
          }
        }
      ];

      let response = await client.paging.getOdataMultiplePages();
      let pages = 1;

      while (response.odataNextLink) {
        response = await client.paging.getOdataMultiplePagesNext(
          response.odataNextLink
        );
        pages += 1;
      }

      assert.equal(pages, 10);
      assert.deepEqual(response.values, expected);
    });
  });

  describe("#getMultiplePagesRetryFirst", () => {
    it("should retry first failed request and then get the next 10 pages", async () => {
      const expected: Product[] = [
        {
          properties: {
            id: 10,
            name: "product"
          }
        }
      ];

      let response = await client.paging.getMultiplePagesRetryFirst();
      let pages = 1;

      while (response.nextLink) {
        response = await client.paging.getMultiplePagesRetryFirstNext(
          response.nextLink
        );
        pages += 1;
      }

      assert.equal(pages, 10);
      assert.deepEqual(response.values, expected);
    });
  });

  describe("#getSinglePages", () => {
    it("succeeds", async () => {
      const response = await client.paging.getSinglePages();
      expect(
        response.nextLink,
        "nextLink should not be present on the response."
      ).to.be.undefined;

      expect(response.values).to.deep.equal([
        {
          properties: {
            id: 1,
            name: "Product"
          }
        }
      ]);
    });
  });

  describe("#getSinglePagesFailure", () => {
    it("throws an error", async () => {
      try {
        await client.paging.getSinglePagesFailure();
        throw new Error("Test failure");
      } catch (err) {
        // expect(err.message).to.not.equal("Test failure");
        expect(err.statusCode).to.equal(400);
      }
    });
  });

  describe("#getMultiplePages", () => {
    it("succeeds", async () => {
      const results: Product[] = [];
      let nextLink: string | undefined;
      do {
        let response: PagingGetMultiplePagesResponse;
        if (!nextLink) {
          response = await client.paging.getMultiplePages();
        } else {
          response = await client.paging.getMultiplePagesNext(nextLink);
        }
        const values = response.values ?? [];
        results.push(...values);
        nextLink = response.nextLink;
      } while (nextLink);

      expect(results.length).to.equal(
        10,
        "Unexpected number of pages received."
      );
    });

    it("should fail on 400 multiple pages", async () => {
      try {
        const result = await client.paging.getMultiplePagesFailure();
        await client.paging.getMultiplePagesFailureNext(result.nextLink!);
        assert.fail("Expected to throw error");
      } catch (error) {
        assert.equal(error.statusCode, 400);
      }
    });

    it("should fail on invalid next link URL in multiple pages", async () => {
      try {
        const result = await client.paging.getMultiplePagesFailureUri();
        await client.paging.getMultiplePagesFailureUriNext(result.nextLink!);
        assert.fail("Expected to throw error");
      } catch (error) {
        assert.equal(error.statusCode, 404);
      }
    });

    it("should get multiple pages with fragmented nextLink", async () => {
      const result = await client.paging.getMultiplePagesFragmentNextLink(
        "1.6",
        "test_user"
      );
      const loop = async function(odataNextLink?: string, count: number = 0) {
        if (odataNextLink !== null && odataNextLink !== undefined) {
          const res = await client.paging.nextFragment(
            "1.6",
            "test_user",
            odataNextLink
          );
          await loop(res.odataNextLink, count + 1);
        } else {
          assert.equal(count, 10);
        }
      };

      assert.isDefined(result.odataNextLink);
      await loop(result.odataNextLink, 1);
    });
  });

  describe("#getMultiplePagesWithOffset", () => {
    it("succeeds", async () => {
      const results: Product[] = [];
      let nextLink: string | undefined;
      do {
        let response: PagingGetMultiplePagesWithOffsetResponse;
        if (!nextLink) {
          response = await client.paging.getMultiplePagesWithOffset({
            offset: 100
          });
        } else {
          response = await client.paging.getMultiplePagesWithOffsetNext(
            { offset: 100 },
            nextLink
          );
        }
        const values = response.values ?? [];
        results.push(...values);
        nextLink = response.nextLink;
      } while (nextLink);

      expect(results.length).to.equal(
        10,
        "Unexpected number of pages received."
      );
    });
  });

  describe("#getMultiplePagesLRO", () => {
    it("succeeds and gets 10 pages", async () => {
      const poller = await client.paging.getMultiplePagesLRO({
        updateIntervalInMs: 0
      });
      let pageCount = 1;
      let page:
        | PagingGetMultiplePagesLROResponse
        | PagingGetMultiplePagesLRONextResponse = await poller.pollUntilDone();
      while (page.nextLink) {
        page = await client.paging.getMultiplePagesLRONext(page.nextLink);
        pageCount++;
      }

      assert.equal(pageCount, 10);
    });
  });

  describe("#getMultiplePagesFragmentNextLink", () => {
    it("succeeds", async () => {
      const results: Product[] = [];
      let nextLink: string | undefined;
      do {
        let response: PagingGetMultiplePagesFragmentNextLinkResponse;
        if (!nextLink) {
          response = await client.paging.getMultiplePagesFragmentNextLink(
            "1.6",
            "test_user",
            {}
          );
        } else {
          response = await client.paging.nextFragment(
            "1.6",
            "test_user",
            nextLink
          );
        }
        const values = response.values ?? [];
        results.push(...values);
        nextLink = response.odataNextLink;
      } while (nextLink);

      expect(results.length).to.equal(
        10,
        "Unexpected number of pages received."
      );
    });
  });
});
