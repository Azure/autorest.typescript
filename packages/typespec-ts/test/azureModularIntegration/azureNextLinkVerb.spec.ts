import {
  NextLinkVerbClient,
  Test
} from "./generated/azure/client-generator-core/next-link-verb/src/index.js";
import { assert } from "chai";

describe("NextLinkVerbClient", () => {
  let client: NextLinkVerbClient;

  beforeEach(() => {
    client = new NextLinkVerbClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  describe("listItems", () => {
    it("should list all items with POST method for pagination", async () => {
      const iter = client.listItems();
      const items: Test[] = [];
      for await (const item of iter) {
        items.push(item);
      }
      assert.strictEqual(items.length, 2);
      assert.strictEqual(items[0]?.id, "test1");
      assert.strictEqual(items[1]?.id, "test2");
    });

    it("should list items by page with POST method", async () => {
      const iter = client.listItems();
      const pagedItems = iter.byPage();
      const pages: Test[][] = [];
      for await (const page of pagedItems) {
        pages.push([...page]);
      }
      assert.strictEqual(pages.length, 2);
      assert.strictEqual(pages[0]?.length, 1);
      assert.strictEqual(pages[0]?.[0]?.id, "test1");
      assert.strictEqual(pages[1]?.length, 1);
      assert.strictEqual(pages[1]?.[0]?.id, "test2");
    });
  });
});
