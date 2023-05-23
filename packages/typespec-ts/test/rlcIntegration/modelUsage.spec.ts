import TypeModelUsageClientFactory, {
  TypeModelUsageClient
} from "./generated/models/usage/src/index.js";
import { assert } from "chai";
describe("ModelsUsageClient Rest Client", () => {
  let client: TypeModelUsageClient;
  const body = {
    requiredProp: "example-value"
  };

  beforeEach(() => {
    client = TypeModelUsageClientFactory({ allowInsecureConnection: true });
  });

  it("should post input model correctly", async () => {
    try {
      const result = await client.path("/type/model/usage/input").post({
        body
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get output model correctly", async () => {
    try {
      const result = await client.path("/type/model/usage/output").get();
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, body);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get output model correctly", async () => {
    try {
      const result = await client
        .path("/type/model/usage/input-output")
        .post({ body });
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body, body);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
