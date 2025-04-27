import { PathClient } from "./generated/parameters/path/src/index.js";
import { assert } from "chai";
describe("PathClient Client", () => {
  let client: PathClient;

  beforeEach(() => {
    client = new PathClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("path parameters normal", async () => {
    const result = await client.normal("foo");
    assert.isUndefined(result);
  });

  it("path parameters optional", async () => {
    const result = await client.optional();
    assert.isUndefined(result);
  });
});
