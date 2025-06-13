import { assert } from "chai";
import { RemovedClient } from "./generated/versioning/removed/v2preview/src/index.js";

describe("VersioningRemoved Rest Client", () => {
  let client: RemovedClient;

  beforeEach(() => {
    client = new RemovedClient("http://localhost:3002", {
      version: "v2preview",
      allowInsecureConnection: true
    });
  });

  it("versioning removed test modelV33_V2preview", async () => {
    const result = await client.modelV3({
      id: "123"
    });
    assert.strictEqual(result.id, "123");
  });
});
