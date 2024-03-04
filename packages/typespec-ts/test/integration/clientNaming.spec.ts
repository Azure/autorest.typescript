import { assert } from "chai";
import NamingClientFactory, {
  NamingClient
} from "./generated/client/naming/src/index.js";
describe("ClientEncodedNameClient Rest Client", () => {
  let client: NamingClient;

  beforeEach(() => {
    client = NamingClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should work with property client", async () => {
    try {
      const result = await client.path("/client/naming/property/client").post({
        body: { defaultName: true }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property language", async () => {
    try {
      const result = await client
        .path("/client/naming/property/language")
        .post({
          body: { defaultName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with property compatible-with-encoded-name", async () => {
    try {
      const result = await client
        .path("/client/naming/property/compatible-with-encoded-name")
        .post({
          body: { wireName: true }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with operation", async () => {
    try {
      const result = await client.path("/client/naming/operation").post();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with parameter", async () => {
    try {
      const result = await client.path("/client/naming/parameter").post({
        queryParameters: { defaultName: "true" }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post header request ", async () => {
    try {
      const result = await client.path("/client/naming/header").post({
        headers: { "default-name": "true" }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get header response", async () => {
    try {
      const result = await client.path("/client/naming/header").get();
      assert.strictEqual(result.headers["default-name"], "true");
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model client", async () => {
    try {
      const result = await client.path("/client/naming/model/client").post({
        body: { defaultName: true }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should work with model language", async () => {
    try {
      const result = await client.path("/client/naming/model/language").post({
        body: { defaultName: true }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
