import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient, buildMultiCollection
} from "./generated/azure/core/src/index.js";
import AzureCoreTraitsClientFactory, {
  AzureCoreTraitsClient
} from "./generated/azure/core-traits/src/index.js";
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

  it("should put user", async () => {
    try {
      const result = await client.path("/azure/core/basic/users/{id}", 1).put({
        body: {
          name: "Madge"
        },
        contentType: "application/json"
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should patch user", async () => {
    try {
      const result = await client.path("/azure/core/basic/users/{id}", 1).patch({
        contentType: "application/merge-patch+json",
        body: {
          name: "Madge"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get user", async () => {
    try {
      const result = await client.path("/azure/core/basic/users/{id}", 1).get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete user", async () => {
    try {
      const result = await client.path("/azure/core/basic/users/{id}", 1).delete();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list users", async () => {
    try {
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
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list with pages", async () => {
    try {
      const result = await client.path("/azure/core/basic/page").get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

describe("Azure Core Traits Rest Client", () => {
  let client: AzureCoreTraitsClient;

  beforeEach(() => {
    client = AzureCoreTraitsClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get user traits", async () => {
    try {
      const result = await client.path("/azure/core/traits/user/{id}", 1).get({
        headers: {
          foo: "123",
          "If-Match": "valid",
          "If-None-Match": "invalid",
          "If-Modified-Since": "Thu, 26 Aug 2021 14:38:00 GMT",
          "If-Unmodified-Since": "Fri, 26 Aug 2022 14:38:00 GMT"
        }
      })
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  // it("should delete user traits", async () => {
  //   try {
  //     const result = await client.path("/azure/traits/api/{apiVersion}/user/{id}", "2022-12-01-preview", 1).delete();
  //     assert.strictEqual(result.status, "204");
  //   } catch (err) {
  //     assert.fail(err as string);
  //   }
  // });
});
