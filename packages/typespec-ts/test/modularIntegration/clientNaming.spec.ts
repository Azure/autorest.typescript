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
    try {
      const result = await client.client({ clientName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property language", async () => {
    try {
      const result = await client.language({ tSName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property compatibleWithEncodedName", async () => {
    try {
      const result = await client.compatibleWithEncodedName({
        clientName: true
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with operation", async () => {
    try {
      const result = await client.clientName();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with parameter", async () => {
    try {
      const result = await client.parameter("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with header request", async () => {
    try {
      const result = await client.request("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with header response", async () => {
    try {
      const result = await client.response({
        onResponse: function (res) {
          assert.strictEqual(res.headers.get("default-name"), "true");
        }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model client", async () => {
    try {
      const result = await client.clientModel.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model language", async () => {
    try {
      const result = await client.clientModel.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work union enum name", async () => {
    try {
      const result = await client.unionEnum.unionEnumName("value1", {
        requestOptions: { headers: { "content-type": "text/plain" } }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with union enum member name", async () => {
    try {
      const result = await client.unionEnum.unionEnumMemberName("value1", {
        requestOptions: { headers: { "content-type": "text/plain" } }
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
