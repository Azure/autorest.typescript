import { MediaTypesV3Client } from "./generated/mediaTypesV3/src/mediaTypesV3Client";
import { assert } from "chai";
describe("OpenAPI V3 model that supports multiple media-types", () => {
  it("should expose optional parameters that have no media-type", () => {
    const client = new MediaTypesV3Client("http://localhost:3000");
    // excluded is an optional parameter that exists on both overloads.
    // TypeScript complains if we attempt to set `excluded` but the models lack it.
    client.fooApi.postSend(
      "thingA",
      "application/octet-stream",
      Buffer.from("data"),
      {
        excluded: ["id1", "id2"]
      }
    );
    client.fooApi.postSend("thingB", "text/plain", "data", {
      excluded: ["id1", "id2"]
    });
    assert.isDefined(client);
  });
});
