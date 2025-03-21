import { assert } from "chai";
import CollectionFormatClientFactory, {
  buildCsvCollection,
  buildMultiCollection,
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

  it("[legacy]should serialize multi format query array parameter with buildMultiCollection helper", async () => {
    const result = await client
      .path("/parameters/collection-format/query/multi")
      .get({
        queryParameters: {
          colors: buildMultiCollection(colors, "colors")
        },
        skipUrlEncoding: true
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize multi format query array parameter", async () => {
    const result = await client
      .path("/parameters/collection-format/query/multi")
      .get({
        queryParameters: {
          colors: {
            value: colors,
            explode: true,
            style: "form"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize csv format query array parameter with array type", async () => {
    const result = await client
      .path("/parameters/collection-format/query/csv")
      .get({
        queryParameters: {
          colors
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize csv format query array parameter with wrapper types", async () => {
    const result = await client
      .path("/parameters/collection-format/query/csv")
      .get({
        queryParameters: {
          colors: {
            value: colors,
            explode: false,
            style: "form"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize ssv format query array parameter", async () => {
    const result = await client
      .path("/parameters/collection-format/query/ssv")
      .get({
        queryParameters: {
          colors: {
            value: colors,
            explode: false,
            style: "spaceDelimited"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize pipes format query array parameter", async () => {
    const result = await client
      .path("/parameters/collection-format/query/pipes")
      .get({
        queryParameters: {
          colors: {
            value: colors,
            explode: false,
            style: "pipeDelimited"
          }
        }
      });
    assert.strictEqual(result.status, "204");
  });

  it("should serialize csv format header array parameter", async () => {
    const result = await client
      .path("/parameters/collection-format/header/csv")
      .get({
        headers: {
          colors: buildCsvCollection(colors)
        },
        skipUrlEncoding: true
      });
    assert.strictEqual(result.status, "204");
  });
});
