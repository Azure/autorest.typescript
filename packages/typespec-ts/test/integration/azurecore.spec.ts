import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient,
  FirstItemOutput,
  SecondItemOutput,
  UserOutput,
  buildMultiCollection,
  isUnexpected,
  paginate
} from "./generated/azure/core/src/index.js";
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
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.id, 1);
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(
        result.body.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should patch user", async () => {
    try {
      const result = await client
        .path("/azure/core/basic/users/{id}", 1)
        .patch({
          contentType: "application/merge-patch+json",
          body: {
            name: "Madge"
          }
        });
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.id, 1);
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(
        result.body.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get user", async () => {
    try {
      const result = await client.path("/azure/core/basic/users/{id}", 1).get();
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.id, 1);
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(
        result.body.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete user", async () => {
    try {
      const result = await client
        .path("/azure/core/basic/users/{id}", 1)
        .delete();
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
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
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value[0]?.id, 1);
      assert.strictEqual(result.body.value[0]?.name, "Madge");
      assert.strictEqual(
        result.body.value[0]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
      assert.deepEqual(result.body.value[0]?.orders, [
        { id: 1, userId: 1, detail: "a recorder" }
      ]);
      assert.strictEqual(result.body.value[1]?.id, 2);
      assert.strictEqual(result.body.value[1]?.name, "John");
      assert.strictEqual(
        result.body.value[1]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b5a"
      );
      assert.deepEqual(result.body.value[1]?.orders, [
        { id: 2, userId: 2, detail: "a TV" }
      ]);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list with pages", async () => {
    try {
      const initialResponse = await client.path("/azure/core/basic/page").get();

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
      }

      const iter = paginate(client, initialResponse);
      let result: UserOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.strictEqual(result[0]?.id, 1);
      assert.strictEqual(result[0]?.name, "Madge");
      assert.strictEqual(
        result[0]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list with parameters", async () => {
    try {
      const initialResponse = await client
        .path("/azure/core/basic/parameters")
        .get({
          queryParameters: { another: "Second" },
          body: { inputName: "Madge" }
        });

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
      }

      const iter = paginate(client, initialResponse);
      let result: UserOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.strictEqual(result[0]?.id, 1);
      assert.strictEqual(result[0]?.name, "Madge");
      assert.strictEqual(
        result[0]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get first item as page item", async () => {
    try {
      const initialResponse = await client
        .path("/azure/core/basic/first-item")
        .get();

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
      }

      const iter = paginate(client, initialResponse);
      let result: FirstItemOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.strictEqual(result[0]?.id, 1);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get second item as page item", async () => {
    try {
      const initialResponse = await client
        .path("/azure/core/basic/second-item")
        .get();

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
      }

      const iter = paginate(client, initialResponse);
      let result: SecondItemOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.strictEqual(result[0]?.name, "Madge");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list with custom pages", async () => {
    try {
      const initialResponse = await client
        .path("/azure/core/basic/custom-page")
        .get();

      if (isUnexpected(initialResponse)) {
        const error = `Unexpected status code ${initialResponse.status}`;
        assert.fail(error);
      }

      const iter = paginate(client, initialResponse);
      let result: UserOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }
      assert.strictEqual(result[0]?.id, 1);
      assert.strictEqual(result[0]?.name, "Madge");
      assert.strictEqual(
        result[0]?.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should export a user", async () => {
    try {
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
      assert.strictEqual(result.body.id, 1);
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(
        result.body.etag,
        "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
