import { PipelinePolicy } from "@azure/core-rest-pipeline";
import { XmsClientRequestIdClient } from "./generated/azure/special-headers/client-request-id/src/index.js";
import { assert } from "chai";
describe("XmsRequestIdClient Classical Client", () => {
  let client: XmsClientRequestIdClient;

  beforeEach(() => {
    client = new XmsClientRequestIdClient({
      endpoint: "http://localhost:3004",
      allowInsecureConnection: true
    });
  });

  it("should add client-request-id in header transparently", async () => {
    const result = await client.get();
    assert.isUndefined(result);
  });

  it("should override request id with client setting one", async () => {
    const overrideId = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
    const result = await client.get({
      requestOptions: {
        headers: {
          "x-ms-client-request-id": overrideId
        }
      }
    });
    assert.isUndefined(result);
    const checkClientRequestIdPolicy: PipelinePolicy = {
      sendRequest: (req, next) => {
        assert.equal(overrideId, req.headers.get("x-ms-client-request-id"));
        return next(req);
      },
      name: "preventCachingPolicy"
    };
    client = new XmsClientRequestIdClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3004",
      additionalPolicies: [
        {
          policy: checkClientRequestIdPolicy,
          position: "perCall"
        }
      ]
    });
  });

  it("should override with x-test-client-request-id header", async () => {
    try {
      client = new XmsClientRequestIdClient({
        allowInsecureConnection: true,
        telemetryOptions: {
          clientRequestIdHeaderName: "x-test-request-id"
        }
      });
      await client.get();
      assert.fail("should throw exceptions");
    } catch (err) {
      assert.isNotNull(err);
    }
  });
});
