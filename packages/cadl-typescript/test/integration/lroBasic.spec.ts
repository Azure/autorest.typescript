import AzureLroClientFactory, {
  AzureLroClient
} from "./generated/lro/lroBasic/src/index.js";
import { assert } from "chai";
describe("AzureLroClient Rest Client", () => {
  let client: AzureLroClient;

  beforeEach(() => {
    client = AzureLroClientFactory({ allowInsecureConnection: true });
  });

  it("should get LRO response", async () => {
    try {
      const initalResponse = await client.path("/lro/basic/put").put();
      assert.strictEqual(initalResponse.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
