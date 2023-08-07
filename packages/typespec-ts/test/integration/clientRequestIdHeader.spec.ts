import { assert } from "chai";
import ClientRequestIdClientFactory, {
  ClientRequestIdClient
} from "./generated/headers/clientRequestId/src/index.js";
describe("ClientRequestIdClient", () => {
  let client: ClientRequestIdClient;

  beforeEach(() => {
    client = ClientRequestIdClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should append client-request-id header and value if no any input", async () => {
    try {
      const result = await client
        .path("/special-headers/client-request-id")
        .get();
      assert.isNotNull(result.request.headers.get("client-request-id"));
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should set client-request-id header and value if input is provided", async () => {
    try {
      const overrideReqId = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
      const result = await client
        .path("/special-headers/client-request-id")
        .get({
          headers: {
            "client-request-id": overrideReqId
          }
        });
      assert.strictEqual(
        result.request.headers.get("client-request-id"),
        overrideReqId
      );
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should custom the header name in client options", async () => {
    const headerName = "x-ms-test-for-js";
    client = ClientRequestIdClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      },
      telemetryOptions: {
        clientRequestIdHeaderName: headerName
      }
    });
    try {
      const result = await client
        .path("/special-headers/client-request-id")
        .get();
      assert.strictEqual(result.status, "400");
      assert.isNotNull(result.request.headers.get(headerName));
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
