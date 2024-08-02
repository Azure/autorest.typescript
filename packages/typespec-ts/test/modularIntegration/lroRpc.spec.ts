import { RpcClient } from "./generated/azure/core/lro/rpc/src/index.js";
import { assert } from "chai";

describe("RpcClient Classical Client", () => {
  let client: RpcClient;

  beforeEach(() => {
    client = new RpcClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should await poller result directly", async () => {
    try {
      const result = await client.longRunningRpc({
        prompt: "text"
      });
      assert.strictEqual(result.data, "text data");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
