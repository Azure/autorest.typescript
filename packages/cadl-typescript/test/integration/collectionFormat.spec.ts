import { assert } from "chai";
import CollectionFormatClientFactory, {
    buildMultiCollection,
  CollectionFormatClient
} from "./generated/collectionFormat/src/index.js";
describe("Collection Format Rest Client", () => {
  let client: CollectionFormatClient;
  const colors = ["blue", "red", "green"]

  beforeEach(() => {
    client = CollectionFormatClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should serialize multi format query array parameter", async () => {
    try {
      const result = await client.path("/collectionFormat/multi").get({
        queryParameters: {
          colors: buildMultiCollection(colors, 'colors')
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should serialize csv format query array parameter", async () => {
    try {
      const result = await client.path("/collectionFormat/csv").get({
        queryParameters: {
          colors: colors
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  // it.skip("should serialize default format query array parameter", async () => {
  //   try {
  //     const result = await client.path("/collectionFormat/default").get({
  //       queryParameters: {
  //         colors: buildMultiCollection(colors, 'colors')
  //       },
  //       skipUrlEncoding: true
  //     });
  //     assert.strictEqual(result.status, "200");
  //   } catch (err) {
  //     assert.fail(err as string);
  //   }
  // });
});
