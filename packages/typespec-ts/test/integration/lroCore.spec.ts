import AzureLroCoreClientFactory, {
  AzureLroCoreClient,
  ExportLogicalResponse,
  getLongRunningPoller,
  isUnexpected
} from "./generated/lro/lroCore/src/index.js";
import { assert } from "chai";
describe("AzureLroCoreClient Rest Client", () => {
  let client: AzureLroCoreClient;

  beforeEach(() => {
    client = AzureLroCoreClientFactory({ allowInsecureConnection: true });
  });

  it("should put LRO response", async () => {
    try {
      const initalResponse = await client
        .path("/azure/lro/core/users/{name}", "madge")
        .put({
          body: {
            role: "contributor"
          }
        });
      const poller = await getLongRunningPoller(client, initalResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.strictEqual(initalResponse.status, "201");
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.equal(result.status, "200");
      if (result.status === "200") {
        assert.equal(result.body.name, "madge");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should delete LRO response", async () => {
    try {
      const initalResponse = await client
        .path("/azure/lro/core/users/{name}", "madge")
        .delete({
          body: {
            role: "contributor"
          }
        });
      const poller = await getLongRunningPoller(client, initalResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.strictEqual(initalResponse.status, "202");
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      if (result.status === "200") {
        assert.equal(result.body.status, "Succeeded");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should export LRO response", async () => {
    try {
      const initalResponse = await client
        .path("/azure/lro/core/users/{name}:export", "madge")
        .post({
          queryParameters: {
            format: "json"
          }
        });
      const poller = await getLongRunningPoller(client, initalResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.strictEqual(initalResponse.status, "202");
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.equal(result.status, "200", "final status code");
      if (result.status === "200") {
        assert.equal(
          (result as ExportLogicalResponse).body.result?.name,
          "madge"
        );
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
