import createMediaTypes, {
  MediaTypes
} from "./generated/mediaTypesRest/src";

import { assert } from "chai";

describe("Media types Rest", () => {
  let client: MediaTypes;

  beforeEach(() => {
    client = createMediaTypes({ allowInsecureConnection: true });
  });

  // Issue https://github.com/Azure/autorest.typescript/issues/1242
  it.skip("should handle /analyze with application/pdf", async () => {
    const result = await client.path("/mediatypes/analyze").post({
      contentType: "application/pdf",
      body: "PDF"
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
        contentType: "text/plain; encoding=UTF-8" as any,
        body: "test"
      });

    assert.equal(result.status, "200");
    assert.equal(result.body, "Nice job sending content type with encoding");
  });
});
