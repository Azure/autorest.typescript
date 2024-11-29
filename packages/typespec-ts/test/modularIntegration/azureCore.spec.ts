import { BasicClient, User } from "./generated/azure/core/basic/src/index.js";
import { assert } from "chai";

describe("BasicClient Classical Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      endpoint: "http://localhost:3002",
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
          expand: ["orders"]
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
          expand: ["orders"]
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

      it("maxPageSize param should be ignored", async () => {
        const iter = client.list({
          top: 5,
          skip: 10,
          orderby: ["id"],
          filter: "id lt 10",
          select: ["id", "orders", "etag"],
          expand: ["orders"]
        });

        const pagedIter = iter.byPage({ maxPageSize: 10 } as any);
        const items: User[] = (await pagedIter.next()).value;
        assert.strictEqual(items.length, 2);
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

  it("should get a user", async () => {
    const user = await client.get(1);
    assert.strictEqual(user?.name, "Madge");
    assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it("should export a user", async () => {
    try {
      const user = await client.export(1, "json");
      assert.strictEqual(user?.id, 1);
      assert.strictEqual(user?.name, "Madge");
      assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should export all users", async () => {
    try {
      const result = await client.exportAllUsers("json");
      assert.strictEqual(result.users[0]?.id, 1);
      assert.strictEqual(result.users[0]?.name, "Madge");
      assert.strictEqual(
        result.users[0]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
      assert.strictEqual(result.users[1]?.id, 2);
      assert.strictEqual(result.users[1]?.name, "John");
      assert.strictEqual(
        result.users[1]?.etag,
        "22bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should create or replace a user", async () => {
    try {
      const user = await client.createOrReplace(
        1,
        {
          name: "Madge",
          id: 1,
          etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
        },
        {
          requestOptions: { headers: { "content-type": "application/json" } }
        }
      );
      assert.strictEqual(user?.id, 1);
      assert.strictEqual(user?.name, "Madge");
      assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should create or update a user", async () => {
    try {
      const user = await client.createOrUpdate(1, {
        name: "Madge",
        id: 1,
        etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      });
      assert.strictEqual(user?.id, 1);
      assert.strictEqual(user?.name, "Madge");
      assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete a user", async () => {
    try {
      const user = await client.delete(1);
      assert.isUndefined(user);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
