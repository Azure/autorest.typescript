import { assert } from "chai";
import NotDefinedParamInServerEndpointClientFactory, {
  NotDefinedParamInServerEndpointClient
} from "./generated/server/endpoint/not-defined/src/index.js";
describe("NotDefinedParamInServerEndpoint Rest Client", () => {
  let client: NotDefinedParamInServerEndpointClient;

  beforeEach(() => {
    client = NotDefinedParamInServerEndpointClientFactory(
      "http://localhost:3000",
      {
        allowInsecureConnection: true,
        retryOptions: {
          maxRetries: 0
        }
      }
    );
  });

  it("should work with not defined endpoint", async () => {
    try {
      const result = await client
        .path("/server/endpoint/not-defined/valid")
        .head();
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
