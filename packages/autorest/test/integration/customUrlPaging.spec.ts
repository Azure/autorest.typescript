import {
  CustomUrlPagingClient,
  CustomUrlPagingClientOptionalParams,
  Product
} from "./generated/customUrlPaging/src";
import { assert } from "chai";

describe("Custom URL + Paging", () => {
  let client: CustomUrlPagingClient;

  beforeEach(() => {
    const clientOptions: CustomUrlPagingClientOptionalParams = {
      host: "host:3000",
      allowInsecureConnection: true
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
      let values: Product[] = [];
      let result = client.paging.listPagesPartialUrl(account);

      for await (const item of result) {
        values.push(item);
      }

      assert.deepEqual(values, expected);
    });

    it("getPagesPartialUrlOperation", async () => {
      let values: Product[] = [];
      let result = client.paging.listPagesPartialUrlOperation(account);

      for await (const item of result) {
        values.push(item);
      }

      assert.deepEqual(values, expected);
    });
  });
});
