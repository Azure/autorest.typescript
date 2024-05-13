import VersioningRenamedFromClientFactory, {
  VersioningRenamedFromClient
} from "./generated/versioning/renamedFrom/src/index.js";
import { assert } from "chai";
describe("VersioningRenamedFrom Rest Client", () => {
  let client: VersioningRenamedFromClient;

  beforeEach(() => {
    client = VersioningRenamedFromClientFactory("http://localhost:3000", "v2", {
      allowInsecureConnection: true
    });
  });

  it("versioning RenamedFrom ewOp test", async () => {
    const result = await client.path("/test").post({
      body: {
        newProp: "foo",
        enumProp: "newEnumMember",
        unionProp: 10
      },
      queryParameters: {
        newQuery: "bar"
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.newProp, "foo");
    assert.strictEqual(result.body.enumProp, "newEnumMember");
    assert.strictEqual(result.body.unionProp, 10);
  });

  it("versioning renamedFrom newInterface test", async () => {
    const result = await client.path("/interface/test").post({
      body: {
        newProp: "foo",
        enumProp: "newEnumMember",
        unionProp: 10
      }
    });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.newProp, "foo");
    assert.strictEqual(result.body.enumProp, "newEnumMember");
    assert.strictEqual(result.body.unionProp, 10);
  });
});
