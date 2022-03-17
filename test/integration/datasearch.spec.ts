import { DataSearchClient } from "./generated/datasearch/src";
import { assert } from "chai";

describe("Integration tests for Data Search", () => {
  let client: DataSearchClient;

  it("should create a client successfully", async () => {
    client = new DataSearchClient("sampleEndPoint", "indexname");
    assert.notEqual(client, null);
  });
});
