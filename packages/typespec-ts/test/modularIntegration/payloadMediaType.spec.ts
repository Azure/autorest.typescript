import { MediaTypeClient } from "./generated/payload/media-type/src/index.js";
import { assert } from "chai";

describe("MediaType Client", () => {
  let client: MediaTypeClient;

  beforeEach(() => {
    client = new MediaTypeClient({
      allowInsecureConnection: true
    });
  });

  it.skip("should getAsText", async () => {
    try {
      const result = await client.stringBody.getAsText({
        requestOptions: { headers: { accept: "text/plain" } }
      });
      // const result = await client.stringBody.getAsText({
      //   onResponse: (res) => {
      //     res.rawHeaders["accept"] = "text/plain";
      //   }
      // });
      console.log(result);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should sendAsText", async () => {
    try {
      const result = await client.stringBody.sendAsText("{cat}");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should getAsJson", async () => {
    try {
      const result = await client.stringBody.getAsJson();
      console.log(result);
      assert.strictEqual(result, "foo");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should sendAsJson", async () => {
    try {
      const result = await client.stringBody.sendAsJson("foo");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
