import TypeModelUsageClientFactory, {
  UsageClient
} from "./generated/type/model/usage/src/index.js";
import { assert } from "chai";
describe("ModelsUsageClient Rest Client", () => {
  let client: UsageClient;
  const body = {
    requiredProp: "example-value"
  };

  beforeEach(() => {
    client = TypeModelUsageClientFactory({ allowInsecureConnection: true });
  });

  it("should post input model correctly", async () => {
    const result = await client.path("/type/model/usage/input").post({
      body
    });
    assert.strictEqual(result.status, "204");
  });

  it("should get output model correctly", async () => {
    const result = await client.path("/type/model/usage/output").get();
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, body);
  });

  it("should get output model correctly", async () => {
    const result = await client
      .path("/type/model/usage/input-output")
      .post({ body });
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, body);
  });
});
