import { CollectionFormatClient } from "./generated/parameters/collection-format/src/index.js";
import { assert } from "chai";

describe("CollectionFormatClient Classical Client", () => {
  let client: CollectionFormatClient;

  beforeEach(() => {
    client = new CollectionFormatClient({
      allowInsecureConnection: true
    });
  });

  it("should send csv format in query", async () => {
    try {
      const result = await client.query.csv(["blue", "red", "green"]);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send multi format in query", async () => {
    try {
      const result = await client.query.multi(["blue", "red", "green"], {
        requestOptions: {
          skipUrlEncoding: true
        }
      });
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send pipes format in query", async () => {
    try {
      const result = await client.query.pipes(["blue", "red", "green"]);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send ssv format in query", async () => {
    try {
      const result = await client.query.ssv(["blue", "red", "green"]);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send tsv format in query", async () => {
    try {
      const result = await client.query.tsv(["blue", "red", "green"]);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send csv format in header", async () => {
    try {
      const result = await client.header.csv(["blue", "red", "green"]);
      assert.strictEqual(result, undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
