import { assert } from "chai";
import { ReturnTypeChangedFromClient } from "./generated/versioning/returnTypeChangedFrom/src/index.js";

describe("VersioningReturnTypeChangedFrom Rest Client", () => {
  let client: ReturnTypeChangedFromClient;

  beforeEach(() => {
    client = new ReturnTypeChangedFromClient("http://localhost:3002", {
      allowInsecureConnection: true
    });
  });

  it("versioning returnTypeChangedFrom test", async () => {
    const result = await client.test("test", {
      requestOptions: {
        headers: { "content-type": "text/plain" }
      }
    });
    assert.strictEqual(result, "test");
  });
});
