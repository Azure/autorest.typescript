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
  const validUser = {
    id: 1,
    name: "Madge",
    etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };

  // same as https://github.com/Azure/autorest.typescript/issues/2705
  it.skip("should get a user", async () => {
    const user = await client.get(1);
    assert.deepEqual(user, validUser);
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
    const responseBody = {
      value: [
        {
          id: 1,
          name: "Madge",
          etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59",
          orders: [{ id: 1, userId: 1, detail: "a recorder" }]
        },
        {
          id: 2,
          name: "John",
          etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b5a",
          orders: [{ id: 2, userId: 2, detail: "a TV" }]
        }
      ]
    };
    assert.deepEqual(items, responseBody.value);
  });
  it.skip("should export a user", async () => {
    const user = await client.export(1, "json");
    assert.deepEqual(user, validUser);
  });

  it.skip("should create or replace a user", async () => {
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
    assert.deepEqual(user, validUser);
  });

  it.skip("should create or update a user", async () => {
    const user = await client.createOrUpdate(1, {
      name: "Madge",
      id: 1,
      etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
    });
    assert.deepEqual(user, validUser);
  });

  it("should delete a user", async () => {
    const user = await client.delete(1);
    assert.isUndefined(user);
  });
});
