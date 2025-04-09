import { CollectionFormatClient } from "./generated/parameters/collection-format/src/index.js";
import { assert } from "chai";

describe("CollectionFormatClient Classical Client", () => {
  let client: CollectionFormatClient;

  beforeEach(() => {
    client = new CollectionFormatClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should send csv format in query", async () => {
    const result = await client.query.csv(["blue", "red", "green"]);
    assert.strictEqual(result, undefined);
  });

  it("should send multi format in query", async () => {
    const result = await client.query.multi(["blue", "red", "green"], {
      requestOptions: {
        skipUrlEncoding: true
      }
    });
    assert.strictEqual(result, undefined);
  });

  it("should send pipes format in query", async () => {
    const result = await client.query.pipes(["blue", "red", "green"]);
    assert.strictEqual(result, undefined);
  });

  it("should send ssv format in query", async () => {
    const result = await client.query.ssv(["blue", "red", "green"]);
    assert.strictEqual(result, undefined);
  });

  it("should send csv format in header", async () => {
    const result = await client.header.csv(["blue", "red", "green"]);
    assert.strictEqual(result, undefined);
  });
});
