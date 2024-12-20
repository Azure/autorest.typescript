import { assert } from "chai";
import XmsClientRequestIdClientFactory, {
  XmsClientRequestIdClient
} from "./generated/azure/special-headers/client-request-id/src/index.js";
describe("ClientRequestIdClient", () => {
  let client: XmsClientRequestIdClient;

  beforeEach(() => {
    client = XmsClientRequestIdClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should append client-request-id header and value if no any input", async () => {
    const result = await client
      .path("/azure/special-headers/x-ms-client-request-id/")
      .get();
    assert.isNotNull(result.request.headers.get("client-request-id"));
    assert.strictEqual(result.status, "204");
  });

  it("should set client-request-id header and value if input is provided", async () => {
    const overrideReqId = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
    const result = await client
      .path("/azure/special-headers/x-ms-client-request-id/")
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
  });

  it("should custom the header name in client options", async () => {
    const headerName = "x-ms-test-for-js";
    client = XmsClientRequestIdClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003",
      telemetryOptions: {
        clientRequestIdHeaderName: headerName
      }
    });
    const result = await client
      .path("/azure/special-headers/x-ms-client-request-id/")
      .get();
    assert.strictEqual(result.status, "400");
    assert.isNotNull(result.request.headers.get(headerName));
  });
});
