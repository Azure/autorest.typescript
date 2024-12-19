import { MediaTypeClient } from "./generated/payload/media-type/src/index.js";
import { assert } from "chai";

describe("MediaType Client", () => {
  let client: MediaTypeClient;

  beforeEach(() => {
    client = new MediaTypeClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should getAsText", async () => {
    const result = await client.stringBody.getAsText({
      requestOptions: { headers: { accept: "text/plain" } }
    });
    assert.strictEqual(result, "{cat}");
  });

  it("should sendAsText", async () => {
    const result = await client.stringBody.sendAsText("{cat}");
    assert.isUndefined(result);
  });

  it("should getAsJson", async () => {
    const result = await client.stringBody.getAsJson();
    console.log(result);
    assert.strictEqual(result, "foo");
  });

  it("should sendAsJson", async () => {
    const result = await client.stringBody.sendAsJson("foo");
    assert.isUndefined(result);
  });
});
