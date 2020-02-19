import { expect } from "chai";
import { PagingClient } from "./generated/paging/src/pagingClient";
import { Product } from "./generated/paging/src/models";
describe.only("Paging", () => {
  let client: PagingClient;

  beforeEach(() => {
    client = new PagingClient();
  });

  it("Fetch get no items page", async () => {
    let results: Product[] = [];
    for await (let page of client.paging.getNoItemNamePages()) {
      results = [...results, ...page];
    }
    expect(results).to.deep.equal([]);
  });
});
