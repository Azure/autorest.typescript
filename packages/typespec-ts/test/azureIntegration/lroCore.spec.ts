import SpecsAzureCoreLroStandardClientFactory, {
  StandardClient,
  getLongRunningPoller,
  isUnexpected
} from "./generated/azure/core/lro/standard/src/index.js";
import { assert } from "chai";
describe("AzureLroCoreClient Rest Client", () => {
  let client: StandardClient;

  beforeEach(() => {
    client = SpecsAzureCoreLroStandardClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should put LRO response", async () => {
    const initialResponse = await client
      .path("/azure/core/lro/standard/users/{name}", "madge")
      .put({
        body: {
          role: "contributor"
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "201");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.equal(result.status, "200");
    if (result.status === "200") {
      assert.equal(result.body.name, "madge");
    }
  });

  it("should delete LRO response", async () => {
    const initialResponse = await client
      .path("/azure/core/lro/standard/users/{name}", "madge")
      .delete({
        body: {
          role: "contributor"
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "202");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    if (result.status === "200") {
      assert.equal(result.body.status, "Succeeded");
    }
  });

  it("should export LRO response", async () => {
    const initialResponse = await client
      .path("/azure/core/lro/standard/users/{name}:export", "madge")
      .post({
        queryParameters: {
          format: "json"
        }
      });
    const poller = await getLongRunningPoller(client, initialResponse);
    const result = await poller.pollUntilDone();
    assert.equal(result.status, "200");
    assert.strictEqual(initialResponse.status, "202");
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.equal(result.status, "200", "final status code");
    if (result.status === "200") {
      assert.equal(result.body.result?.name, "madge");
    }
  });
});
