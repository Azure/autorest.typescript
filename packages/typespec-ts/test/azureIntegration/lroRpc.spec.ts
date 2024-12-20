import SpecsAzureCoreLroStandardClientFactory, {
  RpcClient,
  getLongRunningPoller,
  isUnexpected
} from "./generated/azure/core/lro/rpc/src/index.js";
import { assert } from "chai";
describe("RpcClient Rest Client", () => {
  let client: RpcClient;

  beforeEach(() => {
    client = SpecsAzureCoreLroStandardClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should post LRO response", async () => {
    const initialResponse = await client
      .path("/azure/core/lro/rpc/generations:submit")
      .post({
        body: { prompt: "text" }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "202");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.equal(result.status, "200");
    if (result.status === "200") {
      assert.equal(result.body.result?.data, "text data");
    }
  });
});
