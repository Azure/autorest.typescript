import { assert } from "chai";
import MediaTypeClientFactory, {
  MediaTypeClient
} from "./generated/payload/media-type/src/index.js";

describe("MediaType Client", () => {
  let client: MediaTypeClient;

  beforeEach(() => {
    client = MediaTypeClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should getAsText", async () => {
    try {
      const result = await client
        .path("/payload/media-type/string-body/getAsText")
        .get({ accept: "text/plain" });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "{cat}");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should sendAsText", async () => {
    try {
      const result = await client
        .path("/payload/media-type/string-body/sendAsText")
        .post({ body: "{cat}", contentType: "text/plain" });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should sendAsJson", async () => {
    try {
      const result = await client
        .path("/payload/media-type/string-body/sendAsJson")
        .post({ body: "foo", contentType: "application/json" });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should getAsJson", async () => {
    try {
      const result = await client
        .path("/payload/media-type/string-body/getAsJson")
        .get({ accept: "application/json" });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "foo");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
