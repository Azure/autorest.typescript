import { assert } from "chai";
import { NamingClient } from "./generated/client/naming/src/index.js";
describe("NameAndEncodedName Client", () => {
  let client: NamingClient;

  beforeEach(() => {
    client = new NamingClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with property client", async () => {
    const result = await client.client({ clientName: true });
    assert.isUndefined(result);
  });

  it("should work with property language", async () => {
    const result = await client.language({ tsName: true });
    assert.isUndefined(result);
  });

  it("should work with property compatibleWithEncodedName", async () => {
    const result = await client.compatibleWithEncodedName({
      clientName: true
    });
    assert.isUndefined(result);
  });

  it("should work with operation", async () => {
    const result = await client.clientName();
    assert.isUndefined(result);
  });

  it("should work with parameter", async () => {
    const result = await client.parameter("true");
    assert.isUndefined(result);
  });

  it("should work with header request", async () => {
    const result = await client.request("true");
    assert.isUndefined(result);
  });

  it("should work with header response", async () => {
    const result = await client.response({
      onResponse: function (res) {
        assert.strictEqual(res.headers.get("default-name"), "true");
      }
    });
    assert.isUndefined(result);
  });

  it("should work with model client", async () => {
    const result = await client.clientModel.client({ defaultName: true });
    assert.isUndefined(result);
  });

  it("should work with model language", async () => {
    const result = await client.clientModel.language({ defaultName: true });
    assert.isUndefined(result);
  });

  it("should work union enum name", async () => {
    const result = await client.unionEnum.unionEnumName("value1", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });

  it("should work with union enum member name", async () => {
    const result = await client.unionEnum.unionEnumMemberName("value1", {
      requestOptions: { headers: { "content-type": "text/plain" } }
    });
    assert.isUndefined(result);
  });
});
