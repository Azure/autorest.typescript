import AzureLroCoreClientFactory, {
  AzureLroCoreClient,
  getLongRunningPoller,
  isUnexpected
} from "./generated/lro/lroCore/src/index.js";
import { assert } from "chai";
describe.only("AzureLroCoreClient Rest Client", () => {
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
      console.log(result, initalResponse);
      assert.equal(result.status, "200");
      assert.strictEqual(initalResponse.status, "201");
      console.log("------------", result, initalResponse);
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
      console.log(result);
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should export LRO response", async () => {
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
      console.log(result);
      if (isUnexpected(result)) {
        throw Error("Unexpected status code");
      }
      assert.equal(result.status, "200");
      if (result.status === "200") {
        assert.equal(result.body.result?.name, "madge");
      }
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
