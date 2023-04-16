import { assert } from "chai";
import AzureCoreClientFactory, {
  AzureCoreClient
} from "./generated/azure/core/src/index.js";
describe.only("Azure Core Rest Client", () => {
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
      const result = await client.path("/azure/core/users/{id}", 1).put({
        body: {
          name: "Madge"
        }
      });
      assert.strictEqual(result.status, "20");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should patch user", async () => {
    try {
      const result = await client.path("/azure/core/users/{id}", 1).patch({
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
      const result = await client.path("/azure/core/users/{id}", 1).get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete user", async () => {
    try {
      const result = await client.path("/azure/core/users/{id}", 1).delete();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list users", async () => {
    try {
      const result = await client.path("/azure/core/users").get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should list with pages", async () => {
    try {
      const result = await client.path("/azure/core/page").get();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
  //   it.skip("should serialize default format query array parameter", async () => {
  //     try {
  //       const result = await client.path("/collectionFormat/default").get({
  //         queryParameters: {
  //           colors: buildMultiCollection(colors, 'colors')
  //         },
  //         skipUrlEncoding: true
  //       });
  //       assert.strictEqual(result.status, "200");
  //     } catch (err) {
  //       assert.fail(err as string);
  //     }
  //   });
});
