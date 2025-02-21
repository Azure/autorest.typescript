import { assert } from "chai";
import { RemovedClient } from "./generated/versioning/removed/src/index.js";

describe("VersioningRemoved Rest Client", () => {
  let client1: RemovedClient;
  let client2: RemovedClient;
  let clientPreview: RemovedClient;

  beforeEach(() => {
    client1 = new RemovedClient("http://localhost:3002", "v1", {
      allowInsecureConnection: true
    });
    client2 = new RemovedClient("http://localhost:3002", "v2", {
      allowInsecureConnection: true
    });
    clientPreview = new RemovedClient("http://localhost:3002", "v2preview", {
      allowInsecureConnection: true
    });
  });

  it("versioning removed test v2", async () => {
    const result = await client2.v2({
      prop: "foo",
      enumProp: "enumMemberV2",
      unionProp: "bar"
    });
    assert.strictEqual(result.prop, "foo");
    assert.strictEqual(result.enumProp, "enumMemberV2");
    assert.strictEqual(result.unionProp, "bar");
  });

  it("versioning removed test modelV3", async () => {
    const result = await client1.modelV3({
      id: "123",
      enumProp: "enumMemberV1",
    });
    assert.strictEqual(result.id, "123");
    assert.strictEqual(result.enumProp, "enumMemberV1");
  });

  it("versioning removed test modelV3_V2", async () => {
    const result = await client2.modelV3({
      id: "123",
      enumProp: "enumMemberV1",
    });
    assert.strictEqual(result.id, "123");
    assert.strictEqual(result.enumProp, "enumMemberV1");
  });

  it("versioning removed test modelV33_V2preview", async () => {
    const result = await clientPreview.modelV3({
      id: "123",
      enumProp: "enumMemberV1",
    });
    assert.strictEqual(result.id, "123");
  });
});
