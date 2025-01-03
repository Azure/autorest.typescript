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
        allowInsecureConnection: true
      }
    );
  });

  it("should work with not defined endpoint", async () => {
    const result = await client
      .path("/server/endpoint/not-defined/valid")
      .head();
    assert.strictEqual(result.status, "200");
  });
});
