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
    const allXmlPets: XmlPet[] = [
      { id: "1", name: "dog" },
      { id: "2", name: "cat" },
      { id: "3", name: "bird" },
      { id: "4", name: "fish" }
    ];

    it("Payload_Pageable_XmlPagination_listWithNextLink", async () => {
      const items: XmlPet[] = [];
      for await (const item of client.xmlPagination.listWithNextLink()) {
        items.push(item);
      }
      assert.strictEqual(items.length, 4);
      assert.deepStrictEqual(items, allXmlPets);
    });
  });
});
