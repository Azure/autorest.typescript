import { RequestIdClient } from "./generated/headers/client-request-id/src/index.js";
import { assert } from "chai";
describe("RequestIdClient Classical Client", () => {
  let client: RequestIdClient;

  beforeEach(() => {
    client = new RequestIdClient({
      allowInsecureConnection: true
    });
  });

  it("should add client-request-id in header transparently", async () => {
    try {
      const result = await client.get();
      assert.isUndefined(result);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should set their request id in client-request-id header", async () => {
    try {
      const result = await client.get({
        requestOptions: {
          headers: {
            "client-request-id": "86aede1f-96fa-4e7f-b1e1-bf8a947cb804"
          }
        }
      });
      assert.isUndefined(result);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should override with x-test-client-request-id header", async () => {
    try {
      client = new RequestIdClient({
        allowInsecureConnection: true,
        telemetryOptions: {
          clientRequestIdHeaderName: "x-test-request-id"
        }
      });
      await client.get();
      assert.fail("should throw exceptions");
    } catch (err) {
      console.log(err);
      assert.isNotNull(err);
    }
  });
});
