import { BasicClient, User } from "./generated/azure/core/src/index.js";
import { assert } from "chai";

describe("BasicClient Classical Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      allowInsecureConnection: true
    });
  });

  describe("list", () => {
    describe("next", () => {
      it("should list all users", async () => {
        const iter = client.list({
          top: 5,
          skip: 10,
          orderby: ["id"],
          filter: "id lt 10",
          select: ["id", "orders", "etag"],
          expand: ["orders"],
          requestOptions: { skipUrlEncoding: true }
        });
        const items = [];
        for await (const user of iter) {
          items.push(user);
        }
        assert.strictEqual(items.length, 2);
        assert.strictEqual(items[0]?.name, "Madge");
        assert.strictEqual(
          items[1]?.etag,
          "11bdc430-65e8-45ad-81d9-8ffa60d55b5a"
        );
      });
    });

    describe("byPage", () => {
      it("should get all users by page without any settings", async () => {
        const iter = client.list({
          top: 5,
          skip: 10,
          orderby: ["id"],
          filter: "id lt 10",
          select: ["id", "orders", "etag"],
          expand: ["orders"],
          requestOptions: { skipUrlEncoding: true }
        });
        const pagedItems = iter.byPage();
        const items: User[] = [];
        for await (const page of pagedItems) {
          items.push(...page);
        }
        assert.strictEqual(items.length, 2);
        assert.strictEqual(items[0]?.name, "Madge");
        assert.strictEqual(
          items[1]?.etag,
          "11bdc430-65e8-45ad-81d9-8ffa60d55b5a"
        );
      });

      it("maxPageSize is not allowed and should throw exceptions", async () => {
        const iter = client.list({
          top: 5,
          skip: 10,
          orderby: ["id"],
          filter: "id lt 10",
          select: ["id", "orders", "etag"],
          expand: ["orders"],
          requestOptions: { skipUrlEncoding: true }
        });
        const pagedItems = iter.byPage({ maxPageSize: 10 });
        try {
          const items: User[] = [];
          for await (const user of pagedItems) {
            items.push(...user);
          }
          assert.fail(
            "`maxPageSize` is not allowed to customize and should throw exceptions"
          );
        } catch (err: any) {
          assert.strictEqual(
            err.message,
            "maxPageSize is not supported by this operation."
          );
        }
      });

      it("should get users by continuationToken", async () => {
        const iter = client.list();
        const pagedItems = iter.byPage({
          continuationToken:
            "/azure/core/basic/users?top=5&skip=10&orderby=id&filter=id%20lt%2010&select=id&select=orders&select=etag&expand=orders&api-version=2022-12-01-preview"
        });
        const items: User[] = [];
        for await (const user of pagedItems) {
          items.push(...user);
        }
        assert.strictEqual(items.length, 2);
        assert.strictEqual(items[0]?.name, "Madge");
        assert.strictEqual(
          items[1]?.etag,
          "11bdc430-65e8-45ad-81d9-8ffa60d55b5a"
        );
      });
    });
  });
});
