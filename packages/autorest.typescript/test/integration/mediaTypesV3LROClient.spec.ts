import { MediaTypesV3LROClient } from "./generated/mediaTypesV3Lro/src";
import { assert } from "chai";
describe("OpenAPI V3 model that supports multiple media-types and LRO", () => {
  it("smoke test to verify that a client can be instantiated", () => {
    const client = new MediaTypesV3LROClient("http://localhost:3000", {
      allowInsecureConnection: true
    });
    assert.isDefined(client);
  });
});
