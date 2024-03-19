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

      it("maxPageSize param should be ignored", async () => {
        const iter = client.list({
          top: 5,
          skip: 10,
          orderby: ["id"],
          filter: "id lt 10",
          select: ["id", "orders", "etag"],
          expand: ["orders"],
          requestOptions: { skipUrlEncoding: true }
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

  it("should list with custom page model", async () => {
    const customPageIter = await client.listWithCustomPageModel();
    const items = [];
    for await (const user of customPageIter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, "Madge");
    assert.strictEqual(items[0]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it("should list with page", async () => {
    const customPageIter = await client.listWithPage();
    const items = [];
    for await (const user of customPageIter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, "Madge");
    assert.strictEqual(items[0]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it("should list with parameters", async () => {
    const customPageIter = await client.listWithParameters(
      {
        inputName: "Madge"
      },
      {
        another: "Second"
      }
    );
    const items = [];
    for await (const user of customPageIter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, "Madge");
  });

  it("should list first item", async () => {
    const customPageIter = await client.listFirstItem();
    const items = [];
    for await (const user of customPageIter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.id, 1);
  });

  it("should list second item", async () => {
    const customPageIter = await client.listSecondItem();
    const items = [];
    for await (const user of customPageIter) {
      items.push(user);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, "Madge");
  });

  it("should export a user", async () => {
    try {
      const user = await client.exportOperation(1, "json");
      assert.strictEqual(user?.id, 1);
      assert.strictEqual(user?.name, "Madge");
      assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
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
      const user = await client.deleteOperation(1);
      assert.isUndefined(user);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
