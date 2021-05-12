import { assert } from "chai";
import { LroParametrizedEndpointsClient } from "./generated/lroParametrizedEndpoints/src";

describe("lroParametrizedEndpoints", () => {
  let client: LroParametrizedEndpointsClient;

  beforeEach(() => {
    client = new LroParametrizedEndpointsClient({ host: "host:3000" });
  });

  it("should pollWithParameterizedEndpoints", async () => {
    const poller = await client.beginPollWithParameterizedEndpoints("local", {
      updateIntervalInMs: 0
    });
    const result = await poller.pollUntilDone();
    assert.equal(result.body, "success");
  });
});
