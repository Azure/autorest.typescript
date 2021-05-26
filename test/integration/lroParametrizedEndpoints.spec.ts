import { assert } from "chai";
import { LroParametrizedEndpointsClient } from "./generated/lroParametrizedEndpoints/src";

describe("lroParametrizedEndpoints", () => {
  let client: LroParametrizedEndpointsClient;

  beforeEach(() => {
    client = new LroParametrizedEndpointsClient({
      host: "host:3000",
      allowInsecureConnection: true
    });
  });

  it("should pollWithParameterizedEndpoints", async () => {
    const result = await client.beginPollWithParameterizedEndpointsAndWait(
      "local",
      {
        updateIntervalInMs: 0
      }
    );
    assert.equal(result.body, "success");
  });
});
