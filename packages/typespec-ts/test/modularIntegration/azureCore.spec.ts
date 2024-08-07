import { BasicClient } from "./generated/azure/core/basic/src/index.js";
import { assert } from "chai";

describe("BasicClient Classical Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get a user", async () => {
    const user = await client.get(1);
    assert.strictEqual(user?.name, "Madge");
    assert.strictEqual(user?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

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
    assert.strictEqual(items[1]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b5a");
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
