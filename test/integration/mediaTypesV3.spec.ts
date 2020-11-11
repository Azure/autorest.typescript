import { MediaTypesV3Client } from "./generated/mediaTypesV3/src";
import { assert } from "chai";
describe("OpenAPI V3 model that supports multiple media-types", () => {
  it("should expose optional parameters that have no media-type", () => {
    const client = new MediaTypesV3Client("http://localhost:3000");
    // excluded is an optional parameter that exists on both overloads.
    // TypeScript complains if we attempt to set `excluded` but the models lack it.

    // Wrapping in operation to avoid sending the request because this doesn't have a real test-server endpoint
    // we have this in place to verify that we get the expected TS static analysis
    const operation1 = () =>
      client.fooApi.postSend(
        "thingA",
        "application/octet-stream",
        Buffer.from("data"),
        {
          excluded: ["id1", "id2"]
        }
      );

    // Wrapping in operation to avoid sending the request because this doesn't have a real test-server endpoint
    // we have this in place to verify that we get the expected TS static analysis
    const operation2 = () =>
      client.fooApi.postSend("thingB", "text/plain", "data", {
        excluded: ["id1", "id2"]
      });
    assert.isDefined(client);
  });
});
