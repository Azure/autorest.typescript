import { MediaTypesV3Client } from "./generated/mediaTypesV3/src";
import { assert } from "chai";
import { createHttpHeaders } from "@azure/core-rest-pipeline";
describe("OpenAPI V3 model that supports multiple media-types", () => {
  it("should expose optional parameters that have no media-type", async () => {
    const client = new MediaTypesV3Client("http://localhost:3000", {
      httpClient: {
        sendRequest: async request => {
          return {
            headers: createHttpHeaders(),
            bodyAsText: `{"foo": "bar"}`,
            request,
            status: 202
          };
        }
      }
    });
    // excluded is an optional parameter that exists on both overloads.
    // TypeScript complains if we attempt to set `excluded` but the models lack it.

    const encoder = new TextEncoder();
    await client.fooApi.postSend(
      "thingA",
      "application/octet-stream",
      encoder.encode("data"),
      {
        excluded: ["id1", "id2"]
      }
    );

    await client.fooApi.postSend("thingB", "text/plain", "data", {
      excluded: ["id1", "id2"]
    });

    assert.isDefined(client);
  });
});
