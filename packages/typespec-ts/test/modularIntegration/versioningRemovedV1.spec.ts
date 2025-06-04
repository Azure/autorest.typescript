import { assert } from "chai";
import { RemovedClient } from "./generated/versioning/removed/v1/src/index.js";

describe("VersioningRemoved Rest Client", () => {
  let client1: RemovedClient;

  beforeEach(() => {
    client1 = new RemovedClient("http://localhost:3002", {
      allowInsecureConnection: true
    });
  });

  it("versioning removed test v1/v3", async () => {
    const result = await client1.modelV3({
      id: "123",
      enumProp: "enumMemberV1"
    });
    assert.strictEqual(result.id, "123");
    assert.strictEqual(result.enumProp, "enumMemberV1");
  });
});
