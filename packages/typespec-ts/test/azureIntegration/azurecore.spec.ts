import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient,
  isUnexpected
} from "./generated/azure/core/basic/src/index.js";

function buildExplodedFormStyle(values: string[]) {
  return {
    value: values,
    explode: true,
    style: "form"
  } as const;
}

describe("Azure Core Rest Client", () => {
  let client: AzureCoreClient;

  beforeEach(() => {
    client = AzureCoreClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });
  const validUser = {
    id: 1,
    name: "Madge",
    etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };
  const validUser2 = {
    id: 2,
    name: "John",
    etag: "22bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };
  const expectBody = { users: [validUser, validUser2] };
  it("should put user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).put({
      body: {
        name: "Madge"
      },
      contentType: "application/json"
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should patch user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).patch({
      contentType: "application/merge-patch+json",
      body: {
        name: "Madge"
      }
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should get user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).get();
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should delete user", async () => {
    const result = await client
      .path("/azure/core/basic/users/{id}", 1)
      .delete();
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "204");
  });

  it("should list users", async () => {
    const result = await client.path("/azure/core/basic/users").get({
      queryParameters: {
        top: 5,
        skip: 10,
        orderby: {
          value: ["id"],
          explode: true,
          style: "form"
        },
        filter: "id lt 10",
        select: buildExplodedFormStyle(["id", "orders", "etag"]),
        expand: buildExplodedFormStyle(["orders"])
      }
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
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
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, responseBody);
  });

  it("should export a user", async () => {
    const result = await client
      .path("/azure/core/basic/users/{id}:export", 1)
      .post({
        queryParameters: {
          format: "json"
        }
      });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should export all users", async () => {
    const result = await client
      .path("/azure/core/basic/users:exportallusers")
      .post({
        queryParameters: {
          format: "json"
        }
      });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, expectBody);
  });
});
