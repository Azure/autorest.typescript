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
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
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

  it("Payload_Pageable_ServerDrivenPagination_linkString", async () => {
    const iter = client.serverDrivenPagination.linkString();
    const items: Array<Pet> = [];
    for await (const pet of iter) {
      items.push(pet);
    }
    assert.strictEqual(items.length, 4);
    assert.deepStrictEqual<Pet[]>(items, pets);
  });

  it("Payload_Pageable_ServerDrivenPagination_nestedLink", async () => {
    const iter = client.serverDrivenPagination.nestedLink();
    const items: Array<Pet> = [];
    for await (const pet of iter) {
      items.push(pet);
    }
    assert.strictEqual(items.length, 4);
    assert.deepStrictEqual<Pet[]>(items, pets);
  });

  describe("AlternateInitialVerb", () => {
    it("should list pets using post initial verb", async () => {
      const iter = client.serverDrivenPagination.alternateInitialVerb.post({
        filter: "foo eq bar"
      });
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
      assert.deepStrictEqual<Pet[]>(items, pets);
    });
  });

  describe("PageSize", () => {
    it("Payload_Pageable_PageSize_listWithoutContinuation", async () => {
      const iter = client.pageSize.listWithoutContinuation();
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_PageSize_listWithPageSize", async () => {
      const iter = client.pageSize.listWithPageSize({ pageSize: 2 });
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 2);
    });
  });

  describe("ContinuationToken", () => {
    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestQueryResponseBody", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestQueryResponseBody(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestHeaderResponseBody", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestHeaderResponseBody(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestQueryResponseHeader", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestQueryResponseHeader(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestHeaderResponseHeader", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestHeaderResponseHeader(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestQueryNestedResponseBody", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestQueryNestedResponseBody(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });

    it("Payload_Pageable_ServerDrivenPagination_ContinuationToken_requestHeaderNestedResponseBody", async () => {
      const iter =
        client.serverDrivenPagination.continuationToken.requestHeaderNestedResponseBody(
          {
            foo: "foo",
            bar: "bar"
          }
        );
      const items: Array<Pet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
    });
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

    it("Payload_Pageable_XmlPagination_listWithContinuation", async () => {
      const iter = client.xmlPagination.listWithContinuation();
      const items: Array<XmlPet> = [];
      for await (const pet of iter) {
        items.push(pet);
      }
      assert.strictEqual(items.length, 4);
      assert.strictEqual(items[0]?.id, "1");
      assert.strictEqual(items[0]?.name, "dog");
      assert.strictEqual(items[3]?.id, "4");
      assert.strictEqual(items[3]?.name, "fish");
    });
  });
});
