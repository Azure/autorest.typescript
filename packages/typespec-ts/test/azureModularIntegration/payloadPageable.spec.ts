import { describe, it, beforeEach, assert } from "vitest";

import {
  PageableClient,
  Pet,
  XmlPet
} from "./generated/payload/pageable/src/index.js";

describe("PageableClient Classical Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = new PageableClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const pets = [
    { id: "1", name: "dog" },
    { id: "2", name: "cat" },
    { id: "3", name: "bird" },
    { id: "4", name: "fish" }
  ];
  it("Payload Pageable ServerDriven Pagination link", async () => {
    const iter = client.serverDrivenPagination.link();
    const items: Array<Pet> = [];
    for await (const user of iter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 4);
    assert.deepStrictEqual<Pet[]>(items, pets);
  });

  describe("XmlPagination", () => {
    it("should list xml pagination with next link", async () => {
      const iter = client.xmlPagination.listWithNextLink();
      const items: Array<XmlPet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
      assert.strictEqual(items[0]?.id, "1");
      assert.strictEqual(items[0]?.name, "dog");
      assert.strictEqual(items[1]?.id, "2");
      assert.strictEqual(items[1]?.name, "cat");
      assert.strictEqual(items[2]?.id, "3");
      assert.strictEqual(items[2]?.name, "bird");
      assert.strictEqual(items[3]?.id, "4");
      assert.strictEqual(items[3]?.name, "fish");
    });
  });
});
