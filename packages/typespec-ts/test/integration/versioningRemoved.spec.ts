import VersioningRemovedClientFactory, {
  VersioningRemovedClient
} from "./generated/versioning/removed/src/index.js";
import { assert } from "chai";
describe("VersioningRemoved Rest Client", () => {
  let client1: VersioningRemovedClient;
  let client2: VersioningRemovedClient;
  let clientPreview: VersioningRemovedClient;

  beforeEach(() => {
    client1 = VersioningRemovedClientFactory("http://localhost:3000", "v1", {
      allowInsecureConnection: true
    });
    client2 = VersioningRemovedClientFactory("http://localhost:3000", "v2", {
      allowInsecureConnection: true
    });
    clientPreview = VersioningRemovedClientFactory("http://localhost:3000", "v2preview", {
      allowInsecureConnection: true
    });
  });

  it("versioning removed test v2", async () => {
    const result = await client2.path("/v2").post({
      body: {
        prop: "foo",
        enumProp: "enumMemberV2",
        unionProp: "bar"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
    assert.strictEqual(result.body.enumProp, "enumMemberV2");
    assert.strictEqual(result.body.unionProp, "bar");
  });

  it("versioning removed test v3", async () => {
    const result = await client1.path("/v3").post({
      body: {
        id: "123",
        enumProp: "enumMemberV1",
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, "123");
    assert.strictEqual(result.body.enumProp, "enumMemberV1");
  });

  it("versioning removed test modelV3_V2 ", async () => {
    const result = await client2.path("/v3").post({
      body: {
        id: "123",
        enumProp: "enumMemberV1",
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, "123");
    assert.strictEqual(result.body.enumProp, "enumMemberV1");
  });

  it("versioning removed test modelV3_V2preview", async () => {
    const result = await clientPreview.path("/v3").post({
      body: {
        id: "123",
        enumProp: "enumMemberV1",
      }
    });
    console.log(result);
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.id, "123");
  });
});
