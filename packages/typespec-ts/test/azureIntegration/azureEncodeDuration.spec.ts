import { assert } from "chai";
import AzureEncodeDurationClientFactory, {
  DurationClient
} from "./generated/azure/encode/duration/src/index.js";

describe("Azure Encode Duration Rest Client", () => {
  let client: DurationClient;

  beforeEach(() => {
    client = AzureEncodeDurationClientFactory({
      allowInsecureConnection: true
    });
  });

  describe("durationConstant", () => {
    it("should handle duration constant with azure specific encoding", async () => {
      const result = await client
        .path("/azure/encode/duration/duration-constant")
        .put({
          body: {
            input: "1.02:59:59.5000000"
          },
          contentType: "application/json"
        });
      assert.strictEqual(result.status, "204");
    });
  });
});
