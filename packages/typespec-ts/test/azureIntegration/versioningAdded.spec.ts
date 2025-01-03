import VersioningAddedClientFactory, {
  VersioningAddedClient
} from "./generated/versioning/added/src/index.js";
import { assert } from "chai";
describe("VersioningAdded Rest Client", () => {
  let client: VersioningAddedClient;

  beforeEach(() => {
    client = VersioningAddedClientFactory("http://localhost:3000", "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning added v1", async () => {
    const result = await client.path("/v1").post({
      body: {
        prop: "foo",
        enumProp: "enumMemberV2",
        unionProp: 10
      },
      headers: {
        "header-v2": "bar"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
    assert.strictEqual(result.body.enumProp, "enumMemberV2");
    assert.strictEqual(result.body.unionProp, 10);
  });

  it("versioning added interface v2", async () => {
    const result = await client.path("/interface-v2/v2").post({
      body: {
        prop: "foo",
        enumProp: "enumMember",
        unionProp: "bar"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
    assert.strictEqual(result.body.enumProp, "enumMember");
    assert.strictEqual(result.body.unionProp, "bar");
  });

  it("versioning added v2", async () => {
    const result = await client.path("/v2").post({
      body: {
        prop: "foo",
        enumProp: "enumMember",
        unionProp: "bar"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.prop, "foo");
    assert.strictEqual(result.body.enumProp, "enumMember");
    assert.strictEqual(result.body.unionProp, "bar");
  });
});
