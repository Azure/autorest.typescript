import { BasicClient } from "./generated/parameters/basic/src/index.js";
import { assert } from "chai";
describe("BasicClient Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("basic parameters explicit-body simple", async () => {
    const result = await client.explicitBody.simple({ name: "foo" });
    assert.isUndefined(result);
  });

  it("basic parameters implicit-body simple", async () => {
    const result = await client.implicitBody.simple("foo");
    assert.isUndefined(result);
  });
});
