import { RpcClient } from "./generated/azure/core/lro/rpc/src/index.js";
import { assert } from "chai";

describe("RpcClient Classical Client", () => {
  let client: RpcClient;

  beforeEach(() => {
    client = new RpcClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should await poller result directly", async () => {
    const result = await client.longRunningRpc({
      prompt: "text"
    });
    assert.strictEqual(result.data, "text data");
  });
});
