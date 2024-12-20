import { MediaTypeClient } from "./generated/payload/media-type/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("MediaType Client", () => {
  let client: MediaTypeClient;

  beforeEach(() => {
    client = new MediaTypeClient({
      endpoint: `http://localhost:${port}`,
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
