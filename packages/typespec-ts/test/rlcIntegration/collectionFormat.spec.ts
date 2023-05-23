import { assert } from "chai";
import CollectionFormatClientFactory, {
  buildMultiCollection,
  buildPipeCollection,
  buildSsvCollection,
  buildTsvCollection,
  CollectionFormatClient
} from "./generated/parameters/collection-format/src/index.js";
describe("Collection Format Rest Client", () => {
  let client: CollectionFormatClient;
  const colors = ["blue", "red", "green"];

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
      const result = await client.path("/parameters/collection-format/query/multi").get({
        queryParameters: {
          colors: buildMultiCollection(colors, "colors")
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should serialize csv format query array parameter", async () => {
    try {
      const result = await client.path("/parameters/collection-format/query/csv").get({
        queryParameters: {
          colors: colors
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should serialize ssv format query array parameter", async () => {
    try {
      const result = await client.path("/parameters/collection-format/query/ssv").get({
        queryParameters: {
          colors: buildSsvCollection(colors)
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should serialize tsv format query array parameter", async () => {
    try {
      const result = await client.path("/parameters/collection-format/query/tsv").get({
        queryParameters: {
          colors: buildTsvCollection(colors)
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });


  it("should serialize pipes format query array parameter", async () => {
    try {
      const result = await client.path("/parameters/collection-format/query/pipes").get({
        queryParameters: {
          colors: buildPipeCollection(colors)
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should serialize csv format header array parameter", async () => {
    try {
      const result = await client.path("/parameters/collection-format/header/csv").get({
        headers: {
          colors: colors as any
        },
        skipUrlEncoding: true
      });
      assert.strictEqual(result.status, "204");
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
