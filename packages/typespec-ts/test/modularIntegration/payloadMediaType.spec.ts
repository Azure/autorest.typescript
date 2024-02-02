import {
    MediaTypeClient,
  } from "./generated/payload/media-type/src/index.js";
  import { assert } from "chai";
  
  describe.only("MediaType Client", () => {
    let client: MediaTypeClient;
  
    beforeEach(() => {
      client = new MediaTypeClient({
        allowInsecureConnection: true
      });
    });
  
    it.only("should getAsText", async () => {
        try {
            const result = await client.stringBody.getAsText();
            console.log(result);
            assert.isUndefined(result);
          } catch (err) {
            assert.fail(err as string);
          }
    });

    it("should sendAsText", async () => {
        try {
            const result = await client.stringBody.sendAsText("{cat}");
            console.log(result);
            // assert.isUndefined(result);
          } catch (err) {
            assert.fail(err as string);
          }
    });

    it("should getAsJson", async () => {
        try {
            const result = await client.stringBody.getAsJson();
            console.log(result);
            // assert.isUndefined(result);
          } catch (err) {
            assert.fail(err as string);
          }
    });

    it("should sendAsJson", async () => {
        try {
            const result = await client.stringBody.sendAsJson("foo");
            console.log(result);
            // assert.isUndefined(result);
          } catch (err) {
            assert.fail(err as string);
          }
    });
  });
  