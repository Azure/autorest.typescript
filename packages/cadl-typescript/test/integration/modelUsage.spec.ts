import ModelsUsageClientFactory, {
  ModelsUsageClient
} from "./generated/models/usage/src/index.js";
import { assert } from "chai";
describe.skip("ModelsUsageClient Rest Client", () => {
  let client: ModelsUsageClient;
  const body = {
    requiredProp: "example-value"
  };

  beforeEach(() => {
    client = ModelsUsageClientFactory({ allowInsecureConnection: true });
  });

  it("should post input model correctly", async () => {
    try {
      const result = await client.path("/models/usages/input").post({
        body
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get output model correctly", async () => {
    try {
      const result = await client.path("/models/usages/output").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, body);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get output model correctly", async () => {
    try {
      const result = await client
        .path("/models/usages/input-output")
        .post({ body });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, body);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
