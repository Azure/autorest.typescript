import MediaTypes, { MediaTypesClient } from "./generated/mediaTypesRest/src";
import { stringToStream } from "../utils/stream-helpers";
import { assert } from "chai";
import { Context } from "mocha";
import { isNode } from "@azure/core-util";

describe("Media types Rest", () => {
  let client: MediaTypesClient;

  beforeEach(() => {
    client = MediaTypes({ allowInsecureConnection: true });
  });

  it("should handle /analyze with application/pdf", async function(this: Context) {
    if (!isNode) {
      // Browsers don't support streaming request bodies yet. There are a few issues tracking
      // implementation, for example https://bugs.chromium.org/p/chromium/issues/detail?id=688906
      this.skip();
    }
    const result = await client.path("/mediatypes/analyze").post({
      contentType: "application/pdf",
      body: stringToStream("PDF")
    });

    assert.equal(result.status, "200");
    assert.equal(result.body, "Nice job with PDF");
  });

  it("should handle /analyze with application/json", async () => {
    const result = await client.path("/mediatypes/analyze").post({
      contentType: "application/json",
      body: { source: "TestPath" }
    });

    assert.equal(result.status, "200");
    assert.equal(result.body, "Nice job with JSON");
  });

  it("should handle /contentTypeWithEncoding", async () => {
    const result = await client
      .path("/mediatypes/contentTypeWithEncoding")
      .post({
        contentType: "text/plain; charset=UTF-8",
        body: "test"
      });

    assert.equal(result.status, "200");
    assert.equal(result.body, "Nice job sending content type with encoding");
  });
});
