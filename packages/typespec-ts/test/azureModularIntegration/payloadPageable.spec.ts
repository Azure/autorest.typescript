import {
  PageableClient,
  User
} from "./generated/payload/pageable/src/index.js";
import { assert } from "chai";

describe("PageableClient Classical Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = new PageableClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should throw exceptions if no maxpagesize set", async () => {
    const iter = client.list();
    const items = [];
    try {
      for await (const user of iter) {
        items.push(user);
      }
      assert.fail("Should throw exception");
    } catch (err: any) {
      assert.isNotNull(err);
      assert.strictEqual(
        err.message,
        "Pagination failed with unexpected statusCode 400"
      );
    }
  });

  it("should list all users if maxpagesize=3", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    const items = [];
    for await (const user of iter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 4);
  });

  it("should list all users byPage", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    const items: User[] = [];
    for await (const user of iter.byPage()) {
      items.push(...user);
    }
    assert.strictEqual(items.length, 4);
  });

  it("should list left users byPage if continuationToken is set", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    /**
     * two pages:
     *  - 1st page has 3 items
     *  - 2nd page has 1 item
     */
    const firstPage = await iter.byPage().next();
    assert.strictEqual(firstPage.done, false);
    assert.strictEqual(firstPage.value.length, 3);
    // initiate another iterator starting with 2nd page
    const continuationToken = firstPage.value.continuationToken;
    assert.strictEqual(
      continuationToken,
      "http://localhost:3006/payload/pageable?skipToken=name-user7&maxpagesize=3"
    );
    const items: User[] = [];
    for await (const pagedUsers of iter.byPage({ continuationToken })) {
      items.push(...pagedUsers);
    }
    assert.strictEqual(items.length, 1);
  });

  it("maxPageSize param should be ignored", async () => {
    const pagedIter = client
      .list({ maxpagesize: 3 })
      .byPage({ maxPageSize: 10 } as any);
    const items: User[] = (await pagedIter.next()).value;
    assert.strictEqual(items.length, 3);
  });
});
