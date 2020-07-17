import { CustomUrlPagingClient } from "./generated/customUrlPaging/src/customUrlPagingClient";
import { assert } from "chai";
import { CustomUrlPagingClientOptionalParams } from "./generated/customUrlPaging/src/models";

describe("Custom URL + Paging", () => {
  let client: CustomUrlPagingClient;

  beforeEach(() => {
    const clientOptions: CustomUrlPagingClientOptionalParams = {
      host: "host:3000"
    };
    client = new CustomUrlPagingClient(clientOptions);
  });

  describe("Paging", () => {
    const account = "local";
    const expected = [
      { properties: { id: 1, name: "Product" } },
      { properties: { id: 2, name: "Product" } }
    ];
    it("getPagesPartialUrl", async () => {
      let values: any[] = [];
      let result = await client.paging.getPagesPartialUrl(account);
      if (result.values) {
        values.push(...result.values);
      }

      while (result.nextLink) {
        result = await client.paging.getPagesPartialUrlNext(
          account,
          result.nextLink
        );
        if (result.values) {
          values.push(...result.values);
        }
      }

      assert.deepEqual(values, expected);
    });

    it("getPagesPartialUrlOperation", async () => {
      let values: any[] = [];
      let result = await client.paging.getPagesPartialUrlOperation(account);
      if (result.values) {
        values.push(...result.values);
      }

      while (result.nextLink) {
        result = await client.paging.getPagesPartialUrlOperationNext(
          account,
          result.nextLink
        );
        if (result.values) {
          values.push(...result.values);
        }
      }

      assert.deepEqual(values, expected);
    });
  });
});
