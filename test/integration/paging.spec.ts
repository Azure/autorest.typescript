import { expect } from "chai";
import { PagingClient } from "./generated/paging/src/pagingClient";
import {
  PagingGetMultiplePagesResponse,
  PagingGetMultiplePagesWithOffsetResponse,
  PagingGetMultiplePagesFragmentNextLinkResponse
} from "./generated/paging/src/models";

describe("Integration tests for Paging", () => {
  let client: PagingClient;

  beforeEach(() => {
    client = new PagingClient();
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
        expect(err.message).to.not.equal("Test failure");
        // TODO: update core-http to 1.0.4 once released
        // expect(err.statusCode).to.equal(400);
      }
    });
  });

  describe("#getMultiplePages", () => {
    it("succeeds", async () => {
      const results = [];
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
  });

  describe("#getMultiplePagesWithOffset", () => {
    it("succeeds", async () => {
      const results = [];
      let nextLink: string | undefined;
      do {
        let response: PagingGetMultiplePagesWithOffsetResponse;
        if (!nextLink) {
          response = await client.paging.getMultiplePagesWithOffset(100);
        } else {
          response = await client.paging.getMultiplePagesWithOffsetNext(
            100,
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

  // TODO: https://github.com/Azure/autorest.typescript/issues/574
  describe.skip("#getMultiplePagesFragmentNextLink", () => {
    it("succeeds", async () => {
      const results = [];
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
