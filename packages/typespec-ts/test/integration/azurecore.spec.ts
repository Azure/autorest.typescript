import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient,
  buildMultiCollection,
  isUnexpected
} from "./generated/azure/core/basic/src/index.js";
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
  it("should put user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).put({
      body: {
        name: "Madge"
      },
      contentType: "application/json",
      queryParameters: {
        "api-version": "2022-12-01-preview"
      }
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
      },
      queryParameters: {
        "api-version": "2022-12-01-preview"
      }
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should get user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).get({
      queryParameters: {
        "api-version": "2022-12-01-preview"
      }
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });

  it("should delete user", async () => {
    const result = await client.path("/azure/core/basic/users/{id}", 1).delete({
      queryParameters: {
        "api-version": "2022-12-01-preview"
      }
    });
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
        orderby: "id",
        filter: "id lt 10",
        select: buildMultiCollection(["id", "orders", "etag"], "select"),
        expand: "orders"
      },
      skipUrlEncoding: true
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
          format: "json",
          "api-version": "2022-12-01-preview"
        }
      });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, validUser);
  });
});
