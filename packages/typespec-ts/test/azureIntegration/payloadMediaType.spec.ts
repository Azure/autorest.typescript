import { assert } from "chai";
import MediaTypeClientFactory, {
  MediaTypeClient
} from "./generated/payload/media-type/src/index.js";

describe("MediaType Client", () => {
  let client: MediaTypeClient;

  beforeEach(() => {
    client = MediaTypeClientFactory({
      endpoint: "http://localhost:3005",
      allowInsecureConnection: true
    });
  });

  it("should getAsText", async () => {
    const result = await client
      .path("/payload/media-type/string-body/getAsText")
      .get({ accept: "text/plain" });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "{cat}");

  });

  it("should sendAsText", async () => {
    const result = await client
      .path("/payload/media-type/string-body/sendAsText")
      .post({ body: "{cat}", contentType: "text/plain" });
    assert.strictEqual(result.status, "200");

  });

  it("should sendAsJson", async () => {
    const result = await client
      .path("/payload/media-type/string-body/sendAsJson")
      .post({ body: "foo", contentType: "application/json" });
    assert.strictEqual(result.status, "200");

  });

  it("should getAsJson", async () => {
    const result = await client
      .path("/payload/media-type/string-body/getAsJson")
      .get({ accept: "application/json" });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "foo");

  });
});
