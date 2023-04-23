import AzureLroClientFactory, {
  AzureLroClient,
  getLongRunningPoller
} from "./generated/lro/lroBasic/src/index.js";
import { assert } from "chai";
describe.skip("AzureLroClient Rest Client", () => {
  let client: AzureLroClient;

  beforeEach(() => {
    client = AzureLroClientFactory({ allowInsecureConnection: true });
  });

  it("should get LRO response", async () => {
    try {
      const initalResponse = await client.path("/lro/basic/put").put();
      const poller = await getLongRunningPoller(client, initalResponse);
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "200");
      assert.strictEqual(initalResponse.status, "200");
      assert.equal(result.body.name, "bob");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
