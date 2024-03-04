import { assert } from "chai";
import { NamingClient } from "./generated/client/naming/src/index.js";
describe("NameAndEncodedName Client", () => {
  let client: NamingClient;

  beforeEach(() => {
    client = new NamingClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with property client", async () => {
    try {
      const result = await client.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property language", async () => {
    try {
      const result = await client.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property compatibleWithEncodedName", async () => {
    try {
      const result = await client.compatibleWithEncodedName({
        defaultName: true
      });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with operation", async () => {
    try {
      const result = await client.operation();
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
});
